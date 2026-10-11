import React from 'react';
import { GraduationCap, Code, Cpu, Trophy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const stats = [
    {
      icon: GraduationCap,
      label: 'Academic Track',
      value: 'B.Tech AI & ML',
      subtext: 'DY Patil Technical University',
      color: 'text-cyan-400',
    },
    {
      icon: Trophy,
      label: 'Hackathons & Contests',
      value: '10+ Events',
      subtext: 'IIT Madras, BHU, IIIT & IIM Nagpur',
      color: 'text-blue-400',
    },
    {
      icon: Cpu,
      label: 'Focus Areas',
      value: 'Computer Vision',
      subtext: 'Deep Learning & Predictive Analytics',
      color: 'text-violet-400',
    },
    {
      icon: Code,
      label: 'Primary Stack',
      value: 'Python & C++',
      subtext: 'Data structures, models & vision',
      color: 'text-teal-400',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            BACKGROUND & OBJECTIVE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-md shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 opacity-80" />

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                {PERSONAL_INFO.about}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-300">Location:</span>
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-300">Education:</span>
                  <span>B.Tech in Artificial Intelligence & Machine Learning</span>
                </div>
              </div>
            </div>

            {/* Core Values / Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <h3 className="text-sm font-semibold text-cyan-300 mb-1.5">
                  Applied Engineering
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Focusing on turning theoretical ML models and neural architectures into functioning, real-world desktop and web applications.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <h3 className="text-sm font-semibold text-violet-300 mb-1.5">
                  Competitive Drive
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Consistently testing skills at premier collegiate hackathons, algorithmic contests (Shaastra, TantraFiesta), and technical CTFs.
                </p>
              </div>
            </div>
          </div>

          {/* Verifiable Stats & Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all group flex items-start gap-4"
                >
                  <div className={`p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 ${item.color} group-hover:scale-105 transition-transform shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-mono">{item.label}</span>
                    <span className="text-lg font-bold text-white tracking-tight mt-0.5">
                      {item.value}
                    </span>
                    <span className="text-xs text-slate-400 mt-1">{item.subtext}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
