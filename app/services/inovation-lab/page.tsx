'use client';

import Link from 'next/link';
import { ConsciousPage } from '../../consciousness-engine';
import { Beaker, Sparkles, Rocket, Users, ArrowRight } from 'lucide-react';

export default function InnovationLabPage() {
  return (
    <ConsciousPage title="Innovation Lab">
      <div className="space-y-12">
        <div className="text-center mb-12">
          <Beaker className="w-20 h-20 text-green-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-4">
            R&D Partnership Program
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Co-create the future. Our innovation lab puts you years ahead of the competition.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-xl p-12 border border-green-500/30 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Partnership Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Sparkles className="w-10 h-10 text-green-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Early Access</h3>
              <p className="text-gray-300">
                Get tomorrow's AI capabilities today. 6-12 months ahead of market.
              </p>
            </div>
            <div>
              <Rocket className="w-10 h-10 text-green-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Co-Development</h3>
              <p className="text-gray-300">
                Shape AI solutions specifically for your industry and use cases.
              </p>
            </div>
            <div>
              <Users className="w-10 h-10 text-green-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Exclusive Network</h3>
              <p className="text-gray-300">
                Join visionary leaders pioneering the future of AI sovereignty.
              </p>
            </div>
            <div>
              <Beaker className="w-10 h-10 text-green-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Research Credits</h3>
              <p className="text-gray-300">
                Direct access to our research team and computational resources.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl text-gray-300 mb-8">
            Limited to <span className="text-green-400 font-bold">12 partners</span> globally.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all">
            Apply for Partnership
            <ArrowRight className="inline ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </ConsciousPage>
  );
}