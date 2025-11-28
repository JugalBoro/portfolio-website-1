import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { AnimatedSection } from './AnimatedSection';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-primary to-black relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Get In <span className="gold-text-gradient">Touch</span>
            </h2>
            <p className="text-slate-400 text-lg font-light">
              I'm currently available for freelance projects and full-time opportunities.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <AnimatedSection delay={0.1}>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex flex-col items-center justify-center p-8 bg-secondary rounded-2xl border border-white/5 hover:border-accent/40 transition-all group h-full">
                    <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center text-slate-400 group-hover:text-accent group-hover:bg-accent/10 transition-all mb-6">
                        <Mail size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                    <p className="text-slate-400 text-sm text-center break-all opacity-80 group-hover:opacity-100 transition-opacity">{SOCIAL_LINKS.email}</p>
                </a>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
                <a href={`tel:${SOCIAL_LINKS.phone}`} className="flex flex-col items-center justify-center p-8 bg-secondary rounded-2xl border border-white/5 hover:border-accent/40 transition-all group h-full">
                    <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center text-slate-400 group-hover:text-accent group-hover:bg-accent/10 transition-all mb-6">
                        <Phone size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                    <p className="text-slate-400 text-sm text-center opacity-80 group-hover:opacity-100 transition-opacity">{SOCIAL_LINKS.phone}</p>
                </a>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
                <div className="flex flex-col items-center justify-center p-8 bg-secondary rounded-2xl border border-white/5 hover:border-accent/40 transition-all group h-full cursor-default">
                    <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center text-slate-400 group-hover:text-accent group-hover:bg-accent/10 transition-all mb-6">
                        <MapPin size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Location</h3>
                    <p className="text-slate-400 text-sm text-center opacity-80 group-hover:opacity-100 transition-opacity">{SOCIAL_LINKS.location}</p>
                </div>
            </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4}>
             <div className="flex justify-center gap-6">
                 <a href={SOCIAL_LINKS.linkedin} className="px-8 py-3 bg-tertiary border border-white/10 rounded-full text-white font-medium hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 flex items-center gap-2">
                     <Linkedin size={20} /> LinkedIn
                 </a>
                 <a href={SOCIAL_LINKS.github} className="px-8 py-3 bg-tertiary border border-white/10 rounded-full text-white font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center gap-2">
                     <Github size={20} /> GitHub
                 </a>
             </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default Contact;