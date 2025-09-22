'use client';

import { ConsciousPage } from '../consciousness-engine';

export default function UseCasesPage() {
  return (
    <ConsciousPage title="AI Sovereignty in Action">
      <div className="space-y-16">
        {/* Introduction */}
        <section className="text-center mb-12">
          <Brain className="w-20 h-20 text-cyan-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6">
            What Sovereign AI Makes Possible
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore how SOVREN AI's capabilities translate into real business advantages. 
            These aren't promises - they're the natural outcomes of owning your AI infrastructure.
          </p>
        </section>

        {/* Honest Disclaimer */}
        <div className="bg-cyan-900/20 border border-cyan-600/50 rounded-xl p-6 max-w-3xl mx-auto">
          <p className="text-cyan-300">
            <strong>Full Transparency:</strong> SOVREN AI is a powerful platform, but success depends on proper implementation, 
            your specific use case, and commitment to the process. We're showing what's technically possible - 
            your results will vary based on your unique situation.
          </p>
        </div>

        {/* Use Case Scenarios */}
        <section className="space-y-12">
          {/* Scenario 1 */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/30">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">For E-commerce & Retail</h3>
              <p className="text-gray-400">Common challenges and how sovereign AI addresses them</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-3">The Reality Most Face</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Customer service backlog during peak seasons</li>
                  <li>• Inventory predictions based on gut feeling</li>
                  <li>• Generic marketing that treats all customers the same</li>
                  <li>• Competing against giants with unlimited resources</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-white mb-3">What Becomes Possible</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• AI handles routine inquiries 24/7 in your brand voice</li>
                  <li>• Predictive analytics based on YOUR data patterns</li>
                  <li>• Personalization that learns from each interaction</li>
                  <li>• Compound intelligence that improves daily</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-black/30 rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-4">Key Capability Highlights</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Zap className="w-8 h-8 text-cyan-400 mb-2 mx-auto" />
                  <p className="text-sm text-gray-300">Unlimited processing with no per-query costs</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-purple-400 mb-2 mx-auto" />
                  <p className="text-sm text-gray-300">Your data stays yours - forever</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-green-400 mb-2 mx-auto" />
                  <p className="text-sm text-gray-300">AI that evolves with your business</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scenario 2 */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">For Professional Services</h3>
              <p className="text-gray-400">Multiply expertise without multiplying headcount</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-3">The Bottleneck Problem</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Senior staff drowning in routine tasks</li>
                  <li>• Knowledge walks out the door with employees</li>
                  <li>• Can't scale without expensive new hires</li>
                  <li>• Inconsistent service delivery</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-white mb-3">The Sovereign Solution</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Capture and scale your best practices</li>
                  <li>• AI learns from your methodology</li>
                  <li>• Junior staff perform at senior levels</li>
                  <li>• Consistent excellence across all clients</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-6">
              <p className="text-purple-300 italic">
                "The difference isn't in the AI's capabilities - it's in who owns those capabilities. 
                When you own the infrastructure, every client interaction makes your entire firm smarter."
              </p>
            </div>
          </div>

          {/* Scenario 3 */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/30">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">For B2B Operations</h3>
              <p className="text-gray-400">Transform how you engage with business clients</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-3">Current State for Most</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Quote generation takes days</li>
                  <li>• Sales teams chase dead leads</li>
                  <li>• No real-time visibility into pipeline</li>
                  <li>• Reactive instead of predictive</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-white mb-3">The Sovereignty Advantage</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Instant, accurate quote generation</li>
                  <li>• AI qualifies and prioritizes leads</li>
                  <li>• Real-time intelligence on every deal</li>
                  <li>• Predictive insights on client needs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reality Check Section */}
        <section className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl p-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Let's Be Real About AI</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-300">
            <p>
              <strong className="text-white">SOVREN AI isn't magic.</strong> It's infrastructure. 
              Just like owning your servers instead of renting cloud space, owning your AI means 
              you control the costs, the data, and the evolution.
            </p>
            <p>
              <strong className="text-white">Success requires commitment.</strong> You'll need to 
              train the system on your processes, feed it your data, and refine its responses. 
              But unlike subscription AI, every hour invested compounds forever.
            </p>
            <p>
              <strong className="text-white">ROI varies by use case.</strong> A business automating 
              100 customer service calls daily will see different returns than one using AI for 
              strategic analysis. Your value comes from your specific application.
            </p>
          </div>
        </section>

        {/* Core Capabilities */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What SOVREN AI Actually Does</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-cyan-500/30">
              <Brain className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Compound Learning</h3>
              <p className="text-gray-300">
                Every interaction improves the system. Unlike API-based AI that resets with each call, 
                SOVREN remembers and evolves.
              </p>
            </div>
            
            <div className="bg-gray-900/50 rounded-lg p-6 border border-purple-500/30">
              <Target className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Multi-Model Intelligence</h3>
              <p className="text-gray-300">
                Automatically routes tasks to the optimal AI model. Complex reasoning, speed tasks, 
                and broad knowledge - all managed intelligently.
              </p>
            </div>
            
            <div className="bg-gray-900/50 rounded-lg p-6 border border-green-500/30">
              <Shield className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">True Data Sovereignty</h3>
              <p className="text-gray-300">
                Your data never leaves your infrastructure. No training someone else's models. 
                No competitive intelligence leakage.
              </p>
            </div>
          </div>
        </section>

        {/* Honest CTA */}
        <section className="text-center">
          <p className="text-2xl text-gray-300 mb-8">
            Want to explore if sovereign AI fits your specific needs?
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Let's have an honest conversation about your challenges and whether SOVREN AI is the right solution.
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
            Schedule a Reality Check Call
            <ArrowRight className="inline ml-2 w-5 h-5" />
          </a>
        </section>
      </div>
    </ConsciousPage>
  );
}
