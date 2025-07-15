export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-surface p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                <span className="text-xl">🎓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary">BS Software Engineering</h3>
                <p className="text-slate-400 text-sm">2020 - 2024</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4">Khawaja Fareed University of Engineering and Information Technology</p>
            <p className="text-slate-400 text-sm">
              Comprehensive program covering software development principles, algorithms, data structures,
              and modern programming paradigms with hands-on project experience.
            </p>
          </div>

          {/* Certification */}
          <div className="bg-surface p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center mr-4">
                <span className="text-xl">📱</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent">Mobile App Development (React Native)</h3>
                <p className="text-slate-400 text-sm">03/2024 - 05/2024</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4">Global Academy — 3-month training program</p>
            <p className="text-slate-400 text-sm">
              Intensive training program focused on cross-platform mobile app development using React Native,
              covering navigation, state management, and native device features integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
