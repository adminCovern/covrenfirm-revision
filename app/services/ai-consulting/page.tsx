'use client';

import Link from 'next/link';
import { ConsciousPage } from '../../consciousness-engine';

export default function AIConsultingPage() {
  return (
    <ConsciousPage title="AI Consulting">
      <div className="space-y-12">
        <div className="text-center mb-12">
          <Zap className="w-20 h-20 text-purple-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            Strategic AI Implementation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with AI strategies that evolve. We don't just consult—we architect consciousness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
            <Brain className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">AI Strategy Development</h3>
            <p className="text-gray-300">
              Custom AI roadmaps that align with your business objectives and accelerate growth exponentially.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
            <Target className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Implementation Excellence</h3>
            <p className="text-gray-300">
              From proof-of-concept to production-ready AI systems that dominate your market.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
            <TrendingUp className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">ROI Optimization</h3>
            <p className="text-gray-300">
              Average 340% ROI in Year 1. Your competitors won't know what hit them.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
            <Zap className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Continuous Evolution</h3>
            <p className="text-gray-300">
              AI that learns, adapts, and evolves with your business. Forever.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all">
            Schedule Strategic Consultation
            <ArrowRight className="inline ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </ConsciousPage>
  );
}
