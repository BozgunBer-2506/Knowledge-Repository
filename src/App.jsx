import LinuxLogo from './images/Linuxlogo.png';
import AWSLogo from './images/AWSlogo.png';
import PythonLogo from './images/Pythonlogo.png';
import JSLogo from './images/JSlogo.png';

const guides = [
  { title: "Linux Engineering", logo: LinuxLogo, link: "https://linux-rehberi-tr.vercel.app/", tag: "Infrastructure" },
  { title: "AWS Cloud Services", logo: AWSLogo, link: "https://aws-cloud-rehberi-tr.vercel.app/", tag: "DevOps" },
  { title: "Python Development", logo: PythonLogo, link: "https://python-rehberi-tr.vercel.app/", tag: "Backend" },
  { title: "JavaScript Standards", logo: JSLogo, link: "https://java-script-rehberi-tr.vercel.app/", tag: "Full-Stack" }
];

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-emerald-500/30 flex flex-col overflow-x-hidden">
      <style>{`
        .goog-logo-link, .goog-te-gadget span, .goog-te-banner-frame { display: none !important; }
        .goog-te-gadget { color: transparent !important; font-size: 0 !important; }
        .goog-te-combo { 
          background-color: rgba(30, 41, 59, 0.7) !important; 
          color: #10b981 !important; 
          border: 1px solid rgba(16, 185, 129, 0.3) !important; 
          border-radius: 8px !important; 
          padding: 4px 10px !important;
          font-size: 12px !important;
          outline: none !important;
        }
        body { top: 0px !important; position: static !important; }
      `}</style>

      <nav className="sticky top-0 z-50 bg-[#1e293b]/80 backdrop-blur-md border-b border-slate-700 py-3 px-8 flex justify-between items-center shrink-0">
        <span className="text-[11px] text-slate-400 uppercase tracking-[0.2em] font-bold italic">Knowledge Repository</span>
        <div id="google_translate_element"></div>
      </nav>

      <div className="flex-1 flex flex-col justify-evenly max-w-7xl mx-auto px-8 py-6 w-full">
        <header className="text-center">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider text-emerald-400 uppercase bg-emerald-400/10 rounded-full italic">Technical Engineering Portfolio</div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 pb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent italic leading-tight">
            Knowledge Repository
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto font-light">
            Interactive technical guides for Agile Software Development & Cloud Engineering.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
          {guides.map((guide, index) => (
            <a key={index} href={guide.link} target="_blank" rel="noreferrer"
              className="group relative flex flex-col bg-slate-800/40 border border-slate-700/50 p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-slate-800 decoration-none">
              <div className="flex justify-between items-start mb-6">
                <img src={guide.logo} alt={guide.title} className="w-12 h-12 object-contain transform group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-900/80 px-2 py-1 rounded border border-slate-700">{guide.tag}</span>
              </div>
              <h3 className="text-xl font-bold mb-6 group-hover:text-emerald-400 transition-colors">{guide.title}</h3>
              <div className="mt-auto flex items-center text-emerald-500 font-semibold text-[11px] tracking-widest uppercase italic">
                Explore Module →
              </div>
            </a>
          ))}
        </div>

        <section className="bg-slate-800/20 border border-slate-700/30 rounded-3xl p-8 text-center max-w-5xl mx-auto w-full">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="https://github.com/BozgunBer-2506" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-2.5 bg-slate-900 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all decoration-none">
              <GitHubIcon /><span className="font-bold text-white text-sm">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/the-bozgun/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-2.5 bg-slate-900 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all decoration-none">
              <LinkedInIcon /><span className="font-bold text-white text-sm">LinkedIn</span>
            </a>
            <a href="mailto:y.baris.ozgun@gmail.com" className="flex items-center gap-3 px-6 py-2.5 bg-slate-900 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all decoration-none">
              <EmailIcon /><span className="font-bold text-white text-sm">Email</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left border-t border-slate-800 pt-6">
            <p className="text-slate-400 text-xs font-light italic leading-relaxed">IHK Certified IT Support Specialist. Finalizing 9 months of Agile Software Development.</p>
            <p className="text-slate-400 text-xs font-light italic leading-relaxed">Applying Scrum frameworks and Agile methodologies within WSL/Ubuntu environments.</p>
          </div>
        </section>

        <footer className="mt-6 text-center text-slate-600 text-[10px] tracking-[0.3em] uppercase">
          © 2026 Yavuz Baris Özgün - The_Bozgun
        </footer>
      </div>
    </div>
  );
}