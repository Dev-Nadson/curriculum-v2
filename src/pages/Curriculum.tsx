import { Header } from "@/components/Header"
import { AboutMe } from "@/components/AboutMe"
import { WorkExperience } from "@/components/WorkExperience"
import { Academic } from "@/components/Academic"
import { Projects } from "@/components/Projects"
import { TechStack } from "@/components/TechStack"
import { getProfileBySlug } from "@/data"
import { Certifications } from "@/components/Certifications"
import { Competences } from "@/components/Competences"
import { Navigate, useParams } from "react-router-dom"

export function Curriculum() {
    const { slug } = useParams<{ slug: string }>()
    const profile = getProfileBySlug(slug)

    if (!profile) return <Navigate to="/" replace />

    const {
        Header: headerContent,
        AboutMe: aboutContent,
        Experiences: workExperienceContent,
        Academics: academicsContent,
        Certifications: certificationsContent,
        Competences: CompetencesContent,
        TechStack: techStackContent
    } = profile

    const projectContent = false

    return (
        <>
            <Header content={headerContent} />
            {aboutContent && <AboutMe content={aboutContent} />}
            {workExperienceContent && <WorkExperience contents={workExperienceContent} />}
            {academicsContent && <Academic contents={academicsContent} />}
            {certificationsContent && <Certifications contents={certificationsContent} />}
            {projectContent && <Projects />}
            {CompetencesContent && <Competences content={CompetencesContent} />}
            {techStackContent && <TechStack content={techStackContent} />}
        </>
    )
}