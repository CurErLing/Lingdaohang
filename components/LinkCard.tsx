import React, { useState } from 'react';
import { LinkItem } from '../types';
import { IconMap } from './IconMap';
import { motion, Variants } from 'framer-motion';
import { Heart, ArrowUpRight } from 'lucide-react';

interface LinkCardProps {
  item: LinkItem;
  index: number;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: (i % 20) * 0.015, // Reduced delay for faster ripple effect
      duration: 0.25,
      type: "spring",
      stiffness: 260, // Higher stiffness for snappier movement
      damping: 20
    }
  })
};

export const LinkCard: React.FC<LinkCardProps> = ({ item, index, isFavorite, onToggleFavorite }) => {
  const [useFavicon, setUseFavicon] = useState(true);

  const getFaviconUrl = (url: string) => {
    try {
      const hostname = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`;
    } catch {
      return '';
    }
  };

  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      custom={index}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "50px" }}
      whileHover={{ 
        y: -4,
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative h-32 flex flex-col
                 bg-white/90 dark:bg-gray-800/60 backdrop-blur-sm
                 border-2 border-gray-200 dark:border-gray-700
                 hover:border-black dark:hover:border-neon-purple
                 rounded-xl overflow-hidden p-4
                 shadow-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]
                 transition-all duration-200 ease-out"
    >
      {/* Dynamic Shine Effect */}
      <div className="absolute inset-0 -translate-x-[150%] skew-x-12 group-hover:animate-[shine_0.75s_ease-in-out] bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent pointer-events-none z-0" />

      {/* Decorative colored glow blob */}
      <div className={`absolute top-[-50px] right-[-50px] w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 ${item.color} blur-2xl transition-opacity duration-500`} />

      {/* Header: Icon + Title + Actions */}
      <div className="flex justify-between items-center z-10 mb-2">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {/* Icon */}
          <div 
            className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm transition-transform group-hover:scale-110 duration-300 overflow-hidden flex-shrink-0 ${
              useFavicon 
                ? 'bg-gray-50 dark:bg-gray-700' 
                : `${item.color} text-white`
            }`}
          >
            {useFavicon ? (
              <img 
                src={getFaviconUrl(item.url)} 
                alt={item.name} 
                className="w-6 h-6 object-contain"
                onError={() => setUseFavicon(false)}
              />
            ) : (
               <IconMap name={item.iconName} className="w-5 h-5" />
            )}
          </div>
          
          {/* Title */}
          <h3 className="text-[15px] font-bold font-display text-gray-900 dark:text-gray-100 group-hover:text-neon-purple transition-colors truncate">
             {item.name}
          </h3>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 flex-shrink-0 ml-2">
          <ArrowUpRight className="w-4 h-4 text-gray-400 dark:text-gray-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleFavorite(item.id);
            }}
            className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors focus:outline-none active:scale-90"
            title={isFavorite ? "取消收藏" : "收藏"}
          >
            <Heart 
              className={`w-4 h-4 transition-colors ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-300 dark:text-gray-600 group-hover:text-red-400"}`} 
            />
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="z-10 flex-1 flex flex-col justify-start">
        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 font-medium tracking-wide leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.a>
  );
};