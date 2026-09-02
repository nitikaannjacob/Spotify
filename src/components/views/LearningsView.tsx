import React from 'react';
import { motion } from 'motion/react';
import { SectionId } from '../../types';

interface LearningsViewProps {
  onNavigate: (section: SectionId) => void;
}

export const LearningsView: React.FC<LearningsViewProps> = ({ onNavigate }) => {
  const learnings = [
    {
      num: '01',
      title: 'Frictionless Social Design',
      text: 'Social features succeed when they require zero onboarding. Jam and Blend eliminate invitation friction through instant QR codes and deep links.',
    },
    {
      num: '02',
      title: 'Data as an Identity Canvas',
      text: 'Users don\'t just want metrics; they want stories about who they are. Sound Capsule and Wrapped turn raw logs into emotional currency.',
    },
    {
      num: '03',
      title: 'Dynamic Shared Control',
      text: 'Collaborative interfaces must balance equal access with conflict mitigation to maintain psychological safety in group settings.',
    },
    {
      num: '04',
      title: 'Serendipity vs. Predictability',
      text: 'Algorithms must intentionally introduce noise to avoid creating taste-bubble echo chambers for dedicated music fans.',
    },
  ];

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
          Reflections & Takeaways
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
          Key Learnings
        </h1>
        <p className="text-base sm:text-lg text-[#b3b3b3] max-w-4xl pt-1 leading-relaxed">
          Core design insights gained from analyzing Spotify's product architecture.
        </p>
      </div>

      {/* 2x2 Grid of Key Learnings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {learnings.map((item) => (
          <div
            key={item.num}
            className="p-8 sm:p-10 rounded-3xl bg-[#181818] border border-white/5 space-y-3 shadow-xl hover:border-[#1ed760]/30 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="text-sm font-black text-[#1ed760] tracking-wider uppercase">
                {item.num} • Key Insight
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight">
                {item.title}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#b3b3b3] leading-relaxed pt-3">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
