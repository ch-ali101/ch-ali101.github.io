export default function Projects() {
  const projects = [
    {
      name: "Link-On Social Media",
      description: "Developed a dynamic and scalable web application using Next.js with authentication, user management, and payment gateway integration.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "SSR/SSG", "Authentication", "Payment Gateway"],
      colors: ["primary", "accent", "purple", "green"],
    },
    {
      name: "Holo360",
      description: "Built a responsive static website for showcasing product information using React.js, TypeScript, and modern UI design with Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Vite"],
      colors: ["primary", "blue", "cyan", "yellow"],
    },
    {
      name: "BitsImages",
      description: "Contributed to a Next.js-based stock media platform with UI improvements, payment gateway integration, and enhanced user experience features.",
      image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "Payment Gateway", "Search", "Media Delivery"],
      colors: ["primary", "green", "purple", "orange"],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      primary: "bg-primary/20 text-primary",
      accent: "bg-accent/20 text-accent",
      purple: "bg-purple-500/20 text-purple-400",
      green: "bg-green-500/20 text-green-400",
      blue: "bg-blue-500/20 text-blue-400",
      cyan: "bg-cyan-500/20 text-cyan-400",
      yellow: "bg-yellow-500/20 text-yellow-400",
      orange: "bg-orange-500/20 text-orange-400",
    };
    return colorMap[color] || "bg-gray-500/20 text-gray-400";
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            A showcase of recent projects that demonstrate my expertise in modern web development and problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
            >
              <img
                src={project.image}
                alt={`${project.name} interface`}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-400 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs rounded-full ${getColorClasses(project.colors[techIndex])}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button className="text-primary hover:text-accent transition-colors text-sm font-medium">
                    View Project →
                  </button>
                  <button className="text-slate-400 hover:text-slate-300 transition-colors text-sm">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
