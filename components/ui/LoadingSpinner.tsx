"use client";

import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "white";
  text?: string;
}

export default function LoadingSpinner({
  size = "md",
  color = "primary",
  text
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  const colorClasses = {
    primary: "border-primary/30 border-t-primary",
    secondary: "border-secondary/30 border-t-secondary",
    white: "border-white/30 border-t-white",
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 1.2, 
          ease: "linear", 
          repeat: Infinity 
        }}
        className={`rounded-full ${sizeClasses[size]} ${colorClasses[color]} animate-spin`}
      />
      {text && (
        <p className="mt-2 text-sm text-foreground/70">{text}</p>
      )}
    </div>
  );
}
