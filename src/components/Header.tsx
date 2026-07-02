import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'journey', 'skills', 'projects', 'education', 'contact'];
      let current = 'about';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near or above the viewport top
          if (rect.top <= 120) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-white/10 h-16">
      <nav className="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop md:px-margin-desktop px-margin-mobile h-full">
        <a 
          href="https://aaromalanil.in" 
          className="font-code-sm text-code-sm font-bold tracking-tighter text-primary hover:brightness-110 transition-all"
        >
          aaromalanil.in
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-label-caps text-label-caps tracking-wider transition-colors pb-1 ${
                activeSection === link.id
                  ? 'text-primary border-b border-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            className="bg-primary px-4 py-2 text-surface-dim font-label-caps text-label-caps font-bold hover:brightness-110 glow-cyan transition-all"
            href="mailto:aaromalanil@gmail.com"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-surface/95 backdrop-blur-2xl z-40 md:hidden animate-fade-in">
          <div className="flex flex-col items-center justify-center space-y-8 h-[calc(100vh-4rem)]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-headline-md text-headline-md transition-colors ${
                  activeSection === link.id ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              className="bg-primary px-8 py-3 text-surface-dim font-label-caps text-label-caps font-bold glow-cyan transition-all w-48 text-center"
              href="mailto:aaromalanil@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
