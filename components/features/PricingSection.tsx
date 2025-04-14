"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Zap } from "lucide-react";

interface PricingFeature {
  name: string;
  basic: boolean;
  pro: boolean;
  enterprise: boolean;
}

const features: PricingFeature[] = [
  {
    name: "AI code suggestions",
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    name: "Real-time error detection",
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    name: "Syntax highlighting",
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    name: "Smart autocomplete",
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    name: "Multiple language support",
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    name: "Advanced AI code generation",
    basic: false,
    pro: true,
    enterprise: true,
  },
  {
    name: "Git integration",
    basic: false,
    pro: true,
    enterprise: true,
  },
  {
    name: "Collaborative editing",
    basic: false,
    pro: true,
    enterprise: true,
  },
  {
    name: "Custom themes & extensions",
    basic: false,
    pro: true,
    enterprise: true,
  },
  {
    name: "Priority support",
    basic: false,
    pro: false,
    enterprise: true,
  },
  {
    name: "Custom AI models & training",
    basic: false,
    pro: false,
    enterprise: true,
  },
  {
    name: "Enterprise security features",
    basic: false,
    pro: false,
    enterprise: true,
  },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  // Pricing tiers with monthly and annual pricing
  const pricingTiers = [
    {
      name: "Basic",
      description: "Essential tools for individual developers",
      monthly: 9.99,
      annual: 7.99,
      ctaText: "Start Free Trial",
      popular: false,
      color: "border-muted",
      buttonClass: "cyber-button",
    },
    {
      name: "Pro",
      description: "Advanced features for professional developers",
      monthly: 24.99,
      annual: 19.99,
      ctaText: "Start Free Trial",
      popular: true,
      color: "border-primary",
      buttonClass: "cyber-button bg-primary text-primary-foreground hover:bg-primary/90",
    },
    {
      name: "Enterprise",
      description: "Custom solutions for development teams",
      monthly: 49.99,
      annual: 39.99,
      ctaText: "Contact Sales",
      popular: false,
      color: "border-secondary",
      buttonClass: "cyber-button",
    },
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="light-beam -bottom-20 left-20 opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 rounded-full bg-muted/30 border border-primary/30 text-sm font-medium text-primary">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Choose the <span className="gradient-text">Perfect Plan</span> for Your Needs
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            From solo developers to enterprise teams, we have flexible options to
            support your development journey.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center mb-12">
            <span 
              className={`text-sm ${
                !isAnnual ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative mx-4 w-12 h-6 rounded-full flex items-center px-1 bg-muted/70 border border-primary/20"
              aria-label="Toggle annual billing"
            >
              <motion.div
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-4 h-4 rounded-full bg-primary"
              />
            </button>
            <span 
              className={`text-sm ${
                isAnnual ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Annual <span className="text-xs text-primary">(20% off)</span>
            </span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card rounded-lg border-2 ${
                tier.popular 
                  ? `${tier.color} relative shadow-lg` 
                  : "border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-foreground/70 h-10">
                    {tier.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <p className="flex items-baseline">
                    <span className="text-4xl font-bold">
                      ${isAnnual ? tier.annual : tier.monthly}
                    </span>
                    <span className="ml-2 text-foreground/70 text-sm">
                      /month
                    </span>
                  </p>
                  <p className="text-xs text-foreground/60 mt-1">
                    {isAnnual ? "Billed annually" : "Billed monthly"}
                  </p>
                </div>
                
                <button className={`w-full ${tier.buttonClass}`}>
                  {tier.ctaText}
                </button>
              </div>
              
              <div className="border-t border-border p-6 md:p-8">
                <p className="font-medium mb-4 text-sm">Includes:</p>
                <ul className="space-y-3">
                  {features.map((feature, i) => {
                    const included = 
                      tier.name === "Basic" ? feature.basic :
                      tier.name === "Pro" ? feature.pro : feature.enterprise;
                    
                    return (
                      <li 
                        key={i} 
                        className={`flex items-start gap-3 text-sm ${
                          included ? "text-foreground" : "text-foreground/40"
                        }`}
                      >
                        {included ? (
                          <Check className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                        ) : (
                          <X className="h-4 w-4 mt-0.5 text-foreground/40 flex-shrink-0" />
                        )}
                        <span>{feature.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 rounded-lg border border-primary/20 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" /> Need a Custom Solution?
              </h3>
              <p className="text-foreground/70 mb-6">
                Contact our sales team for custom enterprise solutions, on-premise
                deployment, dedicated support, and more.
              </p>
              <button className="cyber-button">
                Contact Enterprise Sales
              </button>
            </div>
            <div className="w-full md:w-1/3 h-40 bg-muted/30 rounded-lg flex items-center justify-center border border-border">
              <span className="text-sm text-foreground/50">Enterprise illustration</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
