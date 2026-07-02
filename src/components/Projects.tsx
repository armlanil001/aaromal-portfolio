import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import medicoPlusImage from '../assets/MedicoPlus.png';
import iDesignerImage from '../assets/Idesigner.png';

interface Project {
  title: string;
  tags: string[];
  description: string;
  link: string;
  linkLabel: string;
  imageUrl: string;
  status?: 'DEPLOYED' | 'IN_PROGRESS';
}

export const Projects: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects: Project[] = [
    {
      title: 'MedicoPlus',
      tags: ['REACT', 'NODE.JS', 'SIGNALR'],
      description: 'Clinical Management Platform. Led a multi-developer team to deliver real-time dashboards improving coordination by 40%.',
      link: '#',
      linkLabel: 'CASE STUDY',
      imageUrl: medicoPlusImage,
      status: 'DEPLOYED',
    },
    {
      title: 'EduLearn LMS',
      tags: ['REACT', 'POSTGRESQL', 'SEQUELIZE'],
      description: 'Full-stack platform serving 1,000+ active users. Replaced raw SQL with ORM, reducing complexity and improving API response times.',
      link: '#',
      linkLabel: 'SYSTEM ARCHITECTURE',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBytxB_mjvGuK5XXvPvgcz6oGsnfocCqt07jI5NnN4qhUbd4DBJWYLFmb8hOrKxGhV3lpzmkltFQz1qttyZjAlgNFRCcwldoH2Pe83apigK8Ss-umgydoOrLz72IqpnqqyqbfM8EHbTXyHqW_UP43qKZ_bGSr7MJFqHnsHcan_trYtThQ3f7wFLBFYQAjGFgsD7ttJNpi3ubJwu0p_pymXMBFclhwPaLuVygXQWNirMkM_w2EIfQy8U8Wg0PqzLKl_GaiZv-I5cLhYR',
    },
    {
      title: 'Carehomes (UK)',
      tags: ['REACT.JS', 'MONGODB', 'TAILWINDCSS'],
      description: 'Developed room management modules and REST APIs. Reduced UI latency through heavy frontend and backend optimisation.',
      link: '#',
      linkLabel: 'VIEW PROJECT',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCy8GEHb6jMWOkQbm6gf363SyFQ0Iq26D-CVJyq5b_A5z_AAql0z9qWEd_kgH85B7gVsJ35szhzOKWY9BiXO4hVoSmjTyJh8nayohMT_4RdUu2xHHiF7deEbmBwzvtW9Ob4fr_4SbTk1dIxzkJb6UZp5rG9gqkeNtnGhgnJjOTriDs8lq6mGmPY29CYBz1_DXBmyk_bFkNQvtoUk4eFkm5UL5Ed9DAdGWvUMuKctsv9p8-k9qSaOXrcXvLvjcd7hmGKr7kYcy_cE8gG',
    },
    {
      title: 'IDesigner (US)',
      tags: ['REACT.JS', 'JavaScript', 'THREE.JS'],
      description: 'Interactive 2D/3D architectural design platform with real-time canvas rendering, complex state management, and a custom calculation engine; eliminated expensive computation loops, improving smoothness by ~25%.',
      link: '#',
      linkLabel: 'VIEW PROJECT',
      imageUrl: iDesignerImage,
    },
     {
      title: 'Juntos – Employee Management System ',
      tags: ['REACT.JS', 'NODE', 'MONGODB','ELECTRON','TAILWIND','GIT'],
      description: 'Interactive 2D/3D architectural design platform with real-time canvas rendering, complex state management, and a custom calculation engine; eliminated expensive computation loops, improving smoothness by ~25%.',
      link: '#',
      linkLabel: 'VIEW PROJECT',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCy8GEHb6jMWOkQbm6gf363SyFQ0Iq26D-CVJyq5b_A5z_AAql0z9qWEd_kgH85B7gVsJ35szhzOKWY9BiXO4hVoSmjTyJh8nayohMT_4RdUu2xHHiF7deEbmBwzvtW9Ob4fr_4SbTk1dIxzkJb6UZp5rG9gqkeNtnGhgnJjOTriDs8lq6mGmPY29CYBz1_DXBmyk_bFkNQvtoUk4eFkm5UL5Ed9DAdGWvUMuKctsv9p8-k9qSaOXrcXvLvjcd7hmGKr7kYcy_cE8gG',
    },
  ];

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const width = carouselRef.current.offsetWidth;
      // Estimate which slide is current
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const carouselEl = carouselRef.current;
    if (carouselEl) {
      carouselEl.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (carouselEl) {
        carouselEl.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const offset = direction === 'left' ? -400 : 400;
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-32 bg-surface-container-low">
      <div className="container max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-4">PORTFOLIO</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Selected Projects</h2>
          </div>
          <a 
            className="font-label-caps text-label-caps text-primary border-b border-primary/30 pb-1 hover:border-primary transition-all hover:text-primary-fixed-dim" 
            href="https://github.com/armlanil001"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW ALL REPOSITORIES
          </a>
        </div>
        
        {/* Carousel Viewport Wrapper */}
        <div className="relative group/carousel">
          
          {/* Scrollable Container */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-8 pb-8 scroll-smooth"
          >
            {projects.map((proj, idx) => (
              <article 
                key={idx}
                className="glass-card flex-none w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] flex flex-col group snap-start"
              >
                {/* Thumbnail Screen */}
                <div className="h-48 overflow-hidden relative">
                  {proj.status === 'DEPLOYED' && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 border border-emerald-500/10">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> DEPLOYED
                      </span>
                    </div>
                  )}
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                    style={{ backgroundImage: `url('${proj.imageUrl}')` }}
                  ></div>
                </div>
                
                {/* Detail Space */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proj.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="font-code-sm text-[10px] text-primary/60 tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="font-headline-md text-headline-md text-primary mb-4">
                      {proj.title}
                    </h3>
                    
                    <p className="text-on-surface-variant/70 font-body-md mb-8 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                  
                  <a 
                    className="inline-flex items-center space-x-2 text-primary font-label-caps text-label-caps group/link hover:text-primary-fixed-dim" 
                    href={proj.link}
                  >
                    <span>{proj.linkLabel}</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-surface-container-high border border-primary/20 p-2 rounded-full text-primary hover:bg-primary hover:text-surface-dim transition-all hidden md:flex items-center justify-center z-20 shadow-lg"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-surface-container-high border border-primary/20 p-2 rounded-full text-primary hover:bg-primary hover:text-surface-dim transition-all hidden md:flex items-center justify-center z-20 shadow-lg"
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Pagination Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {projects.map((_, idx) => (
              <div 
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'bg-primary w-4' : 'bg-primary/20'
                }`}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};
