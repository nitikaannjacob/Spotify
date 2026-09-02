import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home,
  Search,
  Library,
  LayoutGrid,
  AlertCircle,
  Heart,
  Target,
  Lightbulb,
  Smartphone,
  ArrowLeftRight,
  TrendingUp,
  BarChart2,
  GraduationCap,
  Users,
  FileText,
  PlusCircle,
  PanelLeftClose,
} from 'lucide-react';
import { SectionId } from '../types';
import { NAV_ITEMS_MAIN, NAV_ITEMS_SECTIONS } from '../data/caseStudyData';
import { EqualizerBars } from './EqualizerBars';

interface SidebarProps {
  activeSection: SectionId;
  onSelectSection: (id: SectionId) => void;
  onOpenCaseStudyModal: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-5 h-5" />,
  Search: <Search className="w-5 h-5" />,
  Library: <Library className="w-5 h-5" />,
  LayoutGrid: <LayoutGrid className="w-5 h-5" />,
  AlertCircle: <AlertCircle className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
  Lightbulb: <Lightbulb className="w-5 h-5" />,
  Smartphone: <Smartphone className="w-5 h-5" />,
  ArrowLeftRight: <ArrowLeftRight className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  BarChart2: <BarChart2 className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
};

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onSelectSection,
  onOpenCaseStudyModal,
  isOpenMobile,
  onCloseMobile,
  isCollapsed = false,
  onToggleCollapse,
}) => {
  const handleNavClick = (id: SectionId) => {
    onSelectSection(id);
    onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop with Smooth Fade */}
      <AnimatePresence>
        {isOpenMobile && (
          <motion.div
            id="mobile-sidebar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onCloseMobile}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40 lg:hidden cursor-pointer"
          />
        )}
      </AnimatePresence>

      <aside
        id="spotify-sidebar"
        className={`fixed lg:static top-0 left-0 bottom-0 z-50 bg-[#000000] flex flex-col h-full border-r border-[#1e1e1e]/60 transition-all duration-300 ease-in-out shrink-0 ${
          isOpenMobile ? 'translate-x-0 shadow-2xl w-64' : '-translate-x-full lg:translate-x-0'
        } ${
          isCollapsed
            ? 'lg:w-0 lg:opacity-0 lg:pointer-events-none lg:border-r-0 overflow-hidden'
            : 'lg:w-64 lg:opacity-100'
        }`}
      >
        {/* Inner fixed-width container to prevent layout squish during width animation */}
        <div className="w-64 flex flex-col h-full min-h-0">
          {/* Brand Header */}
          <div className="p-5 pb-4 flex items-center justify-between">
            <div
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => handleNavClick('home')}
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-full bg-[#1ed760] flex items-center justify-center text-black shrink-0 shadow-lg shadow-[#1ed760]/20"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.518 17.308c-.218.358-.684.472-1.042.254-2.855-1.745-6.448-2.14-10.68-1.173-.41.094-.82-.162-.914-.572-.094-.41.162-.82.572-.914 4.636-1.06 8.607-.615 11.81 1.363.358.218.472.684.254 1.042zm1.472-3.275c-.274.446-.86.588-1.306.314-3.268-2.008-8.25-2.59-12.115-1.416-.502.152-1.036-.134-1.188-.636-.152-.502.134-1.036.636-1.188 4.414-1.34 9.914-.687 13.66 1.62.446.274.588.86.314 1.306zm.126-3.41c-3.918-2.327-10.377-2.542-14.122-1.405-.6.182-1.24-.16-1.422-.76-.182-.6.16-1.24.76-1.422 4.312-1.308 11.455-1.055 15.967 1.623.538.32.712 1.02.392 1.558-.32.538-1.02.712-1.558.392z" />
                </svg>
              </motion.div>
              <div>
                <h1 className="text-white font-bold text-base tracking-tight leading-none group-hover:text-[#1ed760] transition-colors">
                  Spotify Premium
                </h1>
                <p className="text-[10px] text-[#a7a7a7] uppercase tracking-wider font-semibold mt-1">
                  Case Study
                </p>
              </div>
            </div>

            {/* Desktop Collapse Toggle Button */}
            {onToggleCollapse && (
              <motion.button
                id="btn-sidebar-collapse"
                whileHover={{ scale: 1.1, backgroundColor: '#282828' }}
                whileTap={{ scale: 0.9 }}
                onClick={onToggleCollapse}
                className="hidden lg:flex w-7 h-7 rounded-full bg-[#181818] text-[#a7a7a7] hover:text-white items-center justify-center transition-colors cursor-pointer"
                title="Collapse sidebar (Ctrl+B)"
                aria-label="Collapse sidebar"
              >
                <PanelLeftClose className="w-4 h-4" />
              </motion.button>
            )}
          </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto px-3 space-y-6 py-2 custom-scrollbar">
          {/* Main Items */}
          <nav className="space-y-1">
            {NAV_ITEMS_MAIN.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#282828] text-[#1ed760] shadow-sm'
                      : 'text-[#b3b3b3] hover:text-white hover:bg-[#181818]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`transition-colors ${isActive ? 'text-[#1ed760]' : 'text-[#b3b3b3]'}`}>
                      {iconMap[item.iconName]}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active-indicator"
                      className="w-1.5 h-1.5 rounded-full bg-[#1ed760] shadow-[0_0_8px_#1ed760]"
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Section Divider & Label */}
          <div>
            <div className="px-4 pb-2 text-[11px] font-bold text-[#808080] tracking-wider uppercase">
              Case Study Sections
            </div>
            <nav className="space-y-0.5">
              {NAV_ITEMS_SECTIONS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    id={`nav-section-${item.id}`}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-[#282828] text-[#1ed760] font-semibold'
                        : 'text-[#b3b3b3] hover:text-white hover:bg-[#181818]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 truncate">
                      <span className={`transition-colors shrink-0 ${isActive ? 'text-[#1ed760]' : 'text-[#a7a7a7]'}`}>
                        {iconMap[item.iconName]}
                      </span>
                      <span className="truncate">{item.label}</span>
                    </div>
                    {isActive && (
                      <div className="shrink-0 ml-1">
                        <EqualizerBars isPlaying={true} size="sm" />
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="p-4 border-t border-[#181818]">
          <motion.button
            id="btn-your-case-study"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenCaseStudyModal}
            className="w-full flex items-center justify-center gap-2 bg-[#1ed760] hover:bg-[#1fdf64] text-black font-bold py-3 px-4 rounded-full transition-all duration-200 text-sm shadow-lg shadow-black/40 hover:shadow-[#1ed760]/30 cursor-pointer"
          >
            <PlusCircle className="w-4 h-4 text-black" />
            <span>Your Case Study</span>
          </motion.button>
        </div>
        </div>
      </aside>
    </>
  );
};

