
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: "Python", percentage: 100 },
  { name: "JavaScript", percentage: 40 },
  { name: "Rust", percentage: 10 },
  { name: "Zig", percentage: 5 }
];

const About: React.FC = () => {
  const skillBarsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Reset the bars to 0 width before animating them
    skillBarsRef.current.forEach((bar) => {
      gsap.set(bar, { width: '0%' });
    });
    
    // Animate skill bars whenever the component mounts or becomes visible
    const animateSkillBars = () => {
      skillBarsRef.current.forEach((bar) => {
        const width = bar.getAttribute('data-width') || '0';
        
        gsap.fromTo(bar,
          { width: '0%' },
          { 
            width: width,
            duration: 1.5,
            ease: "power3.out"
          }
        );
      });
    };
    
    // Run animation
    animateSkillBars();
    
    return () => {
      // Cleanup animation when component unmounts
      skillBarsRef.current.forEach((bar) => {
        gsap.killTweensOf(bar);
      });
    };
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4 tracking-tight animate-element">About</h2>
      
      <p className="text-balance leading-relaxed tracking-tight animate-element">
        I'm a passionate developer who works with open-source AI models. My expertise lies in creating, fine-tuning, and implementing machine learning solutions that push the boundaries of what's possible with artificial intelligence.
      </p>
      
      <p className="text-balance leading-relaxed tracking-tight animate-element">
        With a deep understanding of neural networks, natural language processing, and computer vision, I contribute to the democratization of AI by making powerful models accessible to everyone.
      </p>

      <div className="mt-8 animate-element">
        <h3 className="text-xl font-medium mb-4 tracking-tight">Skills</h3>
        
        <div className="space-y-5">
          {skills.map((skill, index) => (
            <div key={index} className="animate-element" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex justify-between mb-1">
                <span className="font-medium tracking-tight">{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  ref={el => el && skillBarsRef.current.push(el)}
                  data-width={`${skill.percentage}%`}
                  className="skill-progress"
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground mt-4 italic">
          Note: These percentages reflect how frequently I use these languages in my work, not necessarily mastery level.
        </p>
      </div>

      <div className="mt-6 animate-element">
        <h3 className="text-xl font-medium mb-4 tracking-tight">My Values</h3>
        <p className="text-balance leading-relaxed mb-4 tracking-tight">
          I care about your experience, not your data. I believe in creating products and experiences that are:
        </p>
        
        <ul className="space-y-2">
          <li className="flex items-start animate-element">
            <span className="mr-2">•</span>
            <span className="tracking-tight">Truly independent with good performance, stability, and security</span>
          </li>
          <li className="flex items-start animate-element">
            <span className="mr-2">•</span>
            <span className="tracking-tight">Organized, compact, and fresh</span>
          </li>
          <li className="flex items-start animate-element">
            <span className="mr-2">•</span>
            <span className="tracking-tight">Clean, calm, personalized, and customizable</span>
          </li>
          <li className="flex items-start animate-element">
            <span className="mr-2">•</span>
            <span className="tracking-tight">Private with no third-party integrations</span>
          </li>
          <li className="flex items-start animate-element">
            <span className="mr-2">•</span>
            <span className="tracking-tight">No bloatware or unnecessary preinstalled applications</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
