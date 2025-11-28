import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Download, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE_IMAGE, SUMMARY, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navHeight = 80;
      const targetPosition = contactSection.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToExperience = (e: React.MouseEvent) => {
    e.preventDefault();
    const expSection = document.getElementById('experience');
    if (expSection) {
      const navHeight = 80;
      const targetPosition = expSection.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-primary">
      {/* Background Decor - Premium Gold Theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-yellow-600/5 rounded-full blur-[140px]"></div>
        
        {/* Floating Gold Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i}
            animate={{ 
              y: [0, -30 - (i*10), 0], 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1]
            }} 
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i }}
            className="absolute rounded-full bg-accent blur-[1px]"
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${10 + (i * 20)}%`,
              width: `${4 + i}px`,
              height: `${4 + i}px`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-5 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm"
            >
              <span className="text-accent font-medium tracking-widest text-xs uppercase">Available for Hire</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white mb-6 leading-tight"
            >
              Hi, I'm <br />
              <span className="gold-text-gradient drop-shadow-lg">
                Jugal Boro
              </span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl text-textDim mb-8 h-16 sm:h-auto font-light"
            >
              I build{" "}
              <TypeAnimation
                sequence={[
                  'scalable web applications.',
                  1500,
                  'real-time digital twins.',
                  1500,
                  'robust MERN solutions.',
                  1500,
                  'premium user interfaces.',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white font-medium border-b-2 border-accent pb-1"
              />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              {SUMMARY}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4"
            >
              <a 
                href="#contact" 
                onClick={handleScrollToContact}
                className="cursor-pointer px-8 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Let's Talk <Mail size={18} />
              </a>
              <a 
                href={SOCIAL_LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border border-amber-500/50 text-amber-500 font-medium rounded-full hover:bg-amber-500/10 hover:border-amber-500 transition-all flex items-center justify-center gap-2 group backdrop-blur-sm"
              >
                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                Resume
              </a>
            </motion.div>

            {/* Social Minis */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-4"
            >
               <a href={SOCIAL_LINKS.github} className="text-slate-400 hover:text-accent transition-colors p-2 hover:bg-white/5 rounded-full"><Github size={22} /></a>
               <a href={SOCIAL_LINKS.linkedin} className="text-slate-400 hover:text-accent transition-colors p-2 hover:bg-white/5 rounded-full"><Linkedin size={22} /></a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
            className="flex-1 flex justify-center lg:justify-end relative group"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
              {/* Spinning Golden Rings */}
              <div className="absolute inset-0 border border-amber-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute -inset-4 border border-yellow-600/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Main Image Container */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.2)] relative z-10 group-hover:shadow-[0_0_80px_rgba(245,158,11,0.4)] transition-shadow duration-500 bg-black">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20"></div>
                <img 
                  src={PROFILE_IMAGE} 
                  alt="Jugal Boro" 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 filter grayscale-[20%] group-hover:grayscale-0"
                />
              </div>
              
              {/* Decorative Tech Orbitals */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-4 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-amber-500/30 shadow-lg z-20"
              >
                <span className="text-2xl">⚛️</span>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-4 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-amber-500/30 shadow-lg z-20"
              >
                <span className="text-2xl">🌿</span>
              </motion.div>
            </div>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-amber-500/50"
        >
          <a href="#experience" onClick={handleScrollToExperience} className="cursor-pointer hover:text-accent transition-colors">
             <ChevronDown size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;