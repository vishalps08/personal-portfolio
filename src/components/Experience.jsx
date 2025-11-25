export default function Experience() {
  const timeline = [
    {
      title: "Consumer Escalations Manager",
      company: "HP Inc.",
      period: "2019 – 2023",
      points: [
        "Led a 25-member team across NA & EMEA.",
        "Designed internal dashboards using HTML, CSS, JavaScript.",
        "Resolved complex high-severity escalations.",
        "Mentored new joiners and improved team productivity.",
      ],
    },
    {
      title: "Premium Chat Support Engineer",
      company: "HP Inc.",
      period: "2016 – 2019",
      points: [
        "Delivered Tier 2 support for NA/EMEA customers.",
        "Built real-time dashboards for support engineers.",
        "Provided troubleshooting guidance and floor support.",
      ],
    },
    {
      title: "Technical Support Engineer",
      company: "HP / E4e / Decho",
      period: "2006 – 2016",
      points: [
        "Handled backend case processes & spare parts management.",
        "Troubleshot global customer issues.",
        "Improved service turnaround times.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-28 px-6 bg-white border-t border-gray-200"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center">
          Experience
        </h2>
        <div className="w-20 h-1 bg-blue-600 rounded mx-auto mt-4 mb-16"></div>

        <div className="relative border-l-2 border-blue-200 ml-4">
          {timeline.map((item, i) => (
            <div
              key={i}
              className="mb-16 ml-6 p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all"
            >
              <div
                className="
                absolute -left-3 top-6 w-6 h-6 rounded-full bg-blue-600 
                border-4 border-white shadow-lg
              "
              ></div>

              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-blue-600 font-medium">
                {item.company} • {item.period}
              </p>

              <ul className="list-disc list-inside text-gray-700 mt-4 space-y-1 leading-relaxed">
                {item.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
