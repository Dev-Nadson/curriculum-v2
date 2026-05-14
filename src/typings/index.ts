import type { LucideIcon } from "lucide-react"

export type ILinkProps = {
    icon: LucideIcon
    text: string
    url: string
    link?: boolean
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

export type ICompetencesProps = {
    data: string[]
}

export type IHeaderProps = {
    Name: string
    Subtitle?: string
    Links: ILinkProps[]
}