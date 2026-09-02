import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Info, Heart, Music } from 'lucide-react';

export interface ToastMessage {
  id: string;
  text: string;
  type?: 'success' | 'info' | 'like' | 'music';
}

interface ToastProps {
  toast?: ToastMessage | null;
  toasts?: ToastMessage[];
  onClose?: () => void;
  onDismiss?: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, toasts, onClose, onDismiss }) => {
  // Normalize toasts list
  const activeToasts = toasts ? toasts : toast ? [toast] : [];

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose?.();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  const getIcon = (type?: string) => {
    switch (type) {
      case 'like':
        return <Heart className="w-4 h-4 fill-current text-[#1ed760]" />;
      case 'music':
        return <Music className="w-4 h-4 text-black" />;
      case 'info':
        return <Info className="w-4 h-4 text-[#1ed760]" />;
      default:
        return <Check className="w-4 h-4 text-black" strokeWidth={3} />;
    }
  };

  const handleDismiss = (id: string) => {
    onDismiss?.(id);
    onClose?.();
  };

  return (
    <div className="fixed bottom-24 lg:bottom-28 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none">
      <AnimatePresence>
        {activeToasts.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className={`pointer-events-auto flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md border border-white/10 text-xs sm:text-sm font-bold cursor-pointer ${
              item.type === 'like'
                ? 'bg-[#181818] text-white border-[#1ed760]/30'
                : 'bg-[#1ed760] text-black shadow-[#1ed760]/20'
            }`}
            onClick={() => handleDismiss(item.id)}
          >
            <span className="shrink-0">{getIcon(item.type)}</span>
            <span>{item.text}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
