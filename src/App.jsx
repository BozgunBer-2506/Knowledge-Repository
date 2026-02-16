import { useState } from 'react';

const projects = [
  {
    id: 'linux-system',
    title: 'CORE.LINUX.SYS',
    description: 'Kernel optimization, shell architectures, and filesystem hierarchy.',
    url: 'https://linux-rehberi-tr.vercel.app',
    logo: 'https://cdn.simpleicons.org/linux/white'
  },
  {
    id: 'aws-infra',
    title: 'INFRA.AWS.CLOUD',
    description: 'Scalable cloud nodes, VPC peering, and IAM security protocols.',
    url: 'https://aws-rehberi-tr.vercel.app',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
  },
  {
    id: 'python-backend',
    title: 'DEV.PYTHON.CORE',
    description: 'Asynchronous task processing, API logic, and automation scripts.',
    url: 'https://python-rehberi-tr.vercel.app',
    logo: 'https://cdn.simpleicons.org/python/white'
  },
  {
    id: 'js-frontend',
    title: 'DEV.JS.NODE',
    description: 'Engine runtime optimization, React lifecycles, and DOM control.',
    url: 'https://javascript-rehberi-tr.vercel.app',
    logo: 'https://cdn.simpleicons.org/javascript/white'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-mono selection:bg-[#FF6B35] selection:text-white">
      <header className="p-6 border-b border-slate-900 flex justify-between items-center bg-[#020617]">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-[#FF6B35] animate-pulse rounded-full"></div>
          <div>
            <h1 className="text-lg font-black tracking-[0.3em] text-white uppercase">SYSTEM_HUB v2.0</h1>
            <p className="text-[9px] text-slate-500 font-bold tracking-[0.4em] uppercase">TERMINAL ACCESS: Y.B.OZGUN</p>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="mailto:yavuzbarisozgun@gmail.com" className="opacity-40 hover:opacity-100 transition-all duration-300">
            <img src="https://cdn.simpleicons.org/gmail/white" className="w-5 h-5" alt="MAIL" />
          </a>
          <a href="https://linkedin.com/in/yavuzbarisozgun" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-all duration-300">
            <img src="https://cdn.simpleicons.org/linkedin/white" className="w-5 h-5" alt="LINKEDIN" />
          </a>
          <a href="https://github.com/BozgunBer-2506" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-all duration-300">
            <img src="https://cdn.simpleicons.org/github/white" className="w-5 h-5" alt="GITHUB" />
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-12 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#0f172a]/30 p-8 border border-slate-900 hover:border-[#FF6B35]/30 hover:bg-[#0f172a]/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <img src={project.logo} alt={project.title} className="w-10 h-10 object-contain opacity-20 group-hover:opacity-100 transition-all duration-500" />
                <div className="text-[10px] font-black text-slate-700 group-hover:text-[#FF6B35] tracking-widest transition-colors">
                  0x{Math.floor(Math.random() * 1000)}__RUN
                </div>
              </div>

              <h3 className="text-lg font-black text-white mb-2 tracking-widest group-hover:translate-x-1 transition-transform">
                {project.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-tight font-medium">
                {project.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-900 group-hover:bg-[#FF6B35] transition-colors"></div>
            </a>
          ))}
        </div>
      </main>

      <footer className="fixed bottom-0 w-full p-4 bg-[#020617] border-t border-slate-900 flex justify-between items-center text-[8px] text-slate-700 font-bold tracking-[0.5em] uppercase">
        <span>ROOT@SYSTEM_OVERRIDE</span>
        <span>2026 // THE_BOZGUN // SECURED_CONNECTION</span>
      </footer>
    </div>
  );
}

export default App;
