export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-center md:text-left"
    >
      {/* Profile Image */}
      <div className="mb-6 md:mb-0 md:mr-10 flex justify-center w-full md:w-auto">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-blue-600"
        />
      </div>

      {/* Text Section */}
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Hi, I'm <span className="text-blue-600">Vishal Prabhu</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-md mx-auto md:mx-0 leading-relaxed">
          Full Stack / MERN Developer with a strong background in building
          modern web applications. Passionate about creating impactful solutions
          and learning new technologies.
        </p>

        <a
          href="#projects"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
