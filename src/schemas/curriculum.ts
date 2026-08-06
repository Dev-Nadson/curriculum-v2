import { z } from "zod"
import { ICON_NAMES } from "@/lib/icons"

/**
 * Schema do formulário de currículo. Espelha `ProfileData` (@/typings) com duas
 * diferenças deliberadas:
 *
 * 1. `slug` fica de fora — é derivado do nome na criação e imutável na edição.
 * 2. `Order` fica de fora — a ordem das seções continua sendo ajustada direto
 *    no db.json. O formulário preserva a ordem existente ao editar.
 *
 * Listas de texto (competências, stack, bullets de experiência) são um
 * `<textarea>` no formulário, com uma linha por item: o conteúdo real são
 * parágrafos longos, e o useFieldArray do RHF não lida bem com primitivos.
 * A conversão texto <-> array acontece aqui, via transform.
 */

/** "linha 1\nlinha 2" -> ["linha 1", "linha 2"], descartando linhas em branco. */
const lines = z
    .string()
    .trim()
    .transform((value) =>
        value
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line.length > 0),
    )

/** Campo de texto opcional: "" e "   " viram undefined, não string vazia. */
const optionalText = z
    .string()
    .trim()
    .transform((value) => (value.length > 0 ? value : undefined))

const requiredText = (label: string) => z.string().trim().min(1, `${label} é obrigatório`)

export const linkSchema = z.object({
    icon: z.enum(ICON_NAMES),
    text: requiredText("O texto do link"),
    url: z.string().trim(),
})

export const experienceSchema = z.object({
    enterprise: optionalText,
    role: requiredText("O cargo"),
    worktype: optionalText,
    date: requiredText("O período"),
    description: lines,
})

export const academicSchema = z.object({
    title: requiredText("O curso"),
    school: requiredText("A instituição"),
    date: requiredText("O período"),
    description: optionalText,
})

export const certificationSchema = z.object({
    title: requiredText("O título"),
    institution: requiredText("A instituição"),
    date: requiredText("A data"),
    description: optionalText,
})

export const projectSchema = z.object({
    title: requiredText("O título"),
    stack: optionalText,
    url: z.string().trim(),
    date: optionalText,
    description: z.string().trim(),
})

export const curriculumSchema = z.object({
    Header: z.object({
        Name: requiredText("O nome"),
        Subtitle: optionalText,
        Links: z.array(linkSchema),
    }),
    AboutMe: z.string().trim(),
    Experiences: z.array(experienceSchema),
    Academics: z.array(academicSchema),
    Certifications: z.array(certificationSchema),
    Projects: z.array(projectSchema),
    Competences: lines,
    TechStack: lines,
    Languages: lines,
})

/** O que o formulário maneja (tudo string, antes dos transforms). */
export type CurriculumFormValues = z.input<typeof curriculumSchema>

/** O que os serviços recebem (já normalizado). */
export type CurriculumInput = z.output<typeof curriculumSchema>

/** Estado inicial de um currículo novo. */
export const EMPTY_CURRICULUM: CurriculumFormValues = {
    Header: {
        Name: "",
        Subtitle: "",
        Links: [{ icon: "mail", text: "", url: "" }],
    },
    AboutMe: "",
    Experiences: [],
    Academics: [],
    Certifications: [],
    Projects: [],
    Competences: "",
    TechStack: "",
    Languages: "",
}

/**
 * Itens em branco para o botão "adicionar" de cada lista. O `satisfies` dá o
 * tipo contextual que mantém `icon` como o literal do enum, e não como string.
 */
export const EMPTY_ITEMS = {
    link: { icon: "globe", text: "", url: "" },
    experience: { enterprise: "", role: "", worktype: "", date: "", description: "" },
    academic: { title: "", school: "", date: "", description: "" },
    certification: { title: "", institution: "", date: "", description: "" },
    project: { title: "", stack: "", url: "", date: "", description: "" },
} satisfies {
    link: z.input<typeof linkSchema>
    experience: z.input<typeof experienceSchema>
    academic: z.input<typeof academicSchema>
    certification: z.input<typeof certificationSchema>
    project: z.input<typeof projectSchema>
}
