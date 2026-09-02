import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Download, Share2, Check, FileText } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/caseStudyData';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast?: (text: string, type?: 'success' | 'info' | 'like' | 'music') => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose, onShowToast }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container with Spring Pop */}
          <motion.div
            id="case-study-modal-container"
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: 'spring', damping: 26, stiffness: 360 }}
            className="relative w-full max-w-2xl bg-[#181818] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)] space-y-6 max-h-[90vh] overflow-y-auto custom-scrollbar z-10"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#242424] hover:bg-[#333] flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </motion.button>

            {/* Modal Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1ed760]/10 text-[#1ed760] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Spotify Case Study
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Designing for Connection
              </h2>
              <p className="text-xs sm:text-sm text-[#b3b3b3]">
                A complete human-centered Design Thinking investigation into Blend, Jam, Made For You, and Sound Capsule.
              </p>
            </div>

            {/* Executive Summary Box */}
            <div className="p-5 rounded-2xl bg-[#121212] border border-white/5 space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#1ed760]">
                Core Objective
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Transition Spotify from an individual audio streaming utility into a synchronized, emotionally resonant social audio ecosystem through frictionless data-driven interactions.
              </p>
            </div>

            {/* Research Team Grid */}
            <div className="space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#a7a7a7]">
                Contributing Authors
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {TEAM_MEMBERS.map((m) => (
                  <motion.div
                    key={m.uid}
                    whileHover={{ y: -3 }}
                    className="p-3 rounded-xl bg-[#222] hover:bg-[#282828] border border-white/5 hover:border-white/10 transition-all text-center space-y-1 cursor-default shadow-sm"
                  >
                    <div
                      className="w-8 h-8 rounded-full mx-auto text-white font-bold text-xs flex items-center justify-center shadow"
                      style={{ backgroundColor: m.bgColor }}
                    >
                      {m.initial}
                    </div>
                    <div className="text-xs font-bold text-white truncate">{m.name}</div>
                    <div className="text-[9px] text-[#1ed760] font-semibold">{m.rolePill}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#242424] hover:bg-[#333] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Close
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  onShowToast?.('Exported case study summary PDF', 'success');
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#1ed760] hover:bg-[#1fdf64] text-black text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[#1ed760]/30 cursor-pointer"
              >
                <Download className="w-4 h-4" /> Download PDF Summary
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

