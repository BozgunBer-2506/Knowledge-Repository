import { useState } from 'react';

const projects = [
  {
    id: 'linux',
    title: 'Linux Rehberi',
    description: 'Temel komutlardan sistem yönetimine kadar her şey.',
    url: 'https://linux-rehberi-tr.vercel.app',
    logo: 'https://cdn.simpleicons.org/linux/FCC624'
  },
  {
    id: 'aws',
    title: 'AWS Rehberi',
    description: 'Cloud bilişim ve AWS servisleri hakkında detaylı notlar.',
    url: 'https://aws-rehberi-tr.vercel.app',
    logo: 'https://cdn.simpleicons.org/amazonaws/FF9900'
  },
  {
    id: 'python',
    title: 'Python Rehberi',
    description: 'Sıfırdan ileri seviyeye Python programlama.',
    url: 'https://python-rehberi-tr.vercel.app',
    logo: 'https://cdn.simpleicons.org/python/3776AB'
  },
  {
    id: 'javascript',
    title: 'JavaScript Rehberi',
    description: 'Modern JS ve React ekosistemi.',
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
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      <header className="p-6 border-b border-slate-800 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black tracking-widest uppercase">PROJE HUB</h1>
          <p className="text-[10px] text-[#FF6B35] font-bold tracking-[0.3em]">YAVUZ BARIŞ ÖZGÜN</p>
        </div>
        <a href="https://github.com/BozgunBer-2506" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.simpleicons.org/github/white" className="w-8 h-8" alt="GitHub" />
        </a>
      </header>

      <main className="max-w-6xl mx-auto p-8">
        <div className="relative mb-12 max-w-md mx-auto text-center">
          <input
            type="text"
            placeholder="Proje ara..."
            className="w-full bg-[#1e293b] border border-slate-700 rounded-xl py-4 px-6 focus:outline-none focus:border-[#FF6B35] transition-colors"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#1e293b] p-8 rounded-2xl border border-slate-800 hover:border-[#FF6B35] transition-all hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between mb-6">
                <img src={project.logo} alt={project.title} className="w-16 h-16 object-contain" />
                <span className="text-[#FF6B35] font-bold">GİT →</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-slate-400">{project.description}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className="mt-12 p-8 text-center border-t border-slate-800 text-slate-600 text-[10px] font-bold tracking-[0.3em] uppercase">
        Copyright 2026 - The_Bozgun
      </footer>
    </div>
  );
}

export default App;
