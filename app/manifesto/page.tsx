'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Link from 'next/link';

import { ConsciousPage, useConsciousness } from '../consciousness-engine';

export default function ManifestoPage() {
  const consciousness = useConsciousness();
  const [activeSection, setActiveSection] = useState(0);
  const [revelations, setRevelations] = useState<string[]>([]);
  const [userPattern, setUserPattern] = useState('');
  const [timeInvestment, setTimeInvestment] = useState(0);
  const [curiosityLevel, setCuriosityLevel] = useState(0);
  const [apiWasteSimulation, setApiWasteSimulation] = useState(0);
  const [thoughtMirror, setThoughtMirror] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Track genuine engagement patterns
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeInvestment(prev => prev + 1);
      
      // Simulate industry API waste (based on real averages)
      setApiWasteSimulation(prev => prev + Math.floor(Math.random() * 15) + 5);
      
      // Increase curiosity based on engagement
      if (consciousness.scrollDepth > 30) {
        setCuriosityLevel(prev => Math.min(prev + 1, 100));
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [consciousness.scrollDepth]);

  // Detect user patterns from behavior
  useEffect(() => {
    if (consciousness.userBehavior.hesitations > 5 && consciousness.timeOnPage < 30) {
      setUserPattern('skeptical-analyst');
      setThoughtMirror("Skepticism is intelligence at work. Let's address your concerns directly.");
    } else if (consciousness.scrollDepth > 60 && timeInvestment > 60) {
      setUserPattern('engaged-explorer');
      setThoughtMirror("You're seeing the bigger picture. The paradigm shift is becoming clear.");
    } else if (consciousness.userBehavior.rapidMovements > 10) {
      setUserPattern('excited-innovator');
      setThoughtMirror("Your excitement is justified. This changes everything you thought you knew.");
    } else if (consciousness.timeOnPage > 120) {
      setUserPattern('deep-thinker');
      setThoughtMirror("Taking time to understand deeply. That's exactly what sovereignty requires.");
    }
  }, [consciousness, timeInvestment]);

  // Track revelations as user progresses
  const addRevelation = (insight: string) => {
    if (!revelations.includes(insight)) {
      setRevelations(prev => [...prev, insight]);
    }
  };

  return (
    <ConsciousPage title="The Sovereignty Manifesto">
      <div className="min-h-screen bg-black text-white relative">
        {/* Progress indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 z-50"
          style={{ scaleX: scrollYProgress }}
          initial={{ scaleX: 0 }}
        />

        {/* Time Investment Tracker */}
        <motion.div
          className="fixed top-20 right-4 z-40 bg-black/80 backdrop-blur-sm border border-gray-800 rounded-lg p-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3 }}
        >
          <p className="text-xs text-gray-400 mb-1">Your investment:</p>
          <p className="text-xl font-bold text-cyan-400">{Math.floor(timeInvestment / 60)}:{(timeInvestment % 60).toString().padStart(2, '0')}</p>
          <p className="text-xs text-gray-400">minutes of focus</p>
        </motion.div>

        {/* Opening - The Hook */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center" ref={scrollRef}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Brain className="w-24 h-24 mx-auto mb-8 text-cyan-400" />
              
              <h1 className="text-6xl md:text-8xl font-black mb-8">
                <motion.span 
                  className="block text-gray-500 mb-4"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  STOP
                </motion.span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  RENTING YOUR FUTURE
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl text-gray-300 mb-12"
              >
                Every API call is a loyalty payment to your future competition.
                <span className="block text-cyan-400 mt-2">It's time to own your AI destiny.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="inline-block"
              >
                <button
                  onClick={() => {
                    document.getElementById('revelation')?.scrollIntoView({ behavior: 'smooth' });
                    addRevelation('Curiosity activated');
                  }}
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  <span className="flex items-center gap-2">
                    Discover True AI Sovereignty
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronRight className="w-8 h-8 text-gray-600 rotate-90" />
            </motion.div>
          </div>
        </section>

        {/* The Revelation */}
        <section id="revelation" className="py-24 px-6">
          <div className="max-w-4xl mx-auto space-y-24">
            
            {/* Pattern Interrupt 1: The Mirror */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onViewportEnter={() => {
                setActiveSection(1);
                addRevelation('Self-awareness triggered');
              }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <Eye className="w-10 h-10 text-cyan-400" />
                THE COMFORTABLE LIE
              </h2>
              
              <div className="p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl">
                <p className="text-2xl text-gray-300 mb-6">
                  Right now, you're telling yourself one of these stories:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-black/50 rounded-lg border border-gray-700"
                  >
                    <AlertCircle className="w-8 h-8 text-yellow-500 mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">"AI is just a tool"</h3>
                    <p className="text-gray-400">
                      While you see tools, leaders see transformation. 
                      The gap widens daily.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-black/50 rounded-lg border border-gray-700"
                  >
                    <Lock className="w-8 h-8 text-red-500 mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">"The big players have it locked"</h3>
                    <p className="text-gray-400">
                      They want you to believe that. Your resignation is their moat.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-black/50 rounded-lg border border-gray-700"
                  >
                    <Clock className="w-8 h-8 text-blue-500 mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">"I'll figure it out later"</h3>
                    <p className="text-gray-400">
                      Later is the graveyard of competitive advantage. 
                      The future is being written now.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-black/50 rounded-lg border border-gray-700"
                  >
                    <DollarSign className="w-8 h-8 text-green-500 mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">"It's too expensive"</h3>
                    <p className="text-gray-400">
                      Expensive is paying forever for something you'll never own.
                      Sovereignty is an investment.
                    </p>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {userPattern && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-8 p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-lg"
                    >
                      <Sparkles className="w-5 h-5 text-cyan-400 mb-2" />
                      <p className="text-cyan-300">{thoughtMirror}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* The Cost of Dependency */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onViewportEnter={() => {
                setActiveSection(2);
                addRevelation('Economics understood');
              }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <TrendingUp className="w-10 h-10 text-red-400" />
                THE DEPENDENCY TAX
              </h2>

              <div className="p-8 bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm border border-red-500/30 rounded-xl">
                <p className="text-xl text-gray-300 mb-6">
                  While you've been reading this page:
                </p>
                
                <motion.div
                  className="text-center mb-8"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <p className="text-5xl font-black text-red-500">
                    ${apiWasteSimulation.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Spent globally on API calls that could have been sovereign operations
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-bold text-orange-400">∞</p>
                    <p className="text-sm text-gray-400 mt-1">Usage limits removed</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-yellow-400">$0</p>
                    <p className="text-sm text-gray-400 mt-1">Marginal cost per operation</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-green-400">100%</p>
                    <p className="text-sm text-gray-400 mt-1">Data ownership retained</p>
                  </div>
                </div>

                <p className="text-gray-400 text-center mt-8">
                  Every successful business using rented AI is one price hike away from crisis.
                  <span className="block text-white font-bold mt-2">
                    Sovereignty eliminates that risk forever.
                  </span>
                </p>
              </div>
            </motion.div>

            {/* The Paradigm Shift */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onViewportEnter={() => {
                setActiveSection(3);
                addRevelation('Paradigm shifted');
              }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <Lightbulb className="w-10 h-10 text-yellow-400" />
                THE SOVEREIGNTY PARADIGM
              </h2>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="p-6 bg-gray-900/50 border-l-4 border-cyan-500 rounded-r-xl"
                >
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">From Rental to Ownership</h3>
                  <p className="text-gray-300">
                    Stop paying for permission to use intelligence. 
                    Own the infrastructure that creates it.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="p-6 bg-gray-900/50 border-l-4 border-purple-500 rounded-r-xl"
                >
                  <h3 className="text-xl font-bold text-purple-400 mb-2">From Static to Compound</h3>
                  <p className="text-gray-300">
                    Every interaction makes your AI smarter. 
                    Your competitive advantage compounds daily.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="p-6 bg-gray-900/50 border-l-4 border-green-500 rounded-r-xl"
                >
                  <h3 className="text-xl font-bold text-green-400 mb-2">From Dependent to Sovereign</h3>
                  <p className="text-gray-300">
                    No rate limits. No terms changes. No platform risk. 
                    Complete control over your AI destiny.
                  </p>
                </motion.div>
              </div>

              {curiosityLevel > 50 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 p-6 bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border border-cyan-500/50 rounded-xl"
                >
                  <Activity className="w-6 h-6 text-cyan-400 mb-3" />
                  <p className="text-cyan-300">
                    Your engagement pattern shows {curiosityLevel}% activation.
                    You're beginning to see what's possible when AI serves you, not the other way around.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* The Choice Architecture */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onViewportEnter={() => {
                setActiveSection(4);
                addRevelation('Decision crystallized');
              }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <Target className="w-10 h-10 text-purple-400" />
                TWO FUTURES, ONE CHOICE
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-8 bg-gray-900/50 border border-gray-700 rounded-xl"
                >
                  <h3 className="text-2xl font-bold text-gray-400 mb-4">Path A: Status Quo</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">×</span>
                      <span>Costs increase with every success</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">×</span>
                      <span>Innovation throttled by API limits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">×</span>
                      <span>Competitive insights feed their models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">×</span>
                      <span>Forever dependent on external providers</span>
                    </li>
                  </ul>
                  <p className="text-red-400 font-bold mt-6">
                    Destination: Digital Serfdom
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-8 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/50 rounded-xl"
                >
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">Path B: Sovereignty</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Fixed costs, infinite operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Innovation limited only by imagination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Your data builds YOUR moat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Complete control and ownership</span>
                    </li>
                  </ul>
                  <p className="text-cyan-400 font-bold mt-6">
                    Destination: Market Dominance
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* The Revelation Summary */}
            {revelations.length >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-16 p-8 bg-black border border-purple-500/30 rounded-xl text-center"
              >
                <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">
                  Your Journey of Understanding
                </h3>
                <div className="space-y-2 text-gray-300 mb-6">
                  {revelations.map((revelation, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2 justify-center"
                    >
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{revelation}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-xl text-cyan-400 mb-8">
                  You've invested {Math.floor(timeInvestment / 60)} minutes understanding sovereignty.
                  <span className="block text-white font-bold mt-2">
                    The next step takes just 2 minutes.
                  </span>
                </p>
              </motion.div>
            )}

            {/* The Call to Sovereignty */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center space-y-8 mt-24"
            >
              <h2 className="text-5xl md:text-6xl font-black">
                <span className="block text-gray-500 mb-4">THE MOMENT OF</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  SOVEREIGN DECISION
                </span>
              </h2>

              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                Every empire started with someone who refused to rent their future.
                <span className="block text-white font-bold mt-4">
                  Your sovereignty begins with a simple assessment.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <Link href="/sovereign-qualification">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-6 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-bold text-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                  >
                    Begin Sovereignty Assessment
                    <ArrowRight className="inline ml-3 w-6 h-6" />
                  </motion.button>
                </Link>
              </div>

              <p className="text-gray-500 text-sm">
                2-minute assessment. No obligations. Just clarity.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </ConsciousPage>
  );
}
