import { useState } from "react";
import useActiveSection from "../hooks/useActiveSection";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const activeSection = useActiveSection([
    "hero",
    "about",
    "skills",
    "projects",
    "experience",
    "achievements",
    "certifications",
    "contact",
  ]);

  const linkClass = (id) =>
    activeSection === id
      ? "text-blue-600 font-bold underline underline-offset-4"
      : "text-gray-700 hover:text-blue-600";

  return (
    <>
      {/* MOBILE NAVBAR */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-sm flex justify-between items-center px-5 py-4 z-50">
        <h1 className="text-xl font-bold text-gray-900">Vishal</h1>

        <button
          onClick={() => setOpen(!open)}
          className="text-gray-700 text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden fixed top-14 left-0 right-0 bg-white shadow-lg z-50 px-6 py-6 space-y-6">
          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4 text-lg">
            {[
              { id: "hero", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "experience", label: "Experience" },
              { id: "achievements", label: "Achievements" },
              { id: "certifications", label: "Certifications" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block py-2 px-2 rounded-md ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-800"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-between pt-3 border-t border-gray-200">
            <a
              href="https://www.linkedin.com/in/vishalaprabhu08"
              target="_blank"
              className="text-blue-600 hover:text-blue-800"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/vishalps08"
              target="_blank"
              className="text-gray-800 hover:text-blue-600"
            >
              GitHub
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="/Vishal-Ashok-Prabhu-Resume.pdf"
            download
            className="block bg-blue-600 text-white text-center py-3 rounded-lg shadow hover:bg-blue-700 transition mt-3"
          >
            Resume
          </a>
        </div>
      )}
      {/* DESKTOP SIDEBAR */}
      <aside
        className="
          hidden md:flex fixed top-0 left-0 h-full w-[250px]
          bg-gradient-to-b from-white to-gray-50
          border-r border-gray-200 px-6 py-10 flex-col items-center shadow-sm
        "
      >
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow"
        />

        <h1 className="mt-4 text-2xl font-bold text-gray-900 text-center">
          Vishal Ashok Prabhu
        </h1>

        <p className="text-gray-600 text-center text-sm">
          Full Stack / MERN Developer
        </p>

        <nav className="mt-10 w-full">
          <ul className="space-y-5 text-center">
            <li>
              <a href="#hero" className={linkClass("hero")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={linkClass("about")}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className={linkClass("skills")}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className={linkClass("projects")}>
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className={linkClass("experience")}>
                Experience
              </a>
            </li>
            <li>
              <a href="#achievements" className={linkClass("achievements")}>
                Achievements
              </a>
            </li>
            <li>
              <a href="#certifications" className={linkClass("certifications")}>
                Certifications
              </a>
            </li>
            <li>
              <a href="#contact" className={linkClass("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-auto mb-6 flex gap-4 text-blue-600">
          <a
            href="https://www.linkedin.com/in/vishalaprabhu08"
            target="_blank"
            className="hover:text-blue-800"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/vishalps08"
            target="_blank"
            className="hover:text-blue-800"
          >
            GitHub
          </a>
        </div>

        <a
          href="/Vishal-Ashok-Prabhu-Resume.pdf"
          download
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Resume
        </a>
      </aside>
    </>
  );
}
