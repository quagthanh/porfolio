import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';
import { skillsData, coreCompetencies } from '../data/skills';
import { ChevronRight } from 'lucide-react';
import type { ElementType } from 'react';
import { 
  SiJavascript, SiTypescript, SiHtml5, SiReact, SiNextdotjs, SiNodedotjs, 
  SiExpress, SiGithub, SiMongodb, SiPostman, SiNestjs, SiMysql, 
  SiTailwindcss, SiGithubactions, SiDocker, SiLinux, SiNginx
} from 'react-icons/si';
import { FaCss3 } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';

const iconMap: Record<string, ElementType> = {
  "HTML5": SiHtml5,
  "CSS3": FaCss3,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "C#": TbBrandCSharp,
  "Node JS": SiNodedotjs,
  "Express JS": SiExpress,
  "NestJs": SiNestjs,
  "MySQL": SiMysql,
  "MongoDB": SiMongodb,
  "React JS": SiReact,
  "Next.js": SiNextdotjs,
  "TailwindCSS": SiTailwindcss,
  "Git & GitHub": SiGithub,
  "Docker": SiDocker,
  "Linux": SiLinux,
  "Nginx": SiNginx,
  "Postman": SiPostman,
  "GitHub Actions": SiGithubactions
};

export default function Skills() {
  return (
    <section id="skills" className="relative section-container w-full">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          {/* Main Header with glow text behind */}
          <div className="section-heading-wrapper justify-center">
            <div className="section-heading-bg">TECHNOLOGIES</div>
            <h2 className="section-heading section-heading-content">
              <span className="section-heading-number">02.</span> Technologies I Work With
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-12 mb-20"
        >
          {skillsData.map((group, i) => (
            <motion.div key={group.category} variants={fadeUp} custom={i} className="flex flex-col w-full">
              {/* Section Heading */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-6 bg-cyan" />
                <h3 className="text-xl md:text-2xl font-bold text-cyan">{group.category}</h3>
              </div>

              {/* Cards Grid */}
              <div className="flex flex-wrap gap-4">
                {group.items.map((skill) => {
                  const IconComponent = iconMap[skill] || ChevronRight;
                  return (
                    <div
                      key={skill}
                      className="flex items-center gap-2 rounded-lg bg-[#1e223d] border border-white/10 px-4 py-2 hover:border-cyan/50 transition-colors shadow-sm"
                    >
                      <IconComponent size={16} className="text-cyan flex-shrink-0" />
                      <span className="text-[#e2e8f0] text-sm font-medium">{skill}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Competencies */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 text-center"
        >
          <motion.h3 variants={fadeUp} className="mb-8 text-sm font-bold tracking-widest text-[#ff6b6b] uppercase">
            CORE COMPETENCIES
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {coreCompetencies.map((comp) => (
              <motion.div
                key={comp}
                variants={fadeUp}
                className="rounded-full border border-slate/30 bg-transparent px-5 py-2 transition-colors hover:border-cyan/50"
              >
                <span className="text-light-slate text-sm font-mono tracking-wide">{comp}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
