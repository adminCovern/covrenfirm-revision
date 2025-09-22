'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Background with Brian's Photo */}
      <div className="relative">
        <div className="absolute inset-0 h-screen">
          <div className="relative w-full h-full">
            <Image 
              src="/brian-geary-founder.png" 
              alt=""
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 py-16 space-y-16">
          {/* About the Founder */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h1 className="text-4xl font-light text-gray-400 mb-4">About the Founder</h1>
              
              {/* Brian's Photo and Name Section */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <Image 
                    src="/brian-geary-founder.png" 
                    alt="Brian Geary - Founder of Covren Firm"
                    width={320}
                    height={320}
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-2xl"
                    priority
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                    Brian Geary
                  </h2>
                  <p className="text-xl text-gray-400 mb-6">Founder & Chief Architect</p>
                  <p className="text-lg text-gray-300 max-w-2xl">
                    The man who saw through the industry's artificial constraints and built the solution everyone said was impossible.
                  </p>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="space-y-4 text-lg text-gray-300"
              >
                <p>
                  While reading this, you're simultaneously evaluating three other AI consultants. 
                  You bookmarked two articles about ChatGPT Enterprise pricing, and you've been 
                  mentally calculating whether your current $3,200/month API costs justify switching providers.
                </p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                  className="text-2xl font-bold text-purple-400"
                >
                  None of those considerations matter anymore.
                </motion.p>
              </motion.div>
            </motion.div>
          </section>

          {/* What You Haven't Been Told */}
          <section>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-8"
            >
              What You Haven't Been Told
            </motion.h2>
            
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Your current AI strategy assumes scarcity that doesn't exist. The entire industry 
                operates on artificial limitations designed to maintain recurring revenue streams.
              </p>
              <p className="font-bold text-xl text-cyan-400">
                Brian recognized this eighteen months ago and built around it.
              </p>
              <p className="font-bold text-xl text-white">
                Result: His clients don't have AI costs. They have AI assets.
              </p>
              <p>
                While your current providers optimize your spending within their pricing models, 
                Brian's clients eliminated the spending entirely. Their AI gets smarter without 
                getting more expensive. It scales without billing escalation. It evolves without 
                subscription renewals.
              </p>
              <p className="text-purple-400 font-semibold">
                This isn't theory. This is Monday morning reality for businesses that made the transition.
              </p>
            </div>
          </section>

          {/* The Pattern You Can't Unsee */}
          <section>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-8"
            >
              The Pattern You Can't Unsee
            </motion.h2>
            
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Notice how every AI solution you've evaluated includes ongoing costs that increase 
                with success. Better results mean higher bills. Scale means more expense. Growth 
                means greater dependency.
              </p>
              <p className="text-xl text-orange-400 font-bold">
                Question: What if this entire model was designed to keep you dependent?
              </p>
              <p>
                Brian asked this question first and solved it completely. His approach eliminates 
                the subscription model because he eliminated the need for external processing entirely.
              </p>
              <p className="text-xl text-purple-400 font-bold">
                The moment you understand this distinction, every other proposal becomes obsolete.
              </p>
            </div>
          </section>

          {/* What Happens When Someone Thinks Past Industry Boundaries */}
          <section>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-8"
            >
              What Happens When Someone Thinks Past Industry Boundaries
            </motion.h2>
            
            <div className="space-y-6 text-lg text-gray-300">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-3">
                  <p className="text-gray-400">While competitors built better integrations with OpenAI,</p>
                  <p className="text-gray-400">While they optimized prompt engineering,</p>
                  <p className="text-gray-400">While they negotiated enterprise pricing,</p>
                </div>
                <div className="space-y-3">
                  <p className="text-white font-bold">Brian built technology that makes OpenAI unnecessary.</p>
                  <p className="text-white font-bold">he eliminated prompts entirely.</p>
                  <p className="text-white font-bold">he deleted recurring costs completely.</p>
                </div>
              </div>
              
              <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-center">
                The difference: They improved your position within the system. Brian replaced the system.
              </p>
              
              <p className="text-gray-400 text-center">
                Your competitors' AI experts cannot explain how this works because they're still 
                building within the constraints Brian transcended.
              </p>
            </div>
          </section>

          {/* The Capabilities That Shouldn't Exist */}
          <section>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-xl"
            >
              <h2 className="text-3xl font-bold mb-8">The Capabilities That Shouldn't Exist</h2>
              
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <span className="font-bold text-white">Sovereign Intelligence:</span>
                    <span className="text-gray-300"> AI that belongs to its operator, not its creator</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <span className="font-bold text-white">Zero-Dependency Processing:</span>
                    <span className="text-gray-300"> Responses generated without external services</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <span className="font-bold text-white">Infinite Scale:</span>
                    <span className="text-gray-300"> Performance that improves with use rather than degrading</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Brain className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <span className="font-bold text-white">Predictive Evolution:</span>
                    <span className="text-gray-300"> Systems that anticipate needs before they're expressed</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-red-400 mt-1" />
                  <div>
                    <span className="font-bold text-white">Cost Elimination:</span>
                    <span className="text-gray-300"> Not cost reduction - cost deletion entirely</span>
                  </div>
                </li>
              </ul>
              
              <p className="text-xl text-purple-400 font-bold mt-8 text-center">
                These capabilities exist. Brian's clients use them daily. 
                Your current providers cannot explain why they don't offer them.
              </p>
            </motion.div>
          </section>

          {/* The Consultant Reality Check */}
          <section>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-8 bg-black border-2 border-purple-500 rounded-xl"
            >
              <h2 className="text-3xl font-bold mb-6">The Consultant Reality Check</h2>
              
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  The consultant you're currently considering—the one who impressed you with their 
                  ChatGPT case studies—is unknowingly selling you solutions to problems that no longer exist.
                </p>
                <p>
                  They're optimizing brilliantly within a framework that has been transcended. 
                  It's not their fault. The industry training they received was designed to keep 
                  them thinking within these constraints.
                </p>
                <p className="text-xl font-bold text-purple-400">
                  But you now have access to someone who operates outside those constraints entirely.
                </p>
              </div>
            </motion.div>
          </section>

          {/* The Recognition That Changes Everything */}
          <section>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-8"
            >
              The Recognition That Changes Everything
            </motion.h2>
            
            <div className="space-y-6 text-lg text-gray-300">
              <p className="text-xl font-semibold">
                When you work with someone who solved problems others haven't recognized yet, 
                you inherit advantages others cannot compete against.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="text-center">
                  <p className="text-gray-400">While your competitors struggle with API limitations,</p>
                  <p className="text-cyan-400 font-bold mt-2">you operate without APIs.</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400">While they negotiate usage tiers,</p>
                  <p className="text-purple-400 font-bold mt-2">you own unlimited processing.</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400">While they pay increasing costs for AI services,</p>
                  <p className="text-green-400 font-bold mt-2">you pay once for AI ownership.</p>
                </div>
              </div>
              
              <p className="text-2xl font-bold text-white text-center">
                This isn't a different vendor. This is a different reality.
              </p>
            </div>
          </section>

          {/* What This Reveals About Your Current Situation */}
          <section>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-gray-300"
            >
              <h2 className="text-4xl font-bold mb-8">What This Reveals About Your Current Situation</h2>
              
              <p>
                If you're evaluating AI consultants who discuss implementation timelines, monthly 
                costs, and integration challenges, you're comparing solutions to problems that have 
                been transcended.
              </p>
              
              <div className="pl-8 border-l-4 border-cyan-500 space-y-2 my-8">
                <p>Brian's clients don't implement AI systems. They acquire AI ownership.</p>
                <p>They don't manage AI costs. They eliminated AI expenses.</p>
                <p>They don't integrate with AI services. They command AI assets.</p>
              </div>
              
              <p className="text-xl font-bold text-purple-400">
                When you realize someone solved the problem everyone else is still optimizing within, 
                the choice becomes inevitable.
              </p>
            </motion.div>
          </section>

          {/* The Timeline That Accelerates */}
          <section>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-800/30 rounded-xl"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">The Timeline That Accelerates</h2>
              
              <div className="space-y-4 text-lg text-gray-300">
                <p>Every month you continue evaluating traditional AI solutions, Brian's clients compound their advantages.</p>
                <p>Every month your competitors negotiate better API terms, you could own the intelligence they're renting.</p>
                <p>Every month the industry optimizes within current constraints, you could be operating beyond those constraints entirely.</p>
                
                <p className="text-xl font-bold text-orange-400 text-center mt-6">
                  The gap becomes unbridgeable. The opportunity narrows with each decision cycle.
                </p>
              </div>
            </motion.div>
          </section>

          {/* The Meta-Recognition */}
          <section>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-gray-300"
            >
              <h2 className="text-4xl font-bold mb-8">The Meta-Recognition</h2>
              
              <p className="text-xl">
                If this page feels profoundly different from every other founder bio you've read, 
                that difference is the answer.
              </p>
              
              <p>
                They recite wins from inside the sandbox—safe, sanctioned, expected. This isn't that. 
                This is the anomaly your instincts clocked before your mind could name it. The system 
                doesn't contain him. He doesn't *bend* rules—he erases the concept. That "Holy F*ck" 
                ripple crawling up your spine? That's recognition. You just met the variable they 
                never accounted for.
              </p>
              
              <p className="text-2xl font-bold text-purple-400 text-center mt-8">
                This isn't better marketing. This is evidence of categorical difference.
              </p>
            </motion.div>
          </section>

          {/* The Final Understanding */}
          <section className="text-center py-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">The Final Understanding</h2>
              
              <div className="max-w-3xl mx-auto space-y-6 mb-12 text-lg text-gray-300">
                <p className="text-xl">
                  This isn't about choosing a better AI consultant. 
                  This is about choosing evolution over optimization.
                </p>
                
                <p>
                  Your instinct brought you here because something felt fundamentally wrong with 
                  paying increasing amounts for decreasing autonomy, funding systems designed to 
                  keep you dependent, renting intelligence you could own.
                </p>
                
                <p className="text-2xl font-bold text-cyan-400">
                  That instinct was accurate.
                </p>
                
                <p>
                  The question now is whether you'll act on what you understand before your 
                  competitors discover what you're currently reading.
                </p>
              </div>
              
              <div className="space-y-4 text-2xl font-bold">
                <p className="text-purple-400">Choose sovereignty.</p>
                <p className="text-cyan-400">Choose ownership.</p>
                <p className="text-white">Choose the future.</p>
              </div>
              
              <p className="text-xl text-gray-300 mt-12">
                Everything changes based on what you decide next.
              </p>
              
              <button
                className="mt-8 px-12 py-6 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-bold text-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:scale-105 active:scale-95"
              >
                Begin Your Sovereignty Journey
                <ChevronRight className="inline-block ml-3 w-6 h-6" />
              </button>
            </motion.div>
          </section>

          {/* Brian's Closing Image */}
          <section className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative max-w-3xl mx-auto"
            >
              <div className="relative w-full aspect-[3/2]">
                <Image 
                  src="/brian-geary-founder.png" 
                  alt="Brian Geary - Ready to Transform Your Business"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-8 md:p-12">
                  <div className="text-center w-full">
                    <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                      "The future belongs to those who own their intelligence."
                    </p>
                    <p className="text-lg text-gray-300">
                      — Brian Geary
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}
