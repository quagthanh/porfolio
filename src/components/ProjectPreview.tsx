import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';
import { projects } from '../data/projects';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export default function ProjectPreview() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        {/* SectionTitle with blurred background text */}
        <div className="section-heading-wrapper justify-center">
           <div className="section-heading-bg">PROJECTS</div>
           <h2 className="section-heading section-heading-content whitespace-nowrap">
             Some Things I've Built
             <div className="h-[1px] bg-lightest-navy w-16 sm:w-48 md:w-72 hidden sm:block ml-4" />
           </h2>
        </div>

        <div className="flex flex-col space-y-24 md:space-y-32">
          {projects.slice(0, 3).map((project, i) => {
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={project.id}
                variants={fadeUp}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 lg:gap-16 w-full`}
              >
                {/* Project Image Block */}
                <div 
                  className="w-full md:w-7/12 relative cursor-pointer group"
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 transition-colors duration-300 group-hover:border-cyan/50 shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Project Info Block */}
                <div className={`w-full md:w-5/12 flex flex-col ${isEven ? 'items-start text-left' : 'items-start md:items-end md:text-right'}`}>
                  <p className="font-mono text-sm text-cyan mb-2">Featured Project</p>
                  
                  <h3 
                    className="text-3xl md:text-4xl font-bold text-white mb-6 hover:text-cyan cursor-pointer transition-colors"
                    onClick={() => navigate(`/projects/${project.id}`)}
                  >
                    {project.name}
                  </h3>

                  {/* Tech Stack List */}
                  <ul className={`flex flex-wrap gap-3 font-mono text-sm text-slate mb-8 ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
                    {project.tech?.map(t => (
                      <li key={t} className="bg-light-navy px-3 py-1 rounded-md border border-white/5">{t}</li>
                    ))}
                  </ul>

                  {/* Action Group */}
                  <div className={`flex gap-4 ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-md border border-slate/50 px-5 py-2.5 text-sm text-white hover:text-cyan hover:border-cyan hover:bg-cyan/5 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        GitHub Repo
                      </a>
                    )}
                    {project.demo ? (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-md border border-slate/50 px-5 py-2.5 text-sm text-white hover:text-cyan hover:border-cyan hover:bg-cyan/5 transition-all">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    ) : (
                      <span title="Chưa triển khai" className="flex items-center gap-2 rounded-md border border-white/5 px-5 py-2.5 text-sm text-slate/50 cursor-not-allowed bg-light-navy/50">
                        <ExternalLink size={16} className="opacity-50" />
                        Live Demo
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <button
            onClick={() => navigate('/projects')}
            className="rounded-md border border-cyan px-8 py-4 font-mono text-cyan hover:bg-cyan/10 transition-colors"
          >
            View All Projects
          </button>
        </div>
      </motion.div>
    </section>
  );
}
