import { Fragment, type ReactNode } from "react"
import { Header } from "@/components/Header"
import { AboutMe } from "@/components/AboutMe"
import { WorkExperience } from "@/components/WorkExperience"
import { Academic } from "@/components/Academic"
import { Projects } from "@/components/Projects"
import { TechStack } from "@/components/TechStack"
import { getProfileBySlug } from "@/data"
import { Certifications } from "@/components/Certifications"
import { Competences } from "@/components/Competences"
import type { SectionName } from "@/typings"
import { Navigate, useParams } from "react-router-dom"

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
    const profile = getProfileBySlug(slug)

    if (!profile) return <Navigate to="/" replace />

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
            <Header content={profile.Header} />
            {order.map((section) => (
                <Fragment key={section}>{sections[section]}</Fragment>
            ))}
        </>
    )
}
