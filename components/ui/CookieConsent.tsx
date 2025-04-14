"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };
  
  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="glass-card border border-primary/20 p-4 sm:p-6 rounded-lg shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 mix-blend-overlay"></div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Cookie Consent</h3>
                  <p className="text-sm text-foreground/70 mb-0 sm:mb-0">
                    We use cookies to enhance your browsing experience, serve personalized ads or content, 
                    and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:ml-4">
                  <button
                    onClick={handleDecline}
                    className="px-4 py-2 rounded-md border border-border text-sm hover:bg-muted/30 transition-colors"
                  >
                    Decline
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-colors"
                  >
                    Accept All
                  </button>
                </div>
                
                <button
                  onClick={handleDecline}
                  className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted/30 transition-colors sm:hidden"
                  aria-label="Close cookie consent"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
