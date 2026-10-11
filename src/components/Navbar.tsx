import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      // Section spy
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070e]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark & Initials badge */}
          <a
            href="#home"
            className="flex items-center gap-3 text-slate-100 group whitespace-nowrap shrink-0"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500/20 via-blue-600/30 to-violet-600/30 border border-cyan-500/30 flex items-center justify-center font-bold text-sm tracking-wider text-cyan-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.4)] transition-all">
              {PERSONAL_INFO.initials}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-slate-400 font-mono tracking-wider">
                {PERSONAL_INFO.title}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`whitespace-nowrap shrink-0 transition-colors relative py-1 hover:text-cyan-300 ${
                  activeSection === link.id
                    ? 'text-cyan-300 font-semibold'
                    : 'text-slate-300'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/40 hover:border-cyan-400 rounded-lg shadow-sm hover:shadow-[0_0_14px_rgba(34,211,238,0.25)] transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg shadow-sm hover:shadow-[0_0_16px_rgba(59,130,246,0.35)] transition-all whitespace-nowrap shrink-0"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-cyan-400 hover:bg-slate-800/80 rounded-lg border border-cyan-500/30"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#05070e]/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 mt-2 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-cyan-300 font-semibold pl-2 border-l-2 border-cyan-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-cyan-300 bg-cyan-950/50 border border-cyan-500/40 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg shadow-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
