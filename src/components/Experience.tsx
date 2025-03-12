
import React from 'react';

interface ExperienceItem {
  organization: string;
  role: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    organization: "Open AI Models Collective",
    role: "AI Research Contributor",
    period: "2022 - Present",
    description: [
      "Contributed to the development of large language models and vision-language models",
      "Collaborated on model training optimization techniques",
      "Participated in fine-tuning models for specific downstream tasks"
    ]
  },
  {
    organization: "HuggingFace",
    role: "Dataset Curator",
    period: "2021 - Present",
    description: [
      "Created and maintained high-quality datasets for training AI models",
      "Developed data cleaning and preprocessing pipelines",
      "Collaborated with researchers to design datasets for specific AI tasks"
    ]
  },
  {
    organization: "Open Source AI Initiative",
    role: "Lead Developer",
    period: "2020 - 2022",
    description: [
      "Led development of open source AI tools and utilities",
      "Implemented efficient APIs for model inference",
      "Mentored junior developers in AI programming techniques"
    ]
  },
  {
    organization: "AI Research Lab",
    role: "Research Assistant",
    period: "2019 - 2020",
    description: [
      "Assisted in conducting experiments with neural network architectures",
      "Implemented research papers in Python using PyTorch and TensorFlow",
      "Co-authored publications on machine learning techniques"
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l border-secondary pl-6 relative">
            <div className="absolute w-3 h-3 bg-foreground rounded-full -left-[6.5px] top-1.5"></div>
            
            <h3 className="text-xl font-medium">{exp.organization}</h3>
            <div className="flex items-center justify-between mt-1">
              <p className="text-muted-foreground">{exp.role}</p>
              <p className="text-sm text-muted-foreground">{exp.period}</p>
            </div>
            
            <ul className="mt-4 space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{item}</span>
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
