
import React from 'react';
import { Mail } from 'lucide-react';

const Hire: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4 animate-element">Hire Me!</h2>
      
      <p className="text-balance leading-relaxed animate-element">
        I'm currently available for freelance work, consulting, and full-time positions. If you're interested in working with me, please reach out via email.
      </p>
      
      <div className="border border-secondary rounded-lg p-6 mt-6 animate-element">
        <h3 className="text-xl font-medium mb-4">What I Can Offer</h3>
        
        <ul className="space-y-3">
          <li className="flex items-start animate-element">
            <span className="mr-2">•</span>
            <span>AI model development, training, and fine-tuning</span>
          </li>
          <li className="flex items-start animate-element">
            <span className="mr-2">•</span>
            <span>Dataset creation and curation</span>
          </li>
          <li className="flex items-start animate-element">
            <span className="mr-2">•</span>
            <span>Python, JavaScript, and Rust development</span>
          </li>
          <li className="flex items-start animate-element">
            <span className="mr-2">•</span>
            <span>Machine learning pipeline optimization</span>
          </li>
          <li className="flex items-start animate-element">
            <span className="mr-2">•</span>
            <span>Technical consulting for AI implementation</span>
          </li>
        </ul>
      </div>
      
      <div className="mt-8 animate-element">
        <a 
          href="mailto:contact@marcusridia.com" 
          className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-200"
        >
          <Mail size={18} />
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Hire;
