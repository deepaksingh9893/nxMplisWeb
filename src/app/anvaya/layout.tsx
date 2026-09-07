import type { Metadata } from 'next';
import { FAQSchema, ProductSchema, BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Anvaya Smart Products | CORE PULSE OMNI | Buy Baby Monitor India',
  description: 'Compare all Anvaya Smart baby monitors — CORE (₹8,999), PULSE (₹17,999), OMNI (₹20,999). AI safety detection, contactless vitals, and sleep tracking.',
  keywords: ['Anvaya CORE baby monitor', 'Anvaya PULSE', 'Anvaya OMNI', 'buy smart baby monitor India', 'best baby monitor price India 2025', 'contactless baby monitor buy'],
  alternates: { canonical: 'https://nxmplis.com/anvaya' },
  openGraph: {
    title: 'Anvaya Smart — 3 Models, One Promise | Buy Baby Monitor India',
    description: 'CORE ₹8,999 · PULSE ₹17,999 · OMNI ₹20,999. India\'s best AI baby monitor. Free shipping. 30-day guarantee.',
    url: 'https://nxmplis.com/anvaya',
    images: [{ url: '/anvaya-nursery.jpg', width: 1200, height: 630, alt: 'Anvaya Smart baby monitor lineup — CORE PULSE OMNI' }],
  },
};

const faqs = [
  { q: 'How does Anvaya Smart monitor my baby without touching them?', a: 'PULSE and OMNI use AI vision to watch for face covering and prone sleep — all passive, from beside the crib. OMNI adds contactless radar sensing for breathing and heart rate. Nothing touches your baby.' },
  { q: 'Is Anvaya Smart safe to use near a newborn?', a: 'Completely safe. Anvaya emits no harmful signals and no bright lights. It is designed to be completely unobtrusive around your baby.' },
  { q: 'What is the difference between Anvaya PULSE and OMNI?', a: 'PULSE covers AI safety detection — face covering, prone sleep, danger zones and a timeline album. OMNI adds contactless breathing and heart rate monitoring, deep sleep reports, and one-tap calling.' },
  { q: 'Does Anvaya Smart work in complete darkness?', a: 'Yes. All models include infrared night vision, so darkness is no barrier at all.' },
  { q: 'What happens to my baby\'s health data?', a: 'All processing is on-device. No video, audio, or health data ever leaves your home. Privacy is a design principle, not a feature.' },
  { q: 'Which Anvaya model is best for a newborn?', a: 'We recommend Anvaya PULSE for most new parents — it covers AI safety detection at ₹17,999. For contactless breathing and heart rate on top of that, go with OMNI.' },
];

export default function AnvayaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProductSchema name="Anvaya CORE" description="Essential AI baby monitor with HD video, cry detection, lullabies and temperature monitoring" price="₹8,999" sku="ANVAYA-CORE-001" image="https://nxmplis.com/anvaya-core-1.jpg" />
      <ProductSchema name="Anvaya PULSE" description="AI safety baby monitor with face-covering and prone-sleep detection, danger zones and 4MP night vision" price="₹17,999" sku="ANVAYA-PULSE-001" image="https://nxmplis.com/anvaya-pulse.jpg" />
      <ProductSchema name="Anvaya OMNI" description="Contactless baby monitor with breathing and heart rate detection, AI safety alerts and deep sleep reports" price="₹20,999" sku="ANVAYA-OMNI-001" image="https://nxmplis.com/anvaya-omni-01-hero-nursery.jpg" />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://nxmplis.com' }, { name: 'Products', url: 'https://nxmplis.com/anvaya' }]} />
      {children}
    </>
  );
}
