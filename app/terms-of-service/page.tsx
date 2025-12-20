import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Decode His Text | AI Relationship Analysis | Legal Agreement',
  description: 'Terms of Service for Decode His Text AI relationship analysis tool. Important psychological disclaimer. Entertainment purposes only. Read before using our service.',
  openGraph: {
    title: 'Terms of Service - Decode His Text',
    description: 'Terms and psychological disclaimer for our AI relationship analysis service.',
    type: 'website',
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">Service</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: January 2025 | Effective date: January 1, 2025
          </p>
        </div>

        <div className="space-y-12 prose prose-invert max-w-none">
          <section className="bg-gradient-to-r from-red-900/20 to-orange-900/20 p-8 rounded-2xl border border-rose-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">🚨 Important Psychological Disclaimer</h2>
            <div className="space-y-4 text-gray-300">
              <p className="font-semibold text-rose-300">
                READ THIS CAREFULLY BEFORE USING OUR SERVICE
              </p>
              <p>
                <strong>Decode His Text</strong> and our "Toxic Bestie" AI persona are <strong>NOT</strong> licensed mental health professionals, therapists, counselors, or legal advisors. Our service is provided for <strong>entertainment, educational, and informational purposes only</strong>.
              </p>
              <p>
                The AI-generated analysis represents <strong>behavioral pattern recognition and communication insights</strong>, not professional psychological diagnosis or legal advice. Do not use our service as a substitute for professional mental health services, legal counsel, or crisis intervention.
              </p>
              <div className="bg-black/50 p-4 rounded-xl mt-4">
                <p className="text-sm">
                  <strong>If you are experiencing abuse, mental health crises, or need professional help, please contact licensed professionals immediately:</strong>
                </p>
                <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                  <li>National Domestic Violence Hotline: 1-800-799-7233</li>
                  <li>Crisis Text Line: Text HOME to 741741</li>
                  <li>National Suicide Prevention Lifeline: 988</li>
                  <li>Psychology Today Therapist Finder</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing and using Decode His Text (the "Service"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">2. Service Description</h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                Decode His Text provides AI-powered analysis of communication patterns in interpersonal relationships. Our service:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                <li>Analyzes text communication for behavioral patterns</li>
                <li>Provides insights into relational dynamics</li>
                <li>Offers perspective on communication styles</li>
                <li>Functions as an educational tool for understanding relationship psychology</li>
                <li>Is powered by advanced AI models for natural language processing</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">3. User Responsibilities</h2>
            <div className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-semibold text-rose-400 mb-4">You agree to:</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Use the Service for personal, non-commercial purposes only</li>
                <li>• Submit only content you have the right to analyze</li>
                <li>• Not submit illegal, harmful, or abusive content</li>
                <li>• Not use the Service to harass, bully, or harm others</li>
                <li>• Maintain confidentiality of others' private communications</li>
                <li>• Use critical thinking and judgment when interpreting AI analysis</li>
                <li>• Seek professional help for serious relationship or mental health concerns</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">4. Intellectual Property</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-rose-400">4.1 Our Rights</h3>
              <p className="text-gray-300">
                All content, features, and functionality of the Service are owned by Decode His Text and are protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-rose-400 mt-6">4.2 User Content</h3>
              <p className="text-gray-300">
                You retain ownership of any content you submit to our Service. However, you grant us a limited license to process and analyze your content using AI models for the purpose of providing the Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">5. Service Limitations</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-rose-400">5.1 AI Analysis Limitations</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                <li>AI analysis may not always be accurate or complete</li>
                <li>Cultural and contextual nuances may be missed</li>
                <li>Results should be considered as perspective, not definitive truth</li>
                <li>AI models have inherent limitations in understanding human relationships</li>
              </ul>

              <h3 className="text-xl font-semibold text-rose-400 mt-6">5.2 Service Availability</h3>
              <p className="text-gray-300">
                We do not guarantee uninterrupted or error-free service. We may modify, suspend, or discontinue the Service at any time without notice.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">6. Prohibited Uses</h2>
            <p className="text-gray-300 mb-4">You are strictly prohibited from:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
              <li>Using the Service for illegal activities or purposes</li>
              <li>Attempting to reverse engineer or hack our AI models</li>
              <li>Using the Service to create deepfakes or misleading content</li>
              <li>Harvesting user data or attempting to access other users' information</li>
              <li>Interfering with the proper working of the Service</li>
              <li>Using the Service for professional therapy or counseling without proper licensing</li>
              <li>Violating any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">7. Privacy and Data Protection</h2>
            <p className="text-gray-300">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information. By using our Service, you consent to the practices described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">8. Disclaimers of Warranty</h2>
            <div className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
              <p className="text-gray-300">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-400 ml-4">
                <li>Accuracy, reliability, or completeness of AI analysis</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">9. Limitation of Liability</h2>
            <p className="text-gray-300">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, DECODE HIS TEXT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE.
            </p>
            <p className="text-gray-300 mt-4">
              OUR TOTAL LIABILITY TO YOU FOR ANY CAUSE OF ACTION WHATSOEVER, AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US FOR THE SERVICE DURING THE SIX MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">10. Indemnification</h2>
            <p className="text-gray-300">
              You agree to indemnify and hold Decode His Text harmless from any and all claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees and costs, arising from or in connection with your use of the Service or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">11. Medical and Mental Health Emergency</h2>
            <div className="bg-red-900/20 p-8 rounded-2xl border border-rose-500/30">
              <h3 className="text-xl font-semibold text-rose-400 mb-4">Emergency Resources</h3>
              <p className="text-gray-300 mb-4">
                <strong>IF YOU ARE IN CRISIS OR EXPERIENCING AN EMERGENCY, DO NOT USE OUR SERVICE. CONTACT EMERGENCY SERVICES IMMEDIATELY.</strong>
              </p>
              <div className="space-y-2 text-gray-300">
                <p>• Call 911 (U.S.) or your local emergency number</p>
                <p>• Contact a licensed mental health professional</p>
                <p>• Call emergency hotlines listed in the Psychological Disclaimer above</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">12. Termination</h2>
            <p className="text-gray-300">
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">13. Changes to Terms</h2>
            <p className="text-gray-300">
              We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or website notice. Continued use of the Service after such changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">14. Governing Law</h2>
            <p className="text-gray-300">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Decode His Text operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="bg-gradient-to-r from-rose-900/20 to-orange-900/20 p-8 rounded-2xl border border-rose-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">15. Contact Information</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                If you have questions about these Terms of Service:
              </p>
              <div className="bg-neutral-900/50 p-6 rounded-xl">
                <p className="mb-2"><strong>Email:</strong> support@decodehistext.com</p>
                <p className="mb-2"><strong>Subject Line:</strong> "Terms of Service Inquiry"</p>
                <p><strong>Response Time:</strong> We will respond to legal inquiries within 30 days.</p>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                By using Decode His Text, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service, including the Psychological Disclaimer.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}