import React from 'react';
import { motion } from 'motion/react';
import { Play, Pause } from 'lucide-react';

interface PlayHoverButtonProps {
  isPlaying?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PlayHoverButton: React.FC<PlayHoverButtonProps> = ({
  isPlaying = false,
  onClick,
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
  }[size];

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }[size];

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
      className={`rounded-full bg-[#1ed760] hover:bg-[#1fdf64] text-black flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-colors opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 duration-300 ease-out z-20 cursor-pointer ${sizeClasses} ${className}`}
      aria-label={isPlaying ? 'Pause' : 'Play'}
    >
      {isPlaying ? (
        <Pause className={`${iconSizes} fill-current text-black`} />
      ) : (
        <Play className={`${iconSizes} fill-current text-black ml-0.5`} />
      )}
    </motion.button>
  );
};
