import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Laptop, BarChart2, Video, FileText, ExternalLink } from 'lucide-react';
import { REFERENCES_DATA } from '../../data/caseStudyData';
import { SectionId } from '../../types';

interface ReferencesViewProps {
  onNavigate: (section: SectionId) => void;
}

export const ReferencesView: React.FC<ReferencesViewProps> = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'calendar':
        return <Calendar className="w-5 h-5 text-[#1ed760]" />;
      case 'laptop':
        return <Laptop className="w-5 h-5 text-[#1ed760]" />;
      case 'chart':
        return <BarChart2 className="w-5 h-5 text-[#1ed760]" />;
      case 'video':
        return <Video className="w-5 h-5 text-[#1ed760]" />;
      default:
        return <FileText className="w-5 h-5 text-[#1ed760]" />;
    }
  };

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
          Sources & Citations
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
          References
        </h1>
        <p className="text-base sm:text-lg text-[#b3b3b3] max-w-4xl pt-1 leading-relaxed">
          External research, industry analyses, and internal course documentation referenced.
        </p>
      </div>

      {/* References List */}
      <div className="space-y-4">
        {REFERENCES_DATA.map((ref, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-7 rounded-2xl bg-[#181818] border border-white/5 hover:border-[#1ed760]/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#132a1c] flex items-center justify-center shrink-0 mt-0.5">
                {getIcon(ref.iconType)}
              </div>
              <div className="space-y-1">
                <h2 className="text-lg font-bold text-white group-hover:text-[#1ed760] transition-colors flex items-center gap-2">
                  {ref.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#a7a7a7] leading-relaxed max-w-2xl">
                  {ref.description}
                </p>
              </div>
            </div>

            <div className="sm:self-center pl-16 sm:pl-0">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1ed760] bg-[#1ed760]/10 px-3.5 py-1.5 rounded-full border border-[#1ed760]/20">
                <span>{ref.url}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
