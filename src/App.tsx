import MainAbout from "./component/module/about/mainAbout"
import MainContact from "./component/module/contact/mainContact"
import MainExperience from "./component/module/experiences/mainExperience"
import Footer from "./component/module/footer/footer"
import Mainheader from "./component/module/header/mainHeader"
import MainHero from "./component/module/hero/mainHero"
import MainProject from "./component/module/projects/mainProject"
import MainSkills from "./component/module/skills/mainSkills"


function App() {

  return (
    <>

      <div className=" ">
        <Mainheader />
        <MainHero />
        <MainAbout />
      </div>
      <MainExperience />
      <MainSkills />
      <MainProject />
      <MainContact />
      <Footer />

    </>
  )
}

export default App
