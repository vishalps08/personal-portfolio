import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaCode, FaLaptopCode, FaDatabase, FaTools, FaUserGraduate } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

const accentColors = [
  "border-indigo-500",
  "border-blue-500",
  "border-green-500",
  "border-orange-500",
  "border-purple-500",
  "border-teal-500",
];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, isVisible } = useScrollReveal();

  const projects = [
    {
      title: "Internship Enrolment Platform",
      description:
        "End-to-end platform for managing internship enrollment workflows — candidate registration, data validation, admin dashboards, and status tracking. Built as a client + internal product at Inventics Software.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      icon: <FaUserGraduate className="text-indigo-600 text-3xl" />,
      github: "#",
    },
    {
      title: "Employee Management System",
      description:
        "Role-based employee management system with CRUD operations, authentication, and structured workflow.",
      tech: ["Java", "JSP", "Servlets", "MySQL"],
      icon: <FaLaptopCode className="text-blue-600 text-3xl" />,
      github: "https://github.com/vishalps08/Employee-Management-System",
    },
    {
      title: "Banking CLI Application",
      description:
        "A Python-based banking system supporting deposits, withdrawals and transfers using JSON storage.",
      tech: ["Python"],
      icon: <FaCode className="text-green-600 text-3xl" />,
      github: "https://github.com/vishalps08/BankAccountTransactions_Python",
    },
    {
      title: "Konkan Railway Ticket Reservation Site",
      description:
        "Final year project — a ticket reservation site for Konkan Railway that improved the efficiency of ticket booking processes.",
      tech: ["HTML", "VBScript", "Microsoft Access"],
      icon: <FaCode className="text-orange-500 text-3xl" />,
      github: "#",
    },
    {
      title: "User Management (MERN Stack)",
      description:
        "Admin-driven MERN application with JWT authentication, CRUD operations, protected routes, and dashboard.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      icon: <FaDatabase className="text-purple-600 text-3xl" />,
      github: "https://github.com/vishalps08/User-Management-MERN",
    },
    {
      title: "DevTools Hub",
      description:
        "A collection of 50+ browser-based developer utilities including encoders, formatters, image tools, SEO generators, and security helpers — no downloads required.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      icon: <FaTools className="text-teal-600 text-3xl" />,
      github: "https://devtoolshub-pink.vercel.app/",
      live: true,
    },
  ];

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="projects"
      className="py-28 px-5 sm:px-6 lg:px-8 bg-gray-50 border-t-0"
    >
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded mx-auto mt-3 mb-12"></div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const isOpen = openIndex === index;
            const accent = accentColors[index % accentColors.length];

            return (
              <div
                key={index}
                className={`
                  bg-white rounded-xl shadow-md border border-gray-100
                  hover:shadow-xl transition-all duration-300
                  p-6 relative overflow-hidden border-l-4 ${accent}
                  hover:-translate-y-1 group
                `}
              >
                {/* Mobile Title + Toggle */}
                <div
                  className="flex justify-between items-center md:hidden cursor-pointer"
                  onClick={() => toggleCard(index)}
                >
                  <h3 className="text-lg font-bold text-gray-900">
                    {project.title}
                  </h3>
                  {isOpen ? (
                    <FaChevronUp className="text-gray-600" />
                  ) : (
                    <FaChevronDown className="text-gray-600" />
                  )}
                </div>

                {/* Desktop Title */}
                <div className="hidden md:flex items-center gap-3">
                  <div className="group-hover:scale-110 transition-transform duration-300">{project.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                </div>

                {/* MOBILE EXPANDED CONTENT */}
                {isOpen && (
                  <div className="md:hidden mt-4">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700 border border-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="inline-block mt-3 text-blue-600 hover:text-blue-800 font-semibold text-sm"
                      >
                        {project.live ? "View Live →" : "View Code →"}
                      </a>
                    )}
                  </div>
                )}

                {/* DESKTOP FULL VIEW */}
                <div className="hidden md:block mt-3">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700 border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="inline-block mt-3 text-blue-600 hover:text-blue-800 font-semibold text-sm group-hover:translate-x-1 transition-transform"
                    >
                      {project.live ? "View Live →" : "View Code →"}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
