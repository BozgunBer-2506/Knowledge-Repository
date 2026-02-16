import React from 'react';

const guides = [
  { title: "Linux Engineering", icon: "🐧", link: "https://linux-rehberi-tr.vercel.app/", tag: "Infrastructure" },
  { title: "AWS Cloud Services", icon: "☁️", link: "https://aws-cloud-rehberi-tr.vercel.app/", tag: "DevOps" },
  { title: "Python Development", icon: "🐍", link: "https://python-rehberi-tr.vercel.app/", tag: "Backend" },
  { title: "JavaScript Standards", icon: "📜", link: "https://java-script-rehberi-tr.vercel.app/", tag: "Full-Stack" }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-emerald-500/30">

      <style>{`
        .goog-logo-link, .goog-te-gadget span, .goog-te-banner-frame { display: none !important; }
        .goog-te-gadget { color: transparent !important; font-size: 0 !important; }
        .goog-te-combo { 
          background-color: rgba(30, 41, 59, 0.7) !important; 
          color: #10b981 !important; 
          border: 1px solid rgba(16, 185, 129, 0.3) !important; 
          border-radius: 8px !important; 
          padding: 4px 8px !important;
          font-size: 12px !important;
          font-weight: 600 !important;
          outline: none !important;
        }
        body { top: 0px !important; position: static !important; }
        #goog-gt-tt, .goog-te-balloon-frame { display: none !important; }
        .goog-text-highlight { background: none !important; box-shadow: none !important; }
      `}</style>

      <nav className="sticky top-0 z-50 bg-[#1e293b]/80 backdrop-blur-md border-b border-slate-700 py-2 px-6 flex justify-between items-center">
        <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold italic">
          Knowledge Repository
        </span>
        <div id="google_translate_element"></div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <header className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-emerald-400 uppercase bg-emerald-400/10 rounded-full italic">
            Technical Engineering Portfolio
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent italic">
            Knowledge Repository
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Interactive technical guides developed during the Agile Software Development & Cloud Engineering program at Syntax.de.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {guides.map((guide, index) => (
            <a key={index} href={guide.link} target="_blank" rel="noreferrer"
              className="group relative flex flex-col bg-slate-800/40 border border-slate-700/50 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50 hover:bg-slate-800 decoration-none">
              <div className="flex justify-between items-start mb-8">
                <span className="text-5xl transform group-hover:scale-110 transition-transform">{guide.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-900/80 px-2 py-1 rounded border border-slate-700">{guide.tag}</span>
              </div>
              <h3 className="text-2xl font-bold mb-8 group-hover:text-emerald-400 transition-colors">{guide.title}</h3>
              <div className="mt-auto flex items-center text-emerald-500 font-semibold text-xs tracking-widest uppercase italic">
                Explore Module →
              </div>
            </a>
          ))}
        </div>

        <section className="bg-slate-800/20 border border-slate-700/30 rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-8 italic text-slate-200 uppercase tracking-widest">Connect</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="https://github.com/BozgunBer-2506" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-3 bg-slate-900 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all hover:scale-105 group decoration-none">
              <span className="text-xl">💻</span>
              <span className="font-bold text-white group-hover:text-emerald-400">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/the-bozgun/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-3 bg-slate-900 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all hover:scale-105 group decoration-none">
              <span className="text-xl">🔗</span>
              <span className="font-bold text-white group-hover:text-emerald-400">LinkedIn</span>
            </a>
            <a href="mailto:y.baris.ozgun@gmail.com" className="flex items-center gap-3 px-8 py-3 bg-slate-900 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all hover:scale-105 group decoration-none">
              <span className="text-xl">📧</span>
              <span className="font-bold text-white group-hover:text-emerald-400">Email</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left border-t border-slate-800 pt-10">
            <div>
              <h4 className="text-emerald-400 font-bold mb-3 uppercase text-[10px] tracking-widest">Academic Status</h4>
              <p className="text-slate-400 text-sm font-light italic leading-relaxed">IHK Certified IT Support Specialist. Finalizing 9 months of Agile Software Development with a focus on Linux & Cloud Engineering.</p>
            </div>
            <div>
              <h4 className="text-emerald-400 font-bold mb-3 uppercase text-[10px] tracking-widest">Methodology</h4>
              <p className="text-slate-400 text-sm font-light italic leading-relaxed">Applying Scrum frameworks and Agile methodologies within WSL/Ubuntu environments.</p>
            </div>
          </div>
        </section>

        <footer className="mt-20 text-center text-slate-600 text-[10px] tracking-[0.3em] uppercase">
          © 2026 Yavuz Baris Özgün — Engineering Portfolio
        </footer>
      </div>
    </div>
  );
}