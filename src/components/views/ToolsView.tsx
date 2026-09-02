import React from 'react';
import { motion } from 'motion/react';
import { Play, Heart, Download, MoreHorizontal, Clock } from 'lucide-react';
import { SectionId } from '../../types';

interface ToolsViewProps {
  onNavigate: (section: SectionId) => void;
}

export const ToolsView: React.FC<ToolsViewProps> = ({ onNavigate }) => {
  const tools = [
    { id: 'empathize' as SectionId, num: 1, phase: 'EMPATHIZE', tools: 'Data analysis, interviews, observation', duration: '14:23' },
    { id: 'define' as SectionId, num: 2, phase: 'DEFINE', tools: 'Personas, HMW statements', duration: '8:45' },
    { id: 'ideate' as SectionId, num: 3, phase: 'IDEATE', tools: 'Brainstorming, flow-mapping', duration: '22:10' },
    { id: 'prototype' as SectionId, num: 4, phase: 'PROTOTYPE', tools: 'In-app digital prototypes', duration: '18:30' },
    { id: 'test' as SectionId, num: 5, phase: 'TEST', tools: 'Usage analytics, feedback', duration: '20:12' },
  ];

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
        {/* Cover Art Artwork */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 rounded-xl shadow-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden shrink-0 border border-purple-500/20 group">
          <div className="text-center z-10 space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-purple-600/30 border border-purple-400 flex items-center justify-center text-2xl mx-auto shadow-lg">
              🔮
            </div>
            <div className="text-[10px] uppercase tracking-widest text-purple-300 font-bold">
              Design Thinking
            </div>
            <div className="text-xs font-black text-white">TOOLS</div>
          </div>
        </div>

        {/* Info Column */}
        <div className="space-y-2 flex-1">
          <div className="text-xs font-bold uppercase tracking-wider text-[#b3b3b3]">
            Playlist
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none">
            Design Thinking Tools
          </h1>
          <p className="text-base sm:text-lg text-[#e0e0e0] font-medium pt-1">
            How Spotify translated user needs into product decisions.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#a7a7a7] pt-2 font-medium">
            <span className="text-white font-bold flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#1ed760] inline-flex items-center justify-center text-[8px] text-black font-black">S</span>
              Spotify Design
            </span>
            <span>•</span>
            <span>5 tracks, 1 hr 24 min</span>
          </div>
        </div>
      </div>

      {/* Actions Row */}
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
          <Download className="w-8 h-8" />
        </button>
        <button className="text-[#a7a7a7] hover:text-white transition-colors">
          <MoreHorizontal className="w-8 h-8" />
        </button>
      </div>

      {/* Tracklist Table */}
      <div className="w-full">
        <div className="grid grid-cols-12 text-xs font-bold uppercase tracking-wider text-[#a7a7a7] pb-3 border-b border-[#282828] px-4">
          <div className="col-span-1">#</div>
          <div className="col-span-4">Phase</div>
          <div className="col-span-6">Methodologies & Tools</div>
          <div className="col-span-1 flex justify-end">
            <Clock className="w-4 h-4" />
          </div>
        </div>

        <div className="divide-y divide-white/5">
          {tools.map((item) => (
            <div
              key={item.num}
              onClick={() => onNavigate(item.id)}
              className="grid grid-cols-12 py-4 px-4 hover:bg-[#282828]/50 rounded-lg transition-colors group cursor-pointer items-center"
            >
              <div className="col-span-1 text-sm font-semibold text-[#a7a7a7] group-hover:text-white">
                {item.num}
              </div>
              <div className="col-span-4">
                <div className="text-sm font-extrabold tracking-wide text-white group-hover:text-[#1ed760] transition-colors uppercase">
                  {item.phase}
                </div>
              </div>
              <div className="col-span-6 text-xs sm:text-sm text-[#a7a7a7] group-hover:text-gray-200">
                {item.tools}
              </div>
              <div className="col-span-1 text-xs text-[#a7a7a7] flex justify-end tabular-nums">
                {item.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
