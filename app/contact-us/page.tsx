'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-neutral-950 text-gray-100 flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="mx-auto w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="text-green-500" size={40} />
          </div>
          <h1 className="text-3xl font-black text-white">Message Received!</h1>
          <p className="text-gray-400">
            Thank you for contacting us. We'll get back to you within 48 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">Us</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Have questions or need support? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-rose-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-rose-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                      <p className="text-gray-300 mb-1">support@decodehistext.com</p>
                      <p className="text-gray-400 text-sm">Response time: Within 48 hours</p>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-rose-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="text-rose-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Quick Questions</h3>
                      <p className="text-gray-300 mb-1">Check our FAQ section first</p>
                      <p className="text-gray-400 text-sm">Most questions are answered there</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Response Times</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-300">General Inquiries</span>
                  <span className="text-rose-400">24-48 hours</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-300">Technical Support</span>
                  <span className="text-rose-400">48-72 hours</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-300">Privacy & Legal</span>
                  <span className="text-rose-400">5-7 business days</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Media Inquiries</span>
                  <span className="text-rose-400">media@decodehistext.com</span>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-rose-900/20 to-orange-900/20 p-6 rounded-2xl border border-rose-500/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-rose-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Emergency Resources</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    If you're experiencing an emergency or crisis, please contact professional resources immediately:
                  </p>
                  <div className="space-y-1 text-sm text-gray-400">
                    <p>• National Domestic Violence Hotline: 1-800-799-7233</p>
                    <p>• Crisis Text Line: Text HOME to 741741</p>
                    <p>• National Suicide Prevention Lifeline: 988</p>
                    <p>• Call 911 for immediate emergencies</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-300 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-rose-500 focus:outline-none"
                  required
                >
                  <option value="general">General Question</option>
                  <option value="technical">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="privacy">Privacy & Data Protection</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="media">Media Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:border-rose-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:border-rose-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:border-rose-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your question or issue in detail..."
                  rows={6}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:border-rose-500 focus:outline-none resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-rose-600 to-orange-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 p-6 bg-neutral-900/30 rounded-xl border border-white/5">
              <p className="text-gray-400 text-sm">
                <strong>Privacy Note:</strong> Your contact information and message will be used solely for responding to your inquiry and will be handled according to our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}