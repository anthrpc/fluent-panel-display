
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
    // Only animate the panel content, not the entire container
    const panels = document.querySelectorAll('.panel');
    
    // First, hide all panels
    gsap.set(panels, { 
      opacity: 0,
      position: 'absolute',
      width: '100%'
    });

    // Find the active panel and animate it
    const activePanel = document.querySelector(`.panel[data-section="${activeSection}"]`);
    if (activePanel) {
      // Animate out all panels
      gsap.to(panels, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      
      // Animate in the active panel
      gsap.to(activePanel, {
        opacity: 1,
        duration: 0.5,
        delay: 0.1,
        ease: "power2.out",
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
          
          {/* Right Column - Content Panels */}
          <div className="md:col-span-2 relative">
            <div style={{ minHeight: '600px' }}>
              <div className="panel" data-section="about">
                <About />
              </div>
              
              <div className="panel" data-section="experience">
                <Experience />
              </div>
              
              <div className="panel" data-section="projects">
                <Projects />
              </div>
              
              <div className="panel" data-section="hire">
                <Hire />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer - outside of panels container, at the bottom of the page */}
      <div className="w-full mt-auto">
        <div className="container-custom">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
