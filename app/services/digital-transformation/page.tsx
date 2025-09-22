'use client';

import Link from 'next/link';
import { ConsciousPage } from '../../consciousness-engine';


export default function DigitalTransformationPage() {
  return (
    <ConsciousPage title="Digital Transformation">
      <div className="space-y-12">
        <div className="text-center mb-12">
          <Shield className="w-20 h-20 text-pink-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-red-600 bg-clip-text text-transparent mb-4">
            Business Evolution
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just digitize. Evolve. We engineer digital ecosystems that think, learn, and dominate.
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-900/20 to-red-900/20 backdrop-blur-sm rounded-xl p-12 border border-pink-500/30 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">The Evolution Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-400">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Assess</h3>
              <p className="text-gray-300">Complete analysis of your current digital state</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-400">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Architect</h3>
              <p className="text-gray-300">Design your sovereign digital ecosystem</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-400">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dominate</h3>
              <p className="text-gray-300">Deploy and scale beyond competition</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-pink-500/30">
            <Rocket className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Process Automation</h3>
            <p className="text-gray-300">
              Autonomous workflows that eliminate inefficiency and accelerate growth.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-pink-500/30">
            <Globe className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Digital Ecosystems</h3>
            <p className="text-gray-300">
              Interconnected systems that think, learn, and evolve together.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-pink-500/25 transition-all">
            Begin Your Evolution
            <ArrowRight className="inline ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </ConsciousPage>
  );
}
