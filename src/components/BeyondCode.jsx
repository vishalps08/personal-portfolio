import { FaCamera, FaBook, FaInstagram } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

export default function BeyondCode() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="beyond" className="py-28 px-6 bg-white border-t-0">
      <div ref={ref} className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-4xl font-bold text-gray-900">Beyond Code</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded mx-auto mt-4 mb-16"></div>

        <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
          {/* Photography */}
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center">
              <FaCamera className="w-7 h-7 text-pink-500" />
            </div>
            <h3 className="text-gray-900 font-semibold text-lg">Photography</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Passionate photographer capturing moments through the lens — from
              landscapes and architecture to everyday life. Photography is my
              creative outlet beyond the screen.
            </p>
            <a
              href="https://www.instagram.com/shikarvishalphotography/"
              target="_blank"
              className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium text-sm transition"
            >
              <FaInstagram className="w-4 h-4" />
              @shikarvishalphotography
            </a>
          </div>

          {/* Reading */}
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center">
              <FaBook className="w-7 h-7 text-amber-500" />
            </div>
            <h3 className="text-gray-900 font-semibold text-lg">Avid Reader</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              An avid reader who enjoys exploring books across technology,
              self-improvement, and beyond. Reading fuels curiosity and keeps
              the learning mindset alive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
