import "./App.css";
import About from "./Components/About";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ProjectNew from "./Components/ProjectNew";
import SkillsNew from "./Components/SkillsNew";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import Navbar from "./Components/Navbar";
import PreIntro from "./Components/PreIntro";

const firebaseConfig = {
  apiKey: "AIzaSyDMiI-11_jVL4Ynvw5ySns4B-klFZsNmVE",
  authDomain: "portfolio-3e526.firebaseapp.com",
  projectId: "portfolio-3e526",
  storageBucket: "portfolio-3e526.appspot.com",
  messagingSenderId: "818505789727",
  appId: "1:818505789727:web:8705b2a62ca646887cc02a",
  measurementId: "G-PBSSFR3KSK",
};

const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);

function App() {
  return (
    <div className="App">
      <Navbar />
      <PreIntro />
      <Intro />
      <About />
      <ProjectNew />
      <SkillsNew />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
