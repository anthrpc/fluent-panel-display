
import React from 'react';

interface Project {
  name: string;
  description: string;
  technologies: string;
  year: string;
  link?: string;
}

const projects: Project[] = [
  {
    name: "Atlas Desktop Partner",
    description: "A local LLM assistant that runs entirely on your computer, providing ChatGPT-like capabilities but with faster response times and complete privacy.",
    technologies: "Python, C++, GGML, React",
    year: "2023",
    link: "https://atlasbonfire.netlify.app"
  },
  {
    name: "Digital Guardian",
    description: "A parental control application that monitors children's desktop activity through periodic screenshots, helping parents ensure online safety.",
    technologies: "Python, PyQt, OpenCV, PyInstaller",
    year: "2022"
  },
  {
    name: "Letterbox",
    description: "A web application that enables users to send anonymous messages to specific recipients, providing a platform for honest communication without revealing identity.",
    technologies: "Python, Flask, SQLite, Bootstrap",
    year: "2022",
    link: "https://saintlike.pythonanywhere.com/"
  },
  {
    name: "ParrotGrabber",
    description: "A web tool that simplifies batch downloading files from Hugging Face Hub. It allows users to specify repositories and select specific files or file extensions for download in one go.",
    technologies: "Python, Flask, Selenium, Hugging Face Hub API",
    year: "2022",
    link: "https://github.com/anthrpc/ParrotGrabber"
  }
];

const Projects: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 tracking-tight animate-element">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-secondary rounded-lg p-5 hover:border-muted-foreground transition-colors duration-300 animate-element" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-medium tracking-tight">
                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>
            
            <p className="text-muted-foreground mb-4 tracking-tight">{project.description}</p>
            
            <div className="text-sm text-muted-foreground">
              <span className="text-foreground tracking-tight">Tech: </span>
              {project.technologies}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
