import React from 'react';
import { motion } from 'motion/react';
import { TEAM_MEMBERS } from '../../data/caseStudyData';
import { SectionId } from '../../types';

interface TeamViewProps {
  onNavigate: (section: SectionId) => void;
}

export const TeamView: React.FC<TeamViewProps> = () => {
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
        <div className="text-xs font-bold uppercase tracking-wider text-[#1ed760]">
          Case Study Authors
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
          Team
        </h1>
        <p className="text-base sm:text-lg text-[#b3b3b3] max-w-4xl pt-1 leading-relaxed">
          Meet the designers and researchers behind this case study.
        </p>
      </div>

      {/* 4 Team Member Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.uid}
            className="p-8 rounded-3xl bg-[#181818] border border-white/5 hover:border-white/15 transition-all flex flex-col items-center text-center justify-between space-y-6 shadow-xl group"
          >
            {/* Circular Avatar */}
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-white font-black text-4xl shadow-2xl group-hover:scale-105 transition-transform"
              style={{ backgroundColor: member.bgColor }}
            >
              {member.initial}
            </div>

            {/* Name & UID */}
            <div className="space-y-1 w-full">
              <h2 className="text-xl font-bold text-white tracking-tight truncate">
                {member.name}
              </h2>
              <p className="text-xs font-bold text-[#808080] tracking-wider uppercase">
                {member.uid}
              </p>
            </div>

            {/* Role Focus Pill */}
            <div className="w-full pt-2">
              <span className="inline-block px-4 py-2 rounded-full bg-[#242424] text-white text-xs font-extrabold uppercase tracking-wider border border-white/5 shadow">
                {member.rolePill}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
