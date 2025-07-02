'use client';

import Link from 'next/link';
import { ConsciousPage } from '../../consciousness-engine';
import { Code, Cpu, Zap, Shield, ArrowRight } from 'lucide-react';

export default function CustomAIDevelopmentPage() {
  return (
    <ConsciousPage title="Custom AI Development">
      <div className="space-y-12">
        <div className="text-center mb-12">
          <Code className="w-20 h-20 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent mb-4">
            Bespoke AI Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Custom AI that gives you an unfair competitive advantage. Built for sovereignty, not dependency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
            <Cpu className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Custom Models</h3>
            <p className="text-gray-300">
              AI models trained on your data, for your specific use cases. Own them forever.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
            <Zap className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Edge Deployment</h3>
            <p className="text-gray-300">
              On-premise, cloud, or hybrid. Your AI, your infrastructure, your rules.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
            <Shield className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Complete Ownership</h3>
            <p className="text-gray-300">
              100% ownership of code, models, and IP. No dependencies, no vulnerabilities.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
            <Code className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Continuous Evolution</h3>
            <p className="text-gray-300">
              AI that learns from your business and evolves with your needs.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all">
            Build Your Custom AI
            <ArrowRight className="inline ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </ConsciousPage>
  );
}