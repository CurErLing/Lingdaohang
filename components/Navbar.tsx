import React, { useState, useRef, useEffect } from 'react';
import { Search, Github, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  onLogoClick: () => void;
}

const searchEngines = {
  baidu: { name: '百度', url: 'https://www.baidu.com/s?wd=' },
  bing: { name: '必应', url: 'https://www.bing.com/search?q=' },
  google: { name: '谷歌', url: 'https://www.google.com/search?q=' },
};

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, onLogoClick }) => {
  const [searchEngine, setSearchEngine] = useState<'baidu' | 'bing' | 'google'>('baidu');
  const [searchInput, setSearchInput] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (!searchInput.trim()) return;
    const url = searchEngines[searchEngine].url + encodeURIComponent(searchInput);
    window.open(url, '_blank');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-deep-dark/80 backdrop-blur-md border-b-2 border-black dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={onLogoClick}>
            <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
              <span className="text-white dark:text-black font-bold text-lg">N</span>
            </div>
            <span className="font-display font-bold text-lg tracking-tight dark:text-white hidden sm:block">
              凌同学工具库<span className="text-neon-purple">.</span>
            </span>
          </div>

          {/* Search Bar Section */}
          <div className="flex-1 max-w-lg mx-4 hidden md:block">
            <div 
              className={`
                relative flex items-center w-full 
                bg-gray-100 dark:bg-gray-800 
                rounded-full border-2 
                ${isDropdownOpen ? 'border-black dark:border-neon-purple' : 'border-transparent'} 
                focus-within:border-black dark:focus-within:border-neon-purple 
                transition-all duration-300
              `}
            >
              {/* Engine Selector */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 pl-5 pr-3 py-1.5 h-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors border-r border-gray-300 dark:border-gray-600 outline-none whitespace-nowrap"
                >
                  {searchEngines[searchEngine].name}
                  <ChevronDown size={14} className={`transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.1 }}
                      className="absolute top-full left-0 mt-2 w-28 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                    >
                      {(Object.keys(searchEngines) as Array<keyof typeof searchEngines>).map((key) => (
                        <button
                          key={key}
                          onClick={() => {
                            setSearchEngine(key);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-5 py-2.5 text-sm transition-colors ${
                            searchEngine === key 
                              ? 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white font-medium' 
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                          }`}
                        >
                          {searchEngines[key].name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Input Field */}
              <input 
                type="text" 
                placeholder={`在 ${searchEngines[searchEngine].name} 上搜索...`}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent border-none py-1.5 pl-3 pr-10 text-sm outline-none text-gray-800 dark:text-gray-200 placeholder-gray-400"
              />
              
              <button 
                onClick={handleSearch}
                className="absolute right-2 p-1.5 text-gray-400 hover:text-neon-purple transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-gray-700/50"
              >
                <Search size={16} />
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors hidden sm:block text-gray-700 dark:text-white"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};