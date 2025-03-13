
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
    // Find the active panel and animate its contents
    const activePanel = document.querySelector(`.panel-content[data-section="${activeSection}"]`);
    if (activePanel) {
      // Animate in each child element of the active panel
      const elements = activePanel.querySelectorAll('.animate-element');
      gsap.fromTo(elements, 
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.5,
          ease: "power2.out",
          clearProps: "all" // This ensures properties are cleared after animation
        }
      );
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col scrollbar-hide">
      <div className="container-custom flex-grow flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 flex-grow">
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
            <div className="panel-container h-[600px] overflow-y-auto scrollbar-hide">
              <div className="panel-content" data-section="about" style={{display: activeSection === 'about' ? 'block' : 'none'}}>
                <About />
              </div>
              
              <div className="panel-content" data-section="experience" style={{display: activeSection === 'experience' ? 'block' : 'none'}}>
                <Experience />
              </div>
              
              <div className="panel-content" data-section="projects" style={{display: activeSection === 'projects' ? 'block' : 'none'}}>
                <Projects />
              </div>
              
              <div className="panel-content" data-section="hire" style={{display: activeSection === 'hire' ? 'block' : 'none'}}>
                <Hire />
              </div>
            </div>
          </div>
        </div>

        {/* Footer - placed outside of the grid and content flow */}
        <div className="w-full mt-8">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
