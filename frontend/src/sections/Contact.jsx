import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, Github, Linkedin, ArrowUpRight, InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      // Simulate network request for frontend-only portfolio
      await new Promise(resolve => setTimeout(resolve, 1500));

      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Trigger confetti celebration!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error(err);
      setStatus({ 
        submitting: false, 
        success: false, 
        error: 'Failed to send message.' 
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-neutral-950/40 relative">
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

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
            Connect with Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-0.75 bg-orange-500 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white leading-tight underline">
                Let's collaborate on code or annotation
              </h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                Have an opening for a Full-Stack MERN developer, need support creating robust data annotation protocols, or looking to deploy automated data parsing routines? Drop me a line directly.
              </p>
              
              <div className="space-y-4 pt-4">
                <a 
                  href="mailto:himanshu.singh.example@lpu.in"
                  className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group"
                >
                  <div className="p-3 bg-neutral-950 border border-neutral-900 rounded-xl group-hover:bg-neutral-900">
                    <Mail size={18} className="text-indigo-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold block">Email Me</span>
                    <span className="text-sm">singhhimanshu11718@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-8 border-t border-neutral-900/60 mt-8 lg:mt-0">
              <span className="text-xs uppercase font-semibold text-neutral-500 tracking-wider block mb-4">
                Connect me Social Networks
              </span>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-neutral-950 border border-neutral-900 hover:border-neutral-800 text-neutral-400 hover:text-white rounded-xl transition-all"
                >
                  <Github size={18} />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-neutral-950 border border-neutral-900 hover:border-neutral-800 text-neutral-400 hover:text-white rounded-xl transition-all"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="https://www.instagram.com/h_singh05/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-neutral-950 border border-neutral-900 hover:border-neutral-800 text-neutral-400 hover:text-white rounded-xl transition-all"
                >
                  <InstagramIcon size={18} />
                </a>

                <a
                  href="https://support.discord.com/auth/v3/signin?brand_id=96508&locale=en-us"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-neutral-950 border border-neutral-900 hover:border-neutral-800 text-neutral-400 hover:text-white rounded-xl transition-all"
                >
                  <TwitterIcon size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-neutral-950/80 border border-neutral-900 rounded-3xl p-8 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Status Banners */}
                {status.success && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-start gap-3 text-emerald-400 text-sm">
                    <CheckCircle className="shrink-0 mt-0.5" size={16} />
                    <span>Your message has been received! I will get back to you shortly.</span>
                  </div>
                )}
                {status.error && (
                  <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-start gap-3 text-rose-400 text-sm">
                    <AlertCircle className="shrink-0 mt-0.5" size={16} />
                    <span>{status.error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-neutral-900/50 border border-neutral-900 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-neutral-900/50 border border-neutral-900 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="MERN Project Collaboration"
                    className="w-full bg-neutral-900/50 border border-neutral-900 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project requirements here..."
                    className="w-full bg-neutral-900/50 border border-neutral-900 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="cursor-pointer w-full py-4 rounded-xl font-bold text-sm tracking-widest text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:opacity-95 active:scale-98 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {status.submitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
