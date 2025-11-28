
import React, { useEffect } from 'react';
import { BlogPost } from '../types';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogDetailProps {
  blog: BlogPost;
  onBack: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blog, onBack }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-primary pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-20"
    >
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-accent mb-8 transition-colors"
        >
          <div className="p-2 rounded-full border border-slate-700 group-hover:border-accent transition-colors">
             <ArrowLeft size={20} />
          </div>
          <span className="font-medium">Back to Portfolio</span>
        </button>

        {/* Hero Image */}
        <div className="w-full h-[300px] sm:h-[400px] rounded-3xl overflow-hidden mb-10 border border-white/10 shadow-2xl relative">
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
             <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
             
             {/* Title Overlay on Mobile/Tablet */}
             <div className="absolute bottom-0 left-0 p-6 sm:p-10 w-full">
                <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-accent text-black text-xs font-bold rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight shadow-black drop-shadow-lg">
                    {blog.title}
                </h1>
             </div>
        </div>

        {/* Meta Data */}
        <div className="flex flex-wrap items-center gap-6 text-slate-400 border-b border-white/10 pb-8 mb-10">
            <div className="flex items-center gap-2">
                <User size={18} className="text-accent" />
                <span className="text-white font-medium">Jugal Boro</span>
            </div>
            <div className="flex items-center gap-2">
                <Calendar size={18} className="text-accent" />
                <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
                <Clock size={18} className="text-accent" />
                <span>{blog.readTime}</span>
            </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-invert max-w-none text-slate-300">
             <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>

        {/* Footer of Article */}
        <div className="mt-16 pt-10 border-t border-white/10 text-center">
            <p className="text-slate-500 mb-6 italic">Thanks for reading!</p>
            <button 
                onClick={onBack}
                className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full transition-all"
            >
                Read more articles
            </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogDetail;
