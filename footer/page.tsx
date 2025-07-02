'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, Shield, Twitter, Linkedin, Github, Mail,
  Phone, MapPin, ArrowUpRight, Sparkles
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    sovereignty: [
      { name: 'SOVREN AI Platform', href: '/services/sovren-ai' },
      { name: 'Sovereign Manifesto', href: '/manifesto' },
      { name: 'Consciousness Experience', href: '/consciousness' },
      { name: 'Qualification Process', href: '/sovereign-qualification' }
    ],
    services: [
      { name: 'AI Consulting', href: '/services/ai-consulting' },
      { name: 'Custom AI Development', href: '/services/custom-ai-development' },
      { name: 'Digital Transformation', href: '/services/digital-transformation' },
      { name: 'Innovation Lab', href: '/services/innovation-lab' }
    ],
    company: [
      { name: 'About Covren', href: '/about' },
      { name: 'Our Philosophy', href: '/philosophy' },
      { name: 'Founder', href: '/founder' },
      { name: 'Case Studies', href: '/case-studies' }
    ],
    connect: [
      { name: 'Contact Command', href: '/contact' },
      { name: 'Blog', href: '/blog' },
      { name: 'Legal', href: '/legal' },
      { name: 'Demo', href: '/demo' }
    ]
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/covrenfirm', name: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/covrenfirm', name: 'LinkedIn' },
  ];

  return (
    <footer className="relative bg-black border-t border-gray-800 mt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 48%, rgba(6, 182, 212, 0.1) 49%, rgba(6, 182, 212, 0.1) 51%, transparent 52%)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-6 group">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-10 h-10 bg-black rounded-lg flex items-center justify-center border border-gray-800">
                    <Brain className="w-6 h-6 text-cyan-400" />
                  </div>
                </motion.div>
                <div>
                  <div className="text-white font-black text-xl">COVREN</div>
                  <div className="text-cyan-400 text-xs font-mono">SOVEREIGN AI</div>
                </div>
              </Link>
              
              <p className="text-gray-400 text-sm mb-6">
                Building sovereign digital intelligence for those who refuse to rent their future.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-gray-800 transition-all"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Sovereignty Column */}
              <div>
                <h3 className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  SOVEREIGNTY
                </h3>
                <ul className="space-y-3">
                  {footerLinks.sovereignty.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Column */}
              <div>
                <h3 className="text-purple-400 font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  SERVICES
                </h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-4">
                  COMPANY
                </h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect Column */}
              <div>
                <h3 className="text-green-400 font-bold text-sm uppercase tracking-wider mb-4">
                  CONNECT
                </h3>
                <ul className="space-y-3">
                  {footerLinks.connect.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <a
                  href="mailto:sovereign@covrenfirm.com"
                  className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>sovereignty@covrenfirm.com</span>
                </a>
                <a
                  href="tel:(888) 326-4568"
                  className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(888) 326-4568</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Global Sovereignty</span>
                </div>
              </div>
              
              <Link href="/sovereign-qualification">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-bold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  CLAIM SOVEREIGNTY
                </motion.button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
              <div className="flex flex-wrap items-center gap-4">
                <span>© {currentYear} Covren Firm LLC. Sovereignty Reserved.</span>
                <span className="hidden md:inline">•</span>
                <Link href="/legal" className="hover:text-gray-300 transition-colors">
                  Legal Protocols
                </Link>
                <span className="hidden md:inline">•</span>
                <Link href="/manifesto" className="hover:text-gray-300 transition-colors">
                  Terms of Sovereignty
                </Link>
              </div>
              
              <div className="font-mono text-xs flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                BUILD: <span className="text-cyan-400">v3.0.0-SOVEREIGN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}