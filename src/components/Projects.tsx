
import React from 'react';

interface Project {
  name: string;
  description: string;
  technologies: string;
  year: string;
}

const projects: Project[] = [
  {
    name: "LLM Fine-tuning Framework",
    description: "A comprehensive framework for fine-tuning large language models with minimal computational resources.",
    technologies: "Python, PyTorch, Hugging Face Transformers",
    year: "2023"
  },
  {
    name: "Dataset Curation Tool",
    description: "An end-to-end solution for creating, cleaning, and preparing datasets for AI training.",
    technologies: "Python, JavaScript, MongoDB",
    year: "2022"
  },
  {
    name: "Vision-Language Model Explorer",
    description: "An interactive web application to test and explore the capabilities of various vision-language models.",
    technologies: "React, Python, FastAPI",
    year: "2022"
  },
  {
    name: "Diffusion Model Interface",
    description: "A user-friendly interface for generating images using stable diffusion models.",
    technologies: "Rust, JavaScript, WebAssembly",
    year: "2021"
  },
  {
    name: "Embedding Visualization Tool",
    description: "A tool to visualize high-dimensional embeddings from language models.",
    technologies: "Python, JavaScript, WebGL",
    year: "2021"
  },
  {
    name: "AI Model Serving Framework",
    description: "A lightweight framework for serving AI models in production environments.",
    technologies: "Python, Rust, Docker",
    year: "2020"
  }
];

const Projects: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-secondary rounded-lg p-5 hover:border-muted-foreground transition-colors duration-300">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-medium">{project.name}</h3>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>
            
            <p className="text-muted-foreground mb-4">{project.description}</p>
            
            <div className="text-sm text-muted-foreground">
              <span className="text-foreground">Tech: </span>
              {project.technologies}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
