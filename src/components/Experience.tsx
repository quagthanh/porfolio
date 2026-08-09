import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <div className="section-heading-wrapper justify-center">
          <div className="section-heading-bg">EXPERIENCE</div>
          <h2 className="section-heading section-heading-content">
            <span className="section-heading-number">04.</span> Experiences
          </h2>
        </div>

        <div className="relative mx-auto w-full max-w-4xl">
          {/* Timeline Track */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] md:-translate-x-1/2 bg-lightest-navy" />

          <div className="flex flex-col gap-16">
            {experiences.map((exp, i) => {
              // i = 0 -> Event 1 (Odd event) -> Card Left, Date Right
              // i = 1 -> Event 2 (Even event) -> Card Right, Date Left
              const isCardLeft = i % 2 === 0;

              const DateText = (
                <div className={`font-mono text-sm text-cyan mt-1.5 ${isCardLeft ? 'md:text-left' : 'md:text-right'}`}>
                  {exp.period}
                </div>
              );

              const ExperienceCard = (
                <div className="w-full rounded-lg bg-light-navy p-6 shadow-xl border border-lightest-navy relative z-20">
                  <h3 className="text-xl md:text-2xl font-bold text-lightest-slate mb-1">{exp.role}</h3>
                  <p className="text-md text-light-slate font-mono mb-6">{exp.company}</p>
                  
                  {exp.description && (
                    <ul className="flex flex-col gap-3">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="text-cyan flex-shrink-0 mt-1.5" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
                          <span className="text-sm text-slate leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );

              return (
                <motion.div 
                  key={exp.id} 
                  variants={fadeUp}
                  className="relative flex w-full group"
                >
                  {/* Timeline Node (Marker) */}
                  <div className="absolute left-4 md:left-1/2 top-0 md:top-0 -translate-x-1/2 flex items-center justify-center w-5 h-5 rounded-full bg-navy border-2 border-cyan z-10 mt-1.5 md:mt-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan transition-transform duration-300 group-hover:scale-150" />
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex w-full justify-between items-start">
                    {/* Left Column */}
                    <div className="w-1/2 pr-12 flex justify-end">
                      {isCardLeft ? ExperienceCard : DateText}
                    </div>
                    
                    {/* Right Column */}
                    <div className="w-1/2 pl-12 flex justify-start">
                      {isCardLeft ? DateText : ExperienceCard}
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="flex md:hidden flex-col w-full pl-12 items-start">
                    <div className="font-mono text-sm text-cyan mb-3 mt-1.5">
                      {exp.period}
                    </div>
                    {ExperienceCard}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
