import { useState, useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Software Engineer",
  "Passionate Photographer",
];

function useTypingEffect(words, typingSpeed = 100, pauseTime = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? typingSpeed / 2 : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, pauseTime]);

  return text;
}

export default function Hero() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const typedRole = useTypingEffect(roles);

  const stats = [
    { value: "18+", label: "Years IT Experience" },
    { value: "6+", label: "Projects" },
    { value: "4", label: "Certifications" },
    { value: "4", label: "Awards" },
  ];

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 md:px-20"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -z-10" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -z-10" style={{ animationDelay: "2s" }} />

      <div className={`flex flex-col md:flex-row items-center justify-center text-center md:text-left w-full max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Profile Image */}
        <div className="mb-6 md:mb-0 md:mr-10 flex justify-center w-full md:w-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500" />
            <img
              src="/profile.jpg"
              alt="Profile"
              className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>
        </div>

        {/* Text Section */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Vishal Prabhu</span>
          </h1>

          <div className="mt-3 h-8 md:h-10">
            <span className="text-lg md:text-2xl text-gray-600 font-medium">
              {typedRole}
            </span>
            <span className="inline-block w-0.5 h-5 md:h-7 bg-blue-600 ml-1 animate-pulse align-middle" />
          </div>

          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Software Engineer with 18+ years of enterprise IT leadership,
            now building scalable web apps with the MERN stack. Avid reader
            and passionate photographer when away from the keyboard.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className={`mt-16 w-full max-w-4xl transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
