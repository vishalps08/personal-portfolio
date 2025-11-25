export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Me
        </h2>
        <div className="w-20 h-1 bg-blue-600 rounded mx-auto mt-4 mb-8"></div>

        <p className="text-gray-700 leading-relaxed text-lg">
          I’m a full-stack developer transitioning from an 18-year IT career. I
          create applications using{" "}
          <b>React, JavaScript, Node.js, SQL, Python, and Java</b>.
        </p>

        <p className="text-gray-600 leading-relaxed text-lg mt-4">
          Previously at HP Inc., I designed internal dashboards, managed
          escalations, and optimized support workflows. I enjoy problem-solving,
          building tools, and learning new technologies.
        </p>
      </div>
    </section>
  );
}
