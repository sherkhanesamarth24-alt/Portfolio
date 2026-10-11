import React, { useState, useEffect, useRef } from 'react';
import { X, ExternalLink, Github, CheckCircle, AlertTriangle, Play, Pause, Camera, Volume2, ShieldAlert } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Simulator states
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'simulation'>('overview');
  
  // Real-time camera state
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  // Gesture simulation state
  const [gestureState, setGestureState] = useState<'open_palm' | 'pinch' | 'point'>('open_palm');
  const [volumeLevel, setVolumeLevel] = useState(65);

  // XAU simulation timeframe
  const [timeframe, setTimeframe] = useState<'1D' | '1W' | '1M'>('1D');

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Handle camera stream cleanup
  useEffect(() => {
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  if (!project) return null;

  const toggleWebcam = async () => {
    if (isCameraActive) {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
      setIsCameraActive(false);
    } else {
      setCameraError(null);
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setIsCameraActive(true);
        }
      } catch (err: any) {
        setCameraError('Camera access unavailable or declined. Using simulated detection feed.');
        setIsCameraActive(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#070b16] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Visual Showcase */}
          <div className="relative aspect-video sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b16] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex border-b border-slate-800">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'border-cyan-400 text-cyan-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Project Specifications
            </button>
            <button
              onClick={() => setActiveTab('simulation')}
              className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'simulation'
                  ? 'border-cyan-400 text-cyan-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Play className="w-3 h-3" />
              <span>Interactive Architecture Preview</span>
            </button>
          </div>

          {activeTab === 'overview' ? (
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Project Overview</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Problem vs Solution Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <h5 className="text-xs font-semibold text-rose-300 mb-1 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Problem Statement</span>
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <h5 className="text-xs font-semibold text-cyan-300 mb-1 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Engineered Solution</span>
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-3">Key Features & Modules</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/50 border border-slate-800/70 text-xs text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Tags */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-cyan-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Interactive Simulation Pane */
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              {project.interactiveType === 'detection' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-300">
                      <span className="font-semibold text-cyan-300">Live Camera Stream Mode:</span>{' '}
                      Test webcam connection or simulated detection canvas.
                    </div>
                    <button
                      onClick={toggleWebcam}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>{isCameraActive ? 'Stop Camera' : 'Start Camera'}</span>
                    </button>
                  </div>

                  {cameraError && (
                    <p className="text-xs text-amber-400 bg-amber-950/30 border border-amber-800/50 p-2 rounded-lg">
                      {cameraError}
                    </p>
                  )}

                  <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-cyan-500/30 flex items-center justify-center">
                    {isCameraActive ? (
                      <>
                        <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
                        {/* Overlay detection bounding box simulation */}
                        <div className="absolute top-1/4 left-1/3 w-1/3 h-1/2 border-2 border-cyan-400 rounded-lg pointer-events-none animate-pulse flex flex-col justify-between p-2">
                          <span className="bg-cyan-950/80 text-cyan-300 text-[10px] font-mono px-1.5 py-0.5 rounded self-start">
                            Person: 96.4%
                          </span>
                          <span className="text-[9px] text-cyan-400 font-mono self-end">
                            CAM_FEED_ACTIVE
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
                        <img
                          src={project.image}
                          alt="Detection visual"
                          className="absolute inset-0 w-full h-full object-cover opacity-40"
                        />
                        <div className="relative z-10 max-w-sm space-y-2 bg-slate-900/90 p-4 rounded-xl border border-slate-700">
                          <p className="text-xs font-semibold text-cyan-300">
                            Computer Vision Detection Pipeline
                          </p>
                          <p className="text-[11px] text-slate-300">
                            Processes RGB video matrices, isolates bounding anchors, and computes confidence scores.
                          </p>
                          <div className="flex justify-center gap-3 pt-2 text-[10px] font-mono text-cyan-400">
                            <span>FPS: 30</span>
                            <span>·</span>
                            <span>Model: YOLO / SSD</span>
                            <span>·</span>
                            <span>Latency: 32ms</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {project.interactiveType === 'market' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-bold text-white">XAU/USD Analytical View</span>
                      <span className="text-xs text-emerald-400 font-mono ml-2">$2,345.80 (+0.53%)</span>
                    </div>
                    <div className="flex gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
                      {(['1D', '1W', '1M'] as const).map((tf) => (
                        <button
                          key={tf}
                          onClick={() => setTimeframe(tf)}
                          className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                            timeframe === tf ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {tf}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                    <div className="flex justify-between text-xs text-slate-400 font-mono">
                      <span>RSI: 58.4 (Neutral-Bullish)</span>
                      <span>EMA (50): $2,332.10</span>
                      <span>EMA (200): $2,310.45</span>
                    </div>

                    <div className="h-32 flex items-end gap-1.5 pt-4 pb-1 border-b border-slate-800">
                      {[42, 48, 55, 52, 60, 68, 64, 75, 72, 82, 88, 85, 92].map((height, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                          <div
                            style={{ height: `${height}%` }}
                            className={`w-full rounded-t transition-all ${
                              i >= 8 ? 'bg-cyan-500/80' : 'bg-blue-600/60'
                            }`}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Disclaimer Banner */}
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-amber-950/30 border border-amber-800/40 text-[11px] text-amber-300">
                      <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
                      <span>
                        <strong>Academic Inquiry Note:</strong> This project is an analytical exploration of machine learning and time-series concepts. It does not provide financial advice, trading signals, or profit guarantees.
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {project.interactiveType === 'mplad' && (
                <div className="space-y-4">
                  <div className="text-xs text-slate-300">
                    <span className="font-semibold text-cyan-300">Constituency Audit Simulation:</span>{' '}
                    Evaluating milestone completion vs fiscal allocation variances.
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400 font-mono">TOTAL ALLOCATED</span>
                      <p className="text-base font-bold text-white mt-0.5">₹ 25.0 Cr</p>
                      <span className="text-[10px] text-slate-500">FY 2024-25</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400 font-mono">VERIFIED DISBURSED</span>
                      <p className="text-base font-bold text-cyan-300 mt-0.5">₹ 19.4 Cr</p>
                      <span className="text-[10px] text-cyan-400/80">77.6% Milestones</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400 font-mono">ANOMALY INDEX</span>
                      <p className="text-base font-bold text-amber-400 mt-0.5">2 Flagged</p>
                      <span className="text-[10px] text-amber-400/80">Timeline Variance</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
                    <span className="text-[11px] font-semibold text-slate-300">Audit Anomaly Log:</span>
                    <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800/80 text-[11px]">
                      <span className="text-slate-200">Sector 4 Community Solar Installation</span>
                      <span className="text-amber-400 font-mono">Disbursement Lead Time &gt; 90 Days</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800/80 text-[11px]">
                      <span className="text-slate-200">Rural Drainage Canal Widening</span>
                      <span className="text-cyan-400 font-mono">Milestone Status: Verified Active</span>
                    </div>
                  </div>
                </div>
              )}

              {project.interactiveType === 'gesture' && (
                <div className="space-y-4">
                  <div className="text-xs text-slate-300">
                    <span className="font-semibold text-cyan-300">OpenCV Hand Tracking Simulator:</span>{' '}
                    Simulating 21 hand landmarks and gesture state mapping.
                  </div>

                  <div className="flex gap-2">
                    {(['open_palm', 'pinch', 'point'] as const).map((st) => (
                      <button
                        key={st}
                        onClick={() => {
                          setGestureState(st);
                          if (st === 'pinch') setVolumeLevel((prev) => Math.max(10, prev - 20));
                          if (st === 'point') setVolumeLevel((prev) => Math.min(100, prev + 20));
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                          gestureState === st
                            ? 'bg-cyan-600 text-white'
                            : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                      >
                        Gesture: {st.replace('_', ' ').toUpperCase()}
                      </button>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-xs font-semibold text-white">System Volume Mapping</div>
                        <div className="text-[11px] text-slate-400">
                          Current Action: {gestureState === 'open_palm' ? 'Standby' : gestureState === 'pinch' ? 'Volume Decrement' : 'Volume Increment'}
                        </div>
                      </div>
                    </div>
                    <div className="w-40 flex items-center gap-2">
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
                          style={{ width: `${volumeLevel}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono text-cyan-300">{volumeLevel}%</span>
                    </div>
                  </div>
                </div>
              )}

              {project.interactiveType === 'voice' && (
                <div className="space-y-4">
                  <div className="text-xs text-slate-300">
                    <span className="font-semibold text-cyan-300">Conversational Pipeline Demo:</span>{' '}
                    Automated voice agent dialogue simulation.
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                      <span className="text-[10px] text-cyan-400 font-mono">CALLER:</span>
                      <p className="text-slate-200 mt-1">"Hi, I need assistance tracking my registered project application status."</p>
                    </div>
                    <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-xs">
                      <span className="text-[10px] text-cyan-300 font-mono">AI AGENT:</span>
                      <p className="text-cyan-100 mt-1">
                        "I can certainly help you with that. Please provide your application ID or registered contact number, and I will query the active database."
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 font-mono">
                    <span>STATUS: READY</span>
                    <span>INTENT: STATUS_INQUIRY</span>
                    <span>LATENCY: 420ms</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800/80 bg-slate-900/60 backdrop-blur-md">
          <div className="text-xs text-slate-400">
            Source repository on GitHub
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
