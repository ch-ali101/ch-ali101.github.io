export default function Skills() {
  const skills = [
    { name: "Next.js", level: 90, icon: "⚛️" },
    { name: "React.js", level: 95, icon: "⚛️" },
    { name: "Tailwind CSS", level: 88, icon: "🎨" },
    { name: "Bootstrap", level: 85, icon: "📱" },
    { name: "API Integration", level: 92, icon: "🔗" },
    { name: "Performance Optimization", level: 87, icon: "⚡" },
    { name: "Vercel Deployment", level: 90, icon: "☁️" },
    { name: "Payment Methods", level: 83, icon: "💳" },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-surface p-6 rounded-xl text-center hover:bg-slate-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent p-0.5 rounded-lg">
                <div className="w-full h-full bg-surface rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{skill.icon}</span>
                </div>
              </div>
              <h3 className="text-slate-50 font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-slate-600 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
