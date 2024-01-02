import "./App.css";
import About from "./Components/About";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ProjectNew from "./Components/ProjectNew";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProjectNew />
      <Skills />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
