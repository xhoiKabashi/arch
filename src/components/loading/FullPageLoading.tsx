"use client";

import React from 'react';
import { motion } from 'framer-motion';

const LoadingSkeleton = () => {
  // Create an array of 6 items to match the projects length
  const skeletonCards = Array(6).fill(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
      {skeletonCards.map((_, index) => (
        <motion.div
          key={index}
          className="relative h-64 w-full overflow-hidden bg-gray-200"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1
          }}
        >
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'linear',
            }}
          />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="h-6 bg-gray-300 rounded mb-2 w-3/4" />
            <div className="h-4 bg-gray-300 rounded w-1/2" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;