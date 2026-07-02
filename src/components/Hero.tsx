import React from 'react';
import { ArrowRight, Code, ChevronDown, Download } from 'lucide-react';
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiTailwindcss,
  SiGraphql
} from 'react-icons/si';
import LogoLoop from './LogoLoop';
import aaromalImage from '../assets/Aaromal.png';

const techLogos = [
  { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
  { node: <SiJavascript className="text-[#F7DF1E]" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiMongodb className="text-[#47A248]" />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiReact className="text-[#61DAFB] brightness-90" />, title: "React Native", href: "https://reactnative.dev" },
  { node: <SiPostgresql className="text-[#336791]" />, title: "PostgreSQL / SQL", href: "https://www.postgresql.org" },
  { node: <SiGit className="text-[#F05032]" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiTailwindcss className="text-[#38BDF8]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiGraphql className="text-[#E10098]" />, title: "GraphQL", href: "https://graphql.org" },
];

// Alternative with image sources
export const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-surface"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,219,233,0.05),transparent_70%)] pointer-events-none"></div>

      <div className="container max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 mb-6">
              <span className="h-[1px] w-12 bg-primary"></span>
              <span className="font-label-caps text-label-caps text-primary uppercase tracking-[0.2em]">
                 Frontend | React | JS | TS | MERN
              </span>
            </div>

            <h1 className="font-display text-display text-[2.75rem] md:text-display text-primary mb-2 leading-none">
              Aaromal Anil
            </h1>

            <h2 className="font-headline-md text-headline-md text-on-surface-variant mb-8 font-normal">
              Sr. Software Engineer
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant/80 max-w-2xl leading-relaxed mb-10">
              I see software development as a balance between engineering and creativity. Every feature is an opportunity to simplify complexity, every optimization is a chance to improve user experience, and every line of code is written with maintainability in mind. Driven by curiosity and continuous learning, I enjoy building modern applications that are fast, scalable, and genuinely useful.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-primary px-8 py-4 text-surface-dim font-label-caps text-label-caps font-bold glow-cyan transition-all flex items-center space-x-2 hover:brightness-110"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="https://github.com/armlanil001"
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-border px-8 py-4 text-primary font-label-caps text-label-caps font-bold hover:bg-primary/10 transition-all flex items-center space-x-2"
              >
                <Code size={16} />
                <span>GITHUB</span>
              </a>
              <a
                href="/Aaromal_Anil_Resume.docx"
                download="Aaromal_Anil_Resume.docx"
                className="ghost-border px-8 py-4 text-primary font-label-caps text-label-caps font-bold hover:bg-primary/10 transition-all flex items-center space-x-2"
              >
                <Download size={16} />
                <span>RESUME</span>
              </a>
            </div>
          </div>

          {/* Right Column: Creative Composition */}
          <div className="relative flex items-center justify-center gap-6 w-full max-w-[580px] mx-auto">
            {/* Primary Anime Illustration */}
            <div className="relative z-10 flex-1 aspect-square rounded-xl overflow-hidden border border-primary/20 shadow-2xl">
              <img
                alt="Anime illustration of Aaromal Anil"
                className="w-full h-full object-cover"
                src={aaromalImage}
              />
            </div>

            {/* Vertical Tech Logos Loop on the right side of the image */}
            <div className="relative z-10 h-[320px] w-[50px] md:h-[400px] md:w-[60px] flex-shrink-0 flex items-center justify-center overflow-hidden">
              <LogoLoop
                logos={techLogos}
                direction="up"
                speed={50}
                logoHeight={40}
                gap={24}
                fadeOut
                fadeOutColor="#0b1326"
                scaleOnHover
                ariaLabel="Technology partners"
              />
            </div>

            {/* Decorative Glow Element */}
            <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center">
        <span className="font-label-caps text-[10px] text-on-surface-variant/40 mb-2">SCROLL_DOWN</span>
        <ChevronDown className="text-on-surface-variant/40" size={16} />
      </div>
    </section>
  );
};
