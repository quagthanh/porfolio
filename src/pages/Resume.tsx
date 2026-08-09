import { motion } from 'framer-motion';
import resumeData from '../data/resume.json';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Resume() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">Resume</h1>

        <div className="space-y-12">
          {/* Experience Section */}
          <section>
            <div className="mb-6 flex items-center gap-2 border-b border-zinc-200 pb-2 dark:border-zinc-800">
              <Briefcase className="text-blue-500" />
              <h2 className="text-2xl font-semibold">Experience</h2>
            </div>
            <div className="space-y-8">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-blue-500">
                  <h3 className="text-xl font-medium">{exp.role}</h3>
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <div className="mb-6 flex items-center gap-2 border-b border-zinc-200 pb-2 dark:border-zinc-800">
              <GraduationCap className="text-blue-500" />
              <h2 className="text-2xl font-semibold">Education</h2>
            </div>
            <div className="space-y-8">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-blue-500">
                  <h3 className="text-xl font-medium">{edu.degree}</h3>
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">{edu.institution}</span>
                    <span>•</span>
                    <span>{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
