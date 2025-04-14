"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What makes MyCyberBase different from other code editors?",
    answer: "MyCyberBase leverages advanced AI to provide real-time code suggestions, error detection, and automated refactoring that adapts to your coding style. Unlike traditional editors, our platform learns from your patterns to offer increasingly personalized assistance, dramatically improving productivity and code quality."
  },
  {
    question: "Is MyCyberBase suitable for team collaboration?",
    answer: "Absolutely! MyCyberBase is built for seamless collaboration with features like real-time editing, commenting, version control integration, and team-based permission systems. Multiple developers can work on the same codebase simultaneously with intelligent conflict resolution and contextual awareness of what others are working on."
  },
  {
    question: "What programming languages does MyCyberBase support?",
    answer: "MyCyberBase supports all major programming languages including JavaScript, TypeScript, Python, Java, C#, Ruby, Go, Rust, PHP, and many more. Our AI models are trained on diverse codebases to provide intelligent assistance regardless of your preferred language or framework."
  },
  {
    question: "Can I use MyCyberBase offline?",
    answer: "Yes, MyCyberBase has a powerful offline mode that synchronizes when you reconnect. While some advanced AI features may have limited functionality offline, core editing capabilities and previously cached suggestions remain fully operational without an internet connection."
  },
  {
    question: "How does pricing work for MyCyberBase?",
    answer: "MyCyberBase offers flexible pricing tiers including a free basic plan, professional plan with enhanced features, and an enterprise plan for larger teams. All paid plans come with a 14-day free trial with no credit card required. Check our pricing section for current rates and feature comparisons."
  },
  {
    question: "Is my code secure with MyCyberBase?",
    answer: "Security is our top priority. MyCyberBase employs end-to-end encryption, SOC 2 compliance, and never uses your proprietary code to train our models without explicit permission. Your intellectual property remains yours, and we provide detailed security documentation and custom security solutions for enterprise clients."
  }
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1/4 h-1/4 bg-secondary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block py-1 px-3 rounded-full text-xs font-semibold border border-primary/30 bg-primary/5 text-primary mb-4"
            >
              FAQ
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold mb-4"
            >
              Frequently Asked <span className="gradient-text">Questions</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-foreground/70 max-w-2xl mx-auto"
            >
              Everything you need to know about MyCyberBase. Can&apos;t find the answer you&apos;re looking for?{" "}
              <a href="#contact" className="text-primary underline hover:text-primary/80">
                Contact our support team
              </a>.
            </motion.p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass-card rounded-lg border border-primary/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="flex items-center justify-between w-full px-6 py-4 text-left"
                  aria-expanded={expandedIndex === index ? "true" : "false"}
                >
                  <span className="font-medium">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-2"
                  >
                    <ChevronDown className="h-5 w-5 text-foreground/70" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 pt-0 text-foreground/70 border-t border-primary/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
