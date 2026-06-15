import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, CheckCircle } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      type: 'Degree',
      institution: 'Lovely Professional University (LPU)',
      logo: '/lpu-online.png',
      course: 'Bachelor of Computer Applications (BCA)',
      duration: '2024 - Present',
      status: 'Pursuing',
      statusColor: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
      description: 'Learning Aspects of Programming & Technologies Learning Web Development using HTML, CSS, JavaScript, ReactJs, and Bootstrap Gaining knowledge of problem-solving, data structures, and algorithms',
    },
    {
      type: 'Certification',
      institution: 'AccioJob',
      logo: '/Acciojob.jpg',
      course: 'MERN Full Stack Web Development Certification',
      duration: 'Completed',
      status: 'Certified',
      statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
      description: 'Learning MERN Stack Devlopment Cource 400+ DSA coding & Devlopment Questions and more than 5+ projects completed',
    },
    {
      type: 'Diploma',
      institution: 'NIEST',
      logo: '/NIEST-logo.jpeg',
      course: 'Advanced Diploma in Computer Applications (ADCA)',
      duration: '2021 - 2023',
      status: 'Completed',
      statusColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
      description: 'Learned MS Excel, HTML, CSS, JavaScript, Adobe Photoshop, and basic IT fundamentals concepts. Built a foundation in computer applications and web development through practical training.',
    },
       {
      type: 'Contributer',
      institution: 'Social Summer of Code - Season 5',
      logo: '/ssoc-logo.png',
      course: 'Open-Source Web',
      duration: 'June - Aug (3 Month)',
      status: 'Ongoing',
      statusColor: 'text-red-400 bg-red-400/10 border-red-400/20',
      description: 'Contribute to the open-souorce',
    },
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-neutral-950/40 relative">
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-serif font-extrabold text-white"
          >
            Education & Certifications
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-0.75 bg-orange-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline Layout */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-neutral-800">
          {educationData.map((edu, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`flex flex-col md:flex-row items-stretch gap-8 md:gap-0 relative ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node Icon */}
                <div className="absolute left-4 md:left-1/2 -translate-x-2.25 md:-translate-x-1/2 z-10 w-5 h-5 rounded-full bg-neutral-950 border-4 border-orange-500 top-6" />

                {/* Content Panel */}
                <div className={`w-full md:w-[45%] pl-10 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 md:p-8 rounded-2xl bg-neutral-950 border border-neutral-900 shadow-xl transition-all duration-300 hover:border-neutral-800"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      {/* Logo and Institution */}
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center p-1.5 overflow-hidden shrink-0">
                          <img
                            src={edu.logo}
                            alt={edu.institution}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              // SVG badge fallback if logo image fails to load
                              e.target.style.display = 'none';
                              e.target.parentNode.innerHTML = `<svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20"/></svg>`;
                            }}
                          />
                        </div>
                        <div>
                          <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">{edu.type}</span>
                          <h3 className="text-base font-bold text-white leading-snug">{edu.institution}</h3>
                        </div>
                      </div>

                      {/* Status Tag */}
                      <span className={`text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full border ${edu.statusColor}`}>
                        {edu.status}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-200 mb-2 leading-tight">
                      {edu.course}
                    </h4>

                    {/* Meta info */}
                    <div className="flex items-center gap-2 text-neutral-500 text-xs mb-4">
                      <Calendar size={12} />
                      <span>{edu.duration}</span>
                    </div>

                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                </div>

                {/* Empty side for layout centering */}
                <div className="hidden md:block w-[10%] shrink-0" />
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
