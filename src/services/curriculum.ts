import { getDb, mutate } from "@/lib/lowdb"
import type { CurriculumFormValues, CurriculumInput } from "@/schemas/curriculum"
import type { ProfileData } from "@/typings"

/**
 * Camada de acesso aos currículos. As páginas falam só com este módulo — a
 * escolha de armazenamento (hoje lowdb sobre localStorage) fica encapsulada em
 * @/lib/lowdb.
 *
 * As funções são assíncronas mesmo sendo síncronas por dentro: se um dia o
 * armazenamento virar uma API remota, nenhum chamador precisa mudar.
 */

/** "NADSON ALEX DA SILVA" -> "nadson-alex-da-silva" */
function slugify(value: string): string {
    return value
        // NFD separa "á" em "a" + acento; \p{Diacritic} então descarta o acento.
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
}

/** Acrescenta um sufixo numérico enquanto o slug já estiver em uso. */
function uniqueSlug(base: string, taken: Set<string>): string {
    const fallback = base || "curriculo"

    if (!taken.has(fallback)) return fallback

    let suffix = 2
    while (taken.has(`${fallback}-${suffix}`)) suffix++

    return `${fallback}-${suffix}`
}

/** Array vazio vira undefined, para a seção sumir do currículo renderizado. */
function orUndefined<T>(items: T[]): T[] | undefined {
    return items.length > 0 ? items : undefined
}

/**
 * Converte a saída validada do formulário em `ProfileData`.
 *
 * Seções vazias viram `undefined` em vez de array vazio, que é o que faz
 * Curriculum.tsx pular a seção sem renderizar um cabeçalho órfão.
 */
function toProfile(slug: string, input: CurriculumInput, order?: ProfileData["Order"]): ProfileData {
    return {
        slug,
        Order: order,
        Header: {
            Name: input.Header.Name,
            Subtitle: input.Header.Subtitle,
            Links: input.Header.Links,
        },
        AboutMe: input.AboutMe || undefined,
        Experiences: orUndefined(input.Experiences),
        Academics: orUndefined(input.Academics),
        Certifications: orUndefined(input.Certifications),
        Projects: orUndefined(input.Projects),
        Competences: input.Competences.length > 0 ? { data: input.Competences } : undefined,
        TechStack: input.TechStack.length > 0 ? { data: input.TechStack } : undefined,
        Languages: input.Languages.length > 0 ? { data: input.Languages } : undefined,
    }
}

/**
 * Caminho inverso: prepara um perfil existente para o formulário. Campos
 * ausentes viram string vazia, e listas de texto viram uma linha por item.
 */
export function toFormValues(profile: ProfileData): CurriculumFormValues {
    return {
        Header: {
            Name: profile.Header.Name,
            Subtitle: profile.Header.Subtitle ?? "",
            Links: profile.Header.Links.map((link) => ({ ...link })),
        },
        AboutMe: profile.AboutMe ?? "",
        Experiences: (profile.Experiences ?? []).map((experience) => ({
            enterprise: experience.enterprise ?? "",
            role: experience.role,
            worktype: experience.worktype ?? "",
            date: experience.date,
            description: experience.description.join("\n"),
        })),
        Academics: (profile.Academics ?? []).map((academic) => ({
            title: academic.title,
            school: academic.school,
            date: academic.date,
            description: academic.description ?? "",
        })),
        Certifications: (profile.Certifications ?? []).map((certification) => ({
            title: certification.title,
            institution: certification.institution,
            date: certification.date,
            description: certification.description ?? "",
        })),
        Projects: (profile.Projects ?? []).map((project) => ({
            title: project.title,
            stack: project.stack ?? "",
            url: project.url ?? "",
            date: project.date ?? "",
            description: project.description,
        })),
        Competences: (profile.Competences?.data ?? []).join("\n"),
        TechStack: (profile.TechStack?.data ?? []).join("\n"),
        Languages: (profile.Languages?.data ?? []).join("\n"),
    }
}

export async function GetCurriculums(): Promise<ProfileData[]> {
    return getDb().profiles
}

export async function GetCurriculum(slug?: string): Promise<ProfileData | undefined> {
    if (!slug) return undefined

    return getDb().profiles.find((profile) => profile.slug === slug)
}

/** Cria um currículo. O slug é derivado do nome e garantido único. */
export async function CreateCurriculum(input: CurriculumInput): Promise<ProfileData> {
    return mutate((data) => {
        const taken = new Set(data.profiles.map((profile) => profile.slug))
        const slug = uniqueSlug(slugify(input.Header.Name), taken)
        const profile = toProfile(slug, input)

        data.profiles.push(profile)

        return profile
    })
}

/**
 * Atualiza um currículo existente.
 *
 * O slug é imutável: ele está em links já compartilhados, e regerá-lo a partir
 * de um nome corrigido quebraria esses links. O `Order` também é preservado —
 * ele não faz parte do formulário.
 */
export async function EditCurriculum(slug: string, input: CurriculumInput): Promise<ProfileData> {
    return mutate((data) => {
        const index = data.profiles.findIndex((profile) => profile.slug === slug)

        if (index === -1) throw new Error(`Currículo "${slug}" não encontrado.`)

        const profile = toProfile(slug, input, data.profiles[index].Order)
        data.profiles[index] = profile

        return profile
    })
}
