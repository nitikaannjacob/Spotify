import React from 'react';
import { motion } from 'motion/react';
import { Bookmark, Sparkles, CheckCircle2, Share2, Download, ExternalLink } from 'lucide-react';
import { SectionId } from '../../types';

interface LibraryViewProps {
  onNavigate: (section: SectionId) => void;
  onOpenCaseStudy: () => void;
  onShowToast?: (text: string, type?: 'success' | 'info' | 'like' | 'music') => void;
}

export const LibraryView: React.FC<LibraryViewProps> = ({
  onNavigate,
  onOpenCaseStudy,
  onShowToast,
}) => {
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
          Your Saved Collection
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
          Your Library
        </h1>
        <p className="text-base sm:text-lg text-[#b3b3b3] max-w-4xl pt-1 leading-relaxed">
          Quick access to bookmarked design insights, prototypes, and study artifacts.
        </p>
      </div>

      {/* Grid of Saved Artifacts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Artifact 1 */}
        <div
          onClick={() => onNavigate('prototype')}
          className="p-6 rounded-2xl bg-[#181818] border border-white/5 hover:border-[#1ed760]/30 transition-all cursor-pointer space-y-4 shadow-xl group"
        >
          <div className="w-12 h-12 rounded-xl bg-[#132a1c] flex items-center justify-center text-[#1ed760]">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#1ed760] transition-colors">
              Figma Mobile Prototypes
            </h3>
            <p className="text-xs text-[#a7a7a7] pt-1 leading-relaxed">
              High-fidelity interactive UI screens for Blend, Jam, Made For You, and Sound Capsule.
            </p>
          </div>
          <div className="text-xs font-bold text-[#1ed760] flex items-center gap-1">
            <span>View 4 Interactive Screens</span> &rarr;
          </div>
        </div>

        {/* Artifact 2 */}
        <div
          onClick={() => onNavigate('impact')}
          className="p-6 rounded-2xl bg-[#181818] border border-white/5 hover:border-[#1ed760]/30 transition-all cursor-pointer space-y-4 shadow-xl group"
        >
          <div className="w-12 h-12 rounded-xl bg-[#132a1c] flex items-center justify-center text-[#1ed760]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#1ed760] transition-colors">
              Impact & Key Metrics
            </h3>
            <p className="text-xs text-[#a7a7a7] pt-1 leading-relaxed">
              +25% collaborative sessions, 45M+ blends created, +18% retention gains.
            </p>
          </div>
          <div className="text-xs font-bold text-[#1ed760] flex items-center gap-1">
            <span>Review Data Breakdown</span> &rarr;
          </div>
        </div>

        {/* Artifact 3 */}
        <div
          onClick={onOpenCaseStudy}
          className="p-6 rounded-2xl bg-[#181818] border border-white/5 hover:border-[#1ed760]/30 transition-all cursor-pointer space-y-4 shadow-xl group"
        >
          <div className="w-12 h-12 rounded-xl bg-[#132a1c] flex items-center justify-center text-[#1ed760]">
            <Bookmark className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#1ed760] transition-colors">
              Full Executive Summary
            </h3>
            <p className="text-xs text-[#a7a7a7] pt-1 leading-relaxed">
              Complete end-to-end design thinking presentation brief ready for review.
            </p>
          </div>
          <div className="text-xs font-bold text-[#1ed760] flex items-center gap-1">
            <span>Open Executive Brief</span> &rarr;
          </div>
        </div>
      </div>
    </motion.div>
  );
};
