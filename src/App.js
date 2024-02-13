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
  apiKey: "AIzaSyCIu8UlSWTk4Zueyre0BGsEza5WNx8tUq8",
  authDomain: "counter-e6b18.firebaseapp.com",
  databaseURL: "https://counter-e6b18-default-rtdb.firebaseio.com",
  projectId: "counter-e6b18",
  storageBucket: "counter-e6b18.appspot.com",
  messagingSenderId: "506634694300",
  appId: "1:506634694300:web:6ed03d38c561d9c9f14759",
  measurementId: "G-JEVPX7M9FJ",
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
