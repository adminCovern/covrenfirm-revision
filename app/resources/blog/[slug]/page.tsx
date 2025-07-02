'use client';

import Link from 'next/link';
import { ConsciousPage } from '../../../consciousness-engine';
import { ArrowLeft, Calendar, Clock, Share2, BookOpen } from 'lucide-react';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In production, fetch post content based on slug
  // For now, showing a template
  
  return (
    <ConsciousPage title="Blog Post">
      <article className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Insights
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <span className="text-purple-400">AI Strategy</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              January 15, 2025
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The AI Sovereignty Manifesto: Why SMBs Must Own Their Intelligence
          </h1>
          
          <p className="text-xl text-gray-300">
            Every month, businesses pay thousands in AI subscriptions, funding their own obsolescence. 
            It's time to break free from digital feudalism and claim your sovereignty.
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-300 leading-relaxed mb-6">
            The AI industry has a dirty secret: they don't want you to own anything. They want you 
            dependent, paying monthly tributes for the privilege of using intelligence that should be yours.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Dependency Trap</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Consider this: every API call you make, every prompt you send, every piece of data you process 
            through their systems—it all makes them smarter while keeping you dependent. You're not just 
            paying for a service; you're funding your own competitive disadvantage.
          </p>

          {/* Add more content sections as needed */}
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <p className="text-gray-400">Found this valuable? Share it:</p>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Share2 className="w-4 h-4" />
              Share Article
            </button>
          </div>
        </div>

        {/* Next Article */}
        <div className="mt-12 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
          <p className="text-sm text-gray-400 mb-2">Next Article</p>
          <h3 className="text-xl font-bold text-white hover:text-purple-400 transition-colors">
            <Link href="/blog/compound-intelligence-explained">
              Compound Intelligence: The Unfair Advantage Your Competitors Fear
            </Link>
          </h3>
        </div>
      </article>
    </ConsciousPage>
  );
}