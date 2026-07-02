import React from 'react';

interface JourneyItem {
  period: string;
  role: string;
  company: string;
  description?: string;
  bullets?: string[];
  isCurrent?: boolean;
}

export const Journey: React.FC = () => {
  const items: JourneyItem[] = [
    {
      period: '2024 — PRES',
      role: 'Software Engineer',
      company: 'Synergy EduLearn Pvt Ltd',
      bullets: [
        'Spearheading a legacy modernisation initiative migrating a large-scale EdTech/LMS platform from vanilla JavaScript to React.',
        'Refactored complex database logic from raw stored procedures to Sequelize ORM.'
      ],
      isCurrent: true,
    },
    {
      period: '2024 — 2025',
      role: 'Full-Stack React Developer',
      company: 'Freelance / Contract',
      description: 'Delivered client projects using React, Node.js, and MongoDB with a focus on performance and responsive design.',
    },
    {
      period: '2023 — 2024',
      role: 'Junior Software Engineer',
      company: 'Softnotions Technologies Pvt Ltd',
      bullets: [
        'Led a cross-functional team of 8 engineers to deliver a MERN-based employee management platform.',
        'Designed technical assessment frameworks and conducted structured interviews.'
      ],
    },
    {
      period: '2022 — 2023',
      role: 'Software Engineering Intern',
      company: 'Brototype',
      description: 'Developed full-cycle MERN stack projects including e-commerce and movie booking platforms.',
    },
  ];

  return (
    <section id="journey" className="py-32 bg-surface-container-lowest">
      <div className="container max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-20">
          <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-4">THE CHRONOLOGY</span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Professional Journey</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-16 relative">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {/* Desktop Period Column */}
              <div className="hidden md:block py-8 text-right">
                <span className={`font-code-sm text-code-sm ${item.isCurrent ? 'text-primary' : 'text-on-surface-variant/60'}`}>
                  {item.period}
                </span>
              </div>
              
              {/* Timeline Body */}
              <div className="relative pl-8 md:pl-0 py-8 border-l border-white/10 md:border-l-0">
                {/* Mobile & Desktop timeline indicator dot */}
                <div className={`absolute top-11 -left-[5px] md:-left-[41px] w-[9px] h-[9px] rounded-full z-10 ${
                  item.isCurrent ? 'bg-primary shadow-[0_0_8px_#00dbe9]' : 'bg-white/20'
                }`}></div>

                {/* Mobile Period inline indicator */}
                <div className="md:hidden mb-2">
                  <span className={`font-code-sm text-xs ${item.isCurrent ? 'text-primary' : 'text-on-surface-variant/60'}`}>
                    {item.period}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h3 className={`font-headline-md text-headline-md ${item.isCurrent ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {item.role}
                  </h3>
                  <p className={`font-label-caps text-label-caps ${item.isCurrent ? 'text-tertiary-fixed-dim' : 'text-on-surface-variant/60'}`}>
                    {item.company}
                  </p>
                </div>
                
                {item.description && (
                  <p className="text-on-surface-variant/80 font-body-md max-w-3xl leading-relaxed">
                    {item.description}
                  </p>
                )}
                
                {item.bullets && (
                  <ul className="space-y-3 text-on-surface-variant/80 font-body-md max-w-3xl">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-primary font-bold">▸</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
