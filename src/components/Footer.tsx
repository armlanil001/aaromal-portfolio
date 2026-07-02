import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-lowest py-8 border-t border-white/5">
      <div className="container max-w-container-max mx-auto px-margin-desktop md:flex md:justify-between md:items-center text-center space-y-4 md:space-y-0">
        <div className="font-code-sm text-code-sm text-primary tracking-wider">
          © 2024 PORTFOLIO. STACKED WITH PRECISION.
        </div>
        
        <div className="flex justify-center space-x-8">
          <a 
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors tracking-widest" 
            href="https://github.com/armlanil001"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a 
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors tracking-widest" 
            href="https://linkedin.com/in/aaromalanil"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a 
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors tracking-widest" 
            href="#"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};
