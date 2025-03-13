
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

interface NavBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'hire', label: 'Hire!' },
  ];

  useEffect(() => {
    // Set up magnetic effect for nav items
    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
      applyMagneticEffect(link as HTMLElement);
    });
  }, []);

  const applyMagneticEffect = (element: HTMLElement) => {
    const dimensions = element.getBoundingClientRect();
    
    const handleMouseEnter = () => {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
      
      // Show and animate the dot
      const dot = element.querySelector('.nav-dot') as HTMLElement;
      if (dot) {
        gsap.fromTo(dot, 
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(2)" }
        );
      }
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const relX = e.clientX - left - width / 2;
      const relY = e.clientY - top - height / 2;
      
      // Calculate magnetic pull strength
      const magnetize = (val: number, maxDist: number) => {
        const dist = Math.abs(val) / maxDist;
        return gsap.utils.interpolate([1, 0.4, 0], Math.min(dist, 1));
      };
      
      const moveX = magnetize(relX, width) * relX * 0.5;
      const moveY = magnetize(relY, height) * relY * 0.5;
      
      gsap.to(element, {
        x: moveX,
        y: moveY,
        duration: 0.2,
        ease: "power2.out"
      });
      
      // Move text slightly more for 3D effect
      const text = element.querySelector('.nav-text') as HTMLElement;
      if (text) {
        gsap.to(text, {
          x: moveX * 1.2,
          y: moveY * 1.2,
          duration: 0.2,
          ease: "power2.out"
        });
      }
    };
    
    const handleMouseLeave = () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      
      // Hide the dot with animation
      const dot = element.querySelector('.nav-dot') as HTMLElement;
      if (dot && !element.classList.contains('active')) {
        gsap.to(dot, { scale: 0, opacity: 0, duration: 0.3 });
      }
      
      // Animate back to original position with elastic effect
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1.2, 0.5)"
      });
      
      // Move text back
      const text = element.querySelector('.nav-text') as HTMLElement;
      if (text) {
        gsap.to(text, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "elastic.out(1.2, 0.5)"
        });
      }
    };
    
    element.addEventListener('mouseenter', handleMouseEnter);
    
    // For cleanup
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  };

  const handleNavClick = (sectionId: string) => {
    // Add a small scale animation when clicking
    const button = document.querySelector(`button[data-section="${sectionId}"]`);
    if (button) {
      // Quick scale animation on click
      gsap.fromTo(button, 
        { scale: 0.95 },
        { scale: 1, duration: 0.3, ease: "elastic.out(1.2, 0.5)" }
      );
    }
    
    setActiveSection(sectionId);
  };

  return (
    <nav className="mt-8">
      <ul className="space-y-3">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              className={`nav-item ${activeSection === item.id ? 'active' : ''} transition-all duration-200 relative`}
              onClick={() => handleNavClick(item.id)}
              data-section={item.id}
            >
              <span className="nav-dot absolute left-0 w-2 h-2 rounded-full bg-muted-foreground transform" 
                style={{ 
                  opacity: activeSection === item.id ? 1 : 0,
                  transform: activeSection === item.id ? 'scale(1)' : 'scale(0)' 
                }}
              />
              <span className="nav-text pl-6">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
