import useScrollReveal from "../hooks/useScrollReveal";

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  const timeline = [
    {
      title: "Software Engineer",
      company: "Inventics Software Pvt. Ltd",
      period: "Feb 2026 – Present",
      accent: "border-indigo-500",
      dot: "bg-indigo-500",
      points: [
        "Developing internal products and client-facing web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        "Built scalable modules for the Internship Enrolment Platform including candidate registration, data validation, workflow management, and backend services.",
        "Developed responsive React.js interfaces and integrated REST APIs for seamless frontend-backend communication.",
        "Collaborated with cross-functional teams on feature rollouts, deployment support, and production issue resolution.",
        "Improved application discoverability and on-page performance through SEO optimization and page structure enhancements.",
        "Supported client solution architecture by contributing to requirement analysis, system flow design, and scalable technical planning.",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Inventics Software Pvt. Ltd",
      period: "Sep 2025 – Jan 2026",
      accent: "border-blue-500",
      dot: "bg-blue-500",
      points: [
        "Contributed to full-stack development of internal products using the MERN stack.",
        "Built React-based frontend screens for registration, form validation, and dashboard views.",
        "Developed Node.js + Express backend APIs and MongoDB data models.",
        "Implemented secure data flow between frontend and backend services.",
      ],
    },
    {
      title: "Consumer Escalations Manager",
      company: "HP Inc.",
      period: "Jun 2019 – Dec 2023",
      accent: "border-green-500",
      dot: "bg-green-500",
      points: [
        "Led a team of 25 (10 in escalations, 15 in chat support), ensuring SLA adherence and high customer satisfaction across NA & EMEA.",
        "Designed and maintained an internal web portal (HTML, CSS, JavaScript) for real-time metrics and process documentation.",
        "Resolved complex premium customer escalations, collaborating with cross-regional teams for permanent solutions.",
        "Trained and mentored new joiners, boosting productivity and reducing ramp-up time.",
      ],
    },
    {
      title: "Premium Chat Support Engineer",
      company: "HP Inc.",
      period: "May 2016 – Jun 2019",
      accent: "border-yellow-500",
      dot: "bg-yellow-500",
      points: [
        "Delivered Tier 2 technical support for NA/EMEA customers, specializing in real-time troubleshooting and escalations.",
        "Built a support dashboard (HTML, CSS, JavaScript) to streamline process updates and contact references, reducing response time.",
        "Acted as floor support for live issue resolution and knowledge sharing.",
      ],
    },
    {
      title: "Technical Support Engineer",
      company: "HP Inc.",
      period: "Dec 2010 – May 2016",
      accent: "border-purple-500",
      dot: "bg-purple-500",
      points: [
        "Managed repair processes, spare parts ordering, and case follow-ups for global customers.",
        "Provided backend support to agents using SR Dash tool, ensuring accurate case handling and faster turnaround.",
      ],
    },
    {
      title: "Technical Support Engineer",
      company: "E4e Global Solutions",
      period: "Jan 2006 – Oct 2008, May 2010 – Oct 2010",
      accent: "border-teal-500",
      dot: "bg-teal-500",
      points: [
        "Delivered technical support for consumer clients, handling troubleshooting, issue resolution, and service coordination.",
      ],
    },
    {
      title: "Technical Support Engineer",
      company: "Decho Corp.",
      period: "Nov 2008 – Jan 2010",
      accent: "border-orange-500",
      dot: "bg-orange-500",
      points: [
        "Provided customer and technical support for storage solutions, ensuring smooth operations and client satisfaction.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-28 px-6 bg-white border-t-0"
    >
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-4xl font-bold text-gray-900 text-center">
          Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded mx-auto mt-4 mb-16"></div>

        {/* Desktop zigzag timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-indigo-300 to-purple-300" />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className="relative mb-12 flex items-start">
                {/* Dot */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full ${item.dot} border-4 border-white shadow-md z-10`} />

                {isLeft ? (
                  <>
                    <div className="w-1/2 pr-10 text-right">
                      <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-r-4 ${item.accent} hover:-translate-y-1`}>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        <p className="text-blue-600 font-medium text-sm mt-1">{item.company} • {item.period}</p>
                        <ul className="text-gray-700 mt-3 space-y-1 text-sm leading-relaxed text-left list-disc list-inside">
                          {item.points.map((p, idx) => <li key={idx}>{p}</li>)}
                        </ul>
                      </div>
                    </div>
                    <div className="w-1/2" />
                  </>
                ) : (
                  <>
                    <div className="w-1/2" />
                    <div className="w-1/2 pl-10">
                      <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 ${item.accent} hover:-translate-y-1`}>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        <p className="text-blue-600 font-medium text-sm mt-1">{item.company} • {item.period}</p>
                        <ul className="text-gray-700 mt-3 space-y-1 text-sm leading-relaxed list-disc list-inside">
                          {item.points.map((p, idx) => <li key={idx}>{p}</li>)}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile linear timeline */}
        <div className="md:hidden relative border-l-2 border-blue-200 ml-4">
          {timeline.map((item, i) => (
            <div key={i} className="mb-10 ml-6">
              <div className={`absolute -left-[9px] w-4 h-4 rounded-full ${item.dot} border-2 border-white shadow`} />
              <div className={`bg-white rounded-xl shadow-md p-5 border-l-4 ${item.accent}`}>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-blue-600 font-medium text-sm">{item.company} • {item.period}</p>
                <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1 text-sm leading-relaxed">
                  {item.points.map((p, idx) => <li key={idx}>{p}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
