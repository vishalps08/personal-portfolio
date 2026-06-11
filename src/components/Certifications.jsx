import { FaCertificate, FaGraduationCap } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Certifications() {
  const { ref, isVisible } = useScrollReveal();

  const certificates = [
    {
      title: "Full Stack Development Program",
      issuer: "Besant Technologies",
      year: "2024",
      Icon: FaCertificate,
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-200",
    },
    {
      title: "ITIL Foundation",
      issuer: "Certified",
      year: "2021",
      Icon: FaCertificate,
      color: "text-green-500",
      bg: "bg-green-50",
      border: "border-green-200",
    },
    {
      title: "Lean Six Sigma Green Belt",
      issuer: "Certified",
      year: "2016",
      Icon: FaCertificate,
      color: "text-yellow-500",
      bg: "bg-yellow-50",
      border: "border-yellow-200",
    },
    {
      title: "Microsoft® Certified Technology Specialist",
      issuer: "Windows Vista® Configuration",
      year: "2011",
      Icon: FaCertificate,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
      border: "border-indigo-200",
    },
    {
      title: "Microsoft® Certified Professional",
      issuer: "Microsoft",
      year: "2010",
      Icon: FaCertificate,
      color: "text-red-500",
      bg: "bg-red-50",
      border: "border-red-200",
    },
    {
      title: "Diploma in Computer Science",
      issuer: "Completed",
      year: "2005",
      Icon: FaGraduationCap,
      color: "text-purple-500",
      bg: "bg-purple-50",
      border: "border-purple-200",
    },
  ];

  return (
    <section id="certifications" className="py-28 px-6 bg-white border-t-0">
      <div ref={ref} className={`max-w-5xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-4xl font-bold text-gray-900">Certifications</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded mx-auto mt-4 mb-16"></div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3 border ${cert.border} hover:-translate-y-1`}
            >
              <div className={`w-14 h-14 rounded-full ${cert.bg} flex items-center justify-center`}>
                <cert.Icon className={`w-7 h-7 ${cert.color}`} />
              </div>
              <h3 className="text-gray-900 font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-500">{cert.issuer} &middot; {cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
