import React from 'react';
import { motion } from 'motion/react';
import { FlaskConical, Users, Radio, Heart, Sparkles } from 'lucide-react';
import { SectionId } from '../../types';

interface TestIterateViewProps {
  onNavigate: (section: SectionId) => void;
}

export const TestIterateView: React.FC<TestIterateViewProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
      className="p-6 sm:p-10 max-w-7xl mx-auto space-y-8"
    >
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
        {/* Flask Graphic */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 bg-[#16231a] border border-[#1ed760]/30 rounded-2xl flex items-center justify-center text-[#1ed760] shadow-2xl shrink-0">
          <FlaskConical className="w-16 h-16 sm:w-20 sm:h-20 stroke-[1.5]" />
        </div>

        {/* Text Details */}
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1ed760]">
            Process Phase
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none">
            Test & Iterate
          </h1>
          <p className="text-sm sm:text-lg text-[#b3b3b3] font-medium pt-1">
            Prototype &rarr; Launch &rarr; Feedback &rarr; Iteration
          </p>
        </div>
      </div>

      {/* Initiatives Table */}
      <div className="w-full pt-4">
        <div className="grid grid-cols-12 text-xs font-bold text-[#808080] pb-3 border-b border-[#282828] px-4">
          <div className="col-span-1">#</div>
          <div className="col-span-6 sm:col-span-7">Initiative</div>
          <div className="col-span-3 sm:col-span-2">Launch timeframe</div>
          <div className="col-span-2 flex justify-end">Status</div>
        </div>

        <div className="divide-y divide-white/5">
          {/* Row 1: Blend */}
          <div
            onClick={() => onNavigate('impact')}
            className="grid grid-cols-12 py-5 px-4 hover:bg-[#282828]/50 rounded-xl transition-colors group cursor-pointer items-center"
          >
            <div className="col-span-1 text-sm font-semibold text-[#a7a7a7] group-hover:text-white flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#132a1c] text-[#1ed760] flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-7 pl-2">
              <div className="text-base font-bold text-white group-hover:text-[#1ed760] transition-colors">
                BLEND
              </div>
              <div className="text-xs text-[#a7a7a7]">
                2 people &rarr; multiple friends (45M+ Blends created)
              </div>
            </div>
            <div className="col-span-3 sm:col-span-2 text-xs sm:text-sm text-gray-300 font-medium">
              Aug 2021
            </div>
            <div className="col-span-2 flex justify-end">
              <span className="px-3 py-1 rounded-full text-xs font-bold border border-[#1ed760] text-[#1ed760] bg-[#1ed760]/10">
                Scaled
              </span>
            </div>
          </div>

          {/* Row 2: Jam */}
          <div
            onClick={() => onNavigate('impact')}
            className="grid grid-cols-12 py-5 px-4 hover:bg-[#282828]/50 rounded-xl transition-colors group cursor-pointer items-center"
          >
            <div className="col-span-1 text-sm font-semibold text-[#a7a7a7] group-hover:text-white flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#242424] text-purple-400 flex items-center justify-center">
                <Radio className="w-4 h-4" />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-7 pl-2">
              <div className="text-base font-bold text-white group-hover:text-[#1ed760] transition-colors">
                JAM
              </div>
              <div className="text-xs text-[#a7a7a7]">
                Launched Sept 2023, up to 32 users
              </div>
            </div>
            <div className="col-span-3 sm:col-span-2 text-xs sm:text-sm text-gray-300 font-medium">
              Sept 2023
            </div>
            <div className="col-span-2 flex justify-end">
              <span className="px-3 py-1 rounded-full text-xs font-bold border border-white/20 text-gray-300 bg-[#222]">
                Live
              </span>
            </div>
          </div>

          {/* Row 3: Made For You */}
          <div
            onClick={() => onNavigate('impact')}
            className="grid grid-cols-12 py-5 px-4 hover:bg-[#282828]/50 rounded-xl transition-colors group cursor-pointer items-center"
          >
            <div className="col-span-1 text-sm font-semibold text-[#a7a7a7] group-hover:text-white flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-pink-950/60 text-pink-400 flex items-center justify-center">
                <Heart className="w-4 h-4" />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-7 pl-2">
              <div className="text-base font-bold text-white group-hover:text-[#1ed760] transition-colors">
                MADE FOR YOU
              </div>
              <div className="text-xs text-[#a7a7a7]">
                Continuous A/B testing refinement
              </div>
            </div>
            <div className="col-span-3 sm:col-span-2 text-xs sm:text-sm text-gray-300 font-medium">
              Ongoing
            </div>
            <div className="col-span-2 flex justify-end">
              <span className="px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/40 text-emerald-400 bg-emerald-950/40 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Iterating
              </span>
            </div>
          </div>

          {/* Row 4: Sound Capsule / Wrapped */}
          <div
            onClick={() => onNavigate('impact')}
            className="grid grid-cols-12 py-5 px-4 hover:bg-[#282828]/50 rounded-xl transition-colors group cursor-pointer items-center"
          >
            <div className="col-span-1 text-sm font-semibold text-[#a7a7a7] group-hover:text-white flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#1e293b] text-cyan-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-7 pl-2">
              <div className="text-base font-bold text-white group-hover:text-[#1ed760] transition-colors">
                SOUND CAPSULE / WRAPPED
              </div>
              <div className="text-xs text-[#a7a7a7]">
                Yearly redesign (2025 social comparison features)
              </div>
            </div>
            <div className="col-span-3 sm:col-span-2 text-xs sm:text-sm text-gray-300 font-medium">
              Late 2025 Target
            </div>
            <div className="col-span-2 flex justify-end">
              <span className="px-3 py-1 rounded-full text-xs font-bold border border-white/10 text-gray-400 bg-[#181818]">
                Prototyping
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
