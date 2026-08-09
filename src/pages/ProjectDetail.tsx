import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="py-24 max-w-4xl mx-auto px-6">
      <button 
        onClick={() => navigate('/projects')}
        className="group flex items-center gap-2 font-mono text-sm text-cyan mb-8 hover:text-coral transition-colors"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        Back to Projects
      </button>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-12 text-left"
      >
        {/* HeaderSection */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-bold text-lightest-slate">
            {project.name}
          </h1>
          <p className="text-lg md:text-xl text-slate font-medium">
            {Array.isArray(project.description) ? project.description[0] : project.description}
          </p>
        </div>

        {/* InfoCard */}
        <div className="rounded-xl border border-lightest-navy bg-light-navy p-6 md:p-8 flex flex-col gap-8 shadow-lg">
          {/* DescriptionBlock */}
          <div>
            <h3 className="text-xl font-bold text-lightest-slate mb-4">Description</h3>
            <div className="text-slate leading-relaxed">
              {Array.isArray(project.description) ? (
                <ul className="list-disc pl-5 space-y-3">
                  {project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              ) : (
                <p>{project.description}</p>
              )}
            </div>
          </div>

          <hr className="border-lightest-navy" />

          {/* TechnologiesBlock */}
          <div>
            <h3 className="text-xl font-bold text-lightest-slate mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {project.tech?.map((t) => (
                <span 
                  key={t}
                  className="rounded-full bg-cyan/10 px-4 py-1.5 font-mono text-sm text-cyan border border-cyan/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ActionRow */}
        <div className="flex items-center justify-between gap-4">
          {project.github ? (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-navy border border-lightest-navy px-6 py-3 font-medium text-lightest-slate hover:border-cyan hover:text-cyan transition-all hover:-translate-y-1"
            >
              <SiGithub size={20} />
              <span>View Source</span>
            </a>
          ) : <div />}
          
          {project.demo ? (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-navy border border-lightest-navy px-6 py-3 font-medium text-lightest-slate hover:border-cyan hover:text-cyan transition-all hover:-translate-y-1"
            >
              <span>Live Demo</span>
              <ExternalLink size={20} />
            </a>
          ) : (
            <span 
              title="Chưa triển khai"
              className="flex items-center gap-2 rounded-lg bg-navy/50 border border-white/5 px-6 py-3 font-medium text-slate/50 cursor-not-allowed"
            >
              <span>Live Demo</span>
              <ExternalLink size={20} className="opacity-50" />
            </span>
          )}
        </div>

        {/* ImageGallery */}
        <div className="flex flex-col gap-6 mt-4">
          {/* MainImageCard */}
          <div className="rounded-xl border border-lightest-navy overflow-hidden bg-light-navy shadow-lg">
            <img 
              src={project.image} 
              alt={`${project.name} Main View`}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* ThumbnailGrid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.thumbnails ? (
              project.thumbnails.map((thumb, idx) => (
                <div key={idx} className="rounded-xl border border-lightest-navy overflow-hidden bg-light-navy shadow-md aspect-video">
                  <img 
                    src={thumb} 
                    alt={`${project.name} thumbnail ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))
            ) : (
              <>
                <div className="rounded-xl border border-lightest-navy overflow-hidden bg-light-navy shadow-md aspect-video">
                  <img 
                    src={`https://placehold.co/600x400/112240/00f0ff?text=${project.name.replace(/ /g, '+')}+Thumbnail+1`} 
                    alt={`${project.name} thumbnail 1`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl border border-lightest-navy overflow-hidden bg-light-navy shadow-md aspect-video">
                  <img 
                    src={`https://placehold.co/600x400/112240/00f0ff?text=${project.name.replace(/ /g, '+')}+Thumbnail+2`} 
                    alt={`${project.name} thumbnail 2`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </>
            )}
          </div>
        </div>

      </motion.div>
    </div>
  );
}
