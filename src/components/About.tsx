
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const About: React.FC = () => {
  const skillBarsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    skillBarsRef.current.forEach((bar) => {
      const width = bar.getAttribute('data-width') || '0';
      gsap.fromTo(bar,
        { width: '0%' },
        { 
          width: width,
          duration: 1.5,
          ease: "power2.out"
        }
      );
    });
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">About</h2>
      
      <p className="text-balance leading-relaxed">
        I'm a passionate developer who works with open-source AI models. My expertise lies in creating, fine-tuning, and implementing machine learning solutions that push the boundaries of what's possible with artificial intelligence.
      </p>
      
      <p className="text-balance leading-relaxed">
        With a deep understanding of neural networks, natural language processing, and computer vision, I contribute to the democratization of AI by making powerful models accessible to everyone.
      </p>

      <div className="mt-8">
        <h3 className="text-xl font-medium mb-4">Skills</h3>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span>Python</span>
              <span>80%</span>
            </div>
            <div className="skill-bar">
              <div 
                ref={el => el && skillBarsRef.current.push(el)}
                data-width="80%"
                className="skill-progress"
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span>JavaScript</span>
              <span>65%</span>
            </div>
            <div className="skill-bar">
              <div 
                ref={el => el && skillBarsRef.current.push(el)}
                data-width="65%"
                className="skill-progress"
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span>Rust</span>
              <span>45%</span>
            </div>
            <div className="skill-bar">
              <div 
                ref={el => el && skillBarsRef.current.push(el)}
                data-width="45%"
                className="skill-progress"
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span>Zig</span>
              <span>30%</span>
            </div>
            <div className="skill-bar">
              <div 
                ref={el => el && skillBarsRef.current.push(el)}
                data-width="30%"
                className="skill-progress"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-medium mb-4">My Values</h3>
        <p className="text-balance leading-relaxed mb-4">
          We care about your experience, not your data. I believe in creating products and experiences that are:
        </p>
        
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Truly independent with good performance, stability, and security</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Organized, compact, and fresh</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Clean, calm, personalized, and customizable</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Private with no third-party integrations</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>No bloatware or unnecessary preinstalled applications</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
