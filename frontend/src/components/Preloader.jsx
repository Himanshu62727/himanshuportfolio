import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds total loading time
    const intervalTime = 25;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoaded(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600); // Allow fade out animation to finish
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black text-white py-16 px-4 select-none"
          style={{
            background: 'radial-gradient(circle at center, #1b0f33 0%, #000000 70%)',
          }}
        >
          {/* Spacer to center the main header */}
          <div />

          {/* Welcome Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <h1 
              className="text-4xl md:text-6xl font-serif font-semibold tracking-wide"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Welcome <span className="font-sans font-light text-slate-300">to</span> Himanshu <span className="bg-linear-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">Portfolio</span>
            </h1>
          </motion.div>

          {/* Initializing Progress Indicator */}
          <div className="w-full max-w-md flex flex-col items-center gap-4 px-6">
            <span className="text-xs tracking-[0.3em] font-medium text-slate-500 uppercase">
              Initializing Portfolio...
            </span>
            
            {/* Progress Bar Container */}
            <div className="w-full h-1.5 bg-neutral-900/80 rounded-full overflow-hidden border border-neutral-800/50 p-px">
              <motion.div 
                className="h-full rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"
                style={{ width: `${progress}%` }}
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>
            
            {/* Percentage Text */}
            <span className="text-sm font-mono text-slate-400">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
