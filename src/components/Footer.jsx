import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaCamera } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 text-gray-500 py-10 px-6 text-center text-sm">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex justify-center gap-5">
          <a
            href="https://www.linkedin.com/in/vishalaprabhu08"
            target="_blank"
            className="hover:text-blue-600 transition p-2 rounded-full hover:bg-white"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/vishalps08"
            target="_blank"
            className="hover:text-gray-900 transition p-2 rounded-full hover:bg-white"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/vapshere/"
            target="_blank"
            className="hover:text-pink-600 transition p-2 rounded-full hover:bg-white"
            title="@vapshere"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/shikarvishalphotography/"
            target="_blank"
            className="hover:text-pink-600 transition p-2 rounded-full hover:bg-white"
            title="@shikarvishalphotography"
          >
            <FaCamera className="w-5 h-5" />
          </a>
          <a
            href="mailto:vishalps08@gmail.com"
            className="hover:text-blue-600 transition p-2 rounded-full hover:bg-white"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Vishal Prabhu. All rights reserved.</p>
      </div>
    </footer>
  );
}
