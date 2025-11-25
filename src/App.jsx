import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />

      {/* Main scrollable content */}
      <main className="flex-1 md:ml-[250px] pt-16 md:pt-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
