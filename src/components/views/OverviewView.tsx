import React from 'react';
import { motion } from 'motion/react';
import { UserPlus, Radio, Sparkles, TrendingUp } from 'lucide-react';
import { SectionId } from '../../types';

interface OverviewViewProps {
  onNavigate: (section: SectionId) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
      className="p-6 sm:p-10 max-w-7xl mx-auto space-y-12"
    >
      {/* Title & Subtitle */}
      <div className="space-y-3 pt-2">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight">
          Spotify
        </h1>
        <p className="text-xl sm:text-3xl font-bold text-white tracking-tight max-w-4xl leading-snug">
          The world's largest audio streaming platform, with 100M+ songs and podcasts.
        </p>
      </div>

      {/* Key Features Section */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Key Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Blend */}
          <div
            onClick={() => onNavigate('prototype')}
            className="p-6 rounded-2xl bg-gradient-to-b from-[#1b3d2b] to-[#181818] border border-[#1ed760]/20 hover:border-[#1ed760]/50 transition-all cursor-pointer flex flex-col justify-between min-h-[220px] shadow-lg group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-[#1ed760] group-hover:text-black transition-colors">
              <UserPlus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-2">
                BLEND
              </h3>
              <p className="text-xs text-[#b3b3b3] leading-relaxed">
                Shared playlist for 2, combining musical tastes dynamically.
              </p>
            </div>
          </div>

          {/* Card 2: Jam */}
          <div
            onClick={() => onNavigate('prototype')}
            className="p-6 rounded-2xl bg-[#1e1e1e] hover:bg-[#252525] border border-white/5 transition-all cursor-pointer flex flex-col justify-between min-h-[220px] shadow-lg group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-[#1ed760] group-hover:text-black transition-colors">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-2">
                JAM
              </h3>
              <p className="text-xs text-[#b3b3b3] leading-relaxed">
                Real-time group queue. Listen together, anywhere.
              </p>
            </div>
          </div>

          {/* Card 3: Made For You */}
          <div
            onClick={() => onNavigate('prototype')}
            className="p-6 rounded-2xl bg-[#1e1e1e] hover:bg-[#252525] border border-white/5 transition-all cursor-pointer flex flex-col justify-between min-h-[220px] shadow-lg group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-[#1ed760] group-hover:text-black transition-colors">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-2">
                MADE FOR YOU
              </h3>
              <p className="text-xs text-[#b3b3b3] leading-relaxed">
                Personalized recommendations tailored precisely to your listening history.
              </p>
            </div>
          </div>

          {/* Card 4: Sound Capsule */}
          <div
            onClick={() => onNavigate('prototype')}
            className="p-6 rounded-2xl bg-[#1e1e1e] hover:bg-[#252525] border border-white/5 transition-all cursor-pointer flex flex-col justify-between min-h-[220px] shadow-lg group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-[#1ed760] group-hover:text-black transition-colors">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-2">
                SOUND CAPSULE
              </h3>
              <p className="text-xs text-[#b3b3b3] leading-relaxed">
                Deep data insights and wrapped-style summaries of your habits.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Users Section */}
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Primary Users
        </h2>

        <div className="flex flex-wrap gap-3">
          {['Individual listeners', 'Couples', 'Friend groups', 'Data-curious users'].map((user) => (
            <div
              key={user}
              className="px-5 py-2.5 rounded-full bg-[#242424] text-white text-xs sm:text-sm font-semibold border border-white/5 shadow"
            >
              {user}
            </div>
          ))}
        </div>
      </div>

      {/* Why Spotify? Section */}
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Why Spotify?
        </h2>

        <div className="p-8 sm:p-10 rounded-2xl bg-[#181818] border border-white/5 shadow-xl">
          <p className="text-lg sm:text-2xl lg:text-3xl font-medium text-[#e0e0e0] leading-relaxed">
            This case study explores the full design thinking cycle, analyzing how Spotify masterfully balances highly personalized individual experiences with frictionless, synchronous social features.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
