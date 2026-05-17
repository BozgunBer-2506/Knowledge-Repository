import LinuxLogo from './images/Linuxlogo.png';
import AWSLogo from './images/AWSlogo.png';
import PythonLogo from './images/Pythonlogo.png';
import JSLogo from './images/JSlogo.png';
import DockerLogo from './images/Dockerlogo.png';

const guides = [
  {
    title: "Linux Engineering",
    logo: LinuxLogo,
    link: "https://linux-rehberi-tr.vercel.app/",
    tag: "Infrastructure",
    description: "Shell scripting, file system, permissions, process management, and CLI mastery."
  },
  {
    title: "AWS Cloud Services",
    logo: AWSLogo,
    link: "https://aws-cloud-rehberi-tr.vercel.app/",
    tag: "Cloud",
    description: "EC2, S3, RDS, IAM, VPC and core cloud architecture patterns on AWS."
  },
  {
    title: "Docker Containerization",
    logo: DockerLogo,
    link: "https://docker-rehberi-tr.vercel.app/",
    tag: "DevOps",
    description: "Container fundamentals, Dockerfile, Compose, volumes and deployment workflows."
  },
  {
    title: "Python Development",
    logo: PythonLogo,
    link: "https://python-rehberi-tr.vercel.app/",
    tag: "Backend",
    description: "Core Python, web development with FastAPI, and automation scripting."
  },
  {
    title: "JavaScript Standards",
    logo: JSLogo,
    link: "https://java-script-rehberi-tr.vercel.app/",
    tag: "Frontend",
    description: "Modern ES6+, async/await, DOM manipulation, and JavaScript patterns."
  }
];

const tagStyle = {
  color: '#0077B5',
  backgroundColor: 'rgba(0,119,181,0.1)',
  borderColor: 'rgba(0,119,181,0.2)',
};

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
);

const ArrowIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" /></svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#080d1a] text-white font-sans selection:bg-blue-500/30 flex flex-col overflow-x-hidden">
      <style>{`
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .card-float:hover img { animation: float 2s ease-in-out infinite; }
      `}</style>

      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/6 rounded-full blur-[120px]" />
      </div>

      <main className="flex-1 max-w-6xl mx-auto px-6 w-full flex flex-col py-10">

        {/* Hero */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[10px] font-semibold tracking-widest text-blue-400 uppercase bg-blue-400/8 border border-blue-400/15 rounded-full">
            <span className="w-1 h-1 rounded-full bg-blue-400" />
            Agile Software Development & Cloud Engineering
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent leading-[1.05] tracking-tight">
            Knowledge Repository
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed font-light">
            Five technical guides covering the full stack - from Linux infrastructure to cloud deployment, written in Turkish.
          </p>
        </header>

        {/* Guide Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-auto">
          {guides.map((guide, index) => (
            <a
              key={index}
              href={guide.link}
              target="_blank"
              rel="noreferrer"
              className="card-float group relative flex flex-col bg-white/[0.03] border border-white/[0.07] hover:border-blue-500/40 hover:bg-white/[0.05] p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] max-w-[360px] no-underline"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src={guide.logo} alt={guide.title} className="w-10 h-10 object-contain transition-transform duration-300" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md border" style={tagStyle}>
                  {guide.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                {guide.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">
                {guide.description}
              </p>
              <div className="flex items-center gap-1.5 text-blue-500 group-hover:text-blue-400 text-xs font-semibold tracking-wider uppercase transition-colors">
                Explore
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="border-t border-white/[0.06] mt-10 pt-5 pb-4 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <a href="https://github.com/BozgunBer-2506" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-slate-300 text-xs font-medium transition-all duration-200 no-underline border"
              style={{ backgroundColor: 'rgba(0,119,181,0.1)', borderColor: 'rgba(0,119,181,0.2)' }}>
              <GitHubIcon /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/the-bozgun/" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-slate-300 text-xs font-medium transition-all duration-200 no-underline border"
              style={{ backgroundColor: 'rgba(0,119,181,0.1)', borderColor: 'rgba(0,119,181,0.2)' }}>
              <LinkedInIcon /> LinkedIn
            </a>
            <a href="https://thebozgun.com" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-slate-300 text-xs font-medium transition-all duration-200 no-underline border"
              style={{ backgroundColor: 'rgba(0,119,181,0.1)', borderColor: 'rgba(0,119,181,0.2)' }}>
              thebozgun.com
            </a>
          </div>
          <p className="text-slate-700 text-[11px] tracking-[0.3em] uppercase">© 2026 · IT Web · thebozgun.com</p>
        </footer>

      </main>
    </div>
  );
}
