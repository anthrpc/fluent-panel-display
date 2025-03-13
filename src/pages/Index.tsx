
import React, { useState, useEffect, useRef } from 'react';
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
  const contentPanelRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Find the active panel and animate its contents
    const activePanel = document.querySelector(`.panel-content[data-section="${activeSection}"]`);
    if (activePanel) {
      // Scroll to top when changing sections
      if (contentPanelRef.current) {
        contentPanelRef.current.scrollTop = 0;
      }
      
      // Animate in each child element of the active panel
      const elements = activePanel.querySelectorAll('.animate-element');
      
      // Apply motion blur during animation
      elements.forEach(el => {
        el.classList.add('motion-blur');
        el.classList.add('motion-blur-animate');
      });
      
      gsap.fromTo(elements, 
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            // Remove motion blur after animation completes
            elements.forEach(el => {
              el.classList.remove('motion-blur-animate');
              setTimeout(() => {
                el.classList.remove('motion-blur');
              }, 150);
            });
          }
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
            <div 
              ref={contentPanelRef}
              className="panel-container h-[600px] overflow-y-auto scrollbar-hide relative"
            >
              <div className="panel-content pb-10" data-section="about" style={{display: activeSection === 'about' ? 'block' : 'none'}}>
                <About />
              </div>
              
              <div className="panel-content pb-10" data-section="experience" style={{display: activeSection === 'experience' ? 'block' : 'none'}}>
                <Experience />
              </div>
              
              <div className="panel-content pb-10" data-section="projects" style={{display: activeSection === 'projects' ? 'block' : 'none'}}>
                <Projects />
              </div>
              
              <div className="panel-content pb-10" data-section="hire" style={{display: activeSection === 'hire' ? 'block' : 'none'}}>
                <Hire />
              </div>
            </div>
          </div>
        </div>

        {/* Footer - placed outside of the content flow */}
        <div className="w-full mt-12 pt-6 border-t border-secondary">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
