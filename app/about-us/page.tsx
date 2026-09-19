import InfoPage from '@/components/InfoPage';
export const metadata = { title: 'About — Decode His Text' };
export default function AboutUs() {
  return <InfoPage title="About this preview"><p>Decode His Text is an early experiment exploring how written examples can help people reflect on confusing dating messages.</p><p>The current preview matches phrases to an existing editorial library. It does not call an AI service or provide a personalized assessment. Some library entries use a blunt tone and describe concerning possibilities; they do not establish what happened in your relationship.</p><p>We are testing whether examples are useful and what people want next. There are no paid features, app downloads, or email waiting lists at this stage.</p></InfoPage>;
}
