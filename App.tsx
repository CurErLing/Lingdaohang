
import React, { useState, useEffect, useMemo } from 'react';
import { NAV_DATA } from './data';
import { SubCategory } from './types';
import { LinkCard } from './components/LinkCard';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { CategoryTabs } from './components/CategoryTabs';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(NAV_DATA[0].id);
  
  // Theme Management with Persistence and System Preference
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      // 1. Check Local Storage
      const savedTheme = localStorage.getItem('nexus_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      // 2. Fallback to System Preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return true;
      }
    } catch (e) {
      // Fallback
    }
    return false;
  });
  
  // Favorites State with persistence
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('nexus_favorites');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Apply Theme Side Effects
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('nexus_theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('nexus_favorites', JSON.stringify(Array.from(favorites)));
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleCategorySelect = (id: string) => {
    setActiveCategory(id);
    const heroHeight = window.innerHeight * 0.5;
    if (window.scrollY > heroHeight) {
      window.scrollTo({ top: heroHeight - 64, behavior: 'smooth' });
    }
  };

  const filteredData = useMemo(() => {
    if (activeCategory === 'favorites') {
       const favResults: SubCategory[] = [];
       NAV_DATA.forEach(cat => {
         cat.subCategories.forEach(sub => {
           const favItems = sub.items.filter(item => favorites.has(item.id));
           if (favItems.length > 0) {
             favResults.push({
               ...sub,
               items: favItems,
               title: `${cat.title} - ${sub.title}`
             });
           }
         });
       });
       return favResults;
    }
    const standardCat = NAV_DATA.find(c => c.id === activeCategory);
    return standardCat?.subCategories || [];
  }, [activeCategory, favorites]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-deep-dark flex flex-col font-sans transition-colors duration-300">
      
      <Navbar 
        isDark={isDark} 
        toggleTheme={() => setIsDark(!isDark)} 
        onLogoClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
      />

      <Hero />

      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <CategoryTabs 
          categories={NAV_DATA} 
          activeCategory={activeCategory} 
          onSelectCategory={handleCategorySelect} 
        />

        <AnimatePresence mode='wait'>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
          >
            {filteredData.map((subCat) => (
              <section key={subCat.id} className="mb-10">
                <div className="flex items-center gap-3 mb-6 group">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-neon-purple to-neon-pink rounded-full group-hover:h-10 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.6)]"></div>
                  <h2 className="text-2xl font-black font-display uppercase tracking-wider text-gray-900 dark:text-white">
                    {subCat.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {subCat.items.map((item, index) => (
                    <LinkCard 
                      key={item.id} 
                      item={item} 
                      index={index}
                      isFavorite={favorites.has(item.id)}
                      onToggleFavorite={toggleFavorite}
                    />
                  ))}
                </div>
              </section>
            ))}
            
            {filteredData.length === 0 && (
              <div className="text-center py-20 flex flex-col items-center gap-4">
                {activeCategory === 'favorites' ? (
                   <>
                     <Heart size={48} className="text-gray-300 dark:text-gray-600" />
                     <p className="text-xl text-gray-500">还没有收藏任何工具</p>
                     <p className="text-sm text-gray-400">点击卡片右上角的爱心即可添加收藏</p>
                   </>
                ) : (
                  <p className="text-xl text-gray-500">暂无内容</p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;
