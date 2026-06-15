import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, BrainCircuit, Layers, ShieldCheck, TagIcon } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Layers className="text-indigo-400" size={24} />,
      title: 'Full Stack Development',
      desc: 'Building responsive MERN applications, secure APIs, and complex state management structures.',
    },
    {
      icon: <TagIcon className="text-emerald-400" size={24} />,
      title: 'AI Data Annotation',
      desc: 'Expertise in text/image tagging, RLHF training datasets, and prompt quality engineering.',
    },
    {
      icon: <BookOpen className="text-pink-400" size={24} />,
      title: 'Academic Pursuits',
      desc: 'Combining university studies (BCA) with professional coding certifications.',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-black relative">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-serif font-extrabold text-white"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-0.75 bg-orange-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Side: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >

            <motion.h3 className="text-2xl font-bold font-sans"
              animate={{
                color: ["#ff0055", "#0099ff", "#22cc88", "#ff0055"],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}>
              Full Stack Developer & Data Annotation
            </motion.h3>

            <p className="text-neutral-400 leading-relaxed">
              Hello! I'm <strong className="text-white font-semibold">Himanshu Singh</strong> a practical knowledge building full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). I enjoy creating practical web solutions and continuously improving my development skills through hands-on projects. <br /><br />
              Currently, live in Noida and I have an 9 months of experience in data annotation projects. Through this role, I have worked on labeling and reviewing data to support AI and machine learning models, while developing strong attention to detail and analytical skills.
            </p>

            <p className="text-neutral-400 leading-relaxed">
              I am currently pursuing my <strong className="text-white">BCA (Bachelor of Computer Applications)</strong> from <strong className="text-blue-400">Lovely Professional University (LPU)</strong>, which is helping me build a solid foundation in computer science and software development. Alongside my studies, I continue to enhance my technical skills through practical projects and continuous learning.
            </p>

            {/* <div className="pt-4 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-neutral-300 bg-neutral-900/60 border border-neutral-800 px-4 py-2 rounded-full text-sm">
                <ShieldCheck className="text-blue-500" size={16} />
                <span>MERN Full Stack (AccioJob)</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300 bg-neutral-900/60 border border-neutral-800 px-4 py-2 rounded-full text-sm">
                <ShieldCheck className="text-emerald-500" size={16} />
                <span>ADCA (NIEST)</span>
              </div>
            </div> */}
          </motion.div>

          {/* Right Side: Highlight Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-6">
            {cards.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(251, 146, 60, 0.4)' }}
                className="bg-neutral-950 border border-neutral-900 p-6 rounded-2xl flex gap-5 items-start transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 group"
              >
                <div className="p-3 bg-neutral-900 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {c.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{c.title}</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
