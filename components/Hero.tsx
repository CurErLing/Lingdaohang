import React from 'react';
import { motion } from 'framer-motion';
import { NAV_DATA } from '../data';

export const Hero: React.FC = () => {
  const toolCount = NAV_DATA.reduce((acc, cat) => 
    acc + cat.subCategories.reduce((sAcc, sub) => sAcc + sub.items.length, 0), 0
  );

  return (
    <div className="relative w-full py-12 md:py-16 flex flex-col items-center justify-center overflow-hidden border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-deep-dark transition-colors duration-500">
      
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Glowing Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3], 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
         animate={{ 
          x: [-20, 20, -20],
          y: [-20, 20, -20],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-neon-cyan/10 rounded-full blur-[80px] pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-sm hover:scale-105 transition-transform cursor-default"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-lime opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-lime"></span>
          </span>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300 tracking-wide">
            已收录 {toolCount}+ 个精选工具
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-black font-display tracking-tight text-gray-900 dark:text-white mb-4"
        >
          探索
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan"> 数字世界 </span>
          的无限可能
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-medium"
        >
          精心筛选的 AI 工具、设计资源与开发利器，助你释放创造力。
        </motion.p>
      </div>
    </div>
  );
};