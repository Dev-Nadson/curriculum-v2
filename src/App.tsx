import { Header } from "./components/Header"
import { AboutMe } from "./components/AboutMe"
import { WorkExperience } from "./components/WorkExperience"
import { Academic } from "./components/Academic"
import { Projects } from "./components/Projects"
import { TechStack } from "./components/TechStack"
import { ANAJULIA } from "./data"
import { Certifications } from "./components/Certifications"

function App() {
  const {
    Header: headerContent,
    AboutMe: aboutContent,
    Experiences: workExperienceContent,
    Academics: academicsContent,
    Certifications: certificationsContent,
    TechStack: techStackContent
  } = ANAJULIA

  const projectContent = false

  return (
    <>
      <Header content={headerContent} />
      {aboutContent && <AboutMe content={aboutContent} />}
      {workExperienceContent && <WorkExperience contents={workExperienceContent} />}
      {academicsContent && <Academic contents={academicsContent} />}
      {certificationsContent && <Certifications contents={certificationsContent} />}
      {projectContent && <Projects />}
      {techStackContent && <TechStack content={techStackContent} />}
    </>
  )
}

export default App