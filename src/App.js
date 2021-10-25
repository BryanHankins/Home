
import Navbars from './components/Nav'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Projects from './components/Projects'
import TeamProjects from './components/TeamProjects'
import Certifications from './components/Certifications'
import Resume from './components/Resume'
import Nameanimation from './components/nameanimation'
function App() {
  return (
    <div className="App alignT bg-skyblue">
      <Navbars />
      <Nameanimation/>
      <Skills/>
      <TeamProjects/>
      <Projects/>

      <Resume/>
      <Certifications/>
      <Footer />
    </div>
  );
}

export default App;
