import React from 'react';
import { Twitter, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t-2 border-black dark:border-gray-700 bg-white dark:bg-deep-dark py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 font-display">
          由 凌同学 用心 <span className="text-neon-pink">♥</span> 设计。
        </p>
        <div className="flex justify-center gap-4 mt-3">
            <Twitter className="w-5 h-5 text-gray-400 hover:text-neon-cyan cursor-pointer transition-colors" />
            <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
};