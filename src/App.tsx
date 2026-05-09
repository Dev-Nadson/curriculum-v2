import { Header } from "./components/Header"
import { AboutMe } from "./components/AboutMe"
import { WorkExperience } from "./components/WorkExperience"
import { Academic } from "./components/Academic"
import { Projects } from "./components/Projects"
import { TechStack } from "./components/TechStack"
import { USER } from "./data"

function App() {
  const { AboutMe: aboutContent, Academics: academicsContent } = USER

  return (
    <>
      <Header />
      {aboutContent && <AboutMe content={aboutContent} />}
      <WorkExperience />
      {academicsContent && <Academic contents={academicsContent} />}
      <Projects />
      <TechStack />
    </>
  )
}

export default App