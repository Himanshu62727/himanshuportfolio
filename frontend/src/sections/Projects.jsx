import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitBranch, X, Layers, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const projectsData = [
    {
      id: 1,
      title: 'Task Management System',
      category: 'MERN Stack Development',
      summary: 'High-performance interactive studio for bounding boxes, text segmentation, and NER extraction.',
      image: '/TaskManagement.png',
      tech: ['React.js', 'MongoDB', 'ExpressJs', 'JWT', 'Tailwind CSS', 'bycrypt'],
      github: 'https://github.com',
      live: 'https://github.com',
      details: 'AnnotateAI is a specialized frontend workspace designed for machine learning teams. It features sub-pixel bounding box alignments, custom tag dictionaries, polygon drawing, and hotkey binding configurations, facilitating ultra-fast RLHF data curation. Data exports comply strictly with COCO and YOLO formatting schemas.',
      features: [
        'Interactive Canvas drawing for Bounding Boxes & Polygons',
        'Redux Toolkit state history (Undo / Redo / Clear)',
        'Hotkeys mapping system for single-keypress categorization',
        'Instant COCO/YOLO JSON formatting exports'
      ]
    },
    {
      id: 2,
      title: 'Live Chat Application using Socket.io',
      category: 'Back-end Development',
      summary: 'Real-Time Chat Application – Developed a Telegram-like chat application using Node.js, Express.js, Socket.IO, HTML, CSS, and JavaScript, featuring one-to-one real-time messaging, responsive UI, and low-latency WebSocket communication.',
      image: '/LiveChat.png',
      tech: ['HTML5 & CSS3', 'Express.js', 'Socket.io'],
      github: 'https://github.com/Himanshu62727/chatsocketio',
      live: 'https://chatsocketio-umber.vercel.app/',
      details: 'Developed a Telegram-inspired real-time chat application using Node.js, Express.js, Socket.IO, HTML, CSS, and JavaScript. Implemented one-to-one messaging with instant message delivery through WebSocket-based communication. Managed user connections, disconnections, and message routing using Socket.IO events. Designed a responsive chat interface with sender/receiver message layouts, timestamps, and automatic scrolling Built an event-driven backend with Express.js to provide seamless and low-latency communication.',
      features: [
          Real-time messaging using Socket.IO and WebSockets,
          One-to-one private chat between users,
          Instant message delivery without page refresh,
          User connection and disconnection handling,
          Online/offline status indication,
          Chat interface with separate sender and receiver message layouts,
          Message timestamps,
          Auto-scroll to the latest message,
          Responsive design for desktop and mobile devices,
          Event-driven communication using Node.js, Express.js, and Socket.IO.
      ]
    },
    {
      id: 3,
      title: 'E-Commerce Website',
      category: 'Front-End Development',
      summary: 'Ultra-premium website template implementing Framer Motion scroll triggers, particle simulations, and dark mode.',
      image: '/ECommerceWebsite.png',
      tech: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Redux toolkit', 'Vite'],
      github: 'https://github.com',
      live: 'https://github.com',
      details: 'Himanshu Singh\'s official interactive portfolio website. Leverages Tailwind CSS v4\'s CSS-first capabilities alongside Framer Motion for high-frame-rate UI transitions, particle physics backdrops, dynamic content loaders, and direct Express contact route handlers.',
      features: [
        'Vite + ESM optimized production bundles',
        'HTML5 Canvas connecting particle simulator background',
        'Framer Motion list staggers & spring-physics modal overlays',
        'Contact messaging logging with database fallback'
      ]
    },
    {
      id: 4,
      title: 'Youtube Clone API',
      category: 'Front-End Development',
      summary: 'Comprehensive healthcare booking engine with live video calling, doctor schedule aggregations, and prescriptions database.',
      image: '/Youtube.png',
      tech: ['HTML5, CSS3, JavaScript', 'Axios'],
      github: 'https://github.com/Himanshu62727/Youtubecloneapi',
      live: 'https://youtubeclonesearch.netlify.app/',
      details: 'HealthSync connects patients and clinicians instantly. Renders doctor schedule slots dynamically, handles WebRTC audio/video call synchronization, stores patient medical histories securely with Mongoose schemas, and notifies users with web socket alerts.',
      features: [
        'WebRTC real-time audio/video clinic consulting',
        'Dynamic doctor calendar scheduler with slot conflict checking',
        'Electronic Health Record (EHR) PDF report generation',
        'WebSockets live push notifications'
      ]
    },
    {
      id: 5,
      title: 'NLP Labeler - Semantic Text Annotator',
      category: 'MERN Stack Development',
      summary: 'Text highlighting dashboard for Named Entity Recognition (NER), relationship mapping, and training data tagging.',
      image: '/project_nlp.jpg',
      tech: ['React.js', 'CSS Selection API', 'JSON Export', 'Tailwind CSS', 'Redux'],
      github: 'https://github.com',
      live: 'https://github.com',
      details: 'A streamlined annotation tool specialized for Natural Language Processing (NLP). Allows annotators to highlight passages of text, apply custom entity tags (e.g., PERSON, LOCATION, ORG), map token relationships, and export datasets directly to SpaCy or HuggingFace formats.',
      features: [
        'Precision text selection tokenization tagging',
        'Entity relationship linking graph representations',
        'Custom color pallet tagging config profiles',
        'Direct SpaCy, HuggingFace dataset exports'
      ]
    },
    {
      id: 6,
      title: 'NexStore - Redux E-Commerce Portal',
      category: 'Front-End Development',
      summary: 'High-performance retail app featuring advanced category filtering, persistent shopping cart, and animated checkout.',
      image: '/project_ecommerce.jpg',
      tech: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion', 'Stripe API Mock'],
      github: 'https://github.com',
      live: 'https://github.com',
      details: 'NexStore focuses on extreme smoothness and visual excellence. Utilizes Redux Toolkit for complex cart state operations, Framer Motion layout animations for category filter shifts, and integrates local storage synchronization for persistent data retention.',
      features: [
        'Persistent Redux state cart management',
        'Framer Motion layouts grid category shifts',
        'Responsive item filtering search query index',
        'Animated checkout checkout flow'
      ]
    }
  ];

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-black relative">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

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
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-0.75 bg-orange-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Project Grid - Responsive columns: 1 on mobile, 2 on tablets, 3 on desktops */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="bg-neutral-950 border border-neutral-900 rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-orange-500/5 hover:border-neutral-800 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Project Image */}
                  <div className="h-48 overflow-hidden relative border-b border-neutral-900 bg-neutral-900 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `<div class="flex flex-col items-center gap-2 text-neutral-500"><svg class="w-10 h-10 text-orange-500 animate-pulse" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg><span class="text-xs uppercase font-mono tracking-widest">${project.category}</span></div>`;
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <span className="text-[10px] font-bold text-orange-400 bg-orange-400/10 border border-orange-400/20 px-3 py-1 rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-4 mb-2 leading-tight group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Badges footer */}
                <div className="px-6 pb-6 pt-3 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="text-[10px] text-neutral-500 bg-neutral-900 border border-neutral-900/60 px-2 py-0.5 rounded-md">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[10px] text-neutral-500 bg-neutral-900 border border-neutral-900/60 px-2 py-0.5 rounded-md">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / View Less Toggle Button */}
        <div className="mt-12 flex justify-center">
          <motion.button
            layout
            onClick={() => setShowAll(!showAll)}
            className="cursor-pointer flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-300 border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 hover:text-white hover:border-neutral-700 transition-colors duration-300"
          >
            <span>{showAll ? 'View Less Projects' : 'View More Projects'}</span>
            {showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </motion.button>
        </div>

        {/* Project Detail Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="bg-neutral-950 border border-neutral-900 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white rounded-full z-20 cursor-pointer"
                >
                  <X size={18} />
                </button>

                {/* Hero Header Area */}
                <div className="h-64 md:h-80 bg-neutral-900 relative flex items-center justify-center border-b border-neutral-950">
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/40 to-transparent z-10" />
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `<div class="flex flex-col items-center gap-3 text-neutral-500"><svg class="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.008 1.24l.885 1.77a2.25 2.25 0 002.007 1.24h1.98a2.25 2.25 0 002.007-1.24l.885-1.77a2.25 2.25 0 012.007-1.24h3.86m-18 0h18M2.25 13.5l-1.062 4.248a2.25 2.25 0 002.182 2.752h17.26a2.25 2.25 0 002.182-2.752L21.75 13.5m-18 0l-1.062-4.248a2.25 2.25 0 012.182-2.752h17.26a2.25 2.25 0 012.182 2.752L21.75 13.5"/></svg><span class="text-sm font-bold tracking-widest uppercase">${selectedProject.category}</span></div>`;
                    }}
                  />
                  
                  {/* Category overlay */}
                  <div className="absolute bottom-6 left-8 z-20 pr-6">
                    <span className="text-xs font-bold text-orange-400 bg-orange-400/10 border border-orange-400/20 px-3 py-1 rounded-full uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-xl md:text-3xl font-bold text-white mt-3 leading-tight">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 md:p-8 max-h-[45vh] overflow-y-auto space-y-6">
                  {/* Description */}
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {selectedProject.details}
                  </p>

                  {/* Tech Stack tags */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Tech Stack Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t, idx) => (
                        <span key={idx} className="text-xs text-slate-300 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Core Features */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.features.map((f, idx) => (
                        <li key={idx} className="text-xs text-neutral-400 flex items-start gap-2.5">
                          <Sparkles size={12} className="text-orange-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="p-6 bg-neutral-950 border-t border-neutral-900/60 flex flex-wrap items-center justify-end gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white px-5 py-2.5 rounded-full transition-colors"
                  >
                    <GitBranch size={14} />
                    <span>View Repository</span>
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full transition-colors shadow-lg shadow-orange-500/10"
                  >
                    <span>Launch App</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
