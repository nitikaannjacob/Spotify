import React from 'react';

interface EqualizerBarsProps {
  isPlaying: boolean;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const EqualizerBars: React.FC<EqualizerBarsProps> = ({
  isPlaying,
  color = '#1ed760',
  size = 'md',
}) => {
  const heights = size === 'sm' ? ['h-2.5', 'h-3.5', 'h-2', 'h-3'] : ['h-3.5', 'h-5', 'h-2.5', 'h-4'];
  const barWidth = size === 'sm' ? 'w-0.5' : 'w-1';
  const containerHeight = size === 'sm' ? 'h-3.5' : 'h-5';

  return (
    <div
      className={`flex items-end gap-[2px] ${containerHeight} justify-center`}
      aria-label={isPlaying ? 'Playing audio equalizer' : 'Paused audio equalizer'}
    >
      <span
        style={{ backgroundColor: color }}
        className={`${barWidth} rounded-full transition-all duration-300 ${
          isPlaying ? 'animate-eq-1' : 'h-1 opacity-70'
        }`}
      />
      <span
        style={{ backgroundColor: color }}
        className={`${barWidth} rounded-full transition-all duration-300 ${
          isPlaying ? 'animate-eq-2' : 'h-1.5 opacity-70'
        }`}
      />
      <span
        style={{ backgroundColor: color }}
        className={`${barWidth} rounded-full transition-all duration-300 ${
          isPlaying ? 'animate-eq-3' : 'h-1 opacity-70'
        }`}
      />
      <span
        style={{ backgroundColor: color }}
        className={`${barWidth} rounded-full transition-all duration-300 ${
          isPlaying ? 'animate-eq-4' : 'h-1.5 opacity-70'
        }`}
      />
    </div>
  );
};
