"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ChevronRight } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Demo", href: "#demo" },
        { name: "Roadmap", href: "#roadmap" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "API Reference", href: "/api" },
        { name: "Release Notes", href: "/releases" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Security", href: "/security" },
      ],
    },
  ];

  const socialLinks = [
    { name: "GitHub", icon: <Github className="h-5 w-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { name: "Email", icon: <Mail className="h-5 w-5" />, href: "mailto:info@mycyberbase.com" },
  ];

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 relative overflow-hidden">
      <div className="light-beam opacity-10 -top-60 right-20"></div>
      <div className="light-beam opacity-10 -bottom-20 -left-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          {/* Logo and info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative z-10 flex items-center justify-center h-10 w-10 rounded-full bg-background border border-primary">
                <span className="text-primary text-xl font-bold">&lt;/&gt;</span>
              </div>
              <span className="ml-3 text-xl font-bold gradient-text">
                MyCyberBase
              </span>
            </Link>
            
            <p className="text-foreground/70 mb-6 max-w-md">
              MyCyberBase is revolutionizing software development with our AI-powered
              code editor that enhances productivity, reduces errors, and makes coding
              more enjoyable.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-muted/30 text-foreground/70 hover:bg-primary/20 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="font-semibold text-foreground mb-3">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foreground/70 hover:text-primary flex items-center group transition-colors text-sm"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter */}
        <div className="mb-16 glass-card rounded-lg p-8 border border-primary/10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-2">
                Stay up to date
              </h4>
              <p className="text-foreground/70 mb-4">
                Get the latest updates, news, and offers from MyCyberBase delivered to your inbox.
              </p>
            </div>
            <div>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background rounded-l-md border border-r-0 border-muted focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-r-md hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-foreground/50 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-foreground/50">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MyCyberBase. All rights reserved.
          </div>
          <div>
            Made with ❤️ for developers worldwide
          </div>
        </div>
      </div>
    </footer>
  );
}
