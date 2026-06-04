import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  const frontend = [
    { name: "HTML5", Icon: FaHtml5 },
    { name: "CSS3", Icon: FaCss3Alt },
    { name: "JavaScript (ES6+)", Icon: FaJsSquare },
    { name: "React.js", Icon: FaReact },
    { name: "Responsive Web Design" },
  ];

  const backend = [
    { name: "Node.js", Icon: FaNodeJs },
    { name: "Express.js", Icon: FaNodeJs },
    { name: "Python", Icon: FaPython },
    { name: "REST APIs" },
  ];

  const databases = [
    { name: "MongoDB", Icon: FaDatabase },
    { name: "MySQL", Icon: FaDatabase },
    { name: "Oracle SQL", Icon: FaDatabase },
  ];

  const tools = [
    { name: "Git" },
    { name: "GitHub" },
    { name: "Postman" },
    { name: "VS Code" },
    { name: "Chrome DevTools" },
    { name: "MS Excel" },
  ];

  const otherSkills = [
    { name: "CRUD Operations" },
    { name: "API Integration" },
    { name: "JSON" },
    { name: "SEO Basics" },
    { name: "Debugging" },
    { name: "Deployment Support" },
    { name: "Solution Architecture" },
    { name: "Team Leadership" },
  ];

  function RenderIcon({ Icon }) {
    if (!Icon) {
      return (
        <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-600">
          <span className="text-sm font-medium">★</span>
        </div>
      );
    }

    if (typeof Icon === "function") {
      return <Icon />;
    }

    return (
      <div className="w-10 h-10 rounded-md bg-gray-50 flex items-center justify-center text-blue-600">
        <Icon className="w-6 h-6" />
      </div>
    );
  }

  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-bold text-gray-900 text-center">Skills</h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Frontend */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="space-y-3">
              {frontend.map((f) => (
                <li key={f.name} className="flex items-center gap-4">
                  <RenderIcon Icon={f.Icon} />
                  <span className="text-gray-700 font-medium">{f.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <ul className="space-y-3">
              {backend.map((b) => (
                <li key={b.name} className="flex items-center gap-4">
                  <RenderIcon Icon={b.Icon} />
                  <span className="text-gray-700 font-medium">{b.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Databases */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Databases</h3>
            <ul className="space-y-3">
              {databases.map((d) => (
                <li key={d.name} className="flex items-center gap-4">
                  <RenderIcon Icon={d.Icon} />
                  <span className="text-gray-700 font-medium">{d.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Platforms */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t.name}
                  className="text-sm px-3 py-1 rounded-md bg-gray-100 text-gray-700"
                >
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Other Skills</h3>
            <div className="flex flex-wrap gap-2">
              {otherSkills.map((s) => (
                <span
                  key={s.name}
                  className="text-sm px-3 py-1 rounded-md bg-blue-50 text-blue-700"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
