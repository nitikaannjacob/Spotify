import React from 'react';
import { motion } from 'motion/react';
import { SectionId } from '../../types';
import { Music, Radio, Sparkles, Disc, ExternalLink } from 'lucide-react';
import { PlayHoverButton } from '../PlayHoverButton';

interface HomeViewProps {
  onNavigate: (section: SectionId) => void;
  onShowToast?: (text: string, type?: 'success' | 'info' | 'like' | 'music') => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onShowToast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
      className="p-6 sm:p-10 max-w-7xl mx-auto space-y-12"
    >
      {/* Massive Display Hero Typography */}
      <div className="space-y-4 pt-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold tracking-tight leading-[1.05] text-white">
          Designing for
          <br />
          Connection:
          <br />
          <span className="text-[#1ed760]">
            A Design Thinking
            <br />
            Case Study of
            <br />
            Spotify
          </span>
        </h1>

        <p className="text-lg sm:text-2xl font-semibold text-[#d1d5db] pt-3 tracking-tight">
          Spotify — Blend, Jam, Made For You, Sound Capsule
        </p>
      </div>

      {/* Made For You Features Section */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Made For You Features
          </h2>
          <button
            onClick={() => onNavigate('overview')}
            className="text-xs sm:text-sm font-bold tracking-widest text-[#a7a7a7] hover:text-white uppercase transition-colors cursor-pointer"
          >
            Show All
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Spotify Blend */}
          <div
            id="home-card-blend"
            onClick={() => {
              onShowToast?.('Loading Spotify Blend interactive prototype...', 'music');
              onNavigate('prototype');
            }}
            className="group bg-[#181818] hover:bg-[#282828] p-4 rounded-xl transition-all duration-300 cursor-pointer flex flex-col justify-between border border-white/5 hover:border-white/10 shadow-lg hover:shadow-2xl relative hover:-translate-y-1.5"
          >
            {/* Visual Graphic */}
            <div className="w-full aspect-square bg-[#222222] rounded-lg p-3 overflow-hidden relative mb-4 flex flex-col justify-between text-[11px] text-gray-300 border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none" />
              
              {/* Play Hover Button */}
              <div className="absolute right-3 bottom-3 z-20">
                <PlayHoverButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onShowToast?.('Playing: Spotify Blend Mix', 'music');
                  }}
                />
              </div>

              <div className="flex items-center justify-between text-[9px] text-[#a7a7a7] font-medium z-10">
                <span className="flex items-center gap-1 font-bold text-white">
                  <span className="w-2 h-2 rounded-full bg-[#1ed760] inline-block" /> Spotify Premium
                </span>
                <span>August 25, 2026</span>
              </div>
              <div className="z-10 text-center my-auto">
                <div className="font-bold text-white text-xs mb-1">My August Sound Capsule</div>
                <div className="grid grid-cols-2 gap-1 text-[8px] text-left text-gray-400">
                  <div>
                    <span className="text-white font-semibold">Top artists</span>
                    <div>1 Lana Del Rey</div>
                    <div>2 Joji</div>
                    <div>3 The Weeknd</div>
                  </div>
                  <div>
                    <span className="text-white font-semibold">Top songs</span>
                    <div>1 PIXELATED KISSES</div>
                    <div>2 bloodstream</div>
                    <div>3 Blah Blah</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#1ed760] transition-colors">
                Spotify Blend
              </h3>
              <p className="text-xs text-[#a7a7a7] line-clamp-2 leading-relaxed">
                Merge your musical tastes with friends in a shared...
              </p>
            </div>
          </div>

          {/* Card 2: Spotify Jam */}
          <div
            id="home-card-jam"
            onClick={() => {
              onShowToast?.('Opening Spotify Jam Live Session...', 'music');
              onNavigate('prototype');
            }}
            className="group bg-[#181818] hover:bg-[#282828] p-4 rounded-xl transition-all duration-300 cursor-pointer flex flex-col justify-between border border-white/5 hover:border-white/10 shadow-lg hover:shadow-2xl relative hover:-translate-y-1.5"
          >
            {/* Visual Graphic - Rich Violet/Blue Speaker Box */}
            <div className="w-full aspect-square bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#4338ca] rounded-lg p-4 overflow-hidden relative mb-4 flex items-center justify-center shadow-inner">
              <div className="w-14 h-20 rounded-xl border-2 border-white/80 flex flex-col items-center justify-center gap-2 shadow-2xl bg-white/10 backdrop-blur-sm">
                <div className="w-3 h-3 rounded-full border-2 border-white/90" />
                <div className="w-7 h-7 rounded-full border-2 border-white/90 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                </div>
              </div>

              {/* Play Hover Button */}
              <div className="absolute right-3 bottom-3 z-20">
                <PlayHoverButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onShowToast?.('Starting: Spotify Jam Queue', 'music');
                  }}
                />
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#1ed760] transition-colors">
                Spotify Jam
              </h3>
              <p className="text-xs text-[#a7a7a7] line-clamp-2 leading-relaxed">
                Listen together in real-time. Anyone can add to the...
              </p>
            </div>
          </div>

          {/* Card 3: Algorithmic Mixes */}
          <div
            id="home-card-mixes"
            onClick={() => {
              onShowToast?.('Loading Algorithmic Recommendation Flow...', 'info');
              onNavigate('ideate');
            }}
            className="group bg-[#181818] hover:bg-[#282828] p-4 rounded-xl transition-all duration-300 cursor-pointer flex flex-col justify-between border border-white/5 hover:border-white/10 shadow-lg hover:shadow-2xl relative hover:-translate-y-1.5"
          >
            {/* Visual Graphic - Grid of Artist Mixes */}
            <div className="w-full aspect-square bg-[#121212] rounded-lg p-2 overflow-hidden relative mb-4 border border-white/5 flex flex-col justify-center">
              {/* Play Hover Button */}
              <div className="absolute right-3 bottom-3 z-20">
                <PlayHoverButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onShowToast?.('Playing: Daily Artist Mix', 'music');
                  }}
                />
              </div>

              <div className="text-[9px] text-center font-bold text-gray-300 mb-1.5">Your Artist Mixes</div>
              <div className="grid grid-cols-3 gap-1.5">
                <div className="bg-[#2a2a2a] rounded p-1 text-center">
                  <div className="w-full aspect-square rounded bg-[#ff6b6b]/30 mb-0.5 flex items-center justify-center text-[7px] font-bold text-pink-300">Art Pop</div>
                  <span className="text-[6px] text-gray-400 block truncate">Charli xcx</span>
                </div>
                <div className="bg-[#2a2a2a] rounded p-1 text-center">
                  <div className="w-full aspect-square rounded bg-[#4dabf7]/30 mb-0.5 flex items-center justify-center text-[7px] font-bold text-blue-300">Pop Mix</div>
                  <span className="text-[6px] text-gray-400 block truncate">The Weeknd</span>
                </div>
                <div className="bg-[#2a2a2a] rounded p-1 text-center">
                  <div className="w-full aspect-square rounded bg-[#a78bfa]/30 mb-0.5 flex items-center justify-center text-[7px] font-bold text-purple-300">Indie Mix</div>
                  <span className="text-[6px] text-gray-400 block truncate">Wallows</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#1ed760] transition-colors">
                Algorithmic Mixes
              </h3>
              <p className="text-xs text-[#a7a7a7] line-clamp-2 leading-relaxed">
                Discover Weekly, Release Radar, and Daily Mixes.
              </p>
            </div>
          </div>

          {/* Card 4: Sound Capsule */}
          <div
            id="home-card-capsule"
            onClick={() => {
              onShowToast?.('Opening August Sound Capsule...', 'music');
              onNavigate('prototype');
            }}
            className="group bg-[#181818] hover:bg-[#282828] p-4 rounded-xl transition-all duration-300 cursor-pointer flex flex-col justify-between border border-white/5 hover:border-white/10 shadow-lg hover:shadow-2xl relative hover:-translate-y-1.5"
          >
            {/* Visual Graphic - Dark Framed Capsule */}
            <div className="w-full aspect-square bg-[#121815] rounded-lg p-4 overflow-hidden relative mb-4 border border-[#1ed760]/20 flex flex-col items-center justify-center text-center">
              {/* Play Hover Button */}
              <div className="absolute right-3 bottom-3 z-20">
                <PlayHoverButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onShowToast?.('Playing: Sound Capsule Recap', 'music');
                  }}
                />
              </div>

              <div className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight mb-2">
                Sound
                <br />
                Capsule
              </div>
              <div className="text-[11px] font-bold text-[#1ed760] bg-[#1ed760]/10 px-2.5 py-1 rounded-full">
                August 2026
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#1ed760] transition-colors">
                Sound Capsule
              </h3>
              <p className="text-xs text-[#a7a7a7] line-clamp-2 leading-relaxed">
                Your monthly listening habits, beautifully...
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
