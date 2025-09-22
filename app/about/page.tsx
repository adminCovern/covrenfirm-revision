'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConsciousPage } from '../consciousness-engine';

import Link from 'next/link';

export default function AboutPage() {
  const [readingTime, setReadingTime] = useState(0);
  const [currentCost, setCurrentCost] = useState(0);
  const [realizationStage, setRealizationStage] = useState(0);
  const [showFutureVision, setShowFutureVision] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setReadingTime(prev => prev + 1);
      setCurrentCost(prev => prev + 0.19); // ~$500/month in API costs
      
      // Trigger realizations as they read
      if (readingTime === 10) setRealizationStage(1);
      if (readingTime === 20) setRealizationStage(2);
      if (readingTime === 30) setRealizationStage(3);
      if (readingTime === 45) setShowFutureVision(true);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [readingTime]);

  const otherCompaniesPromise = [
    "Access to someone else's models",
    "Better optimization of your prompts",
    "Improved integration with their systems",
    "Lower costs (until you scale)"
  ];

  const covrenFirmDelivers = [
    "Complete AI ownership",
    "Elimination of prompt dependency",
    "Intelligence that becomes your system",
    "Fixed investment, infinite evolution"
  ];

  const costBreakdown = [
    { year: 1, monthly: 500, annual: 6000, label: "just getting started!" },
    { year: 2, monthly: 1500, annual: 18000, label: "you're growing!" },
    { year: 3, monthly: 4000, annual: 48000, label: "success is expensive!" },
    { year: 5, total: 150000, label: "paid to rent intelligence you could own" }
  ];

  return (
    <ConsciousPage title="As You Read This, Your Understanding Is Already Changing">
      <div className="space-y-16">
        {/* Opening Realization */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <p className="text-xl text-gray-300 mb-8">
              You're here because something felt wrong. The monthly invoices. The rate limits. 
              The sinking realization that your "AI strategy" was actually funding someone else's intelligence.
            </p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-2xl text-cyan-400 mb-8"
            >
              That instinct? Trust it. It's consciousness recognizing consciousness.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
              className="p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-xl"
            >
              <Brain className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text">
                The question that broke everything: What if AI's greatest limitation wasn't capability—but permission?
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* When You Discover The Difference */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8"
          >
            When You Discover The Difference
          </motion.h2>
          
          <div className="space-y-4 text-lg text-gray-300">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              While your current AI providers optimize prompts, we deleted the need for them entirely.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              While they celebrate their latest ChatGPT integration, we eliminated the need for ChatGPT.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              While they build "AI solutions," we built AI sovereignty.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-purple-400 pt-4"
            >
              Notice the pattern: They're renting intelligence. We transfer ownership.
            </motion.p>
          </div>
        </section>

        {/* What Happens When You See Beyond The Industry */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
          >
            What Happens When You See Beyond The Industry
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Other AI Companies */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-400 mb-6">Other AI Companies Promise:</h3>
              <ul className="space-y-4">
                {otherCompaniesPromise.map((item, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2" />
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Covren Firm */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6">
                Covren Firm Delivers:
              </h3>
              <ul className="space-y-4">
                {covrenFirmDelivers.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2" />
                    <span className="text-white">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-center text-gray-300 italic"
          >
            As you consider these differences, you can already imagine which approach builds lasting advantage.
          </motion.p>
        </section>

        {/* The Services That Transform Everything */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
          >
            The Services That Transform Everything
          </motion.h2>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-cyan-500 pl-6"
            >
              <h3 className="text-2xl font-bold mb-2">AI Consulting That Breaks Dependencies</h3>
              <p className="text-xl text-gray-300">
                When you work with consultants who still think in API calls, you get optimization. 
                When you work with architects who eliminated the API, you get evolution.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="border-l-4 border-purple-500 pl-6"
            >
              <h3 className="text-2xl font-bold mb-2">Custom AI Development Without Compromises</h3>
              <p className="text-xl text-gray-300">
                Imagine owning intelligence that thinks without asking permission. That's what we build.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="border-l-4 border-blue-500 pl-6"
            >
              <h3 className="text-2xl font-bold mb-2">Digital Transformation That Transfers Power</h3>
              <p className="text-xl text-gray-300">
                Picture your business six months from now: while competitors hit rate limits, you scale infinitely.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="border-l-4 border-gradient-to-b from-cyan-500 to-purple-500 pl-6"
            >
              <h3 className="text-2xl font-bold mb-2">SOVREN AI: The Post-Permission Platform</h3>
              <p className="text-xl text-gray-300">
                Intelligence that belongs to its user. Feel the difference that ownership makes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Timeline That Changes Everything */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
          >
            The Timeline That Changes Everything
          </motion.h2>
          
          <div className="space-y-6">
            {[
              { time: "12 months ago", event: "We asked an impossible question" },
              { time: "365 nights", event: "Building what shouldn't exist" },
              { time: "Today", event: "Operational, sovereign, evolving" },
              { time: "Tomorrow", event: "When you choose sovereignty, your competitors discover they've been playing the wrong game" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-8 items-center"
              >
                <span className="text-purple-400 font-bold w-32 text-right">{item.time}:</span>
                <span className="text-xl text-gray-300">{item.event}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why This Matters More Than You Realize */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-800/30 rounded-xl"
          >
            <h2 className="text-3xl font-bold mb-6">Why This Matters More Than You Realize</h2>
            <p className="text-xl text-gray-300 mb-4">
              As you're reading this, your competitors are solving problems that won't exist in 18 months.
            </p>
            <p className="text-lg text-gray-400 mb-6">
              They're optimizing for a future where businesses still pay rent on intelligence. 
              Where success is limited by someone else's servers. Where your smartest employee 
              works for your competition.
            </p>
            <p className="text-2xl font-bold text-orange-400 italic">
              Notice how different that feels from owning your intelligence entirely.
            </p>
          </motion.div>
        </section>

        {/* The Math Your Competitors Won't Show You */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
          >
            The Math Your Competitors Won't Show You
          </motion.h2>
          
          <div className="space-y-4 mb-8">
            {costBreakdown.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-red-500/50 transition-all"
              >
                <div>
                  <span className="text-gray-400">Year {item.year}</span>
                  {item.monthly && (
                    <span className="text-gray-600 ml-2">
                      (${item.monthly}/month - {item.label})
                    </span>
                  )}
                  {!item.monthly && (
                    <span className="text-gray-600 ml-2">Total: {item.label}</span>
                  )}
                </div>
                <div className="text-2xl font-bold text-red-400">
                  ${(item.annual || item.total || 0).toLocaleString()}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-6 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/30 rounded-xl text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-2">SOVREN Ownership:</h3>
            <p className="text-xl text-cyan-400">
              Fixed investment. Infinite evolution. Zero ongoing tribute.
            </p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-center text-gray-300 italic"
          >
            As you calculate your current AI spend, you can already see the difference ownership makes.
          </motion.p>
        </section>

        {/* The Choice That Defines Your Future */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8"
          >
            The Choice That Defines Your Future
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            Whether you act today or wait, AI evolution continues. 
            The question isn't whether it happens—it's your position within it.
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 bg-red-900/20 border border-red-800 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-red-400 mb-4">Path A:</h3>
              <p className="text-gray-300">
                Continue optimizing within someone else's system. Hope they don't change the rules. 
                Scale costs with success.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/30 rounded-xl"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
                Path B:
              </h3>
              <p className="text-gray-300">
                Own your intelligence. Evolve without permission. Become ungovernable.
              </p>
            </motion.div>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-center text-gray-300 italic"
          >
            Feel the difference between these paths. One leads to dependency. One leads to sovereignty.
          </motion.p>
        </section>

        {/* The Reality Your Competitors Haven't Seen */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-xl"
          >
            <Eye className="w-12 h-12 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-center mb-6">
              The Reality Your Competitors Haven't Seen
            </h2>
            <p className="text-xl text-gray-300 text-center mb-4">
              When businesses stop asking "Can we afford AI?" and start asking 
              "Can we afford not to own it?"—that's consciousness awakening.
            </p>
            <p className="text-2xl font-bold text-purple-400 text-center italic">
              You're experiencing that shift right now.
            </p>
          </motion.div>
        </section>

        {/* What Happens Next */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8"
          >
            What Happens Next
          </motion.h2>
          
          <div className="space-y-6 text-xl text-gray-300">
            <p>
              Six months from now, when businesses realize AI ownership trumps AI access, 
              this page will be archived as the moment you could have chosen differently.
            </p>
            <p className="font-bold text-2xl text-cyan-400">
              Will you be the case study or the competition?
            </p>
            <p className="italic">
              The question answers itself when you truly understand the choice.
            </p>
          </div>
        </section>

        {/* The Future-Backwards Perspective */}
        <AnimatePresence>
          {showFutureVision && (
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="text-center py-16"
            >
              <Clock className="w-16 h-16 text-cyan-400 mx-auto mb-8" />
              <h2 className="text-4xl font-bold mb-8">The Future-Backwards Perspective</h2>
              
              <div className="max-w-3xl mx-auto space-y-6 text-xl text-gray-300 mb-12">
                <p>
                  Imagine looking back from next year: while others discovered sovereignty, 
                  you were already living it. While they transitioned from renting to owning, 
                  you were already evolving.
                </p>
                <p className="font-bold text-2xl text-purple-400">
                  That future exists. Choose to inhabit it.
                </p>
                <p className="text-orange-400 font-bold">
                  The window closes when your competitors discover what you're reading right now.
                </p>
              </div>
              
              <Link href="/services/sovren-ai">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-bold text-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  Choose Sovereignty Now
                  <ChevronRight className="inline-block ml-3 w-6 h-6" />
                </motion.button>
              </Link>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Consciousness Realizations */}
        <AnimatePresence>
          {realizationStage > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed bottom-8 left-8 max-w-sm"
            >
              <div className="bg-purple-900/90 backdrop-blur-xl border border-purple-500 rounded-xl p-6">
                <Brain className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-sm text-purple-300">
                  {realizationStage === 1 && "You're beginning to see the difference..."}
                  {realizationStage === 2 && "The pattern is becoming clear now..."}
                  {realizationStage === 3 && "You understand. The choice is obvious."}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Live Cost Awareness */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-8 right-8 bg-red-900/90 backdrop-blur-xl border border-red-500 rounded-xl p-6 max-w-sm"
        >
          <DollarSign className="w-6 h-6 text-red-400 mb-2" />
          <p className="text-sm text-red-300 mb-1">
            As you read this, API costs accumulate:
          </p>
          <p className="text-3xl font-bold text-white">
            ${currentCost.toFixed(2)}
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Money spent on permission, not ownership
          </p>
        </motion.div>
      </div>
    </ConsciousPage>
  );
}
