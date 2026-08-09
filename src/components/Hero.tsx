import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';
import { ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Mouse state
    const mouse = { x: -1000, y: -1000, radius: 250 };

    const resize = () => {
      canvas.width = window.innerWidth;
      // We want the canvas to match the height of the Hero section, which is its parent
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    
    // Initial resize and event listener
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const lines = 10; // Reduced number of wave lines for minimalistic look
    const pointsPerLine = 150; // Resolution of each line
    
    const draw = () => {
      // Clear canvas to allow the parent div's dynamic background (bg-navy) to show through
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isLightMode = document.documentElement.classList.contains('light');

      time += 0.005;

      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        
        const verticalPadding = 100;
        const drawableHeight = canvas.height - verticalPadding * 2;
        const yOffset = verticalPadding + (i / (lines - 1)) * drawableHeight;
        
        const amplitude = 50 + i * 15;
        const frequency = 0.001 + i * 0.0002;
        const phase = i * 0.3;

        const isCyan = i % 2 === 0;
        const opacity = 0.4 + (i / lines) * 0.4;
        
        if (isLightMode) {
          ctx.strokeStyle = isCyan ? `rgba(5, 150, 105, ${opacity})` : `rgba(37, 99, 235, ${opacity})`;
          ctx.shadowColor = isCyan ? '#059669' : '#2563eb';
        } else {
          ctx.strokeStyle = isCyan ? `rgba(147, 255, 216, ${opacity})` : `rgba(84, 140, 255, ${opacity})`;
          ctx.shadowColor = isCyan ? '#93FFD8' : '#548CFF';
        }
        
        ctx.lineWidth = 2;
        ctx.shadowBlur = 15;

        for (let j = 0; j <= pointsPerLine; j++) {
          const x = (j / pointsPerLine) * canvas.width;
          
          // Calculate natural wave Y position
          let y = yOffset 
            + Math.sin(x * frequency + time + phase) * amplitude
            + Math.cos(x * frequency * 0.5 - time) * amplitude * 0.5;

          // Mouse Repulsion Logic
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const pushDirection = dy > 0 ? 1 : -1;
            // Smooth cubic easing for magnetic feel
            const smoothForce = force * force * force; 
            y += pushDirection * smoothForce * 120;
          }

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const navigate = useNavigate();

  const scrollToAbout = () => {
    navigate('/resume');
  };

  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center pt-16">
      
      {/* 
        Full-Bleed Breakout Wrapper 
        Uses negative translation to span 100vw while keeping 
        content constrained to parent's padding
      */}
      <div className="absolute top-0 left-1/2 w-screen h-full -translate-x-1/2 -z-10 overflow-hidden bg-navy transition-colors duration-300">
        <canvas ref={canvasRef} className="w-full h-full block opacity-60" />
        
        {/* Gradient mask to fade out the waves behind the text on the left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent pointer-events-none" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative z-10"
      >
        <motion.p variants={fadeUp} custom={1} className="mb-5 ml-1 font-mono text-cyan">
          Hi, my name is
        </motion.p>
        
        <motion.h1 variants={fadeUp} custom={2} className="heading-primary mb-2 text-[min(10vw,4.5rem)] sm:text-7xl whitespace-nowrap">
          Dinh Quang Thanh.
        </motion.h1>
        
        <motion.h2 variants={fadeUp} custom={3} className="mb-6 text-[min(6vw,3.75rem)] font-bold text-slate sm:text-6xl whitespace-nowrap">
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-cyan hover:text-white transition-colors cursor-pointer z-10"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </motion.button>
    </section>
  );
}
