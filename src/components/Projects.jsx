import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaCode, FaLaptopCode, FaDatabase } from "react-icons/fa";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null); // track expanded card (mobile only)

  const projects = [
    {
      title: "Employee Management System",
      description:
        "Role-based employee management system with CRUD operations, authentication, and structured workflow.",
      tech: ["Java", "JSP", "Servlets", "MySQL"],
      icon: <FaLaptopCode className="text-blue-600 text-3xl" />,
      github: "#",
    },
    {
      title: "Banking CLI Application",
      description:
        "A Python-based banking system supporting deposits, withdrawals and transfers using JSON storage.",
      tech: ["Python"],
      icon: <FaCode className="text-green-600 text-3xl" />,
      github: "#",
    },
    {
      title: "Konkan Railway Ticket System",
      description:
        "A prototype for ticket booking and search functionality built during diploma coursework.",
      tech: ["HTML"],
      icon: <FaCode className="text-orange-500 text-3xl" />,
      github: "#",
    },
    {
      title: "User Management (MERN Stack)",
      description:
        "Admin-driven MERN application with JWT authentication, CRUD operations, protected routes, and dashboard.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      icon: <FaDatabase className="text-purple-600 text-3xl" />,
      github: "#",
    },
  ];

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="projects"
      className="py-28 px-5 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Projects
        </h2>
        <div className="w-20 h-1 bg-blue-600 rounded mx-auto mt-3 mb-12"></div>

        <div className="space-y-10">
          {projects.map((project, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  bg-white rounded-xl shadow-md border border-gray-100 
                  hover:shadow-lg transition-all duration-300
                  p-6 sm:p-8 relative overflow-hidden
                "
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
                <div className="hidden md:flex items-center gap-4">
                  <div>{project.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                </div>

                {/* MOBILE EXPANDED CONTENT */}
                {isOpen && (
                  <div className="md:hidden mt-4 animate-fadeIn">
                    <p className="text-gray-700 text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="
                            px-3 py-1 text-sm rounded-full 
                            bg-blue-100 text-blue-700 border border-blue-200
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      View Code →
                    </a>
                  </div>
                )}

                {/* DESKTOP FULL VIEW */}
                <div className="hidden md:block mt-4">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="
                          px-3 py-1 text-sm rounded-full 
                          bg-blue-100 text-blue-700 border border-blue-200
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    View Code →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
