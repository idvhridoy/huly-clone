"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, Code, Play, Copy, Check } from "lucide-react";

const DEMO_CODE = `// MyCyberBase AI Code Editor Demo
import React, { useState } from 'react';

function AICodeAssistant() {
  const [prompt, setPrompt] = useState('');
  const [results, setResults] = useState([]);
  
  // AI suggestion will appear here automatically
  const handleGenerateCode = async () => {
    // Simulating AI processing
    const response = await fetchAISuggestion(prompt);
    setResults([...results, response]);
  };
  
  return (
    <div className="code-assistant">
      <h2>AI Code Assistant</h2>
      <div className="input-container">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe what you want to create..."
        />
        <button onClick={handleGenerateCode}>
          Generate Code
        </button>
      </div>
      <div className="results-container">
        {results.map((result, index) => (
          <CodeSnippet key={index} code={result} />
        ))}
      </div>
    </div>
  );
}

// More code would be auto-completed here...`;

const AI_SUGGESTIONS = [
  {
    line: 5,
    suggestion:
      'Add TypeScript interface: "interface AIResponse { code: string; explanation: string; }"',
  },
  {
    line: 9,
    suggestion:
      "Consider adding loading state: const [loading, setLoading] = useState(false);",
  },
  {
    line: 12,
    suggestion: "Add error handling with try/catch block for API call",
  },
];

export default function CodeEditorDemo() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("editor");
  const [visibleSuggestions, setVisibleSuggestions] = useState<number[]>([]);
  const [cursorPosition, setCursorPosition] = useState(5);
  const codeEditorRef = useRef<HTMLDivElement>(null);

  // Simulate code typing and cursor movement
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorPosition((prev) => (prev < DEMO_CODE.split("\n").length - 1 ? prev + 1 : 5));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Show AI suggestions based on cursor position
  useEffect(() => {
    const suggestions = AI_SUGGESTIONS.filter((suggestion) => 
      suggestion.line === cursorPosition && !visibleSuggestions.includes(suggestion.line)
    );
    
    if (suggestions.length > 0) {
      setTimeout(() => {
        setVisibleSuggestions((prev) => [
          ...prev,
          ...suggestions.map((s) => s.line),
        ]);
      }, 1000);
    }
  }, [cursorPosition, visibleSuggestions]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(DEMO_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo" className="py-20 relative overflow-hidden">
      <div className="light-beam -top-40 -left-20 opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 rounded-full bg-muted/30 border border-primary/30 text-sm font-medium text-primary">
            Interactive Demo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See the <span className="gradient-text">Future</span> of Coding
          </h2>
          <p className="text-lg text-foreground/70">
            Experience MyCyberBase&apos;s intelligent suggestions, real-time error detection,
            and productivity-enhancing features in action.
          </p>
        </div>

        {/* Code Editor Demo */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-lg overflow-hidden border border-primary/20 shadow-lg">
            {/* Editor Header */}
            <div className="bg-card px-4 py-3 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs sm:text-sm font-medium text-foreground/70">
                  demo.jsx - MyCyberBase Editor
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab("editor")}
                  className={`px-2 py-1 text-xs rounded-md ${
                    activeTab === "editor" 
                      ? "bg-primary/20 text-primary" 
                      : "hover:bg-muted/30"
                  }`}
                >
                  <Code className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setActiveTab("terminal")}
                  className={`px-2 py-1 text-xs rounded-md ${
                    activeTab === "terminal" 
                      ? "bg-primary/20 text-primary" 
                      : "hover:bg-muted/30"
                  }`}
                >
                  <Terminal className="h-4 w-4" />
                </button>
                <button
                  onClick={copyToClipboard}
                  className="px-2 py-1 text-xs rounded-md hover:bg-muted/30"
                  aria-label="Copy code"
                >
                  {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Code Editor Content */}
            <div className="relative">
              {activeTab === "editor" ? (
                <div
                  ref={codeEditorRef}
                  className="bg-card/30 p-4 font-mono text-sm overflow-x-auto max-h-[500px] overflow-y-auto relative"
                >
                  <pre className="relative">
                    {DEMO_CODE.split("\n").map((line, i) => (
                      <div
                        key={i}
                        className={`flex ${
                          i === cursorPosition
                            ? "bg-primary/10 border-l-2 border-primary"
                            : ""
                        }`}
                      >
                        <span className="select-none w-8 text-muted-foreground text-right pr-2">
                          {i + 1}
                        </span>
                        <span className="flex-1 pl-2">
                          {line || " "}
                          {i === cursorPosition && (
                            <span className="inline-block w-1 h-4 bg-primary animate-pulse">
                              {" "}
                            </span>
                          )}
                        </span>
                      </div>
                    ))}
                  </pre>

                  {/* AI Suggestions */}
                  {AI_SUGGESTIONS.map(
                    (suggestion) =>
                      visibleSuggestions.includes(suggestion.line) && (
                        <motion.div
                          key={suggestion.line}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute right-4 bg-card p-3 rounded-md border border-primary/30 shadow-lg max-w-[80%] text-xs"
                          style={{
                            top: `${(suggestion.line - 1) * 24 + 4}px`,
                          }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-primary text-xs font-medium">
                              AI Suggestion
                            </span>
                            <span className="text-muted-foreground text-xs">
                              Line {suggestion.line + 1}
                            </span>
                          </div>
                          <p className="text-foreground/90 mb-2">
                            {suggestion.suggestion}
                          </p>
                          <div className="flex justify-end gap-2">
                            <button className="px-2 py-1 text-xs bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                              Apply
                            </button>
                            <button className="px-2 py-1 text-xs border border-muted rounded-md hover:bg-muted/30">
                              Ignore
                            </button>
                          </div>
                        </motion.div>
                      )
                  )}
                </div>
              ) : (
                <div className="bg-card/60 p-4 font-mono text-sm h-[400px] overflow-y-auto">
                  <div className="text-muted-foreground">$ npm start</div>
                  <div className="text-green-400 mt-1">
                    {"> Starting development server..."}
                  </div>
                  <div className="mt-1">Compiling...</div>
                  <div className="text-green-400 mt-2">
                    ✓ Ready in 2.36s
                  </div>
                  <div className="text-muted-foreground mt-2">
                    {"> MyCyberBase AI assistants activated"}
                  </div>
                  <div className="mt-1">
                    {"> Local: http://localhost:3000"}
                  </div>
                  <div className="mt-1">
                    {"> Network: http://192.168.1.5:3000"}
                  </div>
                  <div className="mt-3 text-yellow-400">
                    AI: 3 code improvement suggestions available
                  </div>
                  <div className="text-muted-foreground animate-pulse mt-1">
                    _
                  </div>
                </div>
              )}
            </div>

            {/* Editor Footer */}
            <div className="bg-muted/20 px-4 py-2 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground">
                  AI Powered
                </span>
                <span className="text-xs text-muted-foreground">
                  React • JavaScript
                </span>
              </div>
              <button className="text-xs flex items-center gap-1 px-3 py-1 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <Play className="h-3 w-3" /> Run Code
              </button>
            </div>
          </div>

          {/* Feature highlights under the editor */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Intelligent Autocomplete",
                description:
                  "Context-aware suggestions that predict what you're trying to code",
                icon: <BrainIcon className="text-primary" />,
              },
              {
                title: "Real-time Error Prevention",
                description:
                  "Catch bugs as you type with intelligent error detection",
                icon: <ShieldIcon className="text-primary" />,
              },
              {
                title: "Time-saving Shortcuts",
                description:
                  "Smart commands and snippets to accelerate development",
                icon: <SpeedIcon className="text-primary" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-lg p-6 border border-primary/10"
              >
                <div className="mb-4 p-2 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/70">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple icon components
const BrainIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-6 h-6 ${className}`}
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-6 h-6 ${className}`}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const SpeedIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-6 h-6 ${className}`}
  >
    <path d="M12 2v8" />
    <path d="m4.93 10.93 1.41 1.41" />
    <path d="M2 18h2" />
    <path d="M20 18h2" />
    <path d="m19.07 10.93-1.41 1.41" />
    <path d="M22 22H2" />
    <path d="m8 22 4-10 4 10" />
  </svg>
);
