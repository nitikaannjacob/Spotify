import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Bell, Settings, Search, Menu, PanelLeftOpen } from 'lucide-react';
import { SectionId } from '../types';

interface TopBarProps {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
  showSearch?: boolean;
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
  onToggleMobileMenu: () => void;
  onOpenTeam: () => void;
  onShowToast?: (text: string, type?: 'success' | 'info' | 'like' | 'music') => void;
  isSidebarCollapsed?: boolean;
  onToggleSidebar?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  onPrev,
  onNext,
  canPrev,
  canNext,
  showSearch = false,
  searchQuery = '',
  onSearchChange,
  onToggleMobileMenu,
  onOpenTeam,
  onShowToast,
  isSidebarCollapsed = false,
  onToggleSidebar,
}) => {
  return (
    <header
      id="spotify-topbar"
      className="sticky top-0 z-30 h-16 bg-[#121212]/90 backdrop-blur-md px-4 sm:px-8 flex items-center justify-between border-b border-[#282828]/40 select-none shrink-0"
    >
      {/* Left side: Mobile menu toggle + Sidebar Expand + Navigation arrows + Search */}
      <div className="flex items-center gap-3">
        <motion.button
          id="btn-mobile-menu"
          whileTap={{ scale: 0.9 }}
          onClick={onToggleMobileMenu}
          className="lg:hidden w-8 h-8 rounded-full bg-[#181818] flex items-center justify-center text-[#b3b3b3] hover:text-white transition-colors cursor-pointer"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </motion.button>

        {/* Expand Sidebar Button on Desktop (when collapsed) */}
        <AnimatePresence>
          {isSidebarCollapsed && (
            <motion.button
              id="btn-sidebar-expand"
              initial={{ opacity: 0, scale: 0.85, width: 0 }}
              animate={{ opacity: 1, scale: 1, width: 'auto' }}
              exit={{ opacity: 0, scale: 0.85, width: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              onClick={onToggleSidebar}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#242424] hover:bg-[#2e2e2e] text-[#b3b3b3] hover:text-white transition-all text-xs font-semibold border border-white/10 cursor-pointer shadow-sm overflow-hidden whitespace-nowrap"
              title="Expand sidebar (Ctrl+B)"
              aria-label="Expand sidebar"
            >
              <PanelLeftOpen className="w-4 h-4 text-[#1ed760] shrink-0" />
              <span>Sidebar</span>
            </motion.button>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2">
          <motion.button
            id="btn-nav-prev"
            whileHover={canPrev ? { scale: 1.08 } : {}}
            whileTap={canPrev ? { scale: 0.92 } : {}}
            onClick={onPrev}
            disabled={!canPrev}
            className={`w-8 h-8 rounded-full bg-[#000000]/70 flex items-center justify-center transition-all ${
              canPrev
                ? 'text-white hover:bg-[#282828] cursor-pointer shadow-sm'
                : 'text-[#535353] cursor-not-allowed opacity-60'
            }`}
            aria-label="Go back"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            id="btn-nav-next"
            whileHover={canNext ? { scale: 1.08 } : {}}
            whileTap={canNext ? { scale: 0.92 } : {}}
            onClick={onNext}
            disabled={!canNext}
            className={`w-8 h-8 rounded-full bg-[#000000]/70 flex items-center justify-center transition-all ${
              canNext
                ? 'text-white hover:bg-[#282828] cursor-pointer shadow-sm'
                : 'text-[#535353] cursor-not-allowed opacity-60'
            }`}
            aria-label="Go forward"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Search bar with smooth focus expansion */}
        {showSearch && (
          <div className="relative ml-2 w-48 sm:w-72 md:w-80 transition-all duration-300 focus-within:w-60 sm:focus-within:w-80 md:focus-within:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a7a7a7] transition-colors peer-focus:text-white pointer-events-none" />
            <input
              id="topbar-search-input"
              type="text"
              placeholder="What do you want to listen to?"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="peer w-full bg-[#242424] hover:bg-[#2a2a2a] focus:bg-[#2e2e2e] text-white text-xs sm:text-sm pl-9 pr-4 py-2 rounded-full border border-transparent focus:border-white/20 focus:ring-2 focus:ring-white/10 outline-none transition-all placeholder:text-[#a7a7a7] shadow-inner"
            />
          </div>
        )}
      </div>

      {/* Right side: Notifications, Settings, Profile */}
      <div className="flex items-center gap-2 sm:gap-3">
        <motion.button
          id="btn-notifications"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onShowToast?.('No new notifications right now', 'info')}
          className="w-8 h-8 rounded-full bg-[#000000]/60 hover:bg-[#282828] flex items-center justify-center text-[#b3b3b3] hover:text-white transition-colors cursor-pointer"
          title="What's New"
        >
          <Bell className="w-4 h-4" />
        </motion.button>

        <motion.button
          id="btn-settings"
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onShowToast?.('Settings: Standard Audio Quality (320kbps)', 'info')}
          className="w-8 h-8 rounded-full bg-[#000000]/60 hover:bg-[#282828] flex items-center justify-center text-[#b3b3b3] hover:text-white transition-colors cursor-pointer"
          title="Settings"
        >
          <Settings className="w-4 h-4" />
        </motion.button>

        <motion.button
          id="btn-user-profile"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={onOpenTeam}
          className="flex items-center gap-2 bg-[#000000]/80 hover:bg-[#282828] p-0.5 sm:pr-3 rounded-full border border-transparent hover:border-[#3e3e3e] transition-all cursor-pointer shadow-sm"
        >
          <div className="w-7 h-7 rounded-full bg-[#ec4899] text-white font-bold text-xs flex items-center justify-center shadow-inner">
            N
          </div>
          <span className="text-xs font-bold text-white hidden sm:inline">Neha</span>
        </motion.button>
      </div>
    </header>
  );
};

