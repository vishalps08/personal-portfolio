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

// Custom Java SVG icon
function JavaIcon() {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        width="28"
        height="28"
      >
        <path
          fill="#007396"
          d="M89.4 98.7c-2.3 5.8-17.2 11.4-34.4 11.4-17.2 0-31.7-4.8-34.4-11.4-1.2-2.9 1.2-6 4-4.8 4 1.7 13.5 4 30.4 4s26.4-2.3 30.4-4c2.8-1.2 5.3 1.9 4 4.8z"
        ></path>
        <path
          fill="#007396"
          d="M100.1 86.4c-2.8 7.2-21.3 13.1-45.1 13.1-23.8 0-42.3-5.9-45.1-13.1-1.3-3.3 1.4-6.7 4.8-5.4 4.8 2 16.3 5.4 40.3 5.4 24 0 35.6-3.4 40.3-5.4 3.4-1.3 6.1 2 4.8 5.4z"
        ></path>
      </svg>
    </div>
  );
}

export default function Skills() {
  const frontend = [
    { name: "HTML", Icon: FaHtml5 },
    { name: "CSS", Icon: FaCss3Alt },
    { name: "JavaScript", Icon: FaJsSquare },
    { name: "React.js", Icon: FaReact },
  ];

  const backend = [
    { name: "Node.js", Icon: FaNodeJs },
    { name: "Express.js", Icon: FaNodeJs },
    { name: "Python", Icon: FaPython },
  ];

  const databases = [
    { name: "MongoDB", Icon: FaDatabase },
    { name: "Oracle SQL", Icon: FaDatabase },
  ];

  const tools = [
    { name: "Git" },
    { name: "JSON" },
    { name: "REST APIs" },
    { name: "CRUD Operations" },
  ];

  function RenderIcon({ Icon }) {
    if (!Icon) {
      return (
        <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-600">
          <span className="text-sm font-medium">★</span>
        </div>
      );
    }

    // If Icon is a function (custom SVG), render it
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
      <div className="max-w-5xl mx-auto">
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

          {/* Databases & Tools */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Databases & Tools</h3>
            <ul className="space-y-3">
              {databases.map((d) => (
                <li key={d.name} className="flex items-center gap-4">
                  <RenderIcon Icon={d.Icon} />
                  <span className="text-gray-700 font-medium">{d.name}</span>
                </li>
              ))}

              <li className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="text-sm text-gray-500 mb-2">Other tools</h4>
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
