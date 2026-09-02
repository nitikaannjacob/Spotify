import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ArrowRight, Sparkles, Users, Smartphone, BarChart2, Heart, HelpCircle, Layers } from 'lucide-react';
import { SectionId } from '../../types';

interface SearchViewProps {
  onNavigate: (section: SectionId) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onShowToast?: (text: string, type?: 'success' | 'info' | 'like' | 'music') => void;
}

export const SearchView: React.FC<SearchViewProps> = ({
  onNavigate,
  searchQuery,
  onSearchChange,
  onShowToast,
}) => {
  const categories = [
    { title: 'Case Study Overview', section: 'overview' as SectionId, color: 'from-emerald-700 to-teal-900', icon: <Sparkles className="w-8 h-8" /> },
    { title: 'The Problem Space', section: 'problem' as SectionId, color: 'from-red-700 to-rose-950', icon: <HelpCircle className="w-8 h-8" /> },
    { title: 'User Research & Empathize', section: 'empathize' as SectionId, color: 'from-purple-700 to-indigo-950', icon: <Heart className="w-8 h-8" /> },
    { title: 'Problem Definition (Define)', section: 'define' as SectionId, color: 'from-blue-700 to-cyan-950', icon: <Layers className="w-8 h-8" /> },
    { title: 'Generating Ideas (Ideate)', section: 'ideate' as SectionId, color: 'from-amber-600 to-orange-950', icon: <Sparkles className="w-8 h-8" /> },
    { title: 'Interactive Prototypes', section: 'prototype' as SectionId, color: 'from-sky-700 to-blue-950', icon: <Smartphone className="w-8 h-8" /> },
    { title: 'Test & Iteration Cycle', section: 'test' as SectionId, color: 'from-teal-700 to-emerald-950', icon: <BarChart2 className="w-8 h-8" /> },
    { title: 'Outcomes & Impact', section: 'impact' as SectionId, color: 'from-pink-700 to-rose-950', icon: <BarChart2 className="w-8 h-8" /> },
    { title: 'Design Team Authors', section: 'team' as SectionId, color: 'from-violet-700 to-purple-950', icon: <Users className="w-8 h-8" /> },
  ];

  const filteredCategories = categories.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
      className="p-6 sm:p-10 max-w-7xl mx-auto space-y-8"
    >
      {/* Search Input on Mobile/Tablet or Main view */}
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Search
        </h1>

        <div className="relative max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a7a7a7]" />
          <input
            id="search-main-input"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by keyword (e.g. Blend, Jam, Research, Neha)..."
            className="w-full bg-[#242424] hover:bg-[#2a2a2a] focus:bg-[#333333] text-white text-sm sm:text-base pl-12 pr-4 py-3.5 rounded-full border border-white/10 focus:border-[#1ed760] outline-none transition-all placeholder:text-[#808080]"
          />
        </div>
      </div>

      {/* Category Tile Grid */}
      <div className="space-y-4 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Browse All Sections
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCategories.map((item) => (
            <div
              key={item.title}
              onClick={() => onNavigate(item.section)}
              className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer min-h-[160px] flex flex-col justify-between shadow-xl relative overflow-hidden group`}
            >
              <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug">
                {item.title}
              </h3>
              <div className="self-end text-white/70 group-hover:text-white transition-colors">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
