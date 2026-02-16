import { useState } from 'react';

const projects = [
  {
    id: 'linux',
    title: 'LINUX ENGINEERING',
    description: 'Kernel mastery, system administration and shell scripting guide.',
    url: 'https://linux-rehberi-tr.vercel.app',
    logo: 'https://cdn.simpleicons.org/linux/white'
  },
  {
    id: 'aws',
    title: 'AWS CLOUD ARCHITECT',
    description: 'Global infrastructure, serverless solutions and cloud security.',
    url: 'https://aws-rehberi-tr.vercel.app',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
  },
  {
    id: 'python',
    title: 'PYTHON DEVELOPMENT',
    description: 'Advanced backend architectures and automation systems.',
    url: 'https://python-rehberi-tr.vercel.app',
    logo: 'https://cdn.simpleicons.org/python/3776AB'
  },
  {
    id: 'javascript',
    title: 'JS ECOSYSTEM',
    description: 'Modern frontend frameworks and asynchronous programming.',
    url: 'https://javascript-rehberi-tr.vercel.app',
    logo: 'https://cdn.simpleicons.org/javascript/F7DF1E'
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-[#FF6B35]">
      <header className="p-8 border-b border-slate-800/50 flex justify-between items-center backdrop-blur-md sticky top-0 z-50 bg-[#0f172a]/80">
        <div>
          <h1 className="text-2xl font-black tracking-[0.2em] uppercase italic">THE HUB</h1>
          <p className="text-[10px] text-[#FF6B35] font-bold tracking-[0.4em] uppercase">Yavuz Baris Ozgun</p>
        </div>
        <a href="https://github.com/BozgunBer-2506" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
          <img src="https://cdn.simpleicons.org/github/white" className="w-8 h-8" alt="GitHub" />
        </a>
      </header>

      <main className="max-w-6xl mx-auto p-8 pt-16">
        <div className="relative mb-20 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="SEARCH REPOSITORY..."
            className="w-full bg-[#1e293b]/40 border-b-2 border-slate-700 py-4 px-2 focus:outline-none focus:border-[#FF6B35] transition-all text-sm tracking-[0.2em] uppercase placeholder:text-slate-600"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#1e293b]/20 p-10 rounded-sm border border-slate-800/50 hover:border-[#FF6B35]/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[#FF6B35] text-xs font-black tracking-widest">LAUNCH →</span>
              </div>
              
              <div className="mb-8">
                <img src={project.logo} alt={project.title} className="w-14 h-14 object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>

              <h3 className="text-xl font-black mb-3 tracking-tighter group-hover:text-[#FF6B35] transition-colors uppercase italic italic">
                {project.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium uppercase tracking-tighter">
                {project.description}
              </p>
              
              <div className="mt-8 w-0 group-hover:w-full h-[1px] bg-[#FF6B35] transition-all duration-700"></div>
            </a>
          ))}
        </div>
      </main>

      <footer className="mt-20 p-12 text-center border-t border-slate-800/30 text-slate-700 text-[10px] font-black tracking-[0.5em] uppercase">
        System Core v2.0 // 2026 // The_Bozgun
      </footer>
    </div>
  );
}

export default App;
