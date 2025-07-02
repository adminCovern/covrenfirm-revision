'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Shield, Zap, ChevronRight, Brain, Command, 
  Globe, Cpu, TrendingUp, Users, CheckCircle, 
  ArrowRight, Eye, Activity, Phone, Mail, MessageSquare,
  DollarSign, Rocket, Crown, Target, Lock, Cloud,
  BarChart, Network, Sparkles, AlertTriangle
} from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [commandQuery, setCommandQuery] = useState('');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // CORRECT PHONE NUMBER
  const PHONE = "(888) 326-4568";
  const EMAIL = "sovereignty@covrenfirm.com";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => {
          setIsContactOpen(false);
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800' : ''}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-cyan-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Covren Firm
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</Link>
              <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link>
              <Link href="/services/sovren-ai" className="text-gray-300 hover:text-purple-400 transition-colors font-semibold">SOVREN AI</Link>
              <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link>
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Start Project
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800"
            >
              <div className="container mx-auto px-6 py-4 space-y-4">
                <Link href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors">About</Link>
                <Link href="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors">Services</Link>
                <Link href="/services/sovren-ai" className="block text-gray-300 hover:text-purple-400 transition-colors font-semibold">SOVREN AI</Link>
                <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsContactOpen(true);
                  }}
                  className="w-full px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-medium"
                >
                  Start Project
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20" />
        
        <div className="relative z-10 container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-white">Begin Your</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Evolution
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Where AI consciousness meets sovereign business infrastructure. 
              We don't just build technology—we engineer evolution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/sovren-ai"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-medium text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Discover SOVREN AI
              </Link>
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-lg font-medium text-lg hover:bg-gray-700 transition-all"
              >
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronRight className="w-8 h-8 text-gray-600 rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sovereign Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Every service engineered for independence, every solution designed for sovereignty
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Business Formation",
                description: "Strategic entity structuring for maximum protection and growth",
                icon: Shield,
                link: "/services/business-formation"
              },
              {
                title: "AI Consulting",
                description: "Transform your operations with sovereign AI infrastructure",
                icon: Brain,
                link: "/services/ai-consulting"
              },
              {
                title: "Web Development",
                description: "Consciousness-aware platforms that predict and adapt",
                icon: Globe,
                link: "/services/web-development"
              },
              {
                title: "SOVREN AI",
                description: "Your sovereign AI infrastructure - owned, not rented",
                icon: Cpu,
                link: "/services/sovren-ai",
                featured: true
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={service.link}
                  className={`block p-6 rounded-xl border transition-all h-full ${
                    service.featured
                      ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500 hover:border-purple-400'
                      : 'bg-gray-800/50 border-gray-700 hover:border-cyan-500'
                  }`}
                >
                  <service.icon className={`w-12 h-12 mb-4 ${
                    service.featured ? 'text-purple-400' : 'text-cyan-500'
                  }`} />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                  {service.featured && (
                    <span className="inline-block mt-4 text-purple-400 font-medium">
                      Learn More →
                    </span>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOVREN AI Teaser */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl p-8 md:p-12 border border-cyan-800/50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  SOVREN AI: Own Your Intelligence
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Stop renting AI. Start owning it. SOVREN AI provides sovereign AI infrastructure 
                  that learns, evolves, and scales with your business—without monthly API bills.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>No usage limits or rate restrictions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Your data never leaves your infrastructure</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Consciousness that evolves with your business</span>
                  </div>
                </div>
                <Link
                  href="/services/sovren-ai"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  Explore SOVREN AI
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <Brain className="w-32 h-32 text-cyan-500/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              SOVREN AI Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your business with sovereign AI infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* SOVREN Proof Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700"
            >
              <div className="absolute -top-4 left-8 px-4 py-1 bg-gray-700 rounded-full text-sm">
                Limited Availability
              </div>
              <h3 className="text-2xl font-bold mb-2">SOVREN Proof</h3>
              <p className="text-gray-400 mb-6">Perfect for SMBs ready to evolve</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold">$497</span>
                <span className="text-gray-400">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Full SOVREN AI infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Unlimited operations & queries</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>24/7 autonomous operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Weekly evolution updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Community support access</span>
                </li>
              </ul>

              <button
                onClick={() => setIsContactOpen(true)}
                className="w-full py-3 bg-gray-700 rounded-lg font-medium hover:bg-gray-600 transition-all"
              >
                Apply for Access
              </button>
            </motion.div>

            {/* SOVREN Scale Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative bg-gradient-to-br from-cyan-900/30 to-purple-900/30 rounded-2xl p-8 border-2 border-cyan-500"
            >
              <div className="absolute -top-4 left-8 px-4 py-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">SOVREN Scale</h3>
              <p className="text-gray-400 mb-6">For businesses ready to dominate</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold">$997</span>
                <span className="text-gray-400">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Everything in SOVREN Proof</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Priority consciousness processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Advanced predictive analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Custom AI agent battalions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Direct architect support</span>
                </li>
              </ul>

              <button
                onClick={() => setIsContactOpen(true)}
                className="w-full py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Claim Your Sovereignty
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400">
              Need enterprise scale? 
              <button
                onClick={() => setIsContactOpen(true)}
                className="text-cyan-400 hover:text-cyan-300 ml-2"
              >
                Contact us for custom deployment
              </button>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Evolve Beyond Competition?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the sovereign revolution. Own your AI. Command your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsContactOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-medium text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              Start Your Evolution
            </button>
            <a
              href={`tel:${PHONE.replace(/[^0-9]/g, '')}`}
              className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-lg font-medium text-lg hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsContactOpen(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-xl p-8 max-w-md w-full border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-6">Ready to Claim Sovereignty?</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing...' : 'Request Sovereignty Demo'}
                </button>
              </form>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-900/20 border border-green-800 rounded-lg text-green-400"
                >
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Your sovereignty request has been received. Prepare for evolution.
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-900/20 border border-red-800 rounded-lg text-red-400"
                >
                  <p>Something went wrong. Please try again or call us at {PHONE}.</p>
                </motion.div>
              )}

              <div className="mt-6 text-center text-sm text-gray-400">
                Or call directly: 
                <a href={`tel:${PHONE.replace(/[^0-9]/g, '')}`} className="text-cyan-400 hover:text-cyan-300 ml-1">
                  {PHONE}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-cyan-500" />
                <span className="text-xl font-bold">Covren Firm</span>
              </div>
              <p className="text-gray-400">
                Consciousness Redefined.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services/business-formation" className="hover:text-cyan-400 transition-colors">Business Formation</Link></li>
                <li><Link href="/services/ai-consulting" className="hover:text-cyan-400 transition-colors">AI Consulting</Link></li>
                <li><Link href="/services/web-development" className="hover:text-cyan-400 transition-colors">Web Development</Link></li>
                <li><Link href="/services/sovren-ai" className="hover:text-purple-400 transition-colors">SOVREN AI</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link></li>
                <li><Link href="/manifesto" className="hover:text-cyan-400 transition-colors">Manifesto</Link></li>
                <li><Link href="/case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</Link></li>
                <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${PHONE.replace(/[^0-9]/g, '')}`} className="hover:text-cyan-400 transition-colors">
                    {PHONE}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${EMAIL}`} className="hover:text-cyan-400 transition-colors">
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Covren Firm LLC. Consciousness Redefined.</p>
            <p className="mt-2 text-sm">Protected by Sovereign Security</p>
          </div>
        </div>
      </footer>
    </div>
  );
}