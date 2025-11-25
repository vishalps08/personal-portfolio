export default function Projects() {
  const projects = [
    {
      title: "Employee Management System",
      description:
        "Role-based employee management app with CRUD operations and authentication.",
      tech: ["Java", "JSP", "Servlets", "MySQL"],
      github: "#",
    },
    {
      title: "Banking CLI Application",
      description:
        "A Python-based banking system supporting deposits, withdrawals, transfers via JSON storage.",
      tech: ["Python", "JSON"],
      github: "#",
    },
    {
      title: "Konkan Railway Ticket System",
      description:
        "A diploma project prototype for ticket booking and searching.",
      tech: ["HTML", "VBScript", "MS Access"],
      github: "#",
    },
    {
      title: "User Management (MERN Stack)",
      description:
        "Full-stack MERN app with registration, login, JWT auth, CRUD, and admin dashboard.",
      tech: ["React", "Node", "Express", "MongoDB"],
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Projects
        </h2>
        <div className="w-20 h-1 bg-blue-600 rounded mx-auto mt-4 mb-10"></div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h3>

              <p className="text-gray-600 mt-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                className="inline-block mt-5 text-blue-600 font-medium hover:text-blue-800"
              >
                View Code →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
