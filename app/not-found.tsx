"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <div className="light-beam -top-1/2 left-1/4 opacity-20"></div>
      <div className="light-beam bottom-1/4 right-1/3 opacity-15"></div>
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <div className="max-w-md w-full mx-auto relative z-10">
        <div className="glass-card border border-primary/20 rounded-lg p-8 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/30 text-primary border border-primary/30">
              <Code size={28} />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-2">404</h1>
              <p className="text-2xl font-semibold mb-6 gradient-text">Page Not Found</p>
              <p className="text-foreground/70 mb-8">
                The page you are looking for might have been removed, had its name changed, 
                or is temporarily unavailable.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/"
                  className="cyber-button px-6 py-2 flex items-center justify-center gap-2"
                >
                  <Home size={16} />
                  Back to Home
                </Link>
                <button 
                  onClick={() => window.history.back()}
                  className="cyber-button bg-muted/30 hover:bg-muted/50 px-6 py-2 flex items-center justify-center gap-2"
                >
                  <ArrowLeft size={16} />
                  Go Back
                </button>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-12 bg-primary/10 blur-xl rounded-full"></div>
        </div>
        
        <div className="text-center mt-8 text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} MyCyberBase. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
