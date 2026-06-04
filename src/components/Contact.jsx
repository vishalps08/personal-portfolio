import { FaLinkedin, FaGithub, FaInstagram, FaCamera } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-28 px-6 bg-gray-50 border-t-0">
      <div ref={ref} className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-4xl font-bold text-gray-900">Contact</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded mx-auto mt-4 mb-16"></div>

        <div className="bg-white p-8 rounded-2xl shadow-sm max-w-lg mx-auto border border-gray-100">
          <p className="text-gray-700 text-lg leading-relaxed">
            Feel free to reach out for opportunities, collaborations, or
            questions.
          </p>

          <div className="mt-8 space-y-4 text-gray-700 text-lg">
            <p>Bangalore, India</p>

            <p>
              <a
                href="mailto:vishalps08@gmail.com"
                className="text-blue-600 hover:underline"
              >
                vishalps08@gmail.com
              </a>
            </p>

            <p>
              <a
                href="tel:+919900288611"
                className="text-blue-600 hover:underline"
              >
                +91 99002 88611
              </a>
            </p>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/vishalaprabhu08"
              target="_blank"
              className="p-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/vishalps08"
              target="_blank"
              className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/vapshere/"
              target="_blank"
              className="p-3 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100 transition"
              title="@vapshere"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/shikarvishalphotography/"
              target="_blank"
              className="p-3 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100 transition"
              title="@shikarvishalphotography"
            >
              <FaCamera className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
