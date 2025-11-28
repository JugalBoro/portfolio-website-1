
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogDetail from './components/BlogDetail';
import { BlogPost } from './types';

function App() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const handleSelectBlog = (blog: BlogPost) => {
    setSelectedBlog(blog);
  };

  const handleBackToHome = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="bg-primary text-textLight font-sans selection:bg-accent selection:text-black min-h-screen flex flex-col">
      <Navbar />
      
      {selectedBlog ? (
        <BlogDetail blog={selectedBlog} onBack={handleBackToHome} />
      ) : (
        <main className="flex-grow">
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Blogs onSelectBlog={handleSelectBlog} />
          <Contact />
        </main>
      )}

      {/* Only show Footer if not in blog view, or keep it. Let's keep it. */}
      <Footer />
    </div>
  );
}

export default App;
