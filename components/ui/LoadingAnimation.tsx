"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-background z-50"
        >
          <div className="relative">
            {/* Grid background */}
            <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
            
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-primary/20 filter blur-3xl"></div>
            
            <div className="relative z-10">
              {/* Logo animation */}
              <div className="mb-8 flex justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 relative">
                    <motion.div
                      animate={{ 
                        rotate: 360,
                        borderRadius: ["20%", "50%", "20%"]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 border-4 border-primary/50"
                    ></motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="absolute inset-2 bg-background flex items-center justify-center"
                    >
                      <span className="font-bold text-xl gradient-text">M</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              
              {/* Loading text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-center"
              >
                <h2 className="text-xl font-bold gradient-text mb-2">MyCyberBase</h2>
                <p className="text-foreground/70 text-sm">Initializing AI modules...</p>
              </motion.div>
              
              {/* Loading dots */}
              <div className="mt-6 flex justify-center space-x-2">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 1 + index * 0.2,
                      y: {
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      },
                      opacity: {
                        duration: 0.5
                      }
                    }}
                    className="w-3 h-3 rounded-full bg-primary"
                  ></motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
