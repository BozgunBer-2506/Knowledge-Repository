import React from 'react';

// Configuration for technical modules
const guides = [
  {
    title: "Linux Engineering",
    desc: "Comprehensive technical documentation covering Shell scripting, system security, and CLI administration.",
    icon: "🐧",
    link: "https://linux-rehberi-tr.vercel.app/",
    color: "from-yellow-400 to-orange-500",
    tag: "Infrastructure"
  },
  {
    title: "AWS Cloud Services",
    desc: "In-depth exploration of Cloud Architecture, service deployment, and scalable infrastructure management.",
    icon: "☁️",
    link: "https://aws-cloud-rehberi-tr.vercel.app/",
    color: "from-orange-400 to-red-500",
    tag: "DevOps"
  },
  {
    title: "Python Development",
    desc: "Mastering Python core logic, backend architectural patterns, and FastAPI framework implementation.",
    icon: "🐍",
    link: "https://python-rehberi-tr.vercel.app/",
    color: "from-blue-500 to-green-400",
    tag: "Backend"
  },
  {
    title: "JavaScript Standards",
    desc: "Modern ES6+ development practices, asynchronous programming models, and frontend architectural logic.",
    icon: "📜",
    link: "https://java-script-rehberi-tr.vercel.app/",
    color: "from-yellow-300 to-yellow-500",
    tag: "Full-Stack"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-emerald-500/30">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Academic Header Section */}
        <header className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-emerald-400 uppercase bg-emerald-400/10 rounded-full">
            Engineering Documentation Portfolio
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent italic">
            Knowledge Repository
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light">
            Interactive technical guides developed during the Agile Software Development & Cloud Engineering program at Syntax.de.
          </p>
        </header>

        {/* Knowledge Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {guides.map((guide, index) => (
            <a
              key={index}
              href={guide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col bg-slate-800/40 border border-slate-700/50 p-8 rounded-3xl transition-all duration-500 hover:bg-slate-800 hover:border-emerald-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${guide.color} opacity-[0.02] group-hover:opacity-[0.07] transition-opacity rounded-bl-full`} />

              <div className="flex justify-between items-start mb-8">
                <span className="text-5xl">{guide.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-900/80 px-2 py-1 rounded border border-slate-700">
                  {guide.tag}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                {guide.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
                {guide.desc}
              </p>

              <div className="mt-auto flex items-center text-emerald-500 font-semibold text-xs tracking-widest uppercase">
                Explore Module <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Professional Connections & Academic Details */}
        <section className="bg-slate-800/20 border border-slate-700/30 rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-8">Professional Connections</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://github.com/BozgunBer-2506" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 bg-slate-900 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all hover:scale-105 group">
              <span className="text-xl">💻</span>
              <span className="font-medium group-hover:text-emerald-400 transition-colors">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/the-bozgun/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 bg-slate-900 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all hover:scale-105 group">
              <span className="text-xl">🔗</span>
              <span className="font-medium group-hover:text-emerald-400 transition-colors">LinkedIn</span>
            </a>
            <a href="mailto:bozgun76@gmail.com" className="flex items-center gap-3 px-6 py-3 bg-slate-900 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all hover:scale-105 group">
              <span className="text-xl">📧</span>
              <span className="font-medium group-hover:text-emerald-400 transition-colors">Email</span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-left border-t border-slate-800 pt-10">
            <div>
              <h4 className="text-emerald-400 font-bold mb-3 uppercase text-[10px] tracking-[0.2em]">Academic Status</h4>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                IHK Certified IT Support Specialist. Completing intensive training in Agile Software Development with a specialization in Linux & Cloud Engineering.
              </p>
            </div>
            <div>
              <h4 className="text-emerald-400 font-bold mb-3 uppercase text-[10px] tracking-[0.2em]">Methodology</h4>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Applying Scrum frameworks and Agile methodologies within WSL/Ubuntu environments for scalable, containerized solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Footer */}
        <footer className="mt-20 text-center text-slate-600 text-[10px] tracking-[0.3em] uppercase">
          © 2026 Yavuz Baris Özgün — Engineering Portfolio
        </footer>
      </div>
    </div>
  );
}