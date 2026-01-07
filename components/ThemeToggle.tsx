
import React from 'react';
import { Moon, Sun, Cloud, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-16 h-8 rounded-full border-2 border-black/10 dark:border-gray-600 
        flex items-center p-1 overflow-hidden transition-colors duration-500
        ${isDark ? 'bg-indigo-950' : 'bg-sky-200'}
      `}
      aria-label="Toggle Theme"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <AnimatePresence initial={false}>
          {!isDark ? (
            <motion.div
              key="clouds"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Cloud className="absolute top-1 left-7 w-3 h-3 text-white fill-white opacity-80" />
              <Cloud className="absolute bottom-1 left-9 w-2 h-2 text-white fill-white opacity-60" />
            </motion.div>
          ) : (
            <motion.div
              key="stars"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Star className="absolute top-1.5 left-2 w-1.5 h-1.5 text-yellow-200 fill-yellow-200 opacity-80" />
              <Star className="absolute bottom-2 left-4 w-1 h-1 text-white fill-white opacity-60" />
              <Star className="absolute top-3 left-6 w-1 h-1 text-white fill-white opacity-50" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Toggle Knob */}
      <motion.div
        className="relative z-10 w-6 h-6 rounded-full shadow-md flex items-center justify-center border border-black/5 dark:border-white/10"
        animate={{
          x: isDark ? 32 : 0,
          rotate: isDark ? 360 : 0,
          backgroundColor: isDark ? '#1e1b4b' : '#ffffff' // indigo-950 vs white
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <AnimatePresence mode='wait'>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Moon size={14} className="text-yellow-300 fill-yellow-300" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Sun size={14} className="text-orange-500 fill-orange-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
};
