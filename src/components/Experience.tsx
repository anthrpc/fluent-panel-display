
import React from 'react';
import { Calendar, Briefcase, Code } from 'lucide-react';

interface ExperienceItem {
  organization: string;
  role: string;
  period: string;
  description: string[];
  tech?: string[];
}

const experiences: ExperienceItem[] = [
  {
    organization: "Kaleido Singapore",
    role: "Dataset Specialist",
    period: "2023 - Present",
    description: [
      "Curated and preprocessed datasets for computer vision and NLP models",
      "Developed data cleaning pipelines to ensure high-quality training data",
      "Implemented data augmentation techniques to improve model robustness"
    ],
    tech: ["Python", "TensorFlow", "PyTorch", "Pandas"]
  },
  {
    organization: "Newstar Research Asia",
    role: "AI Model Developer",
    period: "2022 - 2023",
    description: [
      "Developed and optimized custom language models for specific domains",
      "Fine-tuned pre-trained models for various downstream tasks",
      "Collaborated with research teams to implement novel architectures"
    ],
    tech: ["Python", "PyTorch", "Hugging Face", "ONNX"]
  },
  {
    organization: "Aigle",
    role: "ML Engineer",
    period: "2021 - 2022",
    description: [
      "Built and deployed machine learning models for production use",
      "Optimized inference speed and resource utilization",
      "Implemented continuous integration for model updates"
    ],
    tech: ["Python", "TensorFlow", "Docker", "Kubernetes"]
  },
  {
    organization: "Independent Research",
    role: "AI Hobbyist & Contributor",
    period: "2020 - Present",
    description: [
      "Experimented with merging various LLMs and documenting results",
      "Contributed to Tagalog language models in the 922 Narra project",
      "Shared findings through technical blogs and community forums"
    ],
    tech: ["Python", "Rust", "JavaScript", "Zig"]
  }
];

const Experience: React.FC = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-8 tracking-tight animate-element">Experience</h2>
      
      <div className="space-y-12 w-full">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-secondary/20 rounded-lg p-6 hover:bg-secondary/30 transition-colors duration-200 animate-element w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3 className="text-xl font-medium tracking-tight">{exp.organization}</h3>
                <p className="text-muted-foreground tracking-tight mt-1">{exp.role}</p>
              </div>
              <div className="flex items-center mt-2 sm:mt-0">
                <Calendar size={16} className="mr-1 text-primary/70" />
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex items-center mb-3">
                <Briefcase size={16} className="mr-2 text-primary/70" />
                <p className="text-sm font-medium">Responsibilities</p>
              </div>
              
              <ul className="space-y-2 ml-2 pl-4 border-l border-secondary">
                {exp.description.map((item, i) => (
                  <li key={i} className="animate-element" style={{animationDelay: `${i * 0.1}s`}}>
                    <span className="tracking-tight text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {exp.tech && (
              <div className="mt-6">
                <div className="flex items-center mb-3">
                  <Code size={16} className="mr-2 text-primary/70" />
                  <p className="text-sm font-medium">Technologies</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground cursor-pointer transition-colors duration-200 hover:bg-secondary/80 hover:text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
