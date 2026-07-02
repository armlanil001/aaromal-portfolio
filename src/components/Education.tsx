import React from 'react';
import { Verified } from 'lucide-react';

interface AcademicItem {
  degree: string;
  period: string;
  institution: string;
}

interface CertificationItem {
  title: string;
  issuer: string;
}

export const Education: React.FC = () => {
  const academics: AcademicItem[] = [
    {
      degree: 'B.Tech in Computer Science',
      period: '2016 — 2020',
      institution: 'APJ Abdul Kalam Technological University',
    },
    {
      degree: 'Higher Secondary (CS)',
      period: '2013 — 2015',
      institution: 'Kerala State Board',
    },
  ];

  const certifications: CertificationItem[] = [
    {
      title: 'Namaste DSA',
      issuer: 'Advanced Data Structures & Algorithms',
    },
    {
      title: 'Modern Projects with React',
      issuer: 'LinkedIn Learning',
    },
    {
      title: 'TypeScript for Developers',
      issuer: 'LinkedIn Learning',
    },
  ];

  return (
    <section id="education" className="py-32 bg-surface">
      <div className="container max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education / Academics */}
          <div>
            <div className="mb-12">
              <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-4">ACADEMICS</span>
              <h2 className="font-headline-lg text-headline-lg text-primary">Education</h2>
            </div>
            
            <div className="space-y-12">
              {academics.map((item, idx) => (
                <div key={idx} className="relative pl-8 border-l border-primary/20">
                  <div className={`absolute top-0 -left-[5px] w-[9px] h-[9px] rounded-full ${
                    idx === 0 ? 'bg-primary shadow-[0_0_6px_#00dbe9]' : 'bg-white/10'
                  }`}></div>
                  <h3 className={`font-headline-md text-headline-md ${idx === 0 ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {item.degree}
                  </h3>
                  <p className="text-on-surface-variant/60 font-code-sm mb-2">
                    {item.period}
                  </p>
                  <p className="text-on-surface-variant leading-relaxed">
                    {item.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <div className="mb-12">
              <span className="font-label-caps text-label-caps text-tertiary-fixed-dim tracking-widest block mb-4">VALIDATION</span>
              <h2 className="font-headline-lg text-headline-lg text-tertiary-fixed-dim">Certifications</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="glass-card p-6 flex items-center space-x-4">
                  <Verified className="text-tertiary-fixed-dim shrink-0" size={24} />
                  <div>
                    <h4 className="font-label-caps text-label-caps text-primary font-bold mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-[12px] text-on-surface-variant/60">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
