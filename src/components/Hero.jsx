export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 md:pt-0 bg-gradient-to-br from-blue-50 to-white"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
        Hi, I'm <span className="text-blue-600">Vishal Ashok Prabhu</span>
      </h1>

      <h2 className="text-xl md:text-2xl text-gray-600 mt-3">
        Full Stack / MERN Developer
      </h2>

      <p className="text-gray-600 mt-6 max-w-2xl leading-relaxed">
        IT professional with 18+ years of technical and leadership experience,
        now building clean and efficient web applications using
        <span className="font-semibold"> React, JavaScript, Node.js, ExpressJS, MongoDB</span>.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-8 py-3 rounded-full shadow hover:bg-blue-700 hover:shadow-lg transition"
        >
          View My Work
        </a>

        <a
          href="/Vishal-Ashok-Prabhu-Resume.pdf"
          download
          className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
