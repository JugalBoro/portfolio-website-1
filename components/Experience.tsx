import React from 'react';
import { EXPERIENCE } from '../constants';
import { AnimatedSection } from './AnimatedSection';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-primary relative">
       {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-20 text-center">
            Professional <span className="gold-text-gradient">Journey</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-16">
          {EXPERIENCE.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 0.1} className="relative">
              
              {/* Connecting Line */}
              {index !== EXPERIENCE.length - 1 && (
                <div className="hidden sm:block absolute left-10 top-20 bottom-[-4rem] w-[1px] bg-gradient-to-b from-amber-500/50 to-transparent z-0"></div>
              )}

              <div className="bg-secondary rounded-2xl border border-white/5 hover:border-accent/30 transition-colors shadow-xl overflow-hidden group">
                <div className="flex flex-col sm:flex-row gap-0 sm:gap-8">
                    
                    {/* Left Column: Logo & Meta */}
                    <div className="bg-tertiary sm:w-1/4 p-8 flex flex-col items-center sm:items-start border-b sm:border-b-0 sm:border-r border-white/5">
                        <div className="w-20 h-20 bg-white/90 rounded-2xl p-3 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)] relative z-10">
                            {exp.logo ? (
                                <img src={exp.logo} alt={exp.company} className="max-w-full max-h-full object-contain" />
                            ) : (
                                <Briefcase className="text-black" size={32} />
                            )}
                        </div>
                        <div className="text-center sm:text-left">
                            <h4 className="text-accent font-bold text-lg mb-1">{exp.company}</h4>
                            <p className="text-slate-500 text-xs uppercase tracking-wider mb-4">{exp.type}</p>
                            
                            <div className="inline-flex items-center gap-2 text-slate-400 bg-white/5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/5">
                                <Calendar size={12} className="text-accent" />
                                <span>{exp.period}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="p-8 sm:w-3/4">
                        <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-accent transition-colors">{exp.role}</h3>
                        <ul className="space-y-4">
                            {exp.description.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-4 group/item">
                                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2.5 flex-shrink-0 group-hover/item:bg-accent group-hover/item:scale-125 transition-all"></span>
                                    <span className="text-slate-300 leading-relaxed font-light">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;