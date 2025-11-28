import React from 'react';
import { SKILLS, EDUCATION } from '../constants';
import { AnimatedSection } from './AnimatedSection';
import { GraduationCap, Database, Layout, Server, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (name: string) => {
    switch(name) {
        case 'Frontend': return <Layout size={20} />;
        case 'Backend': return <Server size={20} />;
        case 'Database': return <Database size={20} />;
        default: return <Wrench size={20} />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-primary relative">
       {/* Ambient Glow */}
       <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Skills Column */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-12">
                Technical <span className="gold-text-gradient">Arsenal</span>
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SKILLS.map((category, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                    <div className="bg-secondary p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 h-full group">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-tertiary rounded-lg text-accent border border-white/5 group-hover:scale-110 transition-transform">
                                {getIcon(category.name)}
                            </div>
                            <h3 className="text-lg font-bold text-white">
                                {category.name}
                            </h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => (
                            <span 
                                key={i} 
                                className="px-3 py-1.5 bg-tertiary text-slate-300 rounded-md text-sm border border-white/5 group-hover:border-accent/20 group-hover:text-white transition-all duration-300 cursor-default"
                            >
                                {skill}
                            </span>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="lg:col-span-1">
            <AnimatedSection delay={0.4}>
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-12">
                Education
              </h2>
              
              <div className="bg-gradient-to-br from-secondary to-tertiary p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-accent/40 transition-colors h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-accent">
                  <GraduationCap size={150} />
                </div>
                
                <div className="relative z-10">
                    <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">
                        Bachelor of Engineering
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2">
                        {EDUCATION.major}
                    </h3>
                    <p className="text-slate-400 text-lg mb-8 font-light">
                        {EDUCATION.school}
                    </p>
                    
                    <div className="flex items-center gap-4">
                        <div className="bg-black/40 px-6 py-3 rounded-xl border border-accent/20 backdrop-blur-sm">
                            <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">Grade</span>
                            <span className="block text-2xl font-bold text-white">{EDUCATION.score}</span>
                        </div>
                    </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;