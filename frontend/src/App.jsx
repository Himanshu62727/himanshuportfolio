import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {/* 1. Preloader Screen */}
      <Preloader onComplete={() => setLoadingComplete(true)} />

      {/* 2. Portfolio content (renders underneath and displays once preloader fades out) */}
      {loadingComplete && (
        <div className="bg-black text-white min-h-screen relative font-sans selection:bg-orange-500 selection:text-white">
          {/* Faint overall noise / canvas background */}
          <ParticleBackground />

          {/* Fixed Layout Components */}
          <Navbar />

          {/* Content sections */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Education />
            <Services />
            <Projects />
            <Skills />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

