
import React, { useEffect, useState } from 'react';
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
  const [greetingElement, setGreetingElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let currentIndex = 0;
    const cycleCount = Math.floor(5000 / 100); // 5 seconds total, 0.1s per transition
    let cycles = 0;
    let tl = gsap.timeline();
    
    const cycleGreetings = () => {
      currentIndex = (currentIndex + 1) % greetings.length;
      setCurrentGreeting(greetings[currentIndex]);
      cycles++;

      // Stop after 5 seconds (50 cycles at 0.1s each)
      if (cycles >= cycleCount) {
        // Set to user's region language (for demo, using English)
        setCurrentGreeting(greetings[0]);
        return;
      }
    };

    if (greetingElement) {
      // First phase: ease-in for cycling through languages
      const firstPhaseAnimations = gsap.timeline({ repeat: cycleCount - 2 });
      firstPhaseAnimations.to(greetingElement, { 
        opacity: 0, 
        y: -10, 
        duration: 0.05, 
        ease: "power2.in", // Use ease-in for the first phase
        onComplete: cycleGreetings 
      })
      .to(greetingElement, { 
        opacity: 1, 
        y: 0, 
        duration: 0.05, 
        ease: "power2.in" 
      });
      
      // Second phase: ease-out for settling on the final language
      tl.add(firstPhaseAnimations)
        .to(greetingElement, { 
          opacity: 0, 
          y: -10, 
          duration: 0.05, 
          ease: "power2.out", // Use ease-out for the final transition
          onComplete: () => {
            // Set to user's region language (for demo, using English)
            setCurrentGreeting(greetings[0]);
          }
        })
        .to(greetingElement, { 
          opacity: 1, 
          y: 0, 
          duration: 0.05, 
          ease: "power2.out" 
        });
    }

    return () => {
      tl.kill();
    };
  }, [greetingElement]);

  return (
    <span className="inline-block overflow-hidden">
      <span 
        ref={(el) => setGreetingElement(el)} 
        className="inline-block"
      >
        {currentGreeting.text}
      </span>
      <span> I'm Marcus.</span>
    </span>
  );
};

export default MultiLangGreeting;
