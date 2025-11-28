import React from 'react';
import { PROJECTS } from '../constants';
import { AnimatedSection } from './AnimatedSection';
import { ExternalLink, Github, Video, Code } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-tertiary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Featured <span className="gold-text-gradient">Projects</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light">
              Showcasing my expertise in building scalable, user-centric web solutions.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group h-full bg-secondary border border-white/5 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-500 hover:shadow-[0_10px_40px_-15px_rgba(245,158,11,0.1)] flex flex-col relative">
                
                {/* Decorative Top Bar */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-tertiary rounded-xl border border-white/5 group-hover:border-accent/20 transition-colors">
                         <Code className="text-accent" size={24} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                  </h3>

                  <p className="text-slate-400 mb-8 flex-grow leading-relaxed font-light">
                    {project.description}
                  </p>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-tertiary text-xs font-medium text-amber-500/80 rounded-full border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-auto">
                    {project.links.map((link, i) => {
                       let Icon = ExternalLink;
                       if (link.label.toLowerCase().includes('github') || link.label.toLowerCase().includes('repo')) Icon = Github;
                       if (link.label.toLowerCase().includes('video')) Icon = Video;
                       
                       return (
                        <a 
                          key={i} 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-bold text-white hover:text-accent transition-colors"
                        >
                          <Icon size={18} />
                          {link.label}
                        </a>
                       )
                    })}
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

export default Projects;