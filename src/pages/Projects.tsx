import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const allTechs = Array.from(new Set(projects.flatMap(p => p.tech || []))).sort();

  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTech = selectedTech ? p.tech?.includes(selectedTech) : true;
    return matchesSearch && matchesTech;
  });

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <button 
        onClick={() => navigate('/')}
        className="group flex items-center gap-2 font-mono text-sm text-cyan mb-12 hover:text-coral transition-colors"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        Back to Home
      </button>

      <h1 className="heading-primary mb-12 text-4xl">All Projects</h1>

      {/* Filter Section */}
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between bg-light-navy p-6 rounded-xl border border-lightest-navy shadow-lg">
        <div className="relative w-full md:w-1/3">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate" />
          <input 
            type="text" 
            placeholder="Search projects..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-navy border border-lightest-navy rounded-lg pl-12 pr-4 py-3 text-white placeholder-slate focus:outline-none focus:border-cyan transition-colors"
          />
        </div>

        <div className="w-full md:w-2/3 flex flex-wrap gap-2 justify-start md:justify-end">
          <button
            onClick={() => setSelectedTech(null)}
            className={`px-4 py-2 rounded-full font-mono text-sm transition-colors border ${!selectedTech ? 'bg-cyan text-navy border-cyan' : 'bg-navy border-lightest-navy text-slate hover:border-cyan hover:text-cyan'}`}
          >
            All
          </button>
          {allTechs.map(tech => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-full font-mono text-sm transition-colors border ${selectedTech === tech ? 'bg-cyan text-navy border-cyan' : 'bg-navy border-lightest-navy text-slate hover:border-cyan hover:text-cyan'}`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="group cursor-pointer rounded-xl border border-lightest-navy bg-light-navy overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-cyan/50 hover:shadow-xl hover:shadow-cyan/10"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-cyan/20 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0 z-10" />
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 text-center flex flex-col items-center">
                <h2 className="text-2xl font-bold text-white group-hover:text-cyan transition-colors mb-4">
                  {project.name}
                </h2>
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                  {project.tech?.map(t => (
                    <span key={t} className="text-xs font-mono text-cyan bg-cyan/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-2 text-center py-24 text-slate">
            <p className="text-xl">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
