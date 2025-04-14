"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Code, Zap } from "lucide-react";

export default function Hero() {
  // Refs for animated elements
  const terminalRef = useRef<HTMLDivElement>(null);

  // Animate typing effect
  useEffect(() => {
    if (!terminalRef.current) return;
    
    const lines = [
      "# Welcome to MyCyberBase",
      "$ AI-powered code editor initializing...",
      "> Loading intelligent suggestions...",
      "> Activating error detection...",
      "> Enabling smart autocomplete...",
      "$ All systems online. Ready to code.",
    ];

    const element = terminalRef.current;
    let currentLineIndex = 0;
    let currentCharIndex = 0;
    let typingInterval: NodeJS.Timeout;
    
    const typeNextChar = () => {
      if (currentLineIndex >= lines.length) {
        clearInterval(typingInterval);
        return;
      }

      const currentLine = lines[currentLineIndex];
      if (currentCharIndex < currentLine.length) {
        element.innerHTML = `${lines.slice(0, currentLineIndex).join("<br>")}${currentLineIndex > 0 ? "<br>" : ""}${currentLine.substring(0, currentCharIndex + 1)}<span class="cursor">_</span>`;
        currentCharIndex++;
      } else {
        currentLineIndex++;
        currentCharIndex = 0;
        
        // Add delay between lines
        clearInterval(typingInterval);
        setTimeout(() => {
          typingInterval = setInterval(typeNextChar, 50);
        }, 400);
      }
    };

    typingInterval = setInterval(typeNextChar, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden grid-bg">
      {/* Background decorative elements */}
      <div className="light-beam -top-20 -left-20 opacity-20"></div>
      <div className="light-beam top-40 right-20 opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-4 py-1 rounded-full bg-muted/30 border border-primary/30"
            >
              <span className="text-sm font-medium text-primary">
                Next-Gen AI Code Editor
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 cyber-text-glow"
            >
              <span className="gradient-text">Code</span> Like{" "}
              <span className="text-cyber-green">Never</span> Before
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl mb-8 text-foreground/80 max-w-2xl mx-auto lg:mx-0"
            >
              MyCyberBase combines cutting-edge AI with intuitive code editing
              to supercharge your development workflow. Real-time suggestions,
              intelligent error detection, and seamless collaboration in one
              futuristic platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link 
                href="#demo" 
                className="cyber-button bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2"
              >
                Try Demo <ArrowRight size={16} />
              </Link>
              <Link 
                href="#features" 
                className="cyber-button"
              >
                Explore Features
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-8"
            >
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i} 
                      className="w-8 h-8 rounded-full bg-muted flex items-center justify-center border-2 border-background"
                    >
                      <span className="text-xs font-medium">U{i}</span>
                    </div>
                  ))}
                </div>
                <span className="ml-2 text-sm text-foreground/70">
                  10K+ active users
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-sm text-foreground/70">
                  4.9/5 rating
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right column - Terminal animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-lg border border-primary/20 overflow-hidden shadow-xl relative max-w-md mx-auto"
          >
            <div className="bg-card/80 p-2 border-b border-primary/10 flex items-center">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs font-mono mx-auto text-foreground/70">
                MyCyberBase-Terminal
              </div>
            </div>
            <div 
              ref={terminalRef}
              className="bg-card p-4 font-mono text-sm text-foreground/90 h-[300px] overflow-hidden"
            >
              {/* Terminal content will be populated by JS */}
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-blue/40 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-background/80 to-transparent"></div>
          </motion.div>
        </div>
      </div>

      {/* Feature pill highlights */}
      <div className="container mx-auto mt-16 px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: <Code className="w-4 h-4" />, text: "Intelligent Code Completion" },
            { icon: <Terminal className="w-4 h-4" />, text: "Real-time Error Detection" },
            { icon: <Zap className="w-4 h-4" />, text: "AI-powered Suggestions" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 border border-primary/20"
            >
              <span className="text-primary">{feature.icon}</span>
              <span className="text-sm font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
