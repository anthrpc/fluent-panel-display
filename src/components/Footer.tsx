
import React from 'react';

const Footer: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
  
  return (
    <footer className="mt-16 pt-8 border-t border-secondary">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <a 
            href="https://huggingface.co/marcuscedricridia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            huggingface.co/marcuscedricridia
          </a>
        </div>
        
        <div className="mt-4 md:mt-0 text-muted-foreground">
          Made with ❤️ | Last updated: {formattedDate}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
