import { FaGraduationCap } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Education() {
  const { ref, isVisible } = useScrollReveal();

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Manipal University Jaipur",
      period: "Jan 2026 – Present",
      detail: "Online (3-Year Program)",
      border: "border-blue-200",
    },
    {
      degree: "Diploma in Computer Science",
      institution: "Shree Vidyadhiraj Polytechnic, Kumta",
      period: "2005",
      detail: null,
      border: "border-purple-200",
    },
  ];

  return (
    <section id="education" className="py-28 px-6 bg-gray-50 border-t-0">
      <div ref={ref} className={`max-w-5xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-4xl font-bold text-gray-900">Education</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded mx-auto mt-4 mb-16"></div>

        <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3 border ${edu.border} hover:-translate-y-1`}
            >
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
                <FaGraduationCap className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-gray-900 font-semibold">{edu.degree}</h3>
              <p className="text-sm text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">
                {edu.period}
                {edu.detail && ` • ${edu.detail}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
