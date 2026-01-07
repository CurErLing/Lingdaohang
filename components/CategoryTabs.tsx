import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Category } from '../types';

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, activeCategory, onSelectCategory }) => {
  // Add Favorites as a virtual category for the tabs
  const tabs = [
    { id: 'favorites', title: '我的收藏', isSpecial: true },
    ...categories.map(c => ({ id: c.id, title: c.title, isSpecial: false }))
  ];

  return (
    <div className="sticky top-16 z-40 -mx-4 sm:-mx-6 lg:-mx-8 mb-8 bg-gray-50/90 dark:bg-deep-dark/90 backdrop-blur-md border-b-2 border-gray-200 dark:border-gray-800 transition-all duration-300 shadow-sm">
      <div 
        className="flex overflow-x-auto py-3 px-4 sm:px-6 lg:px-8 gap-3 items-center justify-start lg:justify-center"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
        
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onSelectCategory(tab.id)}
            className={`
              relative px-5 py-2 rounded-full font-bold font-display text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 no-scrollbar flex items-center gap-2
              ${activeCategory === tab.id 
                ? 'bg-black dark:bg-white text-white dark:text-black shadow-[3px_3px_0px_0px_#a855f7] transform -translate-y-0.5' 
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-gray-500 hover:-translate-y-0.5'}
            `}
          >
            {tab.isSpecial && (
              <Heart size={14} className={activeCategory === 'favorites' ? 'fill-white dark:fill-black' : 'fill-none'} />
            )}
            {tab.title}
            {activeCategory === tab.id && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 border-2 border-transparent rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};