import { Github, Globe, Linkedin, Mail, Phone, type LucideIcon } from "lucide-react"
import type { IconName } from "@/typings"

/**
 * Ponte entre o dado serializado e o componente React. O perfil guarda apenas
 * o nome do ícone ("phone"), porque um componente do lucide-react não sobrevive
 * a um JSON.stringify — e todo perfil passa pelo lowdb.
 */
export const ICONS: Record<IconName, LucideIcon> = {
    phone: Phone,
    mail: Mail,
    linkedin: Linkedin,
    github: Github,
    globe: Globe,
}

/** Alimenta o z.enum do schema e o <select> do formulário. */
export const ICON_NAMES = Object.keys(ICONS) as [IconName, ...IconName[]]

/** Rótulos em pt-BR para o <select> de ícone. */
export const ICON_LABELS: Record<IconName, string> = {
    phone: "Telefone",
    mail: "E-mail",
    linkedin: "LinkedIn",
    github: "GitHub",
    globe: "Site / Link",
}
