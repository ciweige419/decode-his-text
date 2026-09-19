import { ImageResponse } from 'next/og';

export const alt = 'Decode His Text — Understand mixed signals';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, background: '#0a0a0a', color: '#ffffff' }}>
      <div style={{ display: 'flex', fontSize: 36, color: '#fb7185', marginBottom: 36 }}>Decode His Text</div>
      <div style={{ display: 'flex', fontSize: 76, fontWeight: 700 }}>Understand mixed signals.</div>
      <div style={{ display: 'flex', fontSize: 32, color: '#a3a3a3', marginTop: 32 }}>Consider the context. Choose your response.</div>
    </div>,
    size,
  );
}
