"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import ThemeToggler from "../ui/ThemeToggler";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Demo", href: "#demo" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "#blog" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-10 w-10 md:h-12 md:w-12"
            >
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping duration-1000 opacity-75"></div>
              <div className="relative z-10 flex items-center justify-center h-full w-full">
                <Image 
                  src="/logo.svg" 
                  alt="MyCyberBase Logo" 
                  width={48} 
                  height={48}
                  className="w-full h-full"
                />
              </div>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="ml-3 text-xl font-bold gradient-text"
            >
              MyCyberBase
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary hover:underline underline-offset-4 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <ThemeToggler />
              <Link
                href="/login"
                className="text-sm hover:text-primary transition-colors"
              >
                Sign In
              </Link>
            </div>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative inline-flex items-center justify-center p-2 rounded-md text-foreground focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <MenuIcon className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-card/90 backdrop-blur-lg border-t border-border">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted/50 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/login"
            className="block w-full text-center mt-4 px-3 py-2 border border-primary/50 rounded-md text-foreground hover:bg-primary/10 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      </motion.div>
    </header>
  );
}
