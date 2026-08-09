import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';
import { personalInfo } from '../data/personalInfo';
import { User, Calendar, MapPin, Phone, Mail, Globe, Sparkles } from 'lucide-react';

export default function PersonalInfo() {
  const items = [
    { icon: User, label: 'Name', value: personalInfo.fullName },
    { icon: Calendar, label: 'Date of Birth', value: personalInfo.dob },
    { icon: Sparkles, label: 'Gender', value: personalInfo.gender },
    { icon: MapPin, label: 'Address', value: personalInfo.address },
    { icon: Phone, label: 'Phone', value: personalInfo.phone },
    { icon: Mail, label: 'Email', value: personalInfo.email },
  ];

  return (
    <motion.div
      variants={fadeUp}
      className="mt-12 rounded-xl bg-light-navy/50 p-6 shadow-xl border border-lightest-navy/50 backdrop-blur-sm"
    >
      <h3 className="text-xl font-bold text-lightest-slate mb-6 flex items-center gap-2">
        <User className="text-cyan" size={20} />
        Personal Information
      </h3>
      
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <item.icon className="text-cyan mt-1 flex-shrink-0" size={16} />
            <div>
              <p className="text-xs text-slate uppercase tracking-wider">{item.label}</p>
              <p className="text-light-slate font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-lightest-navy/50">
        <h3 className="text-sm text-slate uppercase tracking-wider mb-3">Languages</h3>
        <ul className="flex flex-col gap-2">
          {personalInfo.languages.map((lang, idx) => (
            <li key={idx} className="flex items-center gap-2 text-light-slate">
              <Globe className="text-cyan" size={16} />
              {lang}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
