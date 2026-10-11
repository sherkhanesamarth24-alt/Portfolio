import React, { useEffect, useState } from 'react';

export const BackgroundFX: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#05070e]">
      {/* Subtle mouse-following radial glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
          background: 'radial-gradient(circle, rgba(34,211,238,0.35) 0%, rgba(139,92,246,0.2) 50%, transparent 70%)',
        }}
      />

      {/* Top and side ambient gradients */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[400px] bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[500px] bg-gradient-to-tl from-purple-700/10 via-indigo-600/5 to-transparent blur-[140px]" />

      {/* Subtle digital grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
};
