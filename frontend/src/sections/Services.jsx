import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Layout className="text-blue-400" size={32} />,
      title: 'Front-End Development',
      badge: 'React & Tailwind',
      colorClass: 'shadow-blue-500/5 hover:border-blue-500/30',
      bullets: [
        'Interactive UI designs using Framer Motion',
        'State management with Redux Toolkit',
        'Fully responsive layouts with Tailwind & Bootstrap',
        'Cross-browser optimization & performance audits'
      ]
    },
    {
      icon: <Server className="text-purple-400" size={32} />,
      title: 'Back-End & API Services',
      badge: 'NodeJS & Express',
      colorClass: 'shadow-purple-500/5 hover:border-purple-500/30',
      bullets: [
        'Secure RESTful APIs using Node & Express',
        'MongoDB Mongoose schema & relationship design',
        'Middleware validation & CORS protocols',
        'Postman automation testing & clean routing'
      ]
    },
    {
      icon: <Database className="text-emerald-400" size={32} />,
      title: 'AI Data Services',
      badge: 'Data Annotation',
      colorClass: 'shadow-emerald-500/5 hover:border-emerald-500/30',
      bullets: [
        'Image bounding boxes, polygons & semantic segmentation',
        'Text entity naming (NER) & sequence tagging',
        'RLHF prompt assessment & preference testing',
        'Quality assurance & structured dataset output'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-neutral-950/40 relative">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-serif font-extrabold text-white"
          >
            Services Offered
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-0.75 bg-orange-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className={`bg-neutral-950/90 border border-neutral-900 rounded-3xl p-8 shadow-2xl transition-all duration-300 ${srv.colorClass} flex flex-col justify-between`}
            >
              <div>
                {/* Icon and badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-neutral-900 rounded-2xl border border-neutral-800/80">
                    {srv.icon}
                  </div>
                  <span className="text-[10px] md:text-xs font-semibold px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 uppercase tracking-wider">
                    {srv.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                  {srv.title}
                </h3>

                {/* Bullet Points */}
                <ul className="space-y-4">
                  {srv.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-neutral-400 text-sm leading-normal">
                      <CheckCircle2 size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action decoration */}
              <div className="mt-8 pt-6 border-t border-neutral-900/60 flex items-center justify-between text-indigo-400 text-xs font-semibold tracking-wider uppercase group cursor-pointer hover:text-white transition-colors duration-200">
                <span>Request details</span>
                <Sparkles size={14} className="group-hover:rotate-12 transition-transform duration-200" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
