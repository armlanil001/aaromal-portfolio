import React from 'react';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

export const Contact: React.FC = () => {
  const contactMethods: ContactInfo[] = [
    {
      icon: <Phone className="text-primary mb-3" size={24} />,
      label: 'PHONE',
      value: '+91 7907335059',
      href: 'tel:+917907335059',
    },
    {
      icon: <Mail className="text-primary mb-3" size={24} />,
      label: 'EMAIL',
      value: 'aaromalanil@gmail.com',
      href: 'mailto:aaromalanil@gmail.com',
    },
    {
      icon: <Linkedin className="text-primary mb-3" size={24} />,
      label: 'LINKEDIN',
      value: 'linkedin.com/in/aaromalanil',
      href: 'https://linkedin.com/in/aaromalanil',
    },
    {
      icon: <Github className="text-primary mb-3" size={24} />,
      label: 'GITHUB',
      value: 'github.com/armlanil001',
      href: 'https://github.com/armlanil001',
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-surface-container-low">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,rgba(0,219,233,0.03),transparent_60%)] pointer-events-none"></div>

      <div className="container max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">

        <h2 className="font-display text-display text-[2.5rem] md:text-display text-primary mb-8 leading-tight">
          Ready to Build Something Remarkable?
        </h2>

        <p className="font-body-lg text-body-lg text-on-surface-variant/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          I am currently open to new opportunities and relocation. Let's discuss how my technical expertise can contribute to your next high-impact project.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          <a
            className="bg-primary px-10 py-5 text-surface-dim font-label-caps text-label-caps font-bold glow-cyan transition-all w-full md:w-auto text-center hover:brightness-110"
            href="mailto:aaromalanil@gmail.com"
          >
            SEND AN EMAIL
          </a>

          <div className="flex items-center space-x-6">
            <a
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
              href="https://linkedin.com/in/aaromalanil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} />
              <span className="font-label-caps text-label-caps tracking-wider">LINKEDIN</span>
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
              href="https://github.com/armlanil001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              <span className="font-label-caps text-label-caps tracking-wider">GITHUB</span>
            </a>
          </div>
        </div>

        {/* Contact Info Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contactMethods.map((method, idx) => (
            <div
              key={idx}
              className="glass-card p-6 flex flex-col items-center text-center group"
            >
              {method.icon}
              <span className="font-label-caps text-[10px] text-on-surface-variant/60 mb-1 tracking-widest">
                {method.label}
              </span>
              <a
                className="text-primary hover:underline font-medium text-xs md:text-base break-all"
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {method.value}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
