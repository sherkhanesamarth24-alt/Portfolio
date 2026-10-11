import React from 'react';
import { ArrowRight, Linkedin, Github, Mail, Sparkles, Target, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Opportunities: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900/90 via-[#0a0f1d]/90 to-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-xs font-mono text-cyan-300">
              <Compass className="w-3.5 h-3.5" />
              <span>CAREER DIRECTION & INTERNSHIPS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What I'm Looking For
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              {PERSONAL_INFO.lookingFor}
            </p>

            {/* Focus target areas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2.5">
                <Target className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">AI / ML Internships</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2.5">
                <Target className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Computer Vision R&D</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2.5">
                <Target className="w-4 h-4 text-violet-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Software Engineering</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl shadow-lg shadow-cyan-950/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-xl transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>Connect on LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-xl transition-all"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>Explore GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
