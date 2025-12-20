import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Decode His Text | AI Dating Analysis | 2025 GDPR/CCPA Compliant',
  description: 'Privacy-first policy for Decode His Text AI dating analysis tool. No permanent storage of your conversations. GDPR & CCPA compliant. Learn how we protect your data.',
  openGraph: {
    title: 'Privacy Policy - Decode His Text',
    description: 'Privacy-first AI dating analysis with no permanent storage. GDPR & CCPA compliant.',
    type: 'website',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">Policy</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: January 2025 | Effective date: January 1, 2025
          </p>
        </div>

        <div className="space-y-12 prose prose-invert max-w-none">
          <section className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">Our Privacy-First Commitment</h2>
            <p className="text-gray-300 leading-relaxed">
              At Decode His Text, we prioritize your privacy above all else. Our AI-powered relationship analysis platform operates on a <strong>privacy-first, no-permanent-storage</strong> principle. We do not store your personal conversations, chat logs, or analysis results permanently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">1. Information We Process</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-rose-400 mb-3">1.1 Text Content You Provide</h3>
                <p className="text-gray-300">
                  When you use our AI analysis service, you may submit text excerpts from conversations for relationship dynamics analysis. This content is:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-400 ml-4">
                  <li>Processed temporarily by AI models for analysis purposes only</li>
                  <li>Not permanently stored on our servers</li>
                  <li>Deleted immediately after analysis completion</li>
                  <li>Not used for training AI models without explicit consent</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-rose-400 mb-3">1.2 Technical Data</h3>
                <p className="text-gray-300">
                  We collect minimal technical data necessary for service operation:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-400 ml-4">
                  <li>IP address (anonymized where possible)</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Page usage analytics (aggregate, anonymous)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-rose-400 mb-3">1.3 Voluntary Information</h3>
                <p className="text-gray-300">
                  When you join our waitlist or contact support:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-400 ml-4">
                  <li>Email address (with your consent)</li>
                  <li>Support messages</li>
                  <li>Feedback communications</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">2. AI Processing & Third-Party Services</h2>
            <div className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-semibold text-rose-400 mb-4">2.1 AI Model Integration</h3>
              <p className="text-gray-300 mb-4">
                Our relationship analysis utilizes advanced AI models from reputable providers:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                <li><strong>OpenAI GPT models</strong> - For natural language processing and relationship dynamics analysis</li>
                <li><strong>Google Gemini models</strong> - For behavioral pattern recognition and communication analysis</li>
              </ul>
              <p className="text-gray-300 mt-4">
                These third-party AI providers process your submitted text temporarily to generate analysis results. They are contractually bound to protect your data and delete it immediately after processing.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">3. Your Data Protection Rights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-900/30 p-6 rounded-xl border border-white/5">
                <h3 className="text-lg font-semibold text-rose-400 mb-3">GDPR Rights (EU Users)</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Right to access your data</li>
                  <li>• Right to rectification</li>
                  <li>• Right to erasure ("right to be forgotten")</li>
                  <li>• Right to restrict processing</li>
                  <li>• Right to data portability</li>
                  <li>• Right to object to processing</li>
                </ul>
              </div>
              <div className="bg-neutral-900/30 p-6 rounded-xl border border-white/5">
                <h3 className="text-lg font-semibold text-rose-400 mb-3">CCPA Rights (California Users)</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Right to know what data is collected</li>
                  <li>• Right to delete personal information</li>
                  <li>• Right to opt-out of data sale</li>
                  <li>• Right to non-discrimination</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">4. How We Protect Your Data</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-rose-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">No Permanent Storage</h3>
                  <p className="text-gray-400">Your conversation excerpts and analysis results are not stored permanently on our servers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-rose-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Encrypted Processing</h3>
                  <p className="text-gray-400">All data transmission uses industry-standard encryption (HTTPS/TLS).</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-rose-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Minimal Data Collection</h3>
                  <p className="text-gray-400">We only collect data necessary for providing our AI analysis service.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-rose-400 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Regular Security Audits</h3>
                  <p className="text-gray-400">We conduct regular security assessments to protect your information.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">5. Cookies & Tracking</h2>
            <p className="text-gray-300">
              We use minimal essential cookies and tracking technologies:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-400 ml-4">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Analytics Cookies:</strong> Anonymous, aggregated usage statistics via Google Analytics</li>
              <li><strong>No Advertising Cookies:</strong> We do not use targeted advertising cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">6. International Data Transfers</h2>
            <p className="text-gray-300">
              Your data may be processed in the United States and other countries where our service providers operate. We ensure appropriate safeguards are in place for international data transfers, including:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-400 ml-4">
              <li>Standard Contractual Clauses (SCCs) for EU data transfers</li>
              <li>Adequacy decisions where applicable</li>
              <li>Contractual commitments from third-party AI providers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">7. Children's Privacy</h2>
            <p className="text-gray-300">
              Our service is intended for adults (18+). We do not knowingly collect personal information from children under 18. If we become aware that we have collected information from a child under 18, we will delete it immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">8. Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify users of significant changes via email or website notice.
            </p>
          </section>

          <section className="bg-gradient-to-r from-rose-900/20 to-orange-900/20 p-8 rounded-2xl border border-rose-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">9. Contact Us for Privacy Matters</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                If you have questions about this Privacy Policy or want to exercise your data protection rights:
              </p>
              <div className="bg-neutral-900/50 p-6 rounded-xl">
                <p className="mb-2"><strong>Email:</strong> support@decodehistext.com</p>
                <p className="mb-2"><strong>Subject Line:</strong> "Privacy Inquiry" or "Data Rights Request"</p>
                <p><strong>Response Time:</strong> We will respond to privacy inquiries within 30 days.</p>
              </div>
            </div>
          </section>

          <section className="text-center py-8">
            <p className="text-gray-500 text-sm">
              This Privacy Policy complies with GDPR, CCPA, and other applicable privacy regulations.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}