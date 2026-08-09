import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';
import { educations } from '../data/education';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <motion.h3 variants={fadeUp} className="mb-8 text-2xl font-bold text-lightest-slate flex items-center gap-3">
        <GraduationCap className="text-cyan" />
        Education History
      </motion.h3>

      <div className="space-y-6">
        {educations.map((edu) => (
          <motion.div
            key={edu.id}
            variants={fadeUp}
            className="rounded-lg border border-lightest-navy bg-light-navy p-6 transition-colors hover:border-cyan/50"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
              {edu.institution}
              </h4>
              <span className="font-mono text-sm text-cyan whitespace-nowrap">{edu.period}</span>
            </div>
            <p className="text-lg text-light-slate mb-1">{edu.degree}</p>
            <div className="flex justify-end">
              <span className="font-mono text-sm text-coral">{edu.grade}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
