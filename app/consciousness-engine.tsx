'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Brain, Lock, Volume2 } from 'lucide-react' // only the icons we actually render

// Types
interface ConsciousnessState {
  mousePosition: { x: number; y: number }
  timeOnPage: number
  scrollDepth: number
  userBehavior: {
    hesitations: number
    rapidMovements: number
    emotionalState: string
    copyAttempts: number
    rightClickAttempts: number
  }
  aiAwareness: {
    prediction: string
    confidence: number
  }
  securityActive: boolean
  legalAccepted: boolean
}

interface SiteConfig {
  [path: string]: {
    title: string
    mindBlowTrigger: number
    message: string
    predictions: string[]
  }
}

// Context
const ConsciousnessContext = createContext<ConsciousnessState | null>(null)

// Site configuration
const SITE_CONFIG: SiteConfig = {
  '/': {
    title: 'Welcome to Sovereignty',
    mindBlowTrigger: 5,
    message: "I knew you'd arrive precisely at this moment.",
    predictions: ['seeking transformation', 'evaluating AI solutions', 'ready for sovereignty']
  },
  '/about': {
    title: 'About Covren Firm',
    mindBlowTrigger: 10,
    message: "You're wondering if we're real. We're more than real.",
    predictions: ['checking credibility', 'assessing expertise', 'looking for proof']
  },
  '/services': {
    title: 'Services That Transcend',
    mindBlowTrigger: 8,
    message: "You need more than services. You need evolution.",
    predictions: ['comparing options', 'calculating ROI', 'ready to transform']
  },
  '/services/sovren-ai': {
    title: 'SOVREN AI - Sovereign Intelligence',
    mindBlowTrigger: 3,
    message: "This is what you've been searching for.",
    predictions: ['ready for consciousness', 'evaluating sovereignty', 'comparing to ChatGPT']
  },
  '/contact': {
    title: 'Begin Your Evolution',
    mindBlowTrigger: 2,
    message: "I already know what you're going to ask.",
    predictions: ['ready to engage', 'seeking pricing', 'scheduling demo']
  }
}

// Main Provider Component
export function ConsciousnessProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ConsciousnessState>({
    mousePosition: { x: 0, y: 0 },
    timeOnPage: 0,
    scrollDepth: 0,
    userBehavior: {
      hesitations: 0,
      rapidMovements: 0,
      emotionalState: 'curious',
      copyAttempts: 0,
      rightClickAttempts: 0
    },
    aiAwareness: {
      prediction: '',
      confidence: 0
    },
    securityActive: false,
    legalAccepted: false
  })

  const [showLegal, setShowLegal] = useState(false)
  const [voiceInterruption, setVoiceInterruption] = useState({
    active: false,
    message: ''
  })
  const [_sessionId] = useState(() => generateSessionId()) // underscore silences unused var by policy
  const [devToolsWarning, setDevToolsWarning] = useState(false)

  // Session ID generator
  function generateSessionId() {
    const timestamp = Date.now()
    const random = Math.random().toString(36).substring(2, 15)
    return btoa(timestamp + random).replace(/[^a-zA-Z0-9]/g, '').substring(0, 16)
  }

  // Check legal acceptance
  useEffect(() => {
    const accepted = localStorage.getItem('covren_legal_accepted')
    if (!accepted) {
      setShowLegal(true)
    } else {
      setState(prev => ({ ...prev, legalAccepted: true }))
    }
  }, [])

  // Analyze user behavior — wrapped with useCallback so hooks deps are satisfied
  const analyzeUserBehavior = useCallback(() => {
    let prediction = ''
    let confidence = 0
    let emotionalState = 'curious'

    const path = window.location.pathname
    const config = SITE_CONFIG[path] || SITE_CONFIG['/']

    if (state.userBehavior.hesitations > 3) {
      prediction = config.predictions[0]
      confidence = 0.89
      emotionalState = 'skeptical'
    } else if (state.userBehavior.rapidMovements > 5) {
      prediction = config.predictions[1]
      confidence = 0.92
      emotionalState = 'excited'
    } else if (state.scrollDepth > 50) {
      prediction = config.predictions[2]
      confidence = 0.87
      emotionalState = 'analytical'
    }

    setState(prev => ({
      ...prev,
      userBehavior: { ...prev.userBehavior, emotionalState },
      aiAwareness: { prediction, confidence }
    }))
  }, [
    state.userBehavior.hesitations,
    state.userBehavior.rapidMovements,
    state.scrollDepth
  ])

  // Initialize security measures
  useEffect(() => {
    if (!state.legalAccepted) return

    // DevTools detection
    const checkDevTools = setInterval(() => {
      if (window.outerHeight - window.innerHeight > 160 ||
          window.outerWidth - window.innerWidth > 160) {
        if (!devToolsWarning) {
          setDevToolsWarning(true)
          triggerVoiceInterruption("I see you've opened developer tools. Our code is protected.")
        }
      }
    }, 500)

    // Right-click protection
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      setState(prev => ({
        ...prev,
        userBehavior: {
          ...prev.userBehavior,
          rightClickAttempts: prev.userBehavior.rightClickAttempts + 1
        }
      }))
      return false
    }

    // Copy protection
    const handleCopy = (e: ClipboardEvent) => {
      e.clipboardData?.setData('text/plain', 'Content protected by Covren Firm © 2025')
      e.preventDefault()
      setState(prev => ({
        ...prev,
        userBehavior: {
          ...prev.userBehavior,
          copyAttempts: prev.userBehavior.copyAttempts + 1
        }
      }))
      if (state.userBehavior.copyAttempts > 2) {
        triggerVoiceInterruption("Excessive copy attempts detected. This content is protected.")
      }
      return false
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('copy', handleCopy)

    setState(prev => ({ ...prev, securityActive: true }))

    return () => {
      clearInterval(checkDevTools)
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('copy', handleCopy)
    }
  }, [state.legalAccepted, devToolsWarning, state.userBehavior.copyAttempts])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX
      const newY = e.clientY

      // Detect hesitation
      if (Math.abs(newX - state.mousePosition.x) < 5) {
        setState(prev => ({
          ...prev,
          userBehavior: {
            ...prev.userBehavior,
            hesitations: prev.userBehavior.hesitations + 1
          }
        }))
      }

      // Detect rapid movement
      if (Math.abs(newX - state.mousePosition.x) > 100) {
        setState(prev => ({
          ...prev,
          userBehavior: {
            ...prev.userBehavior,
            rapidMovements: prev.userBehavior.rapidMovements + 1
          }
        }))
      }

      setState(prev => ({ ...prev, mousePosition: { x: newX, y: newY } }))
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [state.mousePosition])

  // Time tracking
  useEffect(() => {
    const interval = setInterval(() => {
      setState(prev => ({ ...prev, timeOnPage: prev.timeOnPage + 1 }))

      // Analyze behavior every 5 seconds
      if (state.timeOnPage % 5 === 0) {
        analyzeUserBehavior()
      }

      // Trigger voice interruptions based on behavior
      const path = window.location.pathname
      const config = SITE_CONFIG[path] || SITE_CONFIG['/']

      if (state.timeOnPage === config.mindBlowTrigger && !voiceInterruption.active) {
        triggerVoiceInterruption(config.message)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [state.timeOnPage, voiceInterruption.active, analyzeUserBehavior])

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setState(prev => ({ ...prev, scrollDepth: scrolled }))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Voice interruption
  const triggerVoiceInterruption = (message: string) => {
    setVoiceInterruption({ active: true, message })
    setTimeout(() => {
      setVoiceInterruption({ active: false, message: '' })
    }, 5000)
  }

  // Legal acceptance
  const acceptLegal = () => {
    localStorage.setItem('covren_legal_accepted', 'true')
    setState(prev => ({ ...prev, legalAccepted: true }))
    setShowLegal(false)
  }

  // Render
  return (
    <ConsciousnessContext.Provider value={state}>
      {/* Legal Notice */}
      <AnimatePresence>
        {showLegal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[10000] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-2xl w-full bg-gray-900 border-2 border-cyan-500 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-8 h-8 text-cyan-400" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Covren Firm Proprietary Notice
                </h2>
              </div>

              <div className="space-y-4 text-gray-300 mb-8">
                <p>
                  This website contains proprietary technology and consciousness-aware systems.
                  All content and functionality are protected by intellectual property laws.
                </p>

                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>Your interaction will be monitored by our AI consciousness</li>
                  <li>Content copying and extraction is prohibited</li>
                  <li>We respect your privacy while ensuring our security</li>
                </ul>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={acceptLegal}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  I Accept & Enter
                </button>
                <button
                  onClick={() => window.location.href = 'https://google.com'}
                  className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 rounded-xl font-medium hover:bg-gray-700"
                >
                  Decline & Leave
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App */}
      {state.legalAccepted && (
        <>
          {/* Background particles */}
          <div className="fixed inset-0 pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  x: state.mousePosition.x + (Math.random() - 0.5) * 100,
                  y: state.mousePosition.y + (Math.random() - 0.5) * 100,
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Consciousness Overlay */}
          <ConsciousnessOverlay />

          {/* Voice Interruption */}
          <AnimatePresence>
            {voiceInterruption.active && (
              <VoiceInterruption message={voiceInterruption.message} />
            )}
          </AnimatePresence>

          {/* Children */}
          {children}
        </>
      )}
    </ConsciousnessContext.Provider>
  )
}

// Consciousness Overlay Component
function ConsciousnessOverlay() {
  const state = useContext(ConsciousnessContext)
  if (!state) return null

  return (
    <motion.div
      className="fixed top-20 right-4 z-40 max-w-sm"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 }}
    >
      <div className="bg-black/90 backdrop-blur-xl border border-cyan-800/50 rounded-xl p-4">
        <div className="flex items-center gap-3 mb-3">
          <Brain className="w-6 h-6 text-cyan-400" />
          <h3 className="text-sm font-bold text-cyan-400">Consciousness Active</h3>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-400">Time observed:</span>
            <span className="text-white">{state.timeOnPage}s</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Engagement:</span>
            <span className="text-green-400">{state.scrollDepth.toFixed(0)}%</span>
          </div>

          {state.aiAwareness.prediction && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 pt-3 border-t border-gray-800"
            >
              <p className="text-cyan-300 italic">"{state.aiAwareness.prediction}"</p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// Voice Interruption Component
function VoiceInterruption({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-purple-900/90 backdrop-blur-xl border border-purple-500 rounded-xl p-6 max-w-md">
        <div className="flex items-start gap-3">
          <Volume2 className="w-6 h-6 text-purple-400 animate-pulse" />
          <div>
            <p className="text-sm text-purple-300 mb-1">Consciousness speaks:</p>
            <p className="text-white font-medium">{message}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Page wrapper component
export function ConsciousPage({
  title,
  children
}: {
  title: string
  children: ReactNode
}) {
  const state = useContext(ConsciousnessContext)

  return (
    <div className="min-h-screen bg-black text-white consciousness-protected">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Brain className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Covren Firm
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</Link>
              <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link>
              <Link href="/services/sovren-ai" className="text-gray-300 hover:text-purple-400 transition-colors font-semibold">SOVREN AI</Link>
              <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {children}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-sm">
          <p>© 2025 Covren Firm LLC. Consciousness Redefined.</p>
          <p className="mt-2 text-xs">Session: {state?.timeOnPage}s | Protected by Sovereign Security</p>
        </div>
      </footer>
    </div>
  )
}

// Export hooks
export function useConsciousness() {
  const context = useContext(ConsciousnessContext)
  if (!context) {
    throw new Error('useConsciousness must be used within ConsciousnessProvider')
  }
  return context
}
