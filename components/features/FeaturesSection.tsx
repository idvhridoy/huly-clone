"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BrainCircuit, 
  Zap, 
  Lock, 
  Users, 
  Sparkles, 
  Laptop,
  GitBranch
} from "lucide-react";
import Image from "next/image";

interface FeatureTab {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  imageUrl: string;
}

const featureTabs: FeatureTab[] = [
  {
    id: "ai-suggestions",
    title: "AI Code Suggestions",
    icon: <BrainCircuit className="h-6 w-6" />,
    description:
      "Get intelligent code suggestions in real-time as you type. Our advanced AI understands context and intent, providing helpful recommendations that boost your productivity by up to 40%.",
    imageUrl: "/images/features/ai-suggestions.svg",
  },
  {
    id: "error-detection",
    title: "Real-time Error Detection",
    icon: <Zap className="h-6 w-6" />,
    description:
      "Catch bugs before they cause problems. Our AI instantly identifies errors, suggests fixes, and explains potential issues so you can maintain clean, working code at all times.",
    imageUrl: "/images/features/error-detection.svg",
  },
  {
    id: "collaboration",
    title: "Seamless Collaboration",
    icon: <Users className="h-6 w-6" />,
    description:
      "Work together effortlessly with built-in version control, commenting, and real-time collaboration features. Share your workspace with team members and code together in sync.",
    imageUrl: "/images/features/collaboration.svg",
  },
  {
    id: "security",
    title: "Enterprise-grade Security",
    icon: <Lock className="h-6 w-6" />,
    description:
      "Rest easy with end-to-end encryption, secure authentication, and compliance with industry standards. Your code and intellectual property remain private and protected.",
    imageUrl: "/images/features/security.svg",
  },
  {
    id: "multiplatform",
    title: "Multi-platform Support",
    icon: <Laptop className="h-6 w-6" />,
    description:
      "Access your workspace from any device with seamless synchronization. Desktop, web, and mobile applications ensure you can code from anywhere, anytime.",
    imageUrl: "/images/features/multiplatform.svg",
  },
  {
    id: "git-integration",
    title: "Git Integration",
    icon: <GitBranch className="h-6 w-6" />,
    description:
      "Seamlessly integrate with Git repositories. Commit, pull, push, and manage branches without leaving your editor. Visual diff tools and conflict resolution make version control intuitive.",
    imageUrl: "/images/features/git-integration.svg",
  },
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<string>(featureTabs[0].id);

  // Get currently active feature
  const activeFeature = featureTabs.find((tab) => tab.id === activeTab) || featureTabs[0];

  return (
    <section id="features" className="py-20 relative">
      <div className="light-beam -bottom-20 right-20 opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 rounded-full bg-muted/30 border border-primary/30 text-sm font-medium text-primary">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Supercharge</span> Your Development
            <span className="cyber-text-glow"> Workflow</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Experience the future of coding with features designed to enhance
            productivity, reduce errors, and make development a more enjoyable process.
          </p>
        </div>

        {/* Features tabs */}
        <div className="grid md:grid-cols-12 gap-8">
          {/* Tab navigation - left side */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="glass-card rounded-lg p-1">
              {featureTabs.map((feature) => (
                <motion.button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`w-full text-left py-3 px-4 rounded-md flex items-center gap-3 transition-all ${
                    activeTab === feature.id
                      ? "bg-primary/10 text-foreground"
                      : "hover:bg-muted/30 text-foreground/60"
                  }`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span
                    className={`p-1.5 rounded-md ${
                      activeTab === feature.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground/70"
                    }`}
                  >
                    {feature.icon}
                  </span>
                  <span className="font-medium">{feature.title}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Feature content - right side */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="glass-card rounded-lg p-6 h-full">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span
                      className="p-1.5 rounded-md bg-primary/20"
                    >
                      {activeFeature.icon}
                    </span>
                    {activeFeature.title}
                  </h3>
                  <p className="text-foreground/80 mb-8">
                    {activeFeature.description}
                  </p>
                  <ul className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground/70">
                          Feature benefit point {i} for {activeFeature.title.toLowerCase()}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-lg overflow-hidden border border-primary/20 shadow-lg h-[300px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-tl from-background/10 via-transparent to-transparent z-10"></div>
                  <div className="absolute top-2 left-2 px-2 py-1 bg-background/70 backdrop-blur-sm rounded-md text-xs font-mono border border-primary/30 z-20">
                    {activeFeature.id}.preview
                  </div>
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <Image 
                      src={activeFeature.imageUrl} 
                      alt={activeFeature.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
