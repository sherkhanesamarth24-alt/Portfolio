import React, { useState } from 'react';
import { Award, ExternalLink, ShieldCheck, Flag, BookOpen, Users } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hackathon' | 'course' | 'leadership' | 'competition'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Certifications' },
    { id: 'hackathon', label: 'Hackathons & AI Challenges' },
    { id: 'competition', label: 'Contests & CTFs' },
    { id: 'course', label: 'Verified Courses' },
    { id: 'leadership', label: 'Campus Leadership' },
  ];

  const filteredCerts = CERTIFICATIONS.filter((c) => {
    if (activeFilter === 'all') return true;
    return c.type === activeFilter;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'hackathon':
        return Flag;
      case 'competition':
        return Award;
      case 'course':
        return BookOpen;
      case 'leadership':
        return Users;
      default:
        return ShieldCheck;
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
              HONORS & ACCREDITATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Certifications & Hackathons
            </h2>
          </div>

          {/* Filter segment tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md overflow-x-auto max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => {
            const Icon = getTypeIcon(cert.type);
            return (
              <div
                key={cert.id}
                className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-md hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {cert.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-400/90 mt-1">
                      {cert.issuer}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verify Certificate</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-500/70" />
                      <span>Verified Collegiate Record</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
