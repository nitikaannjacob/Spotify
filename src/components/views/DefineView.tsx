import React from 'react';
import { motion } from 'motion/react';
import { SectionId } from '../../types';

interface DefineViewProps {
  onNavigate: (section: SectionId) => void;
}

export const DefineView: React.FC<DefineViewProps> = ({ onNavigate }) => {
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
          Phase 3: Problem Definition
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
          Define
        </h1>
      </div>

      {/* Problem Space Callout Banner */}
      <div className="p-4 sm:p-5 rounded-xl bg-[#181818] border-l-4 border-[#1ed760] shadow-md">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
          THE PROBLEM SPACE THAT BRINGS YOU TWO TOGETHER IS 'GROUP DISCOVERY'
        </p>
      </div>

      {/* 96% Taste Match Hero Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#181818] border border-white/5 flex flex-col items-center justify-center text-center space-y-6 shadow-2xl relative overflow-hidden">
        {/* Glowing background hint */}
        <div className="absolute w-72 h-72 bg-[#1ed760]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Avatars Pair */}
        <div className="flex items-center gap-6 z-10">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#ec4899] p-1 ring-4 ring-[#1ed760] flex items-center justify-center text-white font-black text-2xl sm:text-3xl shadow-lg">
              N
            </div>
            <span className="text-xs font-bold text-white">Nitika</span>
          </div>

          <span className="text-2xl sm:text-3xl font-bold text-[#1ed760]">+</span>

          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#ec4899] p-1 ring-4 ring-[#1ed760] flex items-center justify-center text-white font-black text-2xl sm:text-3xl shadow-lg">
              N
            </div>
            <span className="text-xs font-bold text-white">Neha</span>
          </div>
        </div>

        {/* Big Taste Match Text */}
        <div className="z-10 space-y-1">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
            96% taste match
          </h2>
          <p className="text-xs sm:text-sm font-medium text-[#a7a7a7]">
            Deeply compatible listening habits identified
          </p>
        </div>
      </div>

      {/* 2x2 How Might We Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
        {/* Card 1 */}
        <div
          onClick={() => onNavigate('ideate')}
          className="p-6 sm:p-8 rounded-2xl bg-[#181818] border border-white/5 hover:border-[#1ed760]/30 transition-all cursor-pointer space-y-2 shadow-lg group"
        >
          <div className="text-xs font-bold uppercase tracking-wider text-[#1ed760]">
            How Might We... (Blend)
          </div>
          <p className="text-sm sm:text-base font-semibold text-white leading-relaxed group-hover:text-[#1ed760] transition-colors">
            How might we combine two people's tastes seamlessly?
          </p>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => onNavigate('ideate')}
          className="p-6 sm:p-8 rounded-2xl bg-[#181818] border border-white/5 hover:border-[#1ed760]/30 transition-all cursor-pointer space-y-2 shadow-lg group"
        >
          <div className="text-xs font-bold uppercase tracking-wider text-[#1ed760]">
            How Might We... (Jam)
          </div>
          <p className="text-sm sm:text-base font-semibold text-white leading-relaxed group-hover:text-[#1ed760] transition-colors">
            How might we let everyone contribute to group listening?
          </p>
        </div>

        {/* Card 3 */}
        <div
          onClick={() => onNavigate('ideate')}
          className="p-6 sm:p-8 rounded-2xl bg-[#181818] border border-white/5 hover:border-[#1ed760]/30 transition-all cursor-pointer space-y-2 shadow-lg group"
        >
          <div className="text-xs font-bold uppercase tracking-wider text-[#1ed760]">
            How Might We... (Made For You)
          </div>
          <p className="text-sm sm:text-base font-semibold text-white leading-relaxed group-hover:text-[#1ed760] transition-colors">
            How might we help discovery?
          </p>
        </div>

        {/* Card 4 */}
        <div
          onClick={() => onNavigate('ideate')}
          className="p-6 sm:p-8 rounded-2xl bg-[#181818] border border-white/5 hover:border-[#1ed760]/30 transition-all cursor-pointer space-y-2 shadow-lg group"
        >
          <div className="text-xs font-bold uppercase tracking-wider text-[#1ed760]">
            How Might We... (Sound Capsule)
          </div>
          <p className="text-sm sm:text-base font-semibold text-white leading-relaxed group-hover:text-[#1ed760] transition-colors">
            How might we turn data into meaning?
          </p>
        </div>
      </div>
    </motion.div>
  );
};
