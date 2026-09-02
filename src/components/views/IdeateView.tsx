import React from 'react';
import { motion } from 'motion/react';
import { SectionId } from '../../types';

interface IdeateViewProps {
  onNavigate: (section: SectionId) => void;
}

export const IdeateView: React.FC<IdeateViewProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
      className="p-6 sm:p-10 max-w-7xl mx-auto space-y-8"
    >
      {/* Header */}
      <div className="space-y-2 pt-2">
        <div className="text-xs font-bold uppercase tracking-wider text-[#1ed760]">
          Generating Solutions
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
          Ideate
        </h1>
      </div>

      {/* Pipeline Callout Banner */}
      <div className="p-4 sm:p-5 rounded-xl bg-[#181818] border-l-4 border-[#1ed760] shadow-md">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
          DATA &rarr; RECOMMENDATION ENGINE &rarr; USER EXPERIENCE
        </p>
      </div>

      {/* Top 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Blend */}
        <div
          onClick={() => onNavigate('prototype')}
          className="p-8 rounded-3xl bg-[#181818] border border-white/5 hover:border-[#1ed760]/30 transition-all cursor-pointer min-h-[260px] flex flex-col justify-between relative overflow-hidden group shadow-xl"
        >
          {/* Green ambient glow bottom right */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#1ed760]/20 rounded-full blur-3xl group-hover:scale-125 transition-transform" />
          
          <div className="space-y-1 z-10">
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              Blend
            </h2>
          </div>

          <div className="space-y-1 text-sm font-medium text-[#a7a7a7] z-10">
            <div>Taste-matching</div>
            <div>Joint playlists</div>
          </div>
        </div>

        {/* Card 2: Jam */}
        <div
          onClick={() => onNavigate('prototype')}
          className="p-8 rounded-3xl bg-[#181818] border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer min-h-[260px] flex flex-col justify-between relative overflow-hidden group shadow-xl"
        >
          {/* Purple ambient glow bottom right */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600/25 rounded-full blur-3xl group-hover:scale-125 transition-transform" />

          <div className="space-y-1 z-10">
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              Jam
            </h2>
          </div>

          <div className="space-y-1 text-sm font-medium text-[#a7a7a7] z-10">
            <div>Shared queue</div>
            <div>Host controls</div>
          </div>
        </div>

        {/* Card 3: Made For You */}
        <div
          onClick={() => onNavigate('prototype')}
          className="p-8 rounded-3xl bg-[#181818] border border-white/5 hover:border-pink-500/30 transition-all cursor-pointer min-h-[260px] flex flex-col justify-between relative overflow-hidden group shadow-xl"
        >
          {/* Colorful soundwave backdrop */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#1ed760]/10 to-pink-500/15 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-48 h-32 opacity-30 group-hover:opacity-50 transition-opacity">
            <svg viewBox="0 0 200 100" className="w-full h-full fill-none stroke-pink-400 stroke-2">
              <path d="M0,50 Q25,10 50,50 T100,50 T150,50 T200,50" />
              <path d="M0,50 Q25,90 50,50 T100,50 T150,50 T200,50" stroke="#1ed760" />
            </svg>
          </div>

          <div className="space-y-1 z-10">
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              Made For You
            </h2>
          </div>

          <div className="space-y-1 text-sm font-medium text-[#a7a7a7] z-10">
            <div>Daily Mixes</div>
            <div>Discover Weekly</div>
          </div>
        </div>
      </div>

      {/* Bottom Large Sound Capsule Card */}
      <div
        onClick={() => onNavigate('prototype')}
        className="p-8 sm:p-12 rounded-3xl bg-[#181818] border border-white/5 hover:border-amber-500/30 transition-all cursor-pointer min-h-[220px] flex flex-col justify-between relative overflow-hidden group shadow-xl"
      >
        {/* Architectural neon mesh / grid visual */}
        <div className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neon-wireframe" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 40 M 0 0 L 40 40" fill="none" stroke="#f59e0b" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neon-wireframe)" />
          </svg>
        </div>

        <div className="z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight">
            Sound Capsule
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 z-10 pt-6">
          <span className="px-5 py-2 rounded-full bg-[#282828] text-white text-xs sm:text-sm font-semibold border border-white/5">
            Play counts
          </span>
          <span className="px-5 py-2 rounded-full bg-[#282828] text-white text-xs sm:text-sm font-semibold border border-white/5">
            Fandom score
          </span>
        </div>
      </div>
    </motion.div>
  );
};
