export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-gray-50 border-t border-gray-200"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Contact</h2>
        <div className="w-20 h-1 bg-blue-600 rounded mx-auto mt-4 mb-16"></div>

        <div className="bg-white p-8 rounded-xl shadow-sm max-w-lg mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed">
            Feel free to reach out for opportunities, collaborations, or
            questions.
          </p>

          <div className="mt-8 space-y-4 text-gray-700 text-lg">
            <p>📍 Bangalore, India</p>

            <p>
              📧{" "}
              <a
                href="mailto:vishalps08@gmail.com"
                className="text-blue-600 hover:underline"
              >
                vishalps08@gmail.com
              </a>
            </p>

            <p>
              📞{" "}
              <a
                href="tel:+919900288611"
                className="text-blue-600 hover:underline"
              >
                +91 99002 88611
              </a>
            </p>
          </div>

          <div className="mt-6 flex justify-center gap-8 text-blue-600 font-medium">
            <a
              href="https://www.linkedin.com/in/vishalaprabhu08"
              target="_blank"
              className="hover:text-blue-800"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/vishalps08"
              target="_blank"
              className="hover:text-blue-800"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
