import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, RefreshCw, Radio } from 'lucide-react';
import { SectionId } from '../../types';

interface ImpactViewProps {
  onNavigate: (section: SectionId) => void;
}

export const ImpactView: React.FC<ImpactViewProps> = ({ onNavigate }) => {
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
          Outcomes & Metrics
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
          Impact
        </h1>
        <p className="text-base sm:text-lg text-[#b3b3b3] max-w-4xl pt-1 leading-relaxed">
          The Results: How user-centered design transformed Spotify's engagement and business metrics.
        </p>
      </div>

      {/* 4 Stat Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Metric 1 */}
        <div className="p-8 rounded-3xl bg-[#181818] border border-white/5 hover:border-[#1ed760]/30 transition-all flex flex-col justify-between min-h-[220px] shadow-xl">
          <div className="text-5xl sm:text-6xl font-black text-[#1ed760] tracking-tight">
            +25%
          </div>
          <p className="text-xs sm:text-sm text-[#b3b3b3] leading-relaxed pt-4">
            Collaborative listening sessions increased year-over-year following Blend and Jam.
          </p>
        </div>

        {/* Metric 2 */}
        <div className="p-8 rounded-3xl bg-[#181818] border border-white/5 hover:border-[#1ed760]/30 transition-all flex flex-col justify-between min-h-[220px] shadow-xl">
          <div className="text-5xl sm:text-6xl font-black text-[#1ed760] tracking-tight">
            45M+
          </div>
          <p className="text-xs sm:text-sm text-[#b3b3b3] leading-relaxed pt-4">
            Blends created globally, making it one of Spotify's fastest-growing features.
          </p>
        </div>

        {/* Metric 3 */}
        <div className="p-8 rounded-3xl bg-[#181818] border border-white/5 hover:border-[#1ed760]/30 transition-all flex flex-col justify-between min-h-[220px] shadow-xl">
          <div className="text-5xl sm:text-6xl font-black text-[#1ed760] tracking-tight">
            +18%
          </div>
          <p className="text-xs sm:text-sm text-[#b3b3b3] leading-relaxed pt-4">
            Monthly Active User retention among users who engage with Made For You.
          </p>
        </div>

        {/* Metric 4 */}
        <div className="p-8 rounded-3xl bg-[#181818] border border-white/5 hover:border-[#1ed760]/30 transition-all flex flex-col justify-between min-h-[220px] shadow-xl">
          <div className="text-5xl sm:text-6xl font-black text-[#1ed760] tracking-tight">
            32
          </div>
          <p className="text-xs sm:text-sm text-[#b3b3b3] leading-relaxed pt-4">
            Max participants in a single Jam session, scaling from 2-person Blends.
          </p>
        </div>
      </div>

      {/* Key Business Takeaway Section */}
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Key Business Takeaway
        </h2>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#181818] border border-white/5 shadow-2xl">
          <p className="text-lg sm:text-2xl lg:text-3xl font-medium text-[#e0e0e0] leading-relaxed">
            By shifting from a purely individual streaming utility to a social-first audio ecosystem, Spotify deepened retention, increased organic viral acquisition, and created emotional connection between listeners.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
