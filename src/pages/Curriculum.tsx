import { Fragment, useEffect, useState, type ReactNode } from "react"
import { Pencil } from "lucide-react"
import { Header } from "@/components/Header"
import { AboutMe } from "@/components/AboutMe"
import { WorkExperience } from "@/components/WorkExperience"
import { Academic } from "@/components/Academic"
import { Projects } from "@/components/Projects"
import { TechStack } from "@/components/TechStack"
import { GetCurriculum } from "@/services/curriculum"
import { Certifications } from "@/components/Certifications"
import { Competences } from "@/components/Competences"
import type { ProfileData, SectionName } from "@/typings"
import { Link, Navigate, useParams } from "react-router-dom"

const DEFAULT_ORDER: SectionName[] = [
    "AboutMe",
    "Experiences",
    "Academics",
    "Certifications",
    "Projects",
    "Competences",
    "TechStack",
    "Languages",
]

export function Curriculum() {
    const { slug } = useParams<{ slug: string }>()

    // `undefined` enquanto carrega, `null` quando o slug não existe: sem essa
    // distinção o primeiro render redirecionaria antes da busca terminar.
    const [profile, setProfile] = useState<ProfileData | null>()

    useEffect(() => {
        GetCurriculum(slug).then((found) => setProfile(found ?? null))
    }, [slug])

    if (profile === undefined) return null
    if (profile === null) return <Navigate to="/" replace />

    // Cada seção só entra se o perfil tiver o dado correspondente.
    const sections: Record<SectionName, ReactNode> = {
        AboutMe: profile.AboutMe && <AboutMe content={profile.AboutMe} />,
        Experiences: profile.Experiences && <WorkExperience contents={profile.Experiences} />,
        Academics: profile.Academics && <Academic contents={profile.Academics} />,
        Certifications: profile.Certifications && <Certifications contents={profile.Certifications} />,
        Projects: profile.Projects && <Projects contents={profile.Projects} />,
        Competences: profile.Competences && <Competences content={profile.Competences} />,
        TechStack: profile.TechStack && <TechStack content={profile.TechStack} />,
        Languages: profile.Languages && <Competences content={profile.Languages} title="Idiomas" />,
    }

    const order = profile.Order ?? DEFAULT_ORDER

    return (
        <>
            {/* print:hidden — o botão é da tela, não do documento. */}
            <Link
                to={`/curriculo/${profile.slug}/editar`}
                className="flex items-center gap-1 self-end text-xs text-blue-600 hover:underline print:hidden"
            >
                <Pencil className="size-3.5" />
                Editar
            </Link>

            <Header content={profile.Header} />
            {order.map((section) => (
                <Fragment key={section}>{sections[section]}</Fragment>
            ))}
        </>
    )
}
