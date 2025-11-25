export default function Certifications() {
  const certificates = [
    "Full Stack Development Program – Besant Technologies (2024)",
    "ITIL Foundation – 2021",
    "Lean Six Sigma Green Belt – 2016",
    "Diploma in Computer Science – 2005",
  ];

  return (
    <section
      id="certifications"
      className="py-28 px-6 bg-white border-t border-gray-200"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Certifications</h2>
        <div className="w-20 h-1 bg-blue-600 rounded mx-auto mt-4 mb-16"></div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="
                p-6 bg-gray-50 
                rounded-xl shadow-sm 
                hover:shadow-lg transition 
                text-gray-700 
                font-medium
                h-full flex items-center justify-center
              "
            >
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
