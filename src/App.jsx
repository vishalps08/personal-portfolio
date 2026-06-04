import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import BeyondCode from "./components/BeyondCode";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import WaveDivider from "./components/WaveDivider";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 md:ml-[250px] pt-16 md:pt-0">
        <Hero />
        <WaveDivider color="#f9fafb" />
        <About />
        <WaveDivider color="#ffffff" flip />
        <Skills />
        <WaveDivider color="#f9fafb" />
        <Projects />
        <WaveDivider color="#ffffff" flip />
        <Experience />
        <WaveDivider color="#f9fafb" />
        <Achievements />
        <WaveDivider color="#ffffff" flip />
        <Certifications />
        <WaveDivider color="#f9fafb" />
        <Education />
        <WaveDivider color="#ffffff" flip />
        <BeyondCode />
        <WaveDivider color="#f9fafb" />
        <Contact />
        <Footer />
      </main>

      <BackToTop />
    </div>
  );
}
