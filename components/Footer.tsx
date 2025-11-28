import React from 'react';
import { Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-8 border-t border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 mb-4 text-white font-bold text-xl">
                 <Code2 className="text-accent" />
                 <span>Jugal<span className="text-accent">.dev</span></span>
            </div>
            <p className="text-textDim text-sm">
                &copy; {new Date().getFullYear()} Jugal Boro. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs mt-2">
                Built with React, Tailwind & Framer Motion
            </p>
        </div>
    </footer>
  );
};

export default Footer;
