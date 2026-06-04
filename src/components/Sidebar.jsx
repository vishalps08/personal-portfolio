import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import useActiveSection from "../hooks/useActiveSection";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const activeSection = useActiveSection(navItems.map((n) => n.id));

  return (
    <>
      {/* MOBILE NAVBAR */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm flex justify-between items-center px-5 py-4 z-50">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Vishal
        </h1>
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-700 text-xl focus:outline-none"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden fixed top-14 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-2 text-base">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block py-2 px-3 rounded-lg transition-all ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex justify-between pt-3 border-t border-gray-200">
            <a
              href="https://www.linkedin.com/in/vishalaprabhu08"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/vishalps08"
              target="_blank"
              className="text-gray-800 hover:text-blue-600 flex items-center gap-1"
            >
              <FaGithub /> GitHub
            </a>
          </div>

          <a
            href="/Vishal-Ashok-Prabhu-Resume.pdf"
            download
            className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-3 rounded-lg shadow hover:shadow-lg transition mt-2"
          >
            Resume
          </a>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <aside
        className="
          hidden md:flex fixed top-0 left-0 h-full w-[250px]
          bg-gradient-to-b from-white via-white to-gray-50
          border-r border-gray-100 px-6 py-10 flex-col items-center shadow-sm
        "
      >
        <h1 className="text-xl font-bold text-gray-900 text-center">
          Vishal Ashok Prabhu
        </h1>

        <p className="text-gray-500 text-center text-xs mt-1">
          Full Stack / MERN Developer
        </p>

        <nav className="mt-8 w-full">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block py-2 px-3 rounded-lg text-sm transition-all ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto mb-4 flex gap-3">
          <a
            href="https://www.linkedin.com/in/vishalaprabhu08"
            target="_blank"
            className="text-gray-400 hover:text-blue-600 transition"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/vishalps08"
            target="_blank"
            className="text-gray-400 hover:text-gray-800 transition"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/vapshere/"
            target="_blank"
            className="text-gray-400 hover:text-pink-600 transition"
            title="@vapshere"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>

        <a
          href="/Vishal-Ashok-Prabhu-Resume.pdf"
          download
          className="w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition text-sm"
        >
          Download Resume
        </a>
      </aside>
    </>
  );
}
