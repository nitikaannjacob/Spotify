import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Heart,
  Mic2,
  ListMusic,
  Laptop2,
  Volume2,
  VolumeX,
  Maximize2,
  Music,
} from 'lucide-react';
import { SectionId } from '../types';
import { EqualizerBars } from './EqualizerBars';

interface PlayerBarProps {
  currentSection: SectionId;
  trackTitle: string;
  trackSubtitle: string;
  onNextTrack: () => void;
  onPrevTrack: () => void;
  onOpenCaseStudy: () => void;
  onShowToast?: (text: string, type?: 'success' | 'info' | 'like' | 'music') => void;
}

export const PlayerBar: React.FC<PlayerBarProps> = ({
  currentSection,
  trackTitle,
  trackSubtitle,
  onNextTrack,
  onPrevTrack,
  onOpenCaseStudy,
  onShowToast,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(154); // 2:34 in seconds
  const totalDuration = 296; // 4:56 in seconds
  const [volume, setVolume] = useState<number>(75);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [isHoveringProgress, setIsHoveringProgress] = useState<boolean>(false);

  // Web Audio ambient synthesizer reference
  const audioContextRef = useRef<AudioContext | null>(null);
  const onNextTrackRef = useRef(onNextTrack);
  const isRepeatRef = useRef(isRepeat);

  useEffect(() => {
    onNextTrackRef.current = onNextTrack;
  }, [onNextTrack]);

  useEffect(() => {
    isRepeatRef.current = isRepeat;
  }, [isRepeat]);

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Playback timer progression
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev + 1 >= totalDuration) {
          // Schedule track change cleanly outside the state updater loop
          setTimeout(() => {
            if (isRepeatRef.current) {
              setCurrentTime(0);
            } else {
              setCurrentTime(0);
              onNextTrackRef.current();
            }
          }, 0);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, totalDuration]);

  // Toggle play/pause
  const togglePlay = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    if (nextState) {
      onShowToast?.('Playback resumed', 'music');
    } else {
      onShowToast?.('Playback paused', 'info');
    }

    try {
      if (nextState) {
        if (!audioContextRef.current) {
          const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
          if (AudioContextClass) {
            audioContextRef.current = new AudioContextClass();
          }
        }
        if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
          audioContextRef.current.resume();
        }
      }
    } catch {
      // Ignore audio context constraints if unavailable
    }
  };

  const handleLike = () => {
    const nextState = !isLiked;
    setIsLiked(nextState);
    if (nextState) {
      onShowToast?.('Added to Your Library', 'like');
    } else {
      onShowToast?.('Removed from Your Library', 'info');
    }
  };

  const handleShuffleToggle = () => {
    const next = !isShuffle;
    setIsShuffle(next);
    onShowToast?.(next ? 'Shuffle enabled' : 'Shuffle disabled', 'info');
  };

  const handleRepeatToggle = () => {
    const next = !isRepeat;
    setIsRepeat(next);
    onShowToast?.(next ? 'Repeat one enabled' : 'Repeat disabled', 'info');
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
  };

  const handleProgressBarMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setHoverTime(Math.floor(pos * totalDuration));
  };

  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    onShowToast?.(next ? 'Muted audio' : `Volume: ${volume}%`, 'info');
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
      onShowToast?.('Entered full screen', 'info');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  // Dynamic cover art based on section
  const getCoverBadge = () => {
    switch (currentSection) {
      case 'problem':
        return (
          <div className="w-12 h-12 rounded-lg bg-[#282828] flex items-center justify-center text-red-400 font-bold border border-red-500/30 shadow-md">
            <span className="text-lg">💡</span>
          </div>
        );
      case 'empathize':
        return (
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-900 flex items-center justify-center text-white font-bold shadow-md">
            <Heart className="w-5 h-5 fill-current text-[#1ed760]" />
          </div>
        );
      case 'define':
        return (
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-700 to-indigo-900 flex items-center justify-center text-white font-bold shadow-md">
            <div className="w-6 h-6 rounded-full border border-emerald-400 flex items-center justify-center text-[10px] text-emerald-300 font-black">
              96%
            </div>
          </div>
        );
      case 'ideate':
        return (
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center text-white font-bold shadow-md">
            <span className="text-[11px] tracking-wider text-purple-300 font-black">IDEATE</span>
          </div>
        );
      case 'prototype':
        return (
          <div className="w-12 h-12 rounded-lg bg-[#1e293b] border border-sky-500/30 flex items-center justify-center text-[#1ed760] font-bold shadow-md">
            <Laptop2 className="w-5 h-5" />
          </div>
        );
      case 'impact':
        return (
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-600 to-amber-900 flex items-center justify-center text-white font-bold shadow-md">
            <span className="text-xs font-black">45M+</span>
          </div>
        );
      case 'analysis':
        return (
          <div className="w-12 h-12 rounded-lg bg-[#132a1c] border border-[#1ed760]/30 flex items-center justify-center text-[#1ed760] font-bold shadow-md">
            <span className="text-[10px] font-black uppercase text-emerald-400">Jam UI</span>
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 rounded-lg bg-[#282828] border border-white/5 flex items-center justify-center text-[#b3b3b3] shadow-md">
            <Music className="w-5 h-5 text-[#1ed760]" />
          </div>
        );
    }
  };

  const progressPercent = (currentTime / totalDuration) * 100;

  return (
    <footer
      id="spotify-player-bar"
      className="fixed bottom-0 left-0 right-0 h-20 sm:h-[90px] bg-[#121212]/95 backdrop-blur-xl border-t border-[#282828]/80 px-4 sm:px-6 flex items-center justify-between z-40 select-none shadow-2xl transition-all"
    >
      {/* Left section: Track Info */}
      <div className="flex items-center gap-3 w-1/3 sm:w-1/4 min-w-[140px] sm:min-w-[190px]">
        <div className="shrink-0 relative group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.85, rotate: 2 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="relative"
            >
              {getCoverBadge()}
              {isPlaying && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#1ed760] rounded-full border-2 border-[#121212] shadow-sm" />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="min-w-0 pr-2">
          <div className="flex items-center gap-1.5">
            <AnimatePresence mode="wait">
              <motion.div
                key={trackTitle}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.18 }}
                onClick={onOpenCaseStudy}
                className="text-white text-xs sm:text-sm font-semibold truncate hover:underline cursor-pointer"
              >
                {trackTitle}
              </motion.div>
            </AnimatePresence>
            {isPlaying && (
              <div className="shrink-0 hidden xl:block">
                <EqualizerBars isPlaying={isPlaying} size="sm" />
              </div>
            )}
          </div>
          <div
            onClick={onOpenCaseStudy}
            className="text-[#a7a7a7] text-[11px] sm:text-xs truncate hover:underline hover:text-white cursor-pointer transition-colors"
          >
            {trackSubtitle}
          </div>
        </div>

        {/* Heart / Like Button with Bouncy Spring Pop */}
        <motion.button
          id="btn-player-like"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.75 }}
          onClick={handleLike}
          className={`shrink-0 transition-colors p-1.5 rounded-full hover:bg-white/5 cursor-pointer ${
            isLiked ? 'text-[#1ed760]' : 'text-[#b3b3b3] hover:text-white'
          }`}
          title={isLiked ? 'Remove from Your Library' : 'Save to Your Library'}
        >
          <motion.div
            animate={isLiked ? { scale: [1, 1.35, 1] } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Heart
              className={`w-4 h-4 sm:w-5 sm:h-5 transition-all ${
                isLiked ? 'fill-current drop-shadow-[0_0_6px_rgba(30,215,96,0.6)]' : ''
              }`}
            />
          </motion.div>
        </motion.button>
      </div>

      {/* Center section: Player Controls & Timeline */}
      <div className="flex flex-col items-center max-w-[45%] sm:max-w-[44%] w-full">
        {/* Buttons */}
        <div className="flex items-center gap-3 sm:gap-6 mb-1">
          <motion.button
            id="btn-player-shuffle"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleShuffleToggle}
            className={`hidden sm:block transition-colors cursor-pointer ${
              isShuffle ? 'text-[#1ed760]' : 'text-[#b3b3b3] hover:text-white'
            }`}
            title={isShuffle ? 'Disable shuffle' : 'Enable shuffle'}
          >
            <Shuffle className="w-4 h-4" />
          </motion.button>

          <motion.button
            id="btn-player-prev"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.88 }}
            onClick={onPrevTrack}
            className="text-[#b3b3b3] hover:text-white transition-colors cursor-pointer"
            title="Previous track"
          >
            <SkipBack className="w-5 h-5 fill-current" />
          </motion.button>

          {/* Animated Center Play/Pause Button */}
          <motion.button
            id="btn-player-toggle-play"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={togglePlay}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-[#f3f3f3] text-black flex items-center justify-center transition-all shadow-lg hover:shadow-white/20 cursor-pointer relative overflow-hidden"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="pause-icon"
                  initial={{ scale: 0.6, opacity: 0, rotate: -30 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.6, opacity: 0, rotate: 30 }}
                  transition={{ duration: 0.15 }}
                >
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-black" />
                </motion.div>
              ) : (
                <motion.div
                  key="play-icon"
                  initial={{ scale: 0.6, opacity: 0, rotate: 30 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.6, opacity: 0, rotate: -30 }}
                  transition={{ duration: 0.15 }}
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-black ml-0.5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button
            id="btn-player-next"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.88 }}
            onClick={onNextTrack}
            className="text-[#b3b3b3] hover:text-white transition-colors cursor-pointer"
            title="Next track"
          >
            <SkipForward className="w-5 h-5 fill-current" />
          </motion.button>

          <motion.button
            id="btn-player-repeat"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleRepeatToggle}
            className={`hidden sm:block transition-colors cursor-pointer ${
              isRepeat ? 'text-[#1ed760]' : 'text-[#b3b3b3] hover:text-white'
            }`}
            title={isRepeat ? 'Disable repeat' : 'Enable repeat'}
          >
            <Repeat className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Time Progress Bar with Hover Scrub & Tooltip */}
        <div
          className="w-full flex items-center gap-2 text-[11px] text-[#a7a7a7] font-medium"
          onMouseEnter={() => setIsHoveringProgress(true)}
          onMouseLeave={() => {
            setIsHoveringProgress(false);
            setHoverTime(null);
          }}
        >
          <span className="w-8 text-right tabular-nums">{formatTime(currentTime)}</span>
          <div
            className="relative flex-1 flex items-center group h-4 cursor-pointer"
            onMouseMove={handleProgressBarMouseMove}
          >
            {/* Hover Tooltip */}
            {isHoveringProgress && hoverTime !== null && (
              <div
                className="absolute -top-7 -translate-x-1/2 px-2 py-0.5 rounded bg-[#282828] text-white text-[10px] font-bold shadow-lg border border-white/10 pointer-events-none z-30 tabular-nums"
                style={{ left: `${(hoverTime / totalDuration) * 100}%` }}
              >
                {formatTime(hoverTime)}
              </div>
            )}

            <input
              id="player-progress-slider"
              type="range"
              min={0}
              max={totalDuration}
              value={currentTime}
              onChange={handleSeek}
              className="absolute w-full h-1 bg-transparent appearance-none cursor-pointer z-20 opacity-0"
            />
            {/* Track Background */}
            <div className="w-full h-1 bg-[#4d4d4d] rounded-full overflow-visible relative group-hover:h-1.5 transition-all">
              <div
                className="h-full rounded-full bg-white group-hover:bg-[#1ed760] transition-colors relative"
                style={{ width: `${progressPercent}%` }}
              >
                {/* Scrub Handle Thumb on Hover */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-150" />
              </div>
            </div>
          </div>
          <span className="w-8 text-left tabular-nums">{formatTime(totalDuration)}</span>
        </div>
      </div>

      {/* Right section: Auxiliary controls */}
      <div className="flex items-center justify-end gap-3 w-1/3 sm:w-1/4 min-w-[120px] text-[#b3b3b3]">
        <motion.button
          id="btn-player-lyrics"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={onOpenCaseStudy}
          className="hidden md:flex items-center justify-center hover:text-white transition-colors cursor-pointer"
          title="Case Notes / Summary"
        >
          <Mic2 className="w-4 h-4" />
        </motion.button>

        <motion.button
          id="btn-player-queue"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={onOpenCaseStudy}
          className="hidden md:flex items-center justify-center hover:text-white transition-colors cursor-pointer"
          title="Queue"
        >
          <ListMusic className="w-4 h-4" />
        </motion.button>

        <motion.button
          id="btn-player-connect"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onShowToast?.('Connected to Spotify Web Player', 'info')}
          className="hidden lg:flex items-center justify-center hover:text-white transition-colors cursor-pointer"
          title="Connect to a device"
        >
          <Laptop2 className="w-4 h-4" />
        </motion.button>

        {/* Volume controls with pure flex vertical centering and equal spacing */}
        <div className="flex items-center gap-2">
          <motion.button
            id="btn-player-mute"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            onClick={toggleMute}
            className="flex items-center justify-center hover:text-white transition-colors cursor-pointer"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
            ) : (
              <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </motion.button>

          <div className="w-16 sm:w-24 hidden sm:flex items-center h-5">
            <input
              id="player-volume-slider"
              type="range"
              min={0}
              max={100}
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                setVolume(Number(e.target.value));
                if (isMuted) setIsMuted(false);
              }}
              className="w-full h-1 bg-[#4d4d4d] rounded-full appearance-none cursor-pointer accent-[#1ed760] hover:accent-[#1fdf64] transition-all self-center"
            />
          </div>
        </div>

        <motion.button
          id="btn-player-fullscreen"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleFullscreen}
          className="hidden sm:flex items-center justify-center hover:text-white transition-colors cursor-pointer"
          title={isFullscreen ? 'Exit full screen' : 'Full screen'}
        >
          <Maximize2 className="w-4 h-4" />
        </motion.button>
      </div>
    </footer>
  );
};

