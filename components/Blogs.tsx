import React from 'react';
import { BLOGS } from '../constants';
import { AnimatedSection } from './AnimatedSection';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const Blogs: React.FC = () => {
  return (
    <section id="blogs" className="py-24 bg-tertiary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
                <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                Tech <span className="gold-text-gradient">Insights</span>
                </h2>
                <p className="text-slate-400 font-light max-w-xl">
                    Thoughts on development, architecture, and the future of web tech.
                </p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-accent font-medium hover:text-white transition-colors">
                View all posts <ArrowRight size={16} />
            </a>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((blog, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <a href={blog.link} className="block group h-full">
                <div className="bg-secondary rounded-2xl border border-white/5 overflow-hidden h-full flex flex-col hover:border-accent/30 hover:transform hover:-translate-y-1 transition-all duration-300">
                    {/* Image */}
                    <div className="h-48 overflow-hidden relative">
                         <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                        <img 
                            src={blog.image} 
                            alt={blog.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                            <span className="flex items-center gap-1"><Calendar size={12} /> {blog.date}</span>
                            <span className="flex items-center gap-1"><Clock size={12} /> {blog.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                            {blog.title}
                        </h3>
                        
                        <p className="text-slate-400 text-sm mb-6 line-clamp-3 font-light leading-relaxed flex-grow">
                            {blog.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {blog.tags.map((tag, i) => (
                                <span key={i} className="text-xs font-medium text-slate-500 bg-tertiary px-2 py-1 rounded">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
             <a href="#" className="inline-flex items-center gap-2 text-accent font-medium hover:text-white transition-colors">
                View all posts <ArrowRight size={16} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;