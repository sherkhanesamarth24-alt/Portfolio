import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');

    // Simulate sending message with realistic processing
    setTimeout(() => {
      // Create mailto fallback link and notify user
      const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Open mail client
      window.location.href = mailtoUrl;

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
            Contact & Connect
          </h2>
          <p className="text-sm text-slate-300 mt-2 max-w-xl">
            Have an internship opening, hackathon collaboration, or software opportunity? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-md space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 group-hover:text-cyan-300 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400">EMAIL</span>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors break-all">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-500/30 text-blue-400 group-hover:text-blue-300 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400">PHONE</span>
                    <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {PERSONAL_INFO.phoneFormatted}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60">
                  <div className="p-2.5 rounded-lg bg-violet-950/40 border border-violet-500/30 text-violet-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400">LOCATION</span>
                    <p className="text-sm font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-xs font-mono text-slate-400 block mb-3">
                  EXTERNAL PROFILES
                </span>
                <div className="flex gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white hover:border-cyan-500/50 transition-all"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white hover:border-blue-500/50 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-md">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    SUBJECT / PURPOSE
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. AI/ML Internship Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Feedback status messages */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-950/40 border border-rose-800/50 text-xs text-rose-300">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-xs text-emerald-300">
                    <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>
                      Message prepared! Your native mail client has been opened to dispatch directly to {PERSONAL_INFO.email}.
                    </span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-cyan-950/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {status === 'submitting' ? 'Dispatching...' : 'Send Message'}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
