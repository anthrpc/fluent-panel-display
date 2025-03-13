
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
    if (!greetingElement) return;
    
    let currentIndex = 0;
    let cycles = 0;
    
    // Create master timeline
    const masterTl = gsap.timeline();
    
    // Create the accelerating phase - starting slower, getting faster
    const acceleratingPhase = gsap.timeline();
    
    // Function to cycle through greetings
    const cycleGreetings = () => {
      currentIndex = (currentIndex + 1) % greetings.length;
      setCurrentGreeting(greetings[currentIndex]);
      cycles++;
    };
    
    // First few transitions are slower (building up)
    for (let i = 0; i < 5; i++) {
      const duration = 0.15 - (i * 0.02); // Gradually decreasing duration
      acceleratingPhase.to(greetingElement, { 
        opacity: 0, 
        y: -10, 
        duration: duration,
        ease: "power1.in",
        onComplete: cycleGreetings 
      })
      .to(greetingElement, { 
        opacity: 1, 
        y: 0, 
        duration: duration,
        ease: "power1.in"
      });
    }
    
    // Middle section - fast transitions
    const middlePhase = gsap.timeline();
    for (let i = 0; i < 10; i++) {
      middlePhase.to(greetingElement, { 
        opacity: 0, 
        y: -10, 
        duration: 0.05,
        ease: "power1.in",
        onComplete: cycleGreetings 
      })
      .to(greetingElement, { 
        opacity: 1, 
        y: 0, 
        duration: 0.05,
        ease: "power1.in"
      });
    }
    
    // Final phase - slowing down
    const deceleratingPhase = gsap.timeline();
    for (let i = 0; i < 5; i++) {
      const duration = 0.08 + (i * 0.03); // Gradually increasing duration
      deceleratingPhase.to(greetingElement, { 
        opacity: 0, 
        y: -10, 
        duration: duration,
        ease: "power1.out",
        onComplete: cycleGreetings 
      })
      .to(greetingElement, { 
        opacity: 1, 
        y: 0, 
        duration: duration,
        ease: "power1.out"
      });
    }
    
    // Final transition to region's language
    const finalTransition = gsap.timeline();
    finalTransition.to(greetingElement, { 
      opacity: 0, 
      y: -10, 
      duration: 0.2,
      ease: "power2.out",
      onComplete: () => {
        // Set to user's region language (for demo, using English)
        setCurrentGreeting(greetings[0]);
      }
    })
    .to(greetingElement, { 
      opacity: 1, 
      y: 0, 
      duration: 0.3,
      ease: "power2.out" 
    });
    
    // Add all phases to master timeline
    masterTl
      .add(acceleratingPhase)
      .add(middlePhase)
      .add(deceleratingPhase)
      .add(finalTransition);
    
    return () => {
      masterTl.kill();
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
