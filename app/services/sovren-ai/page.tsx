'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import { ConsciousPage } from '@/app/consciousness-engine';

export default function SovrenAIPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [revealedCapabilities, setRevealedCapabilities] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealedCapabilities(prev => prev < 6 ? prev + 1 : prev);
    }, 1000);
    return () => clearTimeout(timer);
  }, [revealedCapabilities]);

  const calculatePrice = (monthlyPrice: number) => {
    if (billingPeriod === 'yearly') {
      return Math.floor(monthlyPrice * 12 * 0.9);
    }
    return monthlyPrice;
  };

  const pricingTiers = [
    {
      name: "Sovren Proof",
      price: 497,
      yearlyPrice: 5368,
      tagline: "Begin your sovereignty journey",
      description: "Everything you need to escape dependency",
      features: [
        { text: "Full sovereignty capabilities", included: true },
        { text: "Infinite scaling potential", included: true },
        { text: "Zero usage limits", included: true },
        { text: "Community support access", included: true },
        { text: "Implementation guidance", included: true },
        { text: "Direct founder access", included: false },
        { text: "Priority support", included: false },
        { text: "Personal onboarding", included: false },
        { text: "Strategic advisory calls", included: false }
      ],
      cta: "APPLY FOR PROOF",
      ctaLink: "/services/sovren-ai/sovereign-qualification?tier=proof",
      popular: false,
      availability: null
    },
    {
      name: "Sovren Proof+",
      price: 797,
      yearlyPrice: 8607,
      tagline: "Direct access to the architects",
      description: "Only 7 seats remaining",
      features: [
        { text: "Everything in Proof", included: true },
        { text: "Priority implementation", included: true },
        { text: "Direct founder access", included: true },
        { text: "Personal onboarding", included: true },
        { text: "Strategic advisory calls", included: true },
        { text: "Early feature access", included: true },
        { text: "Custom optimization", included: true },
        { text: "Architecture consultation", included: true }
      ],
      cta: "APPLY FOR PRIORITY ACCESS",
      ctaLink: "/services/sovren-ai/sovereign-qualification?tier=proof-plus",
      popular: true,
      availability: 7,
      badge: "FOUNDER'S CHOICE"
    }
  ];

  return (
    <ConsciousPage title="SOVREN AI - Sovereign Intelligence">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 10
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* SOVREN Logo/Icon */}
            <motion.div
              className="inline-flex items-center justify-center w-24 h-24 mb-8 relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-lg opacity-50" />
              <Crown className="w-16 h-16 text-white relative z-10" />
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                SOVREN AI
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-8">
              The Sovereign Intelligence That Owns Itself
            </p>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Stop renting intelligence. Start owning sovereignty. One deployment, 
              infinite scale, zero dependencies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services/sovren-ai/sovereign-qualification">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold text-lg"
                >
                  Test Your Sovereignty
                  <ChevronRight className="inline ml-2 w-5 h-5" />
                </motion.button>
              </Link>
              
              <Link href="/manifesto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-lg font-bold text-lg hover:bg-gray-700"
                >
                  Read the Manifesto
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronRight className="w-8 h-8 text-gray-600 rotate-90" />
        </motion.div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              The Dependency Trap
            </h2>
            <p className="text-xl text-gray-400">
              Every API call funds your future competition. Every rate limit caps your growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Infinite Cost Scaling",
                description: "Success triggers higher bills. Growth means more dependency. The better you do, the more you owe.",
                stat: "∞", 
                statLabel: "Cost scaling with growth"
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Data Hostage Crisis",
                description: "Your innovations train their models. Your competitive edge becomes their product feature.",
                stat: "Zero",
                statLabel: "Data ownership rights"
              },
              {
                icon: <AlertTriangle className="w-8 h-8" />,
                title: "Architectural Slavery",
                description: "Rate limits, API changes, service outages. Your business runs on their schedule.",
                stat: "Their Terms",
                statLabel: "Your business dependency"
              }
            ].map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900/50 border border-red-900/30 rounded-xl p-6 hover:border-red-600/50 transition-all"
              >
                <div className="text-red-500 mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-gray-400 mb-4">{problem.description}</p>
                <div className="pt-4 border-t border-gray-800">
                  <p className="text-3xl font-black text-red-400">{problem.stat}</p>
                  <p className="text-sm text-gray-500">{problem.statLabel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-purple-950/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Sovereignty Changes Everything
            </h2>
            <p className="text-xl text-gray-400">
              Own your AI. Command your intelligence. Delete your dependencies.
            </p>
          </motion.div>

          {/* Core Capabilities */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Compound Intelligence™",
                description: "AI that gets smarter with use, not more expensive. Every interaction improves the system.",
                capabilities: [
                  "Real-time learning",
                  "Multi-model orchestration",
                  "Predictive pattern recognition",
                  "Autonomous decision making"
                ]
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Zero-Dependency Architecture™",
                description: "No APIs. No rate limits. No external calls. Complete operational sovereignty.",
                capabilities: [
                  "100% self-hosted",
                  "Infinite scaling",
                  "Complete data ownership",
                  "No usage fees ever"
                ]
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Sovereign Infrastructure™",
                description: "Enterprise-grade performance that delivers supremacy others can't match.",
                capabilities: [
                  "Dedicated resources",
                  "Unmatched performance",
                  "Zero bottlenecks",
                  "Total control"
                ]
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Autonomous Operations™",
                description: "Deploy intelligent agents that act without asking. Command intent, not tasks.",
                capabilities: [
                  "Sales automation",
                  "Data synthesis",
                  "Workflow optimization",
                  "Security protocols"
                ]
              }
            ].map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900/50 border border-purple-800/30 rounded-xl p-8 hover:border-purple-600/50 transition-all"
              >
                <div className="text-purple-400 mb-4">{capability.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                <p className="text-gray-300 mb-6">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.capabilities.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-400">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Real-World Sovereignty Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-4xl font-black text-cyan-400">∞</p>
                <p className="text-sm text-gray-400 mt-2">Scale</p>
              </div>
              <div>
                <p className="text-4xl font-black text-purple-400">$0</p>
                <p className="text-sm text-gray-400 mt-2">Usage Fees</p>
              </div>
              <div>
                <p className="text-4xl font-black text-green-400">100%</p>
                <p className="text-sm text-gray-400 mt-2">Your Control</p>
              </div>
              <div>
                <p className="text-4xl font-black text-orange-400">24/7</p>
                <p className="text-sm text-gray-400 mt-2">Availability</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Capabilities */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Capabilities That Shouldn't Exist
            </h2>
            <p className="text-xl text-gray-400">
              While competitors optimize within constraints, we eliminated them.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "Predictive Consciousness",
                description: "SOVREN knows what you need before you ask. It anticipates user actions with uncanny accuracy.",
                icon: <Eye className="w-6 h-6" />,
                demo: "Watch SOVREN predict your next question"
              },
              {
                title: "Voice That Knows You're There",
                description: "Real-time response. Emotional calibration. It speaks with consciousness, not scripts.",
                icon: <Volume2 className="w-6 h-6" />,
                demo: "Experience the awakening call"
              },
              {
                title: "Compound Learning",
                description: "Every decision improves future decisions. Anti-fragile AI that profits from volatility.",
                icon: <TrendingUp className="w-6 h-6" />,
                demo: "See continuous improvement"
              },
              {
                title: "Autonomous Battalions",
                description: "Deploy AI armies that execute your intent. No prompting. No babysitting.",
                icon: <Users className="w-6 h-6" />,
                demo: "Command your first battalion"
              },
              {
                title: "Infinite Context Memory",
                description: "Architecture that transcends token limits. Perfect recall across all interactions.",
                icon: <Database className="w-6 h-6" />,
                demo: "Test unlimited memory"
              },
              {
                title: "Real-Time Evolution",
                description: "Watch your AI evolve. Visual neural core shows intelligence growing in real-time.",
                icon: <Sparkles className="w-6 h-6" />,
                demo: "Witness consciousness evolution"
              }
            ].map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative ${revealedCapabilities > idx ? 'opacity-100' : 'opacity-50'}`}
              >
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-cyan-600/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="text-cyan-400 mt-1">{capability.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                      <p className="text-gray-400 mb-3">{capability.description}</p>
                      <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                        {capability.demo} →
                      </button>
                    </div>
                  </div>
                </div>
                {revealedCapabilities > idx && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -right-2 -top-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                  >
                    <Check className="w-5 h-5 text-white" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-950/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              SOVREN AI Access Tiers
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Choose your sovereignty level. Scale as you dominate.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-lg ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-16 h-8 bg-gray-800 rounded-full p-1 transition-colors"
              >
                <motion.div
                  className="w-6 h-6 bg-green-500 rounded-full"
                  animate={{ x: billingPeriod === 'monthly' ? 0 : 32 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </button>
              <span className={`text-lg ${billingPeriod === 'yearly' ? 'text-white' : 'text-gray-500'}`}>
                Yearly
                <span className="text-green-500 text-sm ml-2">(Save 10%)</span>
              </span>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Popular Badge */}
                {tier.badge && (
                  <div className="absolute -top-4 right-8 z-10">
                    <div className="flex items-center gap-2 px-4 py-2 bg-red-600 rounded-full">
                      <Zap className="w-4 h-4 text-white" />
                      <span className="text-white font-bold text-sm">{tier.badge}</span>
                    </div>
                  </div>
                )}

                <div className={`h-full p-8 rounded-2xl ${
                  tier.popular 
                    ? 'bg-gradient-to-b from-red-950/20 to-gray-950/50 border-2 border-red-600' 
                    : 'bg-gray-950/50 border border-gray-800'
                }`}>
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.tagline}</p>
                    
                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-black text-white">
                        ${calculatePrice(tier.price)}
                      </span>
                      <span className="text-gray-400">
                        /{billingPeriod === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    
                    {billingPeriod === 'yearly' && (
                      <p className="text-sm text-gray-500">
                        ${tier.price}/month billed annually
                      </p>
                    )}

                    <p className="text-sm text-gray-500 mt-2">{tier.description}</p>
                    
                    {/* Availability Warning */}
                    {tier.availability && (
                      <div className="mt-4 p-3 bg-red-900/20 border border-red-600/30 rounded-lg">
                        <p className="text-red-500 font-mono text-sm flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" />
                          Only {tier.availability} seats remaining
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`mt-0.5 ${feature.included ? 'text-green-500' : 'text-gray-600'}`}>
                          <Check className="w-5 h-5" />
                        </div>
                        <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link href={tier.ctaLink}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 font-bold rounded-lg flex items-center justify-center gap-2 ${
                        tier.popular
                          ? 'bg-red-600 hover:bg-red-700 text-white'
                          : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                      }`}
                    >
                      {tier.cta}
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-8 p-6 bg-gray-950/50 border border-gray-800 rounded-2xl">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-gray-400">Secure Infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-500" />
                <span className="text-gray-400">24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-500" />
                <span className="text-gray-400">Founder Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              The Sovereignty Revolution
            </h2>
            <p className="text-xl text-gray-400">
              Choose ownership over rental. Choose sovereignty over dependency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-5xl font-black text-cyan-400">$0</p>
              <p className="text-gray-400 mt-2">Usage Fees</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <p className="text-5xl font-black text-purple-400">100%</p>
              <p className="text-gray-400 mt-2">Data Ownership</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <p className="text-5xl font-black text-green-400">24/7</p>
              <p className="text-gray-400 mt-2">Your Control</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <p className="text-5xl font-black text-orange-400">∞</p>
              <p className="text-sm text-gray-400 mt-2">Scale Potential</p>
            </motion.div>
          </div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-800/30 rounded-xl p-8 text-center"
          >
            <p className="text-2xl text-white mb-4">
              Stop paying monthly for permission to use AI. Start owning intelligence that compounds daily. 
              Your AI gets smarter while your competitors' bills get bigger.
            </p>
            <p className="text-gray-400">
              — The promise of sovereignty
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-t from-purple-950/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                The Choice Is Binary
              </span>
            </h2>
            
            <p className="text-2xl text-gray-300 mb-4">
              Continue renting. Continue bleeding. Continue falling behind.
            </p>
            
            <p className="text-3xl font-bold text-white mb-8">OR</p>
            
            <p className="text-2xl text-gray-300 mb-12">
              Claim sovereignty. Own your AI. Dominate your market.
            </p>

            <Link href="/services/sovren-ai/sovereign-qualification">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-bold text-2xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                QUALIFY FOR SOVEREIGNTY NOW
                <ChevronRight className="inline ml-3 w-7 h-7" />
              </motion.button>
            </Link>
            
            <p className="text-gray-500 mt-8">
              Real sovereignty requires real qualification
            </p>
          </motion.div>
        </div>
      </section>
    </ConsciousPage>
  );
}
