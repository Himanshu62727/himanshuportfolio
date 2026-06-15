import React from 'react';
import { motion } from 'framer-motion';
import {
  Code, Server, Wrench, Globe, Flame, Cpu,
  Terminal, Shield, Database, LayoutGrid,
  Code2,
  BookHeadphones,
  BookOpen,
  Bot
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Front-End Development',
      icon: <Globe className="text-blue-400" size={20} />,
      skills: [
        { name: 'HTML5', level: 'Expert', color: 'from-orange-500 to-red-500' },
        { name: 'CSS3', level: 'Expert', color: 'from-blue-500 to-indigo-500' },
        { name: 'JavaScript (ES6+)', level: 'Expert', color: 'from-yellow-400 to-yellow-600' },
        { name: 'React.js', level: 'Expert', color: 'from-cyan-400 to-blue-500' },
        { name: 'Redux Toolkit', level: 'Advanced', color: 'from-purple-500 to-indigo-600' },
        { name: 'Tailwind CSS', level: 'Expert', color: 'from-teal-400 to-cyan-500' },
        { name: 'Bootstrap', level: 'Expert', color: 'from-purple-600 to-pink-500' },
        { name: 'Framer Motion', level: 'Advanced', color: 'from-grey-800 to-white' },
      ]
    },
    {
      title: 'Back-End & Databases',
      icon: <Server className="text-emerald-400" size={20} />,
      skills: [
        { name: 'Node.js', level: 'Advanced', color: 'from-green-500 to-emerald-600' },
        { name: 'Express.js', level: 'Advanced', color: 'from-neutral-700 to-neutral-500' },
        { name: 'CRUD', level: 'Advanced', color: 'from-green-600 to-sky-500' },
        { name: 'MongoDB / Mongoose', level: 'Advanced', color: 'from-green-600 to-white' },
      ]
    },
    {
      title: 'APIs, Tools & Platforms',
      icon: <Wrench className="text-orange-400" size={20} />,
      skills: [
        { name: 'Git & GitHub', level: 'Expert', color: 'from-neutral-800 to-neutral-600' },
        { name: 'Postman API Testing', level: 'Advanced', color: 'from-orange-500 to-red-500' },
        { name: 'REST APIs', level: 'Advanced', color: 'from-blue-600 to-cyan-500' },
      ]
    },
    {
      title: 'AI tools Web Devlopment & AI Data Skills',
      icon: <Bot className="text-orange-400" size={20} />,
      skills: [
        { name: 'Cursor AI', level: 'Advancd', color: 'from-neutral-800 to-neutral-600' },
        { name: 'ChatGpt', level: 'Advanced', color: 'from-orange-500 to-red-500' },
        { name: 'Gemeni AI', level: 'Expert', color: 'from-white to-white' },
        { name: 'Image Bounding Box Annotation', level: 'Expert', color: 'from-white to-white' },
        { name: 'Video Annotation', level: 'Expert', color: 'from-white to-white' },
        { name: 'Segments Annotation', level: 'Expert', color: 'from-white to-white' },
        { name: 'Object Detection', level: 'Expert', color: 'from-white to-white' },
        { name: 'Landmark Annotation', level: 'Expert', color: 'from-white to-white' },
        { name: 'LiDar 3D Point cloud Annotation', level: 'Expert', color: 'from-white to-white' },
      ]
    },
    {
      title: 'Upcoming what I learn',
      icon: <BookOpen className="text-orange-400" size={20} />,
      skills: [
        { name: 'Python', level: 'learning...'},
        { name: 'Numpy & Pandas', level: 'learning...'},
        { name: 'TensorFlow', level: 'learning...'},
        { name: 'Django', level: 'learning...'},
        { name: 'AWS', level: 'learning...'},
        { name: 'Kubernuts', level: 'learning...'},
        { name: 'Linux Command', level: 'learning...'},
        { name: 'Docker', level: 'learning...'},
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-black relative">
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

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
            Technical Expertise
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-0.75 bg-orange-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={itemVariants}
              className="bg-neutral-950 border border-neutral-900 p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-900">
                  <div className="p-2.5 bg-neutral-900 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">{category.title}</h3>
                </div>

                {/* Skills Cards */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-neutral-300">{skill.name}</span>
                        <span className="text-xs text-neutral-500">{skill.level}</span>
                      </div>

                      {/* Skill Bar */}
                      <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-900/50">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: skill.level === 'Expert' ? '90%' : skill.level === 'Advanced' ? '75%' : '60%'
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className={`h-full rounded-full bg-linear-to-r ${skill.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
