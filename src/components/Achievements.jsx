export default function Achievements() {
  const achievements = [
    "Customer Obsession ACE’d Award – FY’23",
    "Performer Awards – FY’19, FY’21, FY’22",
    "Tech Star Award – FY’17",
    "Rock Star Awards – FY’17–FY’19",
  ];

  return (
    <section
      id="achievements"
      className="py-28 px-6 bg-gray-50 border-t border-gray-200"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Achievements</h2>
        <div className="w-20 h-1 bg-blue-600 rounded mx-auto mt-4 mb-16"></div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((ach, index) => (
            <div
              key={index}
              className="
                p-6 bg-white 
                rounded-xl shadow-sm 
                hover:shadow-lg 
                transition-all 
                text-gray-700 
                font-medium 
                h-full flex items-center justify-center
              "
            >
              {ach}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
