import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-black border-t border-neutral-900/60 py-12 px-6 md:px-12 text-center text-neutral-500 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Name */}
        <motion.div
  className="font-bold text-xl tracking-widest cursor-pointer text-white"
  onClick={scrollToTop}
  animate={{
    y: [0, -5, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <span className="text-blue-500">H</span>IMANSHU
</motion.div>

        {/* copyright */}
        <div className="text-xs">
          &copy; {new Date().getFullYear()} Himanshu Singh. All rights reserved.
        </div>

        {/* Info */}
        <div className="flex items-center gap-1.5 text-xs text-neutral-600">
          <ShieldAlert size={12} />
          <span>Full Stack & AI Data Specialist Portfolio</span>
        </div>

      </div>
    </footer>
  );
}
