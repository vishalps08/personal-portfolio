import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6 bg-gray-50 border-t-0">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded mx-auto mt-4 mb-8"></div>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100">
          <p className="text-gray-700 leading-relaxed text-lg">
            Software Engineer with 18+ years of prior enterprise IT leadership and
            technical support experience, currently working in full-stack web
            development. Hands-on experience in building internal and client-facing
            applications using the{" "}
            <span className="font-semibold text-blue-600">MERN stack, REST APIs, responsive UI development, SEO optimization,
            and solution architecture</span>.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg mt-4">
            Proven strength in solving complex business problems, leading teams,
            and delivering scalable software solutions. Previously at HP Inc., I
            designed internal dashboards, managed escalations, and optimized
            support workflows across global teams.
          </p>
        </div>
      </div>
    </section>
  );
}
