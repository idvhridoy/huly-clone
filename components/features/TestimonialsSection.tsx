"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Senior Developer",
    company: "TechFusion",
    content:
      "MyCyberBase has completely transformed our development workflow. The AI suggestions are incredibly accurate and have saved our team countless hours of debugging and research. It's like having a senior developer looking over your shoulder at all times.",
    avatar: "/testimonials/avatar1.png",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "CTO",
    company: "InnovateLabs",
    content:
      "As a company managing multiple complex codebases, we've seen a 40% increase in productivity since adopting MyCyberBase. The error detection alone has prevented numerous critical bugs from reaching production. Worth every penny!",
    avatar: "/testimonials/avatar2.png",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Freelance Developer",
    company: "Self-employed",
    content:
      "I was skeptical about AI code editors, but MyCyberBase won me over in days. It's like it reads my mind, suggesting exactly what I need before I even finish typing. As a freelancer juggling multiple projects, this tool has become indispensable.",
    avatar: "/testimonials/avatar3.png",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Lead Engineer",
    company: "CloudScale",
    content:
      "The collaboration features are game-changing for remote teams. We can code together in real-time with AI assistance that understands our project context. It's dramatically improved our code quality and team cohesion.",
    avatar: "/testimonials/avatar4.png",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden grid-bg">
      <div className="light-beam top-40 -right-20 opacity-15"></div>
      <div className="light-beam -bottom-40 -left-20 opacity-15"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 rounded-full bg-muted/30 border border-primary/30 text-sm font-medium text-primary">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by <span className="gradient-text">Developers</span> Worldwide
          </h2>
          <p className="text-lg text-foreground/70">
            See what developers and teams are saying about their experience using
            MyCyberBase for their coding projects.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 md:px-10">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border border-primary/30 flex items-center justify-center text-primary shadow-lg hover:border-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </motion.button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border border-primary/30 flex items-center justify-center text-primary shadow-lg hover:border-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </motion.button>
          </div>

          {/* Testimonials container */}
          <div 
            className="overflow-hidden py-8"
            ref={testimonialsRef}
          >
            <motion.div
              key={currentIndex}
              initial={{ 
                opacity: 0, 
                x: direction > 0 ? 100 : -100 
              }}
              animate={{ 
                opacity: 1, 
                x: 0 
              }}
              exit={{ 
                opacity: 0, 
                x: direction > 0 ? -100 : 100 
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="glass-card rounded-lg p-8 md:p-10 border border-primary/20 shadow-lg"
            >
              {/* Quote icon */}
              <div className="mb-6 inline-flex p-3 rounded-full bg-primary/10">
                <Quote className="h-6 w-6 text-primary" />
              </div>

              {/* Testimonial content */}
              <blockquote className="text-lg md:text-xl mb-8 font-medium leading-relaxed">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </blockquote>

              {/* Testimonial author */}
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 rounded-full bg-muted flex items-center justify-center border-2 border-primary/30">
                  {/* Placeholder for avatar - in production use actual images */}
                  <span className="text-xl font-bold text-primary">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-foreground/70">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Testimonial indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "w-6 bg-primary"
                    : "bg-foreground/20 hover:bg-foreground/40"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Company logos */}
        <div className="mt-20">
          <p className="text-center text-sm text-foreground/60 mb-6">
            TRUSTED BY INNOVATIVE COMPANIES
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-8 w-32 bg-foreground/10 rounded flex items-center justify-center text-foreground/30"
              >
                <span className="font-bold text-xs">COMPANY LOGO {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
