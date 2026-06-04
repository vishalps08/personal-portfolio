import { FaTrophy, FaStar, FaMedal, FaAward } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Achievements() {
  const { ref, isVisible } = useScrollReveal();

  const achievements = [
    {
      title: "Customer Obsession ACE'd Award",
      year: "FY'23",
      Icon: FaTrophy,
      color: "text-yellow-500",
      bg: "bg-yellow-50",
      border: "border-yellow-200",
    },
    {
      title: "Performer Awards",
      year: "FY'19, FY'21, FY'22",
      Icon: FaStar,
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-200",
    },
    {
      title: "Tech Star Award",
      year: "FY'17",
      Icon: FaMedal,
      color: "text-green-500",
      bg: "bg-green-50",
      border: "border-green-200",
    },
    {
      title: "Rock Star Awards",
      year: "FY'17–FY'19",
      Icon: FaAward,
      color: "text-purple-500",
      bg: "bg-purple-50",
      border: "border-purple-200",
    },
  ];

  return (
    <section id="achievements" className="py-28 px-6 bg-gray-50 border-t-0">
      <div ref={ref} className={`max-w-5xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-4xl font-bold text-gray-900">Achievements</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded mx-auto mt-4 mb-16"></div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((ach, index) => (
            <div
              key={index}
              className={`p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-4 border ${ach.border} hover:-translate-y-1`}
            >
              <div className={`w-14 h-14 rounded-full ${ach.bg} flex items-center justify-center`}>
                <ach.Icon className={`w-7 h-7 ${ach.color}`} />
              </div>
              <h3 className="text-gray-900 font-semibold">{ach.title}</h3>
              <span className="text-sm text-gray-500">{ach.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
