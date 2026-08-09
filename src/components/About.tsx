import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';
import Education from './Education';

export default function About() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <div className="section-heading-wrapper">
          <h2 className="section-heading section-heading-content">
            <span className="section-heading-number">01.</span> About Me
            <div className="h-[1px] bg-lightest-navy w-[200px] md:w-[300px] ml-4" />
          </h2>
        </div>
        
        <div className="grid gap-12 md:grid-cols-2">
          <div className="text-lg text-slate leading-relaxed">
            <p className="mb-4">
              Hello! I'm Dinh Quang Thanh, a Final-year Software Engineering student with knowledge of both frontend and backend development.
            </p>
            <p className="mb-4">
              I am seeking a Frontend Developer position to enhance my expertise in modern web technologies, responsive design, and user experience while contributing to impactful products. My main focus these days is building accessible, inclusive products and digital experiences.
            </p>
          </div>
          
          <div className="relative mx-auto w-full max-w-[300px]">
            <div className="relative aspect-square w-full rounded-lg bg-cyan/20 overflow-hidden group">
              <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 z-10" />
              <img 
                src="/Thanh.png" 
                alt="Dinh Quang Thanh"
                className="h-full w-full object-cover transition-all duration-300 group-hover:grayscale-0"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-lg border-2 border-cyan transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2" />
          </div>
        </div>
      </motion.div>

      <div className="mt-20">
        <Education />
      </div>
    </section>
  );
}
