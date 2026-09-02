import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, MessageSquare, Eye, GitFork, Users2, BatteryWarning, TrendingUp } from 'lucide-react';
import { SectionId } from '../../types';

interface EmpathizeViewProps {
  onNavigate: (section: SectionId) => void;
}

export const EmpathizeView: React.FC<EmpathizeViewProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
      className="p-6 sm:p-10 max-w-7xl mx-auto space-y-12"
    >
      {/* Header */}
      <div className="space-y-3 pt-2">
        <div className="text-xs font-bold uppercase tracking-wider text-[#a7a7a7]">
          User Research Phase
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
          Empathize
        </h1>
        <p className="text-base sm:text-lg text-[#b3b3b3] max-w-4xl pt-2 leading-relaxed">
          Understanding the User: We dove deep into the listening habits, social dynamics, and frustrations of shared music experiences to uncover the core friction points.
        </p>
      </div>

      {/* Methods Used Section */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Methods Used
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Method 1 */}
          <div className="p-6 rounded-2xl bg-[#181818] border border-white/5 space-y-4 hover:border-white/10 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#132a1c] flex items-center justify-center text-[#1ed760]">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Behavioral Data Analysis
            </h3>
            <p className="text-xs sm:text-sm text-[#a7a7a7] leading-relaxed">
              Analyzed existing Spotify API usage patterns related to collaborative playlists, blend sessions, and skip rates during shared sessions.
            </p>
          </div>

          {/* Method 2 */}
          <div className="p-6 rounded-2xl bg-[#181818] border border-white/5 space-y-4 hover:border-white/10 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#132a1c] flex items-center justify-center text-[#1ed760]">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Interviews & Surveys
            </h3>
            <p className="text-xs sm:text-sm text-[#a7a7a7] leading-relaxed">
              Conducted 15 deep-dive interviews and surveyed 250+ users aged 18-35 to capture qualitative emotional responses to music sharing.
            </p>
          </div>

          {/* Method 3 */}
          <div className="p-6 rounded-2xl bg-[#181818] border border-white/5 space-y-4 hover:border-white/10 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#132a1c] flex items-center justify-center text-[#1ed760]">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Observation
            </h3>
            <p className="text-xs sm:text-sm text-[#a7a7a7] leading-relaxed">
              Shadowed 5 distinct social groups during road trips and house parties to observe real-time "aux cord" dynamics and conflict resolution.
            </p>
          </div>
        </div>
      </div>

      {/* Insight Mixes Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Insight Mixes
          </h2>
          <button
            onClick={() => onNavigate('define')}
            className="text-xs sm:text-sm font-bold tracking-widest text-[#a7a7a7] hover:text-white uppercase transition-colors"
          >
            Show All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Mix 01 */}
          <div
            onClick={() => onNavigate('define')}
            className="group bg-[#181818] hover:bg-[#282828] p-4 rounded-2xl transition-all cursor-pointer border border-white/5 hover:border-purple-500/30 shadow-lg"
          >
            <div className="w-full aspect-square bg-gradient-to-br from-[#9333ea] to-[#c026d3] rounded-xl mb-4 flex items-center justify-center text-white shadow-inner">
              <GitFork className="w-14 h-14" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1 group-hover:text-[#1ed760] transition-colors">
              Mix 01: Divergent music tastes
            </h3>
            <p className="text-xs text-[#a7a7a7]">
              Finding common ground
            </p>
          </div>

          {/* Mix 02 */}
          <div
            onClick={() => onNavigate('define')}
            className="group bg-[#181818] hover:bg-[#282828] p-4 rounded-2xl transition-all cursor-pointer border border-white/5 hover:border-blue-500/30 shadow-lg"
          >
            <div className="w-full aspect-square bg-gradient-to-br from-[#2563eb] to-[#38bdf8] rounded-xl mb-4 flex items-center justify-center text-white shadow-inner">
              <Users2 className="w-14 h-14" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1 group-hover:text-[#1ed760] transition-colors">
              Mix 02: Group control issues
            </h3>
            <p className="text-xs text-[#a7a7a7]">
              The "Aux" anxiety
            </p>
          </div>

          {/* Mix 03 */}
          <div
            onClick={() => onNavigate('define')}
            className="group bg-[#181818] hover:bg-[#282828] p-4 rounded-2xl transition-all cursor-pointer border border-white/5 hover:border-amber-500/30 shadow-lg"
          >
            <div className="w-full aspect-square bg-gradient-to-br from-[#ea580c] to-[#f59e0b] rounded-xl mb-4 flex items-center justify-center text-white shadow-inner">
              <BatteryWarning className="w-14 h-14" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1 group-hover:text-[#1ed760] transition-colors">
              Mix 03: Decision fatigue
            </h3>
            <p className="text-xs text-[#a7a7a7]">
              Too many choices
            </p>
          </div>

          {/* Mix 04 */}
          <div
            onClick={() => onNavigate('define')}
            className="group bg-[#181818] hover:bg-[#282828] p-4 rounded-2xl transition-all cursor-pointer border border-white/5 hover:border-emerald-500/30 shadow-lg"
          >
            <div className="w-full aspect-square bg-gradient-to-br from-[#059669] to-[#10b981] rounded-xl mb-4 flex items-center justify-center text-white shadow-inner">
              <TrendingUp className="w-14 h-14" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1 group-hover:text-[#1ed760] transition-colors">
              Mix 04: Data curiosity
            </h3>
            <p className="text-xs text-[#a7a7a7]">
              Craving insights
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
