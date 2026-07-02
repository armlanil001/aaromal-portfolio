import React from 'react';
import { Laptop, Server, Database, Wrench } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  accentClass: string;
  skills: string[];
}

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: <Laptop className="text-primary" size={24} />,
      accentClass: 'text-primary',
      skills: ['React.js', 'React Native', 'TypeScript', 'Redux Toolkit', 'TailwindCSS', 'JavaScript (ES6+)'],
    },
    {
      title: 'Backend & APIs',
      icon: <Server className="text-tertiary-fixed-dim" size={24} />,
      accentClass: 'text-tertiary-fixed-dim',
      skills: ['Node.js', 'Express.js', 'GraphQL', 'RESTful APIs', 'Microservices', 'WebSockets'],
    },
    {
      title: 'Databases',
      icon: <Database className="text-secondary" size={24} />,
      accentClass: 'text-secondary',
      skills: ['MongoDB', 'PostgreSQL', 'Sequelize ORM', 'SQL'],
    },
    {
      title: 'Dev Tools',
      icon: <Wrench className="text-on-surface-variant" size={24} />,
      accentClass: 'text-on-surface-variant',
      skills: ['Git / GitHub', 'Jira / Agile', 'Technical Mentoring'],
    },
  ];

  return (
    <section id="skills" className="py-32 bg-surface">
      <div className="container max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-20 text-center">
          <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-4">TECH STACK</span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Core Competencies</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {categories.map((cat, index) => (
            <div 
              key={index}
              className="glass-card p-8 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-8">
                  {cat.icon}
                  <h3 className={`font-headline-md text-headline-md ${cat.accentClass}`}>
                    {cat.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className={`skill-tag px-4 py-2 font-code-sm text-code-sm ${cat.accentClass} rounded-[2px] transition-all hover:bg-white/5`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
