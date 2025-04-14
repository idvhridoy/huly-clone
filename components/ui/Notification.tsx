"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle, XCircle, Info, X } from "lucide-react";

type NotificationType = "success" | "error" | "warning" | "info";

interface NotificationProps {
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
  onClose?: () => void;
  isVisible?: boolean;
}

export default function Notification({
  type = "info",
  title,
  message,
  duration = 5000,
  onClose,
  isVisible = true
}: NotificationProps) {
  const [visible, setVisible] = useState(isVisible);
  
  // Auto-dismiss notification after duration
  useEffect(() => {
    setVisible(isVisible);
    
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);
  
  // Close notification manually
  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };
  
  // Icon and color based on notification type
  const getTypeProperties = () => {
    switch (type) {
      case "success":
        return {
          icon: <CheckCircle className="h-5 w-5" />,
          bgColor: "bg-green-500",
          borderColor: "border-green-600",
          iconColor: "text-green-500",
          bgLight: "bg-green-50",
          darkBg: "dark:bg-green-900/20"
        };
      case "error":
        return {
          icon: <XCircle className="h-5 w-5" />,
          bgColor: "bg-red-500",
          borderColor: "border-red-600",
          iconColor: "text-red-500",
          bgLight: "bg-red-50",
          darkBg: "dark:bg-red-900/20"
        };
      case "warning":
        return {
          icon: <AlertCircle className="h-5 w-5" />,
          bgColor: "bg-yellow-500",
          borderColor: "border-yellow-600",
          iconColor: "text-yellow-500",
          bgLight: "bg-yellow-50",
          darkBg: "dark:bg-yellow-900/20"
        };
      case "info":
      default:
        return {
          icon: <Info className="h-5 w-5" />,
          bgColor: "bg-blue-500",
          borderColor: "border-blue-600",
          iconColor: "text-blue-500",
          bgLight: "bg-blue-50",
          darkBg: "dark:bg-blue-900/20"
        };
    }
  };
  
  const typeProps = getTypeProperties();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={`rounded-lg border ${typeProps.borderColor} shadow-lg ${typeProps.bgLight} ${typeProps.darkBg} p-4 max-w-md w-full`}
          role="alert"
        >
          <div className="flex items-start">
            <div className={`flex-shrink-0 ${typeProps.iconColor}`}>
              {typeProps.icon}
            </div>
            
            <div className="ml-3 flex-1">
              <h3 className="text-sm font-medium">{title}</h3>
              <div className="mt-1 text-sm text-foreground/70">
                {message}
              </div>
            </div>
            
            <button
              onClick={handleClose}
              className="ml-4 flex-shrink-0 inline-flex text-foreground/50 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md"
            >
              <span className="sr-only">Close</span>
              <X className="h-4 w-4" />
            </button>
          </div>
          
          {/* Progress bar */}
          {duration > 0 && (
            <div className="mt-2 w-full bg-background/20 rounded-full h-1 overflow-hidden">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: duration / 1000, ease: "linear" }}
                className={`h-full ${typeProps.bgColor}`}
              />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Notification Container to position notifications
export function NotificationContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {children}
    </div>
  );
}
