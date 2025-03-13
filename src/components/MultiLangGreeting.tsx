
import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

interface Greeting {
  language: string;
  text: string;
}

const greetings: Greeting[] = [
  { language: 'English', text: 'Hello!' },
  { language: 'Spanish', text: '¡Hola!' },
  { language: 'French', text: 'Bonjour!' },
  { language: 'German', text: 'Hallo!' },
  { language: 'Italian', text: 'Ciao!' },
  { language: 'Portuguese', text: 'Olá!' },
  { language: 'Japanese', text: 'こんにちは!' },
  { language: 'Chinese', text: '你好!' },
  { language: 'Korean', text: '안녕하세요!' },
  { language: 'Russian', text: 'Привет!' },
  { language: 'Arabic', text: 'مرحبا!' },
  { language: 'Hindi', text: 'नमस्ते!' },
];

const MultiLangGreeting: React.FC = () => {
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);
  const greetingRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!greetingRef.current) return;
    
    let currentIndex = 0;
    
    // Create a timeline for the animation sequence
    const tl = gsap.timeline();
    
    // Function to cycle through greetings
    const cycleGreetings = () => {
      currentIndex = (currentIndex + 1) % greetings.length;
      setCurrentGreeting(greetings[currentIndex]);
    };
    
    // Accelerating phase - getting faster (ease-in)
    for (let i = 0; i < 5; i++) {
      const duration = 0.2 - (i * 0.03); // Gradually decreasing duration
      tl.to(greetingRef.current, { 
        opacity: 0, 
        y: -10, 
        duration: duration,
        ease: "power2.in", // ease-in for acceleration
        onComplete: cycleGreetings 
      })
      .to(greetingRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: duration,
        ease: "power2.in"
      });
    }
    
    // Fast phase - maintain speed
    for (let i = 0; i < 8; i++) {
      tl.to(greetingRef.current, { 
        opacity: 0, 
        y: -10, 
        duration: 0.05,
        ease: "power1.in",
        onComplete: cycleGreetings 
      })
      .to(greetingRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.05,
        ease: "power1.in"
      });
    }
    
    // Decelerating phase - slowing down (ease-out)
    for (let i = 0; i < 5; i++) {
      const duration = 0.08 + (i * 0.04); // Gradually increasing duration
      tl.to(greetingRef.current, { 
        opacity: 0, 
        y: -10, 
        duration: duration,
        ease: "power2.out", // ease-out for deceleration
        onComplete: cycleGreetings 
      })
      .to(greetingRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: duration,
        ease: "power2.out"
      });
    }
    
    // Final transition to English
    tl.to(greetingRef.current, { 
      opacity: 0, 
      y: -10, 
      duration: 0.3,
      ease: "power3.out", // Strong ease-out for final transition
      onComplete: () => {
        setCurrentGreeting(greetings[0]); // Set back to English
      }
    })
    .to(greetingRef.current, { 
      opacity: 1, 
      y: 0, 
      duration: 0.4,
      ease: "power3.out"
    });
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <span ref={containerRef} className="inline-block whitespace-nowrap">
      <span 
        ref={greetingRef} 
        className="inline-block min-w-[95px] text-right"
      >
        {currentGreeting.text}
      </span>
      <span className="tracking-tight"> I'm Marcus.</span>
    </span>
  );
};

export default MultiLangGreeting;
