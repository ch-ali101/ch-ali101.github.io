export default function Experience() {
  const experiences = [
    {
      title: "Next.js Developer",
      company: "SocioOn Limited - Lahore",
      period: "06/2024 - Present",
      achievements: [
        "Developed and maintained responsive web applications using Next.js, React, and modern JavaScript (ES6+)",
        "Integrated RESTful APIs for dynamic data fetching and rendering",
        "Worked with functional components and hooks like useState, useEffect, and useContext",
        "Managed application-wide state using React Context API for consistent data flow",
        "Optimized application performance by implementing image optimization and code splitting",
      ],
      isPrimary: true,
    },
    {
      title: "Frontend Developer",
      company: "IT Center - Rahim Yar Khan",
      period: "11/2023 - 02/2024",
      achievements: [
        "Created well-structured, semantic web pages using HTML5",
        "Styled and made responsive layouts with CSS3 and media queries",
        "Added basic interactivity and functionality using JavaScript",
        "Learned best practices for writing clean and maintainable code",
      ],
      isPrimary: false,
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-accent"></div>

          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-center mb-4">
                <div className={`w-8 h-8 ${experience.isPrimary ? 'bg-primary' : 'bg-accent'} rounded-full border-4 border-dark-bg absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 z-10`}></div>
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8 md:text-right' : 'md:w-1/2 md:pl-8 md:ml-auto'}`}>
                  <span className="text-sm text-accent font-semibold">{experience.period}</span>
                </div>
              </div>

              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:pl-8 md:ml-auto'}`}>
                <div className="bg-surface p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-primary mb-2">{experience.title}</h3>
                  <h4 className="text-slate-300 mb-4">{experience.company}</h4>
                  <ul className="text-slate-400 space-y-2 text-sm">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
