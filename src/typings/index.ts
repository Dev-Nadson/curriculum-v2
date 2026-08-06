/**
 * Nome do ícone do link, e não o componente em si: o perfil precisa ser
 * serializável em JSON para trafegar pelo lowdb. A tradução de volta para o
 * componente do lucide-react acontece em `@/lib/icons`.
 */
export type IconName = "phone" | "mail" | "linkedin" | "github" | "globe"

export type ILinkProps = {
    icon: IconName
    text: string
    url: string
}

export type IExperienceProps = {
    description: string[]
    enterprise?: string
    role: string
    worktype?: string
    date: string
}

export type IAcademicProps = {
    description?: string
    school: string
    date: string
    title: string
}

export type ICertificationsProps = {
    description?: string
    institution: string
    date: string
    title: string
}

export type IProjectProps = {
    description: string
    stack?: string
    url?: string
    date?: string
    title: string
}

export type ICompetencesProps = {
    data: string[]
}

export type ITechStackProps = {
    data: string[]
}

export type IHeaderProps = {
    Name: string
    Subtitle?: string
    Links: ILinkProps[]
}

export type SectionName =
    | "AboutMe"
    | "Experiences"
    | "Academics"
    | "Certifications"
    | "Projects"
    | "Competences"
    | "TechStack"
    | "Languages"

export type ProfileData = {
    slug: string
    Header: IHeaderProps
    AboutMe?: string
    Experiences?: IExperienceProps[]
    Academics?: IAcademicProps[]
    Certifications?: ICertificationsProps[]
    Projects?: IProjectProps[]
    Competences?: ICompetencesProps
    TechStack?: ITechStackProps
    Languages?: ICompetencesProps
    /** Ordem das seções no currículo. Ausente = ordem padrão de DEFAULT_ORDER. */
    Order?: SectionName[]
}

/** Formato do documento persistido pelo lowdb (e do src/data/db.json). */
export type DBSchema = {
    profiles: ProfileData[]
}