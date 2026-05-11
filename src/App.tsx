import { Header } from "./components/Header"
import { AboutMe } from "./components/AboutMe"
import { WorkExperience } from "./components/WorkExperience"
import { Academic } from "./components/Academic"
import { Projects } from "./components/Projects"
import { TechStack } from "./components/TechStack"
import { USER } from "./data"

function App() {
  const {
    AboutMe: aboutContent,
    Academics: academicsContent,
    Experiences: workExperienceContent,
    TechStack: techStackContent
  } = USER

  const projectContent = false

  return (
    <>
      <Header />
      {aboutContent && <AboutMe content={aboutContent} />}
      {workExperienceContent && <WorkExperience contents={workExperienceContent} />}
      {academicsContent && <Academic contents={academicsContent} />}
      {projectContent && <Projects />}
      {techStackContent && <TechStack content={techStackContent} />}
    </>
  )
}

export default App