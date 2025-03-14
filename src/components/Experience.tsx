
import React from 'react';

interface ExperienceItem {
  organization: string;
  role: string;
  period: string;
  description: string[];
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
    ]
  },
  {
    organization: "Newstar Research Asia",
    role: "AI Model Developer",
    period: "2022 - 2023",
    description: [
      "Developed and optimized custom language models for specific domains",
      "Fine-tuned pre-trained models for various downstream tasks",
      "Collaborated with research teams to implement novel architectures"
    ]
  },
  {
    organization: "Aigle",
    role: "ML Engineer",
    period: "2021 - 2022",
    description: [
      "Built and deployed machine learning models for production use",
      "Optimized inference speed and resource utilization",
      "Implemented continuous integration for model updates"
    ]
  },
  {
    organization: "Independent Research",
    role: "AI Hobbyist & Contributor",
    period: "2020 - Present",
    description: [
      "Experimented with merging various LLMs and documenting results",
      "Contributed to Tagalog language models in the 922 Narra project",
      "Shared findings through technical blogs and community forums"
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6 tracking-tight animate-element">Experience</h2>
      
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l border-secondary pl-6 relative animate-element">
            <div className="absolute w-3 h-3 bg-foreground rounded-full -left-[6.5px] top-1.5"></div>
            
            <h3 className="text-xl font-medium tracking-tight">{exp.organization}</h3>
            <div className="flex items-center justify-between mt-1">
              <p className="text-muted-foreground tracking-tight">{exp.role}</p>
              <p className="text-sm text-muted-foreground">{exp.period}</p>
            </div>
            
            <ul className="mt-4 space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start animate-element" style={{animationDelay: `${i * 0.1}s`}}>
                  <span className="mr-2">•</span>
                  <span className="tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
