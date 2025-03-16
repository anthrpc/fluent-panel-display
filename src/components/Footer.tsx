
import React, { useEffect, useRef } from 'react';
import { Github, FileCode2, Globe } from 'lucide-react';
import { gsap } from 'gsap';

interface FooterProps {
  activeSection?: string;
}

const Footer: React.FC<FooterProps> = ({ activeSection }) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
  
  // Animation effect when active section changes
  useEffect(() => {
    if (footerRef.current) {
      // Reset to initial state
      gsap.set(footerRef.current, { opacity: 0.7, y: 5 });
      
      // Animate in
      gsap.to(footerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  }, [activeSection]);
  
  return (
    <footer ref={footerRef} className="pb-4 border-t border-secondary pt-4">
      <div className="flex flex-col space-y-3">
        <div className="flex items-center space-x-2">
          <Github size={14} className="text-muted-foreground" />
          <a 
            href="https://github.com/marcusCedric" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-tight"
          >
            github.com/marcusCedric
          </a>
        </div>
        
        <div className="flex items-center space-x-2">
          <FileCode2 size={14} className="text-muted-foreground" />
          <a 
            href="https://huggingface.co/marcuscedricridia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-tight"
          >
            huggingface.co/marcuscedricridia
          </a>
        </div>
        
        <div className="flex items-center space-x-2">
          <Globe size={14} className="text-muted-foreground" />
          <a 
            href="https://www.linkedin.com/in/marcus-ridia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-tight"
          >
            linkedin.com/in/marcus-ridia
          </a>
        </div>
        
        <div className="pt-2 text-xs text-muted-foreground tracking-tight">
          Updated: {formattedDate}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
