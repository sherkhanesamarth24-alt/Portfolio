import React, { useState } from 'react';
import { Brain, Code, Globe, Wrench, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabIcons: Record<string, React.ElementType> = {
    all: CheckCircle2,
    'ai-ml': Brain,
    languages: Code,
    'web-dev': Globe,
    tools: Wrench,
  };

  const filteredCategories =
    activeTab === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
              TECHNICAL PROFICIENCY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Skills & Core Competencies
            </h2>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category) => {
            const IconComponent = tabIcons[category.id] || Brain;
            return (
              <div key={category.id} className="space-y-4">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <div className="p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-400">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {category.name}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group relative p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-md hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.12)] transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[11px] font-mono text-slate-400">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="text-cyan-400/90 font-mono">Verified Stack</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 group-hover:scale-125 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
