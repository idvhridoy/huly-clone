"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Mastering AI Code Suggestions with MyCyberBase",
    excerpt: "Learn how to maximize your productivity by leveraging AI-powered code suggestions in your daily workflow.",
    date: "April 10, 2025",
    author: "Alex Chen",
    authorAvatar: "/images/blog/author-1.png",
    category: "Productivity",
    readTime: "5 min read",
    thumbnail: "/images/blog/ai-code.jpg"
  },
  {
    id: 2,
    title: "How Real-time Error Detection Prevents Production Bugs",
    excerpt: "Discover how our intelligent error detection system can catch bugs before they make it to production environments.",
    date: "April 5, 2025",
    author: "Sonia Kumar",
    authorAvatar: "/images/blog/author-2.png",
    category: "Development",
    readTime: "7 min read",
    thumbnail: "/images/blog/error-detection.jpg"
  },
  {
    id: 3,
    title: "Collaborative Coding: A Remote-First Approach",
    excerpt: "Explore best practices for distributed teams when collaborating on code projects using MyCyberBase.",
    date: "March 28, 2025",
    author: "Marcus Johnson",
    authorAvatar: "/images/blog/author-3.png",
    category: "Collaboration",
    readTime: "6 min read",
    thumbnail: "/images/blog/collaboration.jpg"
  }
];

export default function BlogPreview() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
      <div className="absolute top-1/3 right-0 w-1/4 h-1/4 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-secondary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full text-xs font-semibold border border-primary/30 bg-primary/5 text-primary mb-4"
          >
            OUR BLOG
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold mb-4"
          >
            Latest from our <span className="gradient-text">Blog</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            Tutorials, tips and insights to help you get the most out of your coding experience
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="glass-card border border-primary/20 rounded-lg overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <div className="absolute inset-0 bg-muted/80 flex items-center justify-center">
                    <Image 
                      src={`/images/blog/placeholder.svg`} 
                      alt={post.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 left-2 px-2 py-1 bg-background/70 backdrop-blur-sm rounded-md text-xs font-medium z-10">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-foreground/70 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-muted/80 flex items-center justify-center">
                        <span className="text-xs">
                          {post.author.split(" ").map(name => name[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-medium">{post.author}</p>
                        <p className="text-xs text-foreground/60">{post.date}</p>
                      </div>
                    </div>
                    <span className="text-xs text-foreground/60">{post.readTime}</span>
                  </div>
                </div>
                
                <div className="border-t border-primary/10 p-4">
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Read article <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/blog"
            className="cyber-button inline-flex items-center gap-2"
          >
            View all articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
