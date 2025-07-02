'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, Zap, Shield, Lock, Crown, Target, TrendingUp, 
  ChevronRight, Check, AlertTriangle, Clock, Users,
  DollarSign, BarChart3, Cpu, Network, Eye, Sparkles, Database, Volume2
} from 'lucide-react';
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
      cta: "APPLY FOR PROOF+",
      ctaLink: "/services/sovren-ai/sovereign-qualification?tier=proof-plus",
      popular: true,
      availability: 7
    }
  ];

  return (
    <ConsciousPage title="Sovereign Qualification">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sovereign Qualification
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Complete your qualification for Sovren AI access
            </p>
          </div>
          
          {/* Pricing tiers would be rendered here */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={tier.name} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-slate-300 mb-4">{tier.tagline}</p>
                <div className="text-3xl font-bold text-white mb-6">
                  ${billingPeriod === 'yearly' ? tier.yearlyPrice : tier.price}
                  <span className="text-lg text-slate-400">/{billingPeriod === 'yearly' ? 'year' : 'month'}</span>
                </div>
                <Link 
                  href={tier.ctaLink}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block text-center"
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ConsciousPage>
  );
}