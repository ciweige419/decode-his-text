import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Decode His Text | Get Support & Customer Service',
  description: 'Contact Decode His Text for support, questions, or feedback. Get help with our AI relationship analysis tool. Response within 48 hours.',
  openGraph: {
    title: 'Contact Us - Decode His Text',
    description: 'Get in touch with our support team for questions about our AI relationship analysis service.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}