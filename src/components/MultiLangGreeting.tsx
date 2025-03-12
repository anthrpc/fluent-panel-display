
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
    const tl = gsap.timeline({ repeat: -1 });
    
    const cycleGreetings = () => {
      currentIndex = (currentIndex + 1) % greetings.length;
      setCurrentGreeting(greetings[currentIndex]);
    };

    if (greetingElement) {
      tl.to(greetingElement, { 
        opacity: 0, 
        y: -10, 
        duration: 0.3, 
        ease: "power2.in",
        onComplete: cycleGreetings 
      })
      .to(greetingElement, { 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        ease: "power2.out" 
      })
      .to({}, { duration: 5 }); // Pause for 5 seconds
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
