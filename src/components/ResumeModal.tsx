import React, { useEffect } from 'react';
import { X, Printer, Download, ExternalLink, MapPin, Mail, Phone, Github, Linkedin, Award, GraduationCap, Briefcase, Code } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EDUCATION, CERTIFICATIONS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#070b16] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar (hidden when printing) */}
        <div className="no-print flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/80 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
              CURRICULUM VITAE · SAMARTH V. SHERKHANE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <a
              href="/Samarth_Sherkhane_Resume.pdf"
              download="Samarth_V_Sherkhane_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF File</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Content */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950 text-slate-100 font-sans space-y-8">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base font-semibold text-cyan-400 mt-1">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-slate-400 mt-2 max-w-xl">
                Passionate about Artificial Intelligence, Machine Learning, Computer Vision, and Software Engineering. Experienced in rapid prototyping, collegiate hackathons, and algorithm design.
              </p>
            </div>

            <div className="flex flex-col text-xs text-slate-300 space-y-1 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.phoneFormatted}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                github.com/sherkhanesamarth24-alt
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-bold flex items-center gap-2 border-b border-slate-800 pb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-bold text-white">{edu.degree}</h3>
                    <p className="text-xs text-slate-300">{edu.institution} · {edu.location}</p>
                    <p className="text-xs text-slate-400 mt-1">{edu.description}</p>
                  </div>
                  <span className="text-xs font-mono text-cyan-300/80 whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-bold flex items-center gap-2 border-b border-slate-800 pb-1">
              <Code className="w-4 h-4" />
              <span>Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-semibold text-slate-200">AI & Machine Learning:</span>
                <p className="text-slate-400 mt-0.5">Machine Learning, Deep Learning, Artificial Intelligence, Computer Vision</p>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Programming Languages:</span>
                <p className="text-slate-400 mt-0.5">Python, C++, C (IBM Certified in C++)</p>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Web Development:</span>
                <p className="text-slate-400 mt-0.5">HTML, CSS, Responsive UI Design</p>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Developer Tools:</span>
                <p className="text-slate-400 mt-0.5">Git, GitHub, VS Code</p>
              </div>
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-bold flex items-center gap-2 border-b border-slate-800 pb-1">
              <Briefcase className="w-4 h-4" />
              <span>Key Projects</span>
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">{proj.title}</h3>
                    <span className="text-xs font-mono text-cyan-300">{proj.category}</span>
                  </div>
                  <p className="text-xs text-slate-300">{proj.shortDescription}</p>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Technologies: {proj.tags.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Hackathons */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-bold flex items-center gap-2 border-b border-slate-800 pb-1">
              <Award className="w-4 h-4" />
              <span>Selected Certifications & Achievements</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS.slice(0, 8).map((cert) => (
                <div key={cert.id} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <div className="font-bold text-slate-200">{cert.title}</div>
                  <div className="text-[11px] text-cyan-400">{cert.issuer} ({cert.year})</div>
                </div>
              ))}
            </div>
          </div>

          {/* Note regarding official file */}
          <div className="no-print p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 space-y-1">
            <span className="font-semibold text-slate-300">Resume File Note:</span>
            <p>
              You can click <strong>Print / Save as PDF</strong> to generate a clean PDF immediately using your browser's print dialog, or place an updated <code>Samarth_Sherkhane_Resume.pdf</code> directly into the <code>/public/</code> directory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
