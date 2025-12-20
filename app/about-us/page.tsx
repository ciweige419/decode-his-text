import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Decode His Text | Behavioral Psychology & Relationship Dynamics Experts',
  description: 'Learn about Decode His Text - Your trusted source for behavioral psychology insights and relationship dynamics analysis. Combining AI technology with psychological expertise.',
  openGraph: {
    title: 'About Us - Decode His Text',
    description: 'Behavioral psychology and relationship dynamics experts providing AI-powered communication analysis.',
    type: 'website',
  },
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">Us</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Bridging behavioral psychology with AI technology for deeper relationship insights
          </p>
        </div>

        <div className="space-y-16 prose prose-invert max-w-none">
          <section className="bg-gradient-to-r from-rose-900/20 to-orange-900/20 p-8 rounded-2xl border border-rose-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              At Decode His Text, we combine cutting-edge AI technology with established principles of behavioral psychology to provide insights into interpersonal communication dynamics. Our mission is to empower individuals with deeper understanding of relationship patterns while maintaining the highest standards of privacy and ethical AI usage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">The Science Behind Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-semibold text-rose-400 mb-4">Behavioral Psychology Foundation</h3>
                <p className="text-gray-300">
                  Our analysis framework is built upon decades of research in behavioral psychology, attachment theory, and communication studies. We focus on:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-400 ml-4">
                  <li>Attachment Styles & Patterns</li>
                  <li>Communication Style Analysis</li>
                  <li>Emotional Intelligence Indicators</li>
                  <li>Relationship Dynamics Research</li>
                  <li>Cognitive Behavioral Patterns</li>
                </ul>
              </div>
              <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-semibold text-rose-400 mb-4">AI-Powered Analysis</h3>
                <p className="text-gray-300">
                  We leverage advanced natural language processing and machine learning to identify patterns and provide insights:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-400 ml-4">
                  <li>Pattern Recognition in Communication</li>
                  <li>Sentiment Analysis Technology</li>
                  <li>Contextual Understanding</li>
                  <li>Behavioral Pattern Mapping</li>
                  <li>Evidence-Based Insights</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Our Expertise</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-rose-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-rose-400 font-bold text-xl">🧠</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Behavioral Psychology</h3>
                  <p className="text-gray-300">
                    Our foundation in behavioral psychology focuses on observable patterns in human communication, drawing from established research in attachment theory, emotional intelligence, and interpersonal dynamics. We analyze communication patterns to provide insights into behavioral tendencies and relationship dynamics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-rose-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-rose-400 font-bold text-xl">💬</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Communication Science</h3>
                  <p className="text-gray-300">
                    We apply principles from communication science and linguistics to understand how language patterns reflect underlying relationship dynamics. Our analysis considers verbal and non-verbal cues, communication styles, and patterns of interaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-rose-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-rose-400 font-bold text-xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">AI Technology Integration</h3>
                  <p className="text-gray-300">
                    By integrating AI technology with psychological expertise, we can analyze communication patterns at scale while maintaining human oversight and ethical considerations. Our AI models are trained on validated psychological frameworks and continuously refined based on research.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-900/30 p-6 rounded-xl border border-white/5">
                <h3 className="text-lg font-semibold text-rose-400 mb-3">Privacy-First Approach</h3>
                <p className="text-gray-400 text-sm">
                  We prioritize user privacy with no permanent storage of personal conversations and adherence to GDPR/CCPA standards.
                </p>
              </div>
              <div className="bg-neutral-900/30 p-6 rounded-xl border border-white/5">
                <h3 className="text-lg font-semibold text-rose-400 mb-3">Scientific Integrity</h3>
                <p className="text-gray-400 text-sm">
                  Our analysis methods are based on established psychological research and evidence-based practices.
                </p>
              </div>
              <div className="bg-neutral-900/30 p-6 rounded-xl border border-white/5">
                <h3 className="text-lg font-semibold text-rose-400 mb-3">Ethical AI</h3>
                <p className="text-gray-400 text-sm">
                  We maintain ethical standards in AI development and deployment, ensuring responsible and fair analysis.
                </p>
              </div>
              <div className="bg-neutral-900/30 p-6 rounded-xl border border-white/5">
                <h3 className="text-lg font-semibold text-rose-400 mb-3">Educational Focus</h3>
                <p className="text-gray-400 text-sm">
                  We aim to educate users about healthy relationship dynamics and communication patterns.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">What Makes Us Different</h2>
            <div className="space-y-4">
              <div className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
                <h3 className="text-xl font-semibold text-rose-400 mb-4">Evidence-Based Approach</h3>
                <p className="text-gray-300">
                  Unlike generic AI chatbots, our analysis is specifically trained on validated psychological frameworks and relationship research. We combine the scalability of AI with the precision of evidence-based behavioral psychology.
                </p>
              </div>
              <div className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
                <h3 className="text-xl font-semibold text-rose-400 mb-4">Privacy Protection</h3>
                <p className="text-gray-300">
                  Our privacy-first approach ensures that your personal conversations are never permanently stored. We process content temporarily for analysis and immediately delete it, respecting your privacy and maintaining confidentiality.
                </p>
              </div>
              <div className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
                <h3 className="text-xl font-semibold text-rose-400 mb-4">Accessibility & Education</h3>
                <p className="text-gray-300">
                  We make complex psychological insights accessible through AI-powered analysis, helping users understand relationship dynamics and communication patterns in an educational context.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-rose-500 mb-2">12K+</div>
                <div className="text-gray-400 text-sm">Weekly Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-rose-500 mb-2">50K+</div>
                <div className="text-gray-400 text-sm">Analyses Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-rose-500 mb-2">98%</div>
                <div className="text-gray-400 text-sm">User Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-rose-500 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Availability</div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-rose-900/20 to-orange-900/20 p-8 rounded-2xl border border-rose-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-rose-400 mb-3">Experience & Expertise</h3>
                <p className="text-gray-300 text-sm">
                  Our team brings together expertise in behavioral psychology, communication science, and AI technology. We continuously update our knowledge base with the latest research in relationship dynamics and psychological insights.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-rose-400 mb-3">Authoritativeness & Trustworthiness</h3>
                <p className="text-gray-300 text-sm">
                  We maintain transparency about our methods, limitations, and privacy practices. Our commitment to ethical AI and evidence-based approaches establishes trust with our users and partners.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
            <div className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
              <div className="space-y-4">
                <p className="text-gray-300">
                  Have questions about our approach or want to learn more about our methodology?
                </p>
                <div className="space-y-2">
                  <p className="text-gray-400"><strong>Email:</strong> support@decodehistext.com</p>
                  <p className="text-gray-400"><strong>Response Time:</strong> Within 48 hours</p>
                  <p className="text-gray-400"><strong>Media Inquiries:</strong> media@decodehistext.com</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}