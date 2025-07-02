'use client';

import Link from 'next/link';
import { ConsciousPage } from '../../consciousness-engine';
import { BookOpen, Calendar, Clock, ArrowRight, TrendingUp, Brain, Zap, Shield } from 'lucide-react';

export default function BlogPage() {
  // In production, this would come from a CMS or database
  const blogPosts = [
    {
      id: 'ai-sovereignty-manifesto',
      title: 'The AI Sovereignty Manifesto: Why SMBs Must Own Their Intelligence',
      excerpt: 'Every month, businesses pay thousands in AI subscriptions, funding their own obsolescence. Discover why ownership beats access every time.',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'AI Strategy',
      icon: <Shield className="w-6 h-6" />,
      featured: true
    },
    {
      id: 'compound-intelligence-explained',
      title: 'Compound Intelligence: The Unfair Advantage Your Competitors Fear',
      excerpt: 'Static AI is expensive stupidity. Learn how compound intelligence creates exponential advantages that grow daily.',
      date: 'January 10, 2025',
      readTime: '6 min read',
      category: 'Technology',
      icon: <Brain className="w-6 h-6" />
    },
    {
      id: 'smb-ai-revolution',
      title: 'David vs Goliath: How SMBs Are Using AI to Topple Industry Giants',
      excerpt: 'Real stories of small businesses using sovereign AI to compete with—and beat—enterprises 100x their size.',
      date: 'January 5, 2025',
      readTime: '10 min read',
      category: 'Case Studies',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: 'true-cost-ai-dependency',
      title: 'The Hidden Cost of AI Dependency: What Vendors Don\'t Want You to Know',
      excerpt: 'Beyond monthly fees lies a darker truth: you\'re training their models with your innovations. Here\'s the real cost.',
      date: 'December 28, 2024',
      readTime: '7 min read',
      category: 'Business Strategy',
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 'ai-implementation-guide',
      title: 'The SMB Owner\'s Guide to AI Implementation (Without the BS)',
      excerpt: 'Cut through the hype. A practical, no-nonsense guide to implementing AI that actually drives revenue.',
      date: 'December 20, 2024',
      readTime: '12 min read',
      category: 'Guides',
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  const categories = ['All', 'AI Strategy', 'Technology', 'Case Studies', 'Business Strategy', 'Guides'];

  return (
    <ConsciousPage title="Insights & Intelligence">
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <BookOpen className="w-20 h-20 text-purple-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6">
            Intelligence That Matters
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting through AI hype with insights that actually help SMBs win. 
            No fluff. No vendor propaganda. Just truth.
          </p>
        </section>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map(post => (
          <div key={post.id} className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                FEATURED
              </span>
              <span className="text-xs text-gray-400">{post.category}</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 hover:text-purple-400 transition-colors">
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="text-lg text-gray-300 mb-6">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
              <Link 
                href={`/blog/${post.id}`}
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium"
              >
                Read Full Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(category => (
            <button
              key={category}
              className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-full text-sm hover:border-purple-500 hover:text-purple-400 transition-all"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.filter(post => !post.featured).map(post => (
            <article key={post.id} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="text-purple-400 mt-1">{post.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-purple-400">{post.category}</span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-purple-400 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-sm text-purple-400 hover:text-purple-300"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-12 border border-purple-500/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Intelligence That Gives You an Edge
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Weekly insights on using AI to dominate your market. No vendor BS. Just strategies that work.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Get Weekly Intelligence
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">
            No spam. Unsubscribe anytime. We respect your sovereignty.
          </p>
        </section>
      </div>
    </ConsciousPage>
  );
}