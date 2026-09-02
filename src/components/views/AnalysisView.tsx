import React from 'react';
import { motion } from 'motion/react';
import { SectionId } from '../../types';

interface AnalysisViewProps {
  onNavigate: (section: SectionId) => void;
}

export const AnalysisView: React.FC<AnalysisViewProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
      className="p-6 sm:p-10 max-w-7xl mx-auto space-y-10"
    >
      {/* Header */}
      <div className="space-y-3 pt-2">
        <div className="text-xs font-bold uppercase tracking-wider text-[#1ed760]">
          Heuristic & UX Evaluation
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
          Critical Analysis
        </h1>
        <p className="text-base sm:text-lg text-[#b3b3b3] max-w-4xl pt-1 leading-relaxed">
          Evaluating the experience through Nielsen's Usability Heuristics and cognitive design principles.
        </p>
      </div>

      {/* 3 Analytical Cards */}
      <div className="space-y-6">
        {/* Analysis Card 1 */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#181818] border border-white/5 space-y-3 shadow-xl hover:border-white/10 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              01 • Social Friction in Jam
            </h2>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1ed760]">
              Control vs. Collaboration
            </span>
          </div>
          <p className="text-sm sm:text-base text-[#b3b3b3] leading-relaxed pt-2">
            While Jam democratizes the queue, testing revealed anxiety around "queue hijacking" where dominant personalities override group preferences. The host needs stronger subtle moderation tools without feeling authoritarian.
          </p>
        </div>

        {/* Analysis Card 2 */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#181818] border border-white/5 space-y-3 shadow-xl hover:border-white/10 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              02 • Algorithm Opacity
            </h2>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1ed760]">
              The Black Box Problem
            </span>
          </div>
          <p className="text-sm sm:text-base text-[#b3b3b3] leading-relaxed pt-2">
            Made For You and Blend rely on complex taste-matching algorithms. Users occasionally feel pigeonholed into listening loops when the algorithm overweights repetitive comfort songs instead of serendipitous discovery.
          </p>
        </div>

        {/* Analysis Card 3 */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#181818] border border-white/5 space-y-3 shadow-xl hover:border-white/10 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              03 • Data Privacy vs. Social Sharing
            </h2>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1ed760]">
              The Vulnerability of Taste
            </span>
          </div>
          <p className="text-sm sm:text-base text-[#b3b3b3] leading-relaxed pt-2">
            Music is deeply personal and vulnerable. Sound Capsule and Blend can create social exposure anxiety if "guilty pleasure" tracks are made visible to acquaintances without granular privacy controls.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
