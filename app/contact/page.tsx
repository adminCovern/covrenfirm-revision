'use client';

import { ConsciousPage } from '../consciousness-engine';

export default function ContactPage() {
  return (
    <ConsciousPage title="Begin Your Evolution">
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Ready to Claim Sovereignty?
          </h2>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/30">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none text-white" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none text-white" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                <input type="text" className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none text-white" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none text-white" />
              </div>
              
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                REQUEST SOVEREIGNTY DEMO
              </button>
            </form>
          </div>
          
          <p className="text-center text-gray-400 mt-8">
            Or call directly: <a href="tel:(888) 326-4568" className="text-cyan-400 hover:text-cyan-300">(888) 326-4568</a>
          </p>
        </div>
      </div>
    </ConsciousPage>
  );
}