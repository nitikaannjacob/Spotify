import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Check,
  Download,
  UserPlus,
  MoreVertical,
  Shuffle,
  Play,
  Pause,
  Plus,
  Search,
  Home,
  Library,
  Radio,
  Sparkles,
  TrendingUp,
  Repeat,
  Share2,
} from 'lucide-react';
import { SectionId } from '../../types';

interface PrototypeViewProps {
  onNavigate: (section: SectionId) => void;
}

export const PrototypeView: React.FC<PrototypeViewProps> = () => {
  const [jamPlaying, setJamPlaying] = useState<boolean>(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
      className="p-6 sm:p-10 max-w-7xl mx-auto space-y-10"
    >
      {/* Header */}
      <div className="space-y-2 pt-2">
        <div className="text-xs font-bold uppercase tracking-wider text-[#1ed760]">
          Feature Showcase
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
          Prototype
        </h1>
        <p className="text-lg sm:text-xl text-[#b3b3b3] pt-1 font-medium">
          Making the idea tangible.
        </p>
      </div>

      {/* 2x2 Phone Frame Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ================= Prototype 1: Blend ================= */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#181818] border border-white/5 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">Blend</h2>
              <p className="text-xs text-[#a7a7a7]">Shared playlist, Taste-match.</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#242424] flex items-center justify-center text-[#a7a7a7]">
              <span className="text-xs font-bold">⚭</span>
            </div>
          </div>

          {/* Mobile Phone Mockup */}
          <div className="w-full max-w-sm mx-auto bg-black rounded-[36px] border-4 border-[#2c2c2c] overflow-hidden shadow-2xl flex flex-col text-white">
            {/* Status Bar */}
            <div className="px-5 pt-3 pb-2 flex items-center justify-between text-[11px] text-[#a7a7a7] font-medium">
              <span>08:58</span>
              <div className="flex items-center gap-1.5">
                <span>📶</span>
                <span>🔋 7%</span>
              </div>
            </div>

            {/* App Nav Bar */}
            <div className="px-4 py-2 flex items-center">
              <ArrowLeft className="w-5 h-5 text-white cursor-pointer" />
            </div>

            {/* Venn Diagram Visual */}
            <div className="p-4 flex flex-col items-center justify-center relative">
              <div className="relative w-48 h-32 flex items-center justify-center">
                {/* Blue Circle */}
                <div className="w-24 h-24 rounded-full bg-[#3b82f6] absolute left-6 mix-blend-screen opacity-90" />
                {/* Green Circle */}
                <div className="w-24 h-24 rounded-full bg-[#10b981] absolute right-6 mix-blend-screen opacity-90 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-400 -ml-16" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight -mt-4">
                Neha + Nitika
              </h3>
            </div>

            {/* Info & Metadata */}
            <div className="px-5 space-y-1">
              <div className="flex items-center gap-1 text-[11px] font-bold text-gray-400">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1ed760]" /> Spotify
              </div>
              <p className="text-xs text-gray-300 font-medium">
                A Blend of music for Nitika and Neha.
              </p>
              <div className="text-[11px] text-[#808080]">2 saves • 3h 2min</div>
            </div>

            {/* Actions Row */}
            <div className="px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-4 text-[#a7a7a7]">
                <Check className="w-5 h-5 text-[#1ed760]" />
                <Download className="w-5 h-5" />
                <UserPlus className="w-5 h-5" />
                <MoreVertical className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-3">
                <Shuffle className="w-5 h-5 text-[#1ed760]" />
                <div className="w-10 h-10 rounded-full bg-[#1ed760] text-black flex items-center justify-center shadow-lg">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              </div>
            </div>

            {/* Add to playlist button */}
            <div className="px-5 py-1">
              <button className="flex items-center gap-2 text-xs font-bold text-white bg-[#1e1e1e] hover:bg-[#282828] py-2 px-3 rounded-full w-fit">
                <Plus className="w-4 h-4" /> Add to this playlist
              </button>
            </div>

            {/* Tracklist Preview */}
            <div className="p-4 space-y-2 text-xs">
              <div className="flex items-center justify-between p-1.5 rounded hover:bg-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-[9px] font-black">
                    STARBOY
                  </div>
                  <div>
                    <div className="font-bold text-white">Starboy</div>
                    <div className="text-[10px] text-[#808080]">The Weeknd, Daft Punk</div>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-[#ec4899] text-[8px] text-white flex items-center justify-center font-bold">N</div>
              </div>

              <div className="flex items-center justify-between p-1.5 rounded hover:bg-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-purple-900 flex items-center justify-center text-[9px] font-black">
                    SOMBR
                  </div>
                  <div>
                    <div className="font-bold text-white">i don't know you any...</div>
                    <div className="text-[10px] text-[#808080]">sombr</div>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-[#ec4899] text-[8px] text-white flex items-center justify-center font-bold">N</div>
              </div>

              <div className="flex items-center justify-between p-1.5 rounded hover:bg-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-amber-600 flex items-center justify-center text-[9px] font-black">
                    LUSH
                  </div>
                  <div>
                    <div className="font-bold text-white">Lush Life</div>
                    <div className="text-[10px] text-[#808080]">Zara Larsson</div>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-[#ea580c] text-[8px] text-white flex items-center justify-center font-bold">S</div>
              </div>
            </div>

            {/* Bottom Nav Mock */}
            <div className="border-t border-[#222] py-2 px-6 flex items-center justify-between text-[#808080] text-[9px]">
              <div className="flex flex-col items-center gap-0.5 text-white">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <Search className="w-4 h-4" />
                <span>Search</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <Library className="w-4 h-4" />
                <span>Your Library</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <Plus className="w-4 h-4" />
                <span>Create</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Prototype 2: Jam ================= */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#181818] border border-white/5 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">Jam</h2>
              <p className="text-xs text-[#a7a7a7]">Live shared queue (college function test).</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#242424] flex items-center justify-center text-[#a7a7a7]">
              <Radio className="w-4 h-4" />
            </div>
          </div>

          {/* Mobile Phone Mockup */}
          <div className="w-full max-w-sm mx-auto bg-black rounded-[36px] border-4 border-[#2c2c2c] overflow-hidden shadow-2xl flex flex-col text-white">
            {/* Status Bar */}
            <div className="px-5 pt-3 pb-2 flex items-center justify-between text-[11px] text-[#a7a7a7] font-medium">
              <span>09:04</span>
              <div className="flex items-center gap-1.5">
                <span>📶</span>
                <span>🔋 9%</span>
              </div>
            </div>

            {/* Jam Session Header */}
            <div className="px-5 py-2 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-black text-white">Nitika Ann Jacob's Jam</h3>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-5 h-5 rounded-full bg-[#333] border border-white/20 flex items-center justify-center text-[10px] font-bold">+</div>
                  <div className="w-5 h-5 rounded-full bg-[#ec4899] text-white flex items-center justify-center text-[9px] font-bold">N</div>
                  <div className="w-5 h-5 rounded-full bg-[#ea580c] text-white flex items-center justify-center text-[9px] font-bold">N</div>
                </div>
              </div>
              <button className="px-3 py-1 rounded-full bg-[#282828] text-xs font-bold text-white hover:bg-red-900/60 transition-colors">
                End
              </button>
            </div>

            {/* Queue Control Bar */}
            <div className="px-5 py-2 flex items-center justify-between text-xs border-b border-[#1e1e1e]">
              <div>
                <span className="font-bold text-white">Queue</span>
                <p className="text-[10px] text-[#808080]">Playing blah blah blah_new</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-[11px] text-[#a7a7a7] hover:text-white">Clear</button>
                <button className="text-[11px] text-[#a7a7a7] hover:text-white">Edit</button>
              </div>
            </div>

            {/* Now Playing */}
            <div className="px-5 py-2.5 bg-[#121212] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded bg-teal-800 flex items-center justify-center text-[8px] font-black">
                  JOJI
                </div>
                <div>
                  <div className="font-bold text-xs text-[#1ed760] flex items-center gap-1">
                    <span>📊</span> Glimpse of Us
                  </div>
                  <div className="text-[10px] text-[#808080]">Joji</div>
                </div>
              </div>
              <button
                onClick={() => setJamPlaying(!jamPlaying)}
                className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center"
              >
                {jamPlaying ? (
                  <Pause className="w-3.5 h-3.5 fill-current" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                )}
              </button>
            </div>

            {/* Queue Items */}
            <div className="px-4 py-2 space-y-1.5 text-xs max-h-52 overflow-y-auto">
              {[
                { song: 'Tomorrow Never Came', artist: 'Lana Del Rey, Sean Ono L...', color: 'bg-indigo-900', initial: 'N' },
                { song: 'Photograph', artist: 'Ed Sheeran', color: 'bg-emerald-800', initial: 'N' },
                { song: 'Counting Stars', artist: 'OneRepublic', color: 'bg-red-800', initial: 'N' },
                { song: 'Blah Blah', artist: 'Joji', color: 'bg-zinc-800', initial: 'S' },
                { song: 'Sailor Song', artist: 'Gigi Perez', color: 'bg-slate-700', initial: 'N' },
                { song: '1AM FREESTYLE', artist: 'Joji', color: 'bg-cyan-900', initial: 'N' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-1.5 rounded hover:bg-white/5">
                  <div className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded ${item.color} flex items-center justify-center text-[7px] font-bold`}>
                      ♫
                    </div>
                    <div className="truncate max-w-[170px]">
                      <div className="font-semibold text-white truncate text-[11px]">{item.song}</div>
                      <div className="text-[9px] text-[#808080] truncate">{item.artist}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#ec4899] text-[8px] flex items-center justify-center font-bold">
                      {item.initial}
                    </span>
                    <span className="text-[#666] text-xs">≡</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions Mock */}
            <div className="p-3 bg-[#181818] border-t border-[#242424] grid grid-cols-3 gap-2 text-center text-[10px] text-[#a7a7a7]">
              <button className="flex flex-col items-center gap-1 py-1 rounded bg-[#242424]">
                <Shuffle className="w-3.5 h-3.5" />
                <span>Shuffle</span>
              </button>
              <button className="flex flex-col items-center gap-1 py-1 rounded bg-[#242424]">
                <Repeat className="w-3.5 h-3.5" />
                <span>Repeat</span>
              </button>
              <button className="flex flex-col items-center gap-1 py-1 rounded bg-[#242424] text-[#1ed760]">
                <Plus className="w-3.5 h-3.5" />
                <span>Add songs</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================= Prototype 3: Made For You ================= */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#181818] border border-white/5 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">Made For You</h2>
              <p className="text-xs text-[#a7a7a7]">History &rarr; Analysis &rarr; Recommendations.</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#242424] flex items-center justify-center text-[#a7a7a7]">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          {/* Mobile Phone Mockup */}
          <div className="w-full max-w-sm mx-auto bg-black rounded-[36px] border-4 border-[#2c2c2c] overflow-hidden shadow-2xl flex flex-col text-white">
            {/* Status Bar */}
            <div className="px-5 pt-3 pb-2 flex items-center justify-between text-[11px] text-[#a7a7a7] font-medium">
              <span>08:57</span>
              <div className="flex items-center gap-1.5">
                <span>📶</span>
                <span>🔋 6%</span>
              </div>
            </div>

            {/* Back & Title */}
            <div className="px-4 py-2 flex items-center gap-3">
              <ArrowLeft className="w-5 h-5 text-white" />
              <span className="text-xs font-bold text-[#b3b3b3]">Time listened</span>
            </div>

            {/* Big Headline */}
            <div className="px-5 py-2 space-y-1">
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                You listened to music for{' '}
                <span className="underline decoration-[#1ed760]">10,287 minutes</span> this month.
              </h3>
              <p className="text-[11px] text-[#a7a7a7] pt-1">
                Daily average: <span className="text-white font-bold">428 min</span>
              </p>
            </div>

            {/* Custom Bar Graph */}
            <div className="px-5 py-4">
              <div className="h-32 w-full border-b border-[#333] flex items-end justify-between gap-1.5 pb-1 relative">
                {/* Threshold line 428 min */}
                <div className="absolute w-full top-1/2 border-t border-dashed border-[#1ed760]/40 flex justify-end">
                  <span className="text-[8px] text-[#1ed760] -mt-2.5">428</span>
                </div>
                
                {/* Simulated daily bars */}
                {[
                  35, 60, 45, 80, 20, 95, 70, 40, 65, 85, 90, 50, 75, 60, 40, 85, 90, 100, 70, 55, 65,
                  80, 90, 45, 60, 75, 85, 95, 65, 80,
                ].map((h, i) => (
                  <div
                    key={i}
                    className={`w-full rounded-t-sm ${
                      h > 70 ? 'bg-[#1ed760]' : 'bg-[#10b981]/50'
                    }`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-[9px] text-[#808080] pt-1">
                <span>1</span>
                <span>8</span>
                <span>15</span>
                <span>22</span>
                <span>29</span>
              </div>
            </div>

            {/* Comparison Callout */}
            <div className="px-5 py-3 space-y-2">
              <p className="text-xs font-black text-white leading-tight">
                You listen to <span className="text-[#1ed760]">2311% more</span> music than the average listener in India.
              </p>

              {/* Graphical Circular Comparison */}
              <div className="p-3 rounded-xl bg-[#141414] border border-white/5 flex items-center justify-between">
                <div className="space-y-1 text-[11px]">
                  <div>
                    <span className="text-[#a7a7a7]">Your music time: </span>
                    <span className="text-white font-bold">7d 3h 27min</span>
                  </div>
                  <div>
                    <span className="text-[#a7a7a7]">India average: </span>
                    <span className="text-white font-bold">7h 6min</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-[#1ed760] flex items-center justify-center text-[10px] font-black text-[#1ed760]">
                  23x
                </div>
              </div>
            </div>

            {/* Bottom Nav Mock */}
            <div className="border-t border-[#222] py-2 px-6 flex items-center justify-between text-[#808080] text-[9px]">
              <div className="flex flex-col items-center gap-0.5 text-white">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <Search className="w-4 h-4" />
                <span>Search</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <Library className="w-4 h-4" />
                <span>Your Library</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <Plus className="w-4 h-4" />
                <span>Create</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Prototype 4: Sound Capsule ================= */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#181818] border border-white/5 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">Sound Capsule</h2>
              <p className="text-xs text-[#a7a7a7]">Digital insight experience.</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#242424] flex items-center justify-center text-[#a7a7a7]">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>

          {/* Mobile Phone Mockup */}
          <div className="w-full max-w-sm mx-auto bg-black rounded-[36px] border-4 border-[#2c2c2c] overflow-hidden shadow-2xl flex flex-col text-white">
            {/* Header Art & Branding */}
            <div className="relative aspect-[4/3] bg-[#222] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1 text-[10px] font-bold text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1ed760]" /> Spotify Premium
              </div>
              <div className="absolute top-4 right-4 z-20 text-[10px] font-bold text-gray-300">
                August 25, 2026
              </div>

              {/* Artistic Photo Mockup */}
              <div className="w-full h-full flex items-center justify-center grayscale contrast-125 bg-neutral-800">
                <div className="text-center">
                  <span className="text-4xl">🎧</span>
                  <div className="text-xs font-bold text-white/70 mt-2">CAPSULE ARTWORK</div>
                </div>
              </div>
            </div>

            {/* Capsule Content */}
            <div className="p-5 space-y-5 -mt-6 z-20 bg-black/90 rounded-t-3xl backdrop-blur-md">
              <h3 className="text-2xl font-black text-white tracking-tight">
                My August Sound Capsule
              </h3>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h4 className="font-extrabold text-white mb-2 uppercase text-[10px] tracking-wider text-[#a7a7a7]">
                    Top artists
                  </h4>
                  <ol className="space-y-1 text-gray-300 font-medium text-[11px]">
                    <li>1 Lana Del Rey</li>
                    <li>2 Joji</li>
                    <li>3 The Weeknd</li>
                    <li>4 Anuv Jain</li>
                    <li>5 Olivia Rodrigo</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-extrabold text-white mb-2 uppercase text-[10px] tracking-wider text-[#a7a7a7]">
                    Top songs
                  </h4>
                  <ol className="space-y-1 text-gray-300 font-medium text-[11px]">
                    <li>1 PIXELATED KISSES</li>
                    <li>2 bloodstream</li>
                    <li>3 Blah Blah</li>
                    <li>4 FREAKED OUT</li>
                    <li>5 ALL THE LOVE (f...</li>
                  </ol>
                </div>
              </div>

              <div className="pt-2 border-t border-[#222]">
                <div className="text-[10px] uppercase font-bold text-[#808080]">
                  Time listened
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#1ed760] tracking-tight">
                  10,287 minutes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
