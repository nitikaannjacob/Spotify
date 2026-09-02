import React from 'react';
import { motion } from 'motion/react';
import { Play, Heart, MoreHorizontal, Clock, HelpCircle } from 'lucide-react';
import { SectionId } from '../../types';

interface ProblemViewProps {
  onNavigate: (section: SectionId) => void;
}

export const ProblemView: React.FC<ProblemViewProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
      className="p-6 sm:p-10 max-w-7xl mx-auto space-y-8"
    >
      {/* Header / Hero Playlist Style */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 pt-4">
        {/* Album Artwork Cover - Bulb */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden shrink-0 border border-white/20">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Hand-drawn style lightbulb graphic */}
            <div className="w-28 h-28 rounded-full border-4 border-black relative flex items-center justify-center bg-white shadow-lg">
              <span className="text-5xl font-black text-red-500 select-none">?</span>
              <div className="absolute -bottom-3 w-12 h-4 bg-yellow-400 border-2 border-black rounded" />
              <div className="absolute -bottom-5 w-8 h-2 bg-gray-600 rounded" />
            </div>
            {/* Spark lines */}
            <div className="absolute top-2 left-4 text-orange-500 font-bold text-xl">✦</div>
            <div className="absolute top-2 right-4 text-red-500 font-bold text-xl">✦</div>
            <div className="absolute bottom-6 left-2 text-yellow-500 font-bold text-lg">✦</div>
            <div className="absolute bottom-6 right-2 text-orange-500 font-bold text-lg">✦</div>
          </div>
        </div>

        {/* Info Column */}
        <div className="space-y-2 flex-1">
          <div className="text-xs font-bold uppercase tracking-wider text-[#b3b3b3]">
            Phase 2
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none">
            Problem
          </h1>
          <p className="text-base sm:text-lg text-[#e0e0e0] font-medium pt-1">
            What was missing from the listening experience?
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#a7a7a7] pt-2 font-medium">
            <span className="text-white font-bold flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#1ed760] inline-flex items-center justify-center text-[8px] text-black font-black">S</span>
              Spotify Design Team
            </span>
            <span>•</span>
            <span>4 Core Issues</span>
            <span>•</span>
            <span>User Research Data</span>
          </div>
        </div>
      </div>

      {/* Action Row */}
      <div className="flex items-center gap-6 py-2">
        <button
          onClick={() => onNavigate('empathize')}
          className="w-14 h-14 rounded-full bg-[#1ed760] hover:bg-[#1fdf64] hover:scale-105 active:scale-95 transition-all text-black flex items-center justify-center shadow-lg cursor-pointer"
        >
          <Play className="w-6 h-6 fill-current text-black ml-1" />
        </button>
        <button className="text-[#a7a7a7] hover:text-white transition-colors">
          <Heart className="w-8 h-8" />
        </button>
        <button className="text-[#a7a7a7] hover:text-white transition-colors">
          <MoreHorizontal className="w-8 h-8" />
        </button>
      </div>

      {/* Issues Tracklist Table */}
      <div className="w-full">
        <div className="grid grid-cols-12 text-xs font-bold uppercase tracking-wider text-[#a7a7a7] pb-3 border-b border-[#282828] px-4">
          <div className="col-span-1">#</div>
          <div className="col-span-10">Issue</div>
          <div className="col-span-1 flex justify-end">
            <Clock className="w-4 h-4" />
          </div>
        </div>

        <div className="divide-y divide-white/5">
          {/* Issue 1 */}
          <div className="grid grid-cols-12 py-4 px-4 hover:bg-[#282828]/50 rounded-lg transition-colors group">
            <div className="col-span-1 text-sm font-semibold text-[#a7a7a7] group-hover:text-white flex items-center">
              1
            </div>
            <div className="col-span-10 space-y-0.5">
              <div className="text-base font-bold text-white group-hover:text-[#1ed760] transition-colors">
                Sharing
              </div>
              <div className="text-xs sm:text-sm text-[#a7a7a7]">
                Sharing individual songs didn't create a shared experience.
              </div>
            </div>
            <div className="col-span-1" />
          </div>

          {/* Issue 2 */}
          <div className="grid grid-cols-12 py-4 px-4 hover:bg-[#282828]/50 rounded-lg transition-colors group">
            <div className="col-span-1 text-sm font-semibold text-[#a7a7a7] group-hover:text-white flex items-center">
              2
            </div>
            <div className="col-span-10 space-y-0.5">
              <div className="text-base font-bold text-white group-hover:text-[#1ed760] transition-colors">
                Control
              </div>
              <div className="text-xs sm:text-sm text-[#a7a7a7]">
                Group listening had no fairness mechanism.
              </div>
            </div>
            <div className="col-span-1" />
          </div>

          {/* Issue 3 */}
          <div className="grid grid-cols-12 py-4 px-4 hover:bg-[#282828]/50 rounded-lg transition-colors group">
            <div className="col-span-1 text-sm font-semibold text-[#a7a7a7] group-hover:text-white flex items-center">
              3
            </div>
            <div className="col-span-10 space-y-0.5">
              <div className="text-base font-bold text-white group-hover:text-[#1ed760] transition-colors">
                Discovery
              </div>
              <div className="text-xs sm:text-sm text-[#a7a7a7]">
                Huge music catalogue made it hard to decide.
              </div>
            </div>
            <div className="col-span-1" />
          </div>

          {/* Issue 4 */}
          <div className="grid grid-cols-12 py-4 px-4 hover:bg-[#282828]/50 rounded-lg transition-colors group">
            <div className="col-span-1 text-sm font-semibold text-[#a7a7a7] group-hover:text-white flex items-center">
              4
            </div>
            <div className="col-span-10 space-y-0.5">
              <div className="text-base font-bold text-white group-hover:text-[#1ed760] transition-colors">
                Data
              </div>
              <div className="text-xs sm:text-sm text-[#a7a7a7]">
                Listening data existed but was invisible.
              </div>
            </div>
            <div className="col-span-1" />
          </div>
        </div>
      </div>

      {/* Impact Scope Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#181818] border border-white/5 space-y-4">
        <div className="text-xs font-extrabold uppercase tracking-wider text-[#a7a7a7]">
          Impact Scope
        </div>
        <div className="flex flex-wrap gap-3">
          {['Affected: Couples', 'Group Hosts', 'Overwhelmed Browsers', 'Curious Listeners'].map((item) => (
            <div
              key={item}
              className="px-4 py-2 rounded-full bg-[#282828] text-white text-xs sm:text-sm font-semibold border border-white/5 shadow"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
