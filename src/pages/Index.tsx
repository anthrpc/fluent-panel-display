
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import NavBar from '../components/NavBar';
import MultiLangGreeting from '../components/MultiLangGreeting';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Hire from '../components/Hire';
import Footer from '../components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const Index: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);
  
  // Initialize locomotive scroll
  useEffect(() => {
    if (!locomotiveScrollRef.current && scrollRef.current) {
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 0.8,
        lerp: 0.1,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        }
      });
      
      // Clean up on unmount
      return () => {
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.destroy();
          locomotiveScrollRef.current = null;
        }
      };
    }
  }, []);
  
  // Update locomotive scroll when active section changes
  useEffect(() => {
    if (locomotiveScrollRef.current) {
      // Give time for the DOM to update before updating the scroll
      setTimeout(() => {
        locomotiveScrollRef.current?.update();
      }, 100);
    }
  }, [activeSection]);
  
  // For cursor glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorGlowRef.current) {
        // Apply a slight delay for a smoother effect
        gsap.to(cursorGlowRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
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
          onComplete: () => {
            // Mark elements as animated
            elements.forEach(el => {
              el.classList.add('gsap-animated');
            });
          }
        }
      );
      
      // Trigger skill bar animation when About section is active
      if (activeSection === 'about') {
        const skillBars = activePanel.querySelectorAll('.skill-progress');
        skillBars.forEach((bar: Element) => {
          const width = (bar as HTMLElement).getAttribute('data-width') || '0';
          gsap.fromTo(bar, 
            { width: '0%' }, 
            { 
              width: width, 
              duration: 1.5,
              ease: "power3.out"
            }
          );
        });
      }
    }
  }, [activeSection]);

  return (
    <div 
      ref={scrollRef}
      className="min-h-screen bg-background text-foreground font-sans flex flex-col scrollbar-hide relative overflow-x-hidden"
      data-scroll-container
    >
      {/* Cursor glow effect - positioned at the very back with lower z-index */}
      <div 
        ref={cursorGlowRef}
        className="pointer-events-none fixed w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"
        style={{ 
          background: 'radial-gradient(circle, rgba(155,135,245,0.6) 0%, rgba(155,135,245,0) 70%)',
        }}
      ></div>
      
      <div className="container-custom flex-grow flex flex-col relative z-10" data-scroll-section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 flex-grow">
          {/* Left Column - Name, Navigation and Footer */}
          <div className="md:col-span-1 h-full flex flex-col justify-between" data-scroll data-scroll-speed="0.3">
            <div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight">
                <MultiLangGreeting />
              </h1>
              <p className="mt-4 text-muted-foreground">
                Open Source AI Model Developer
              </p>
              
              <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
            </div>
            
            {/* Footer with animation when active section changes */}
            <div className="mt-auto pt-6">
              <Footer activeSection={activeSection} />
            </div>
          </div>
          
          {/* Right Column - Content Panels */}
          <div className="md:col-span-2 relative" data-scroll data-scroll-speed="0.1">
            <div className="w-full">
              <div className="panel-content w-full" data-section="about" style={{display: activeSection === 'about' ? 'block' : 'none'}}>
                <About />
              </div>
              
              <div className="panel-content w-full" data-section="experience" style={{display: activeSection === 'experience' ? 'block' : 'none'}}>
                <Experience />
              </div>
              
              <div className="panel-content w-full" data-section="projects" style={{display: activeSection === 'projects' ? 'block' : 'none'}}>
                <Projects />
              </div>
              
              <div className="panel-content w-full" data-section="hire" style={{display: activeSection === 'hire' ? 'block' : 'none'}}>
                <Hire />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
