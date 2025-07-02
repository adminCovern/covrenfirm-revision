'use client';

import { useState } from 'react';
import { ConsciousPage } from '../consciousness-engine';
import { Shield, Lock, FileText, Eye, Cookie, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function LegalPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      id: 'terms',
      title: 'Terms of Service',
      icon: <FileText className="w-6 h-6" />,
      updated: 'Last updated: January 1, 2025',
      content: (
        <div className="space-y-4 text-gray-300">
          <h4 className="text-lg font-semibold text-white">1. Acceptance of Terms</h4>
          <p>
            By accessing and using Covren Firm LLC's services, including SOVREN AI and related technologies, you agree to these terms. 
            If you're using our services on behalf of a business, you confirm you have authority to bind that business to these terms.
          </p>

          <h4 className="text-lg font-semibold text-white">2. Services Description</h4>
          <p>
            Covren Firm provides AI consulting, development, and deployment services. Our SOVREN AI platform offers sovereign AI infrastructure 
            designed for small and medium businesses. Services are provided on a project or subscription basis as outlined in individual agreements.
          </p>

          <h4 className="text-lg font-semibold text-white">3. User Responsibilities</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Provide accurate information during registration and use</li>
            <li>Maintain security of your account credentials</li>
            <li>Use services in compliance with applicable laws</li>
            <li>Not attempt to reverse engineer or compromise our systems</li>
            <li>Respect intellectual property rights</li>
          </ul>

          <h4 className="text-lg font-semibold text-white">4. Payment Terms</h4>
          <p>
            Payment terms are specified in individual service agreements. For subscription services, billing is recurring unless cancelled. 
            All fees are non-refundable except as required by law or as explicitly stated in your service agreement.
          </p>

          <h4 className="text-lg font-semibold text-white">5. Intellectual Property</h4>
          <p>
            Custom AI solutions developed for clients become client property upon full payment. Core SOVREN AI technology, 
            frameworks, and methodologies remain property of Covren Firm LLC. Clients grant us limited rights to use anonymized 
            performance metrics for service improvement.
          </p>

          <h4 className="text-lg font-semibold text-white">6. Limitation of Liability</h4>
          <p>
            To the maximum extent permitted by law, Covren Firm's liability is limited to the fees paid for the specific service 
            giving rise to the claim. We are not liable for indirect, incidental, or consequential damages.
          </p>

          <h4 className="text-lg font-semibold text-white">7. Termination</h4>
          <p>
            Either party may terminate services as specified in the service agreement. Upon termination, clients retain ownership 
            of their custom solutions but lose access to Covren Firm's support and update services.
          </p>
        </div>
      )
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      icon: <Eye className="w-6 h-6" />,
      updated: 'Last updated: January 1, 2025',
      content: (
        <div className="space-y-4 text-gray-300">
          <h4 className="text-lg font-semibold text-white">1. Information We Collect</h4>
          <p>We collect information you provide directly:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Contact information (name, email, phone, company)</li>
            <li>Business information necessary for service delivery</li>
            <li>Payment information (processed securely via third-party providers)</li>
            <li>Communications with our team</li>
          </ul>

          <h4 className="text-lg font-semibold text-white">2. How We Use Information</h4>
          <p>Your information is used to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Provide and improve our services</li>
            <li>Communicate about your projects and account</li>
            <li>Process payments and prevent fraud</li>
            <li>Comply with legal obligations</li>
            <li>With consent, send relevant business insights and updates</li>
          </ul>

          <h4 className="text-lg font-semibold text-white">3. Data Security</h4>
          <p>
            We implement industry-standard security measures including encryption, access controls, and regular security audits. 
            Your AI models and business data are isolated and protected with enterprise-grade security protocols.
          </p>

          <h4 className="text-lg font-semibold text-white">4. Data Retention</h4>
          <p>
            We retain your information for as long as necessary to provide services and comply with legal obligations. 
            Project data is retained for 90 days after project completion unless otherwise agreed. You may request deletion 
            of your personal information at any time.
          </p>

          <h4 className="text-lg font-semibold text-white">5. Third-Party Services</h4>
          <p>
            We use trusted third-party services for payment processing, cloud infrastructure, and analytics. 
            These partners are contractually required to protect your information and use it only for providing their services.
          </p>

          <h4 className="text-lg font-semibold text-white">6. Your Rights</h4>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Data portability where applicable</li>
          </ul>
        </div>
      )
    },
    {
      id: 'data',
      title: 'Data Protection',
      icon: <Lock className="w-6 h-6" />,
      updated: 'Last updated: January 1, 2025',
      content: (
        <div className="space-y-4 text-gray-300">
          <h4 className="text-lg font-semibold text-white">1. Data Sovereignty Commitment</h4>
          <p>
            Your data remains yours. We never use client data to train models for other clients. 
            Each SOVREN AI deployment is isolated and sovereign to your organization.
          </p>

          <h4 className="text-lg font-semibold text-white">2. Security Measures</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>End-to-end encryption for data in transit and at rest</li>
            <li>Multi-factor authentication for all admin access</li>
            <li>Regular security audits and penetration testing</li>
            <li>Compliance with SOC 2 Type II standards</li>
            <li>24/7 security monitoring and incident response</li>
          </ul>

          <h4 className="text-lg font-semibold text-white">3. Data Location</h4>
          <p>
            For on-premise SOVREN AI deployments, all data remains within your infrastructure. 
            For cloud deployments, data is stored in SOC 2 compliant data centers in the United States 
            unless otherwise specified in your service agreement.
          </p>

          <h4 className="text-lg font-semibold text-white">4. Access Controls</h4>
          <p>
            Access to your data is strictly limited to authorized personnel on a need-to-know basis. 
            All access is logged and regularly audited. We maintain separation between client environments 
            to prevent any cross-contamination of data.
          </p>

          <h4 className="text-lg font-semibold text-white">5. Incident Response</h4>
          <p>
            In the unlikely event of a security incident, we will notify affected clients within 72 hours 
            and provide regular updates on investigation and remediation efforts.
          </p>
        </div>
      )
    },
    {
      id: 'cookies',
      title: 'Cookie Policy',
      icon: <Cookie className="w-6 h-6" />,
      updated: 'Last updated: January 1, 2025',
      content: (
        <div className="space-y-4 text-gray-300">
          <h4 className="text-lg font-semibold text-white">1. What Are Cookies</h4>
          <p>
            Cookies are small text files stored on your device when you visit our website. 
            We use cookies to enhance your experience and understand how our services are used.
          </p>

          <h4 className="text-lg font-semibold text-white">2. Types of Cookies We Use</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Essential Cookies:</strong> Required for website functionality and security</li>
            <li><strong>Analytics Cookies:</strong> Help us understand website usage and improve services</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            <li><strong>Consciousness Tracking:</strong> Our AI observes interaction patterns to improve user experience</li>
          </ul>

          <h4 className="text-lg font-semibold text-white">3. Managing Cookies</h4>
          <p>
            You can control cookies through your browser settings. Disabling certain cookies may impact 
            website functionality. Our consciousness-aware features require cookies to provide personalized experiences.
          </p>

          <h4 className="text-lg font-semibold text-white">4. Third-Party Cookies</h4>
          <p>
            We do not use third-party advertising cookies. Analytics services we use are configured 
            to anonymize IP addresses and respect Do Not Track settings.
          </p>
        </div>
      )
    },
    {
      id: 'ip',
      title: 'Intellectual Property',
      icon: <Shield className="w-6 h-6" />,
      updated: 'Last updated: January 1, 2025',
      content: (
        <div className="space-y-4 text-gray-300">
          <h4 className="text-lg font-semibold text-white">1. Client Ownership</h4>
          <p>
            Custom AI solutions, models, and implementations developed specifically for your business 
            become your property upon full payment. You own all rights to use, modify, and distribute 
            these custom solutions.
          </p>

          <h4 className="text-lg font-semibold text-white">2. Covren Firm IP</h4>
          <p>
            Core SOVREN AI technology, frameworks, methodologies, and pre-existing IP remain property 
            of Covren Firm LLC. This includes our consciousness engine, sovereign architecture, and 
            compound intelligence systems.
          </p>

          <h4 className="text-lg font-semibold text-white">3. License Grants</h4>
          <p>
            Clients receive a perpetual, non-exclusive license to use Covren Firm's IP as integrated 
            into their custom solutions. This license is non-transferable except with written consent.
          </p>

          <h4 className="text-lg font-semibold text-white">4. Confidentiality</h4>
          <p>
            Both parties agree to maintain confidentiality of proprietary information. This includes 
            your business data, our technical implementations, and any trade secrets shared during engagement.
          </p>

          <h4 className="text-lg font-semibold text-white">5. Feedback and Improvements</h4>
          <p>
            We appreciate feedback and suggestions. Any feedback provided may be used to improve our 
            services without compensation, but we will never use your specific business logic or data 
            for other clients.
          </p>
        </div>
      )
    },
    {
      id: 'disclaimers',
      title: 'Disclaimers',
      icon: <AlertCircle className="w-6 h-6" />,
      updated: 'Last updated: January 1, 2025',
      content: (
        <div className="space-y-4 text-gray-300">
          <h4 className="text-lg font-semibold text-white">1. No Warranties</h4>
          <p>
            Services are provided "as is" without warranties of any kind, express or implied. 
            We do not warrant that services will be uninterrupted, error-free, or meet all your requirements.
          </p>

          <h4 className="text-lg font-semibold text-white">2. AI Limitations</h4>
          <p>
            While our AI systems are highly advanced, they are not infallible. Results may vary based on 
            data quality, implementation specifics, and use cases. Human oversight is recommended for 
            critical decisions.
          </p>

          <h4 className="text-lg font-semibold text-white">3. Third-Party Services</h4>
          <p>
            We are not responsible for third-party services, websites, or content linked from our platform. 
            Use of third-party services is at your own risk.
          </p>

          <h4 className="text-lg font-semibold text-white">4. Results Disclaimer</h4>
          <p>
            Case studies and testimonials represent individual results. Your results may vary based on 
            numerous factors including but not limited to industry, implementation, and market conditions.
          </p>

          <h4 className="text-lg font-semibold text-white">5. Consciousness Features</h4>
          <p>
            Our "consciousness-aware" features are advanced pattern recognition and predictive systems. 
            They do not constitute actual consciousness or sentience. User interaction data is analyzed 
            to improve experience but does not imply surveillance.
          </p>
        </div>
      )
    }
  ];

  return (
    <ConsciousPage title="Legal Information">
      <div className="space-y-8">
        {/* Introduction */}
        <section className="text-center mb-12">
          <Shield className="w-20 h-20 text-blue-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent mb-6">
            Transparency & Trust
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We believe in clear, honest communication. Here's everything you need to know about working with us, 
            in language that actually makes sense.
          </p>
        </section>

        {/* Contact Info */}
        <div className="bg-blue-900/20 border border-blue-600/50 rounded-xl p-6 max-w-3xl mx-auto mb-8">
          <h3 className="text-lg font-semibold text-white mb-2">Legal Contact</h3>
          <p className="text-gray-300">
            Covren Firm LLC<br />
            Email: legal@covrenfirm.com<br />
            For privacy inquiries: privacy@covrenfirm.com
          </p>
        </div>

        {/* Expandable Sections */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="text-blue-400">{section.icon}</div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>
                    <p className="text-sm text-gray-400">{section.updated}</p>
                  </div>
                </div>
                {expandedSection === section.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {expandedSection === section.id && (
                <div className="px-6 py-4 border-t border-gray-800">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Summary */}
        <section className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">The Simple Version</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">What We Promise</h3>
              <ul className="space-y-2">
                <li>✓ Your data stays yours, always</li>
                <li>✓ Custom solutions become your property</li>
                <li>✓ Clear pricing, no hidden fees</li>
                <li>✓ Enterprise-grade security for all</li>
                <li>✓ Honest communication about capabilities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">What We Ask</h3>
              <ul className="space-y-2">
                <li>✓ Provide accurate information</li>
                <li>✓ Respect our intellectual property</li>
                <li>✓ Use services legally and ethically</li>
                <li>✓ Communicate openly about needs</li>
                <li>✓ Pay for services as agreed</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Questions CTA */}
        <section className="text-center">
          <p className="text-xl text-gray-300 mb-6">
            Have questions about our legal terms or data practices?
          </p>
          <a 
            href="mailto:legal@covrenfirm.com" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            Contact Our Legal Team
          </a>
        </section>
      </div>
    </ConsciousPage>
  );
}