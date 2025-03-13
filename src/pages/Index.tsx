
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import NavBar from '../components/NavBar';
import MultiLangGreeting from '../components/MultiLangGreeting';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Hire from '../components/Hire';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  
  useEffect(() => {
    // Only animate the panel transitions, not the entire container
    const panels = document.querySelectorAll('.panel');
    gsap.set(panels, { position: 'absolute', width: '100%' });

    const activePanel = document.querySelector(`.panel[data-section="${activeSection}"]`);
    if (activePanel) {
      gsap.to(panels, {
        opacity: 0,
        duration: 0.4,
        ease: 'power3.out',
      });
      
      gsap.to(activePanel, {
        opacity: 1,
        duration: 0.6,
        delay: 0.2,
        ease: 'power3.out',
      });
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <div className="container-custom flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Name and Navigation */}
          <div className="md:col-span-1">
            <div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight">
                <MultiLangGreeting />
              </h1>
              <p className="mt-4 text-muted-foreground">
                Open Source AI Model Developer
              </p>
            </div>
            
            <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>
          
          {/* Right Column - Content */}
          <div className="md:col-span-2 relative min-h-[600px]">
            <div className="relative" style={{ minHeight: '600px' }}>
              <div className="panel absolute w-full" data-section="about">
                <About />
              </div>
              
              <div className="panel absolute w-full" data-section="experience">
                <Experience />
              </div>
              
              <div className="panel absolute w-full" data-section="projects">
                <Projects />
              </div>
              
              <div className="panel absolute w-full" data-section="hire">
                <Hire />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer - outside of panels, fixed at bottom */}
      <div className="w-full">
        <div className="container-custom">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
