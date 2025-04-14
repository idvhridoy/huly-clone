"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="light-beam top-1/4 right-1/4 opacity-20"></div>
      <div className="light-beam bottom-1/2 left-1/3 opacity-15"></div>
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-lg border border-primary/20 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay"></div>
            
            <div className="px-6 py-12 md:p-16 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Ready to <span className="gradient-text">Elevate</span> Your Coding Experience?
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-foreground/80"
              >
                Join thousands of developers who are already experiencing the future of coding with MyCyberBase. 
                Get started with a 14-day free trial and see the difference for yourself.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link 
                  href="#trial" 
                  className="cyber-button bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2 px-8 py-3 text-lg"
                >
                  Start Free Trial <ArrowRight size={16} />
                </Link>
                <Link 
                  href="#demo" 
                  className="cyber-button px-8 py-3 text-lg"
                >
                  View Live Demo
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 text-sm text-foreground/60"
              >
                No credit card required. Cancel anytime.
              </motion.div>
            </div>
          </motion.div>
          
          {/* Stats banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:divide-x md:divide-border px-6 py-10 bg-card/50">
            {[
              { value: "10,000+", label: "Active Users" },
              { value: "40%", label: "Productivity Boost" },
              { value: "98%", label: "Customer Satisfaction" },
              { value: "24/7", label: "Priority Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
