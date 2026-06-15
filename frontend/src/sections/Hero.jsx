import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const roles = [
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Data Annotator'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const activeRole = roles[currentRoleIndex];
    
    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(activeRole.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === activeRole) {
          // Pause at the end of typing
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(activeRole.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500); // Wait before next role
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleDownloadResume = () => {
    // We will host resume.pdf in public folder
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Himanshu_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 relative overflow-hidden"
    >
      <div className="z-10 flex flex-col items-center text-center max-w-3xl">
        
        {/* Avatar Image container */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
          className="relative w-40 h-40 md:w-48 md:h-48 mb-8"
        >
          {/* Glowing border rings */}
          <div className="absolute inset-0 rounded-full border border-neutral-700/50 scale-105 animate-pulse" />
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/35 animate-spin [animation-duration:20s]" />
          
          <img
            src="/Profileportfolio.jpeg"
            alt="Himanshu Singh"
            className="w-full h-full rounded-full object-cover border-4 border-neutral-800 shadow-2xl relative z-10"
            onError={(e) => {
              // Fallback if avatar image is missing/still generating
              e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
            }}
          />
        </motion.div>

        {/* Introduction Headings */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-3xl font-medium text-slate-300 font-sans tracking-wide mb-3"
        >
          I'm <span className="font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">Himanshu Singh</span>,
        </motion.h2>

        {/* Typewriter role name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="h-16 md:h-20 flex items-center justify-center mb-6"
        >
          <h1 className="text-3xl md:text-5xl font-serif font-black tracking-wide text-white capitalize leading-tight">
            {currentText}
            <span className="w-1.5 h-8 md:h-12 bg-indigo-400 ml-1 inline-block animate-pulse" />
          </h1>
        </motion.div>

        {/* Bio description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-neutral-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl"
        >
          I'm a full stack developer with a passion for creating modern, responsive web applications.
          Skilled in React, Tailwind, and the MERN stack, combined with professional expertise in AI data annotation and training models.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <button
            onClick={handleDownloadResume}
            className="cursor-pointer px-8 py-3 rounded-full text-sm font-bold tracking-wider text-white bg-[#ec4899] hover:bg-[#db2777] active:scale-95 shadow-lg shadow-pink-500/20 transition-all duration-300 border border-pink-400/30"
          >
            My Resume
          </button>
          
          <button
            onClick={scrollToContact}
            className="cursor-pointer px-8 py-3 rounded-full text-sm font-semibold tracking-wider text-neutral-300 border border-neutral-700 hover:border-neutral-500 hover:text-white bg-neutral-900/50 hover:bg-neutral-900 backdrop-blur-sm active:scale-95 transition-all duration-300"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Radial fade to black at bottom to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
