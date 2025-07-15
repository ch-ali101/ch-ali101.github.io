export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Professional Journey</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              I'm a passionate software engineer specializing in Next.js and React development. Currently working at SocioOn Limited,
              I focus on building dynamic, high-performance web applications that deliver exceptional user experiences.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              My expertise spans the entire development lifecycle, from conceptualization to deployment. I'm particularly skilled in
              performance optimization, API integration, and creating responsive, accessible user interfaces.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-surface rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">2+</div>
                <div className="text-slate-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-surface rounded-lg">
                <div className="text-2xl font-bold text-accent mb-2">15+</div>
                <div className="text-slate-400 text-sm">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern developer workspace with multiple monitors showing code"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
