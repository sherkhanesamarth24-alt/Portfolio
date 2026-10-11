import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for animated titles
  useEffect(() => {
    const currentTitle = PERSONAL_INFO.titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="relative min-h-[85vh] pt-28 pb-16 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero Content */}
        <div className="max-w-3xl flex flex-col space-y-6">
          {/* Availability status badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-medium text-cyan-300 w-fit backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>{PERSONAL_INFO.availability}</span>
          </div>

          {/* Introduction and Main Heading */}
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-mono tracking-widest text-cyan-400 uppercase font-semibold">
              HELLO, I'M
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Samarth Sherkhane
            </h1>
          </div>

          {/* Animated Dynamic Professional Title */}
          <div className="h-10 sm:h-12 flex items-center">
            <span className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              {displayText}
            </span>
            <span className="inline-block w-0.5 h-6 sm:h-8 ml-1 bg-cyan-400 animate-pulse" />
          </div>

          {/* Headline */}
          <h2 className="text-lg sm:text-xl font-medium text-slate-200 text-wrap-balance">
            {PERSONAL_INFO.headline}
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            {PERSONAL_INFO.about}
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl shadow-lg shadow-cyan-900/20 hover:shadow-[0_0_24px_rgba(6,182,212,0.4)] transition-all duration-200 group"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-cyan-300 bg-slate-900/80 hover:bg-slate-800/90 border border-cyan-500/30 hover:border-cyan-400/70 rounded-xl transition-all duration-200 shadow-sm hover:shadow-[0_0_18px_rgba(6,182,212,0.25)] cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Secondary Social and Contact Links */}
          <div className="pt-2 flex items-center gap-4 text-slate-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 hover:text-blue-300 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-violet-500/50 hover:text-violet-300 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <div className="h-4 w-px bg-slate-800" />
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Kolhapur, India</span>
            </div>
          </div>
        </div>

        {/* Verifiable KPI Strip below the hero */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md">
          <div className="flex flex-col p-3">
            <span className="text-xs text-slate-400 mb-1 font-mono">SPECIALIZATION</span>
            <span className="text-base sm:text-lg font-bold text-white">AI & Machine Learning</span>
            <span className="text-xs text-cyan-400 mt-1">DY Patil Tech Univ</span>
          </div>
          <div className="flex flex-col p-3 border-l border-slate-800/60">
            <span className="text-xs text-slate-400 mb-1 font-mono">COMPETITIONS</span>
            <span className="text-base sm:text-lg font-bold text-white tabular-nums">10+ Verified</span>
            <span className="text-xs text-slate-400 mt-1">IIT Madras, BHU, IIIT Nagpur</span>
          </div>
          <div className="flex flex-col p-3 border-l border-slate-800/60">
            <span className="text-xs text-slate-400 mb-1 font-mono">CORE PROJECTS</span>
            <span className="text-base sm:text-lg font-bold text-white tabular-nums">5 Solutions</span>
            <span className="text-xs text-slate-400 mt-1">Vision, Analytics & Agents</span>
          </div>
          <div className="flex flex-col p-3 border-l border-slate-800/60">
            <span className="text-xs text-slate-400 mb-1 font-mono">AVAILABILITY</span>
            <span className="text-base sm:text-lg font-bold text-emerald-400">Immediate</span>
            <span className="text-xs text-slate-400 mt-1">Internships & Hackathons</span>
          </div>
        </div>
      </div>
    </section>
  );
};
