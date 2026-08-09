import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center pt-16">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: 'rgba(121, 0, 255, 0.25)' }} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <motion.p variants={fadeUp} custom={1} className="mb-5 ml-1 font-mono text-cyan">
          Hi, my name is
        </motion.p>
        
        <motion.h1 variants={fadeUp} custom={2} className="heading-primary mb-2 text-5xl sm:text-7xl">
          Dinh Quang Thanh.
        </motion.h1>
        
        <motion.h2 variants={fadeUp} custom={3} className="mb-6 text-4xl font-bold text-slate sm:text-6xl">
          FRONTEND DEVELOPER INTERN.
        </motion.h2>
        
        <motion.p variants={fadeUp} custom={4} className="mb-12 max-w-xl text-lg text-slate leading-relaxed">
          Final-year Software Engineering student with knowledge of both frontend and backend development. Seeking a Frontend Developer position to enhance expertise in modern web technologies, responsive design, and user experience while contributing to impactful products.
        </motion.p>

        <motion.div variants={fadeUp} custom={5} className="flex gap-6 items-center">
          <a
            href="https://github.com/quagthanh"
            target="_blank"
            rel="noreferrer"
            className="text-slate hover:text-cyan transition-colors hover:-translate-y-1 transform duration-200"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-slate hover:text-cyan transition-colors hover:-translate-y-1 transform duration-200"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-cyan hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </motion.button>
    </section>
  );
}
