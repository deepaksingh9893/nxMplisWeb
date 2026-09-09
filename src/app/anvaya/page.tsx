import { getProductsByHandles } from '@/lib/shopify';
import type { ShopifyProduct } from '@/lib/shopify';
import { AnvayaProductPage } from './AnvayaProductPage';
import { FAQSchema, BreadcrumbSchema } from '@/components/seo/JsonLd';

// Static product config — marketing copy, colors, features (lives on website)
// Prices + variants + availability come live from Shopify; fallbackVariants used when Shopify is unreachable
// 3-product lineup: CORE → PULSE → OMNI (SENSE retired)
export const productConfig = [
  {
    id: 'core',
    name: 'CORE',
    fullName: 'Anvaya CORE',
    tagline: 'Simple. Smart. Reliable.',
    desc: 'Your first step into smart baby monitoring. A crisp 1080P camera, 5-inch parent display, pan & tilt coverage — reliable all night, simple to set up.',
    color: '#d97706',
    bgLight: '#fffbeb',
    badge: null as string | null,
    handle: 'anvaya-smart-core-audio-and-video-baby-monitor',
    specs: '5" · 1080P · 3200mAh · Pan 355° Tilt 120°',
    fallbackVariants: [
      { id: 'fallback-core-1', numericId: '50746014892255', title: 'Without Display', price: '8999.00', compareAtPrice: '14999.00', availableForSale: true },
      { id: 'fallback-core-2', numericId: '50817486258399', title: 'With 5" Display', price: '12999.00', compareAtPrice: '14999.00', availableForSale: true },
    ],
    localImages: ['/anvaya-core-01-hero-1080p-day-night.png', '/anvaya-core-02-pan-tilt-whole-home.png', '/anvaya-core-03-trust-safety-badges.png', '/anvaya-core-04-two-way-talk.png', '/anvaya-core-05-room-comfort-lullaby.png', '/anvaya-core-06-monitor-anywhere.png', '/anvaya-core-07-feeding-reminder.png'],
    features: [
      { icon: 'Video', text: 'Crystal-clear 1080P', sub: 'See every detail, day or night' },
      { icon: 'RotateCcw', text: 'No blind spots', sub: '355° pan · 120° tilt, full room' },
      { icon: 'Baby', text: 'Cry alert in seconds', sub: 'Noise + motion detection' },
      { icon: 'Volume2', text: 'Talk back instantly', sub: 'Two-way audio + 8 lullabies' },
      { icon: 'Thermometer', text: 'Room conditions', sub: 'Temp & humidity at a glance' },
      { icon: 'Smartphone', text: 'App and monitor', sub: 'Watch your way, any time' },
    ],
    // Same sections + images used in the Shopify listing, for a consistent story across both
    storySections: [
      { image: '/anvaya-core-02-pan-tilt-whole-home.png', heading: 'Whole-Home Coverage. Nothing Missed.', body: 'Pan 355° and tilt 120° from your phone or the parent unit, covering every corner of the nursery — and connect up to 4 cameras to watch multiple rooms at once.' },
      { image: '/anvaya-core-04-two-way-talk.png', heading: 'Talk Back, Anytime, From Anywhere', body: 'Two-way audio lets you soothe your baby with your own voice — from the next room or across the city. Encrypted, secure video means only you see what CORE sees.' },
      { image: '/anvaya-core-05-room-comfort-lullaby.png', heading: 'A Comfortable Room, A Soothing Night', body: 'Room temperature and humidity, monitored in real time. Pick from 8 built-in lullabies and 10 volume levels to help your baby settle faster.' },
      { image: '/anvaya-core-07-feeding-reminder.png', heading: 'Never Miss a Feed', body: 'Set your feeding interval once — CORE reminds you when it\'s time, right on your phone or parent unit.' },
      { image: '/anvaya-core-06-monitor-anywhere.png', heading: 'Watch From the Kitchen, the Shower, or the Office', body: 'Wi-Fi mode keeps you connected wherever you are. Prefer to keep it fully offline? Non-Wi-Fi mode connects the parent unit directly to the camera for maximum privacy.' },
      { image: '/anvaya-core-03-trust-safety-badges.png', heading: 'Built for Trust', body: 'CE, FCC and RoHS certified. No subscription required. Trusted by 1,000+ families across India.' },
    ],
  },
  {
    id: 'pulse',
    name: 'PULSE',
    fullName: 'Anvaya PULSE',
    tagline: 'AI Safety That Never Blinks.',
    desc: 'Upgraded to 4MP clarity, AI detects face covering and prone sleep — automatically. Danger zones, geofencing, and timeline album. Safety beyond basic monitoring.',
    color: '#3b82f6',
    bgLight: '#eff6ff',
    badge: '⭐ Most Popular' as string | null,
    handle: 'anvaya-smart-pulse-video-and-audio-baby-monitor',
    specs: '5.5" · 4MP · 4000mAh · AI Safety Detection',
    fallbackVariants: [
      { id: 'fallback-pulse-1', numericId: '50745881690335', title: 'Without Display', price: '17999.00', compareAtPrice: '22999.00', availableForSale: true },
      { id: 'fallback-pulse-2', numericId: '50817349419231', title: 'With 5.5" Display', price: '21999.00', compareAtPrice: '22999.00', availableForSale: true },
    ],
    localImages: ['/anvaya-pulse-07-product-hero.png', '/anvaya-pulse-01-hero-anywhere.png', '/anvaya-pulse-02-ai-safety-alerts.png', '/anvaya-pulse-04-danger-zone-fence.png', '/anvaya-pulse-03-room-comfort-lullaby.png', '/anvaya-pulse-05-feeding-reminder.png', '/anvaya-pulse-06-night-light.png'],
    features: [
      { icon: 'Shield', text: 'Face covered — alert sent', sub: 'AI detects the moment it happens' },
      { icon: 'Baby', text: 'Rolled onto tummy — you know', sub: 'Prone sleep auto-detected' },
      { icon: 'Zap', text: 'Draw a danger zone', sub: 'Baby crosses it, you\'re notified' },
      { icon: 'Video', text: 'Ultra-sharp 4MP view', sub: '355° pan · 120° tilt clarity' },
      { icon: 'Heart', text: 'Milestones, captured', sub: 'Auto timeline album as they grow' },
      { icon: 'Thermometer', text: 'Environment on watch', sub: 'Temp & humidity alerts' },
    ],
    storySections: [
      { image: '/anvaya-pulse-01-hero-anywhere.png', heading: 'See Your Baby, Anywhere', body: 'In the kitchen, in the shower, or at your desk — a live 4MP feed is always one tap away on the app or the 5.5-inch parent display.' },
      { image: '/anvaya-pulse-02-ai-safety-alerts.png', heading: 'AI That Never Blinks', body: 'On-device AI watches for the two most common infant sleep risks — face covering and prone (tummy) sleep — and alerts you the instant something\'s wrong, on the parent unit and the app.' },
      { image: '/anvaya-pulse-04-danger-zone-fence.png', heading: 'Set a Safety Fence, Get Instant Alerts', body: 'Draw a danger zone around stairs, a balcony door, or anywhere else — PULSE alerts you the second your baby crosses it.' },
      { image: '/anvaya-pulse-03-room-comfort-lullaby.png', heading: 'Comfort, Timed Right', body: 'Room temperature and humidity, monitored in real time, plus 8 built-in lullabies across 10 volume levels to help your baby settle faster.' },
      { image: '/anvaya-pulse-05-feeding-reminder.png', heading: 'Never Miss a Feed', body: 'Set your feeding interval once — PULSE reminds you when it\'s time, right on your phone or the parent unit.' },
      { image: '/anvaya-pulse-06-night-light.png', heading: 'A Soft Glow for Calmer Nights', body: 'A built-in night light, dimmable from the app, adds just enough warmth to comfort your baby back to sleep.' },
    ],
  },
  {
    id: 'omni',
    name: 'OMNI',
    fullName: 'Anvaya OMNI',
    tagline: 'Breathes. Heart beats. You sleep.',
    desc: 'India\'s only baby monitor with contactless respiration and heart rate detection. Deep sleep analysis, one-click calling, and every PULSE feature — the complete picture.',
    color: '#7c3aed',
    bgLight: '#f5f3ff',
    badge: '🏆 Most Advanced' as string | null,
    handle: 'anvaya-smart-omni-baby-monitor',
    specs: '5.5" · 4MP · 4000mAh · Respiration + Heart Rate',
    fallbackVariants: [
      { id: 'fallback-omni-1', numericId: '50744670486751', title: 'Without Display', price: '20999.00', compareAtPrice: '29999.00', availableForSale: true },
      { id: 'fallback-omni-2', numericId: '50817578696927', title: 'With 5.5" Display', price: '24999.00', compareAtPrice: '29999.00', availableForSale: true },
    ],
    localImages: ['/anvaya-omni-01-hero-nursery.jpg', '/anvaya-omni-09-vitals-heart-breathing.png', '/anvaya-omni-10-ai-safety-alerts.png', '/anvaya-omni-05-sleep-report.png', '/anvaya-omni-07-monitor-anywhere.png', '/anvaya-omni-06-danger-zones.png', '/anvaya-omni-11-product-hero-specs.png', '/anvaya-omni-08-trust-certifications.png'],
    features: [
      { icon: 'Activity', text: 'Breathing, watched live', sub: 'Contactless — nothing on your baby' },
      { icon: 'Heart', text: 'Heart rate, always on', sub: 'No chest strap. No wearable. Ever.' },
      { icon: 'BrainCircuit', text: 'Sleep decoded nightly', sub: 'Deep report, every morning' },
      { icon: 'Phone', text: 'One tap, partner\'s phone rings', sub: '3am? No fumbling.' },
      { icon: 'Shield', text: 'Face cover + tummy roll', sub: 'AI catches both — you just sleep' },
      { icon: 'Zap', text: 'Invisible fence, real alerts', sub: 'Set zones, get notified instantly' },
    ],
    storySections: [
      { image: '/anvaya-omni-09-vitals-heart-breathing.png', heading: 'Breathing & Heart Rate — Without a Single Wearable', body: 'Radar-based sensing tracks respiration and heart rate continuously, all night — no patch, no strap, nothing attached to your baby.' },
      { image: '/anvaya-omni-05-sleep-report.png', heading: 'Sleep, Decoded Every Night', body: 'Wake up to a deep sleep analysis report — total sleep time, light vs. deep sleep, and a nightly sleep score — so you know exactly how your baby rested.' },
      { image: '/anvaya-omni-10-ai-safety-alerts.png', heading: 'AI Safety, Built In', body: 'Every PULSE safety feature comes standard: face-covering detection and prone-sleep alerts, the instant something\'s wrong.' },
      { image: '/anvaya-omni-06-danger-zones.png', heading: 'Set Boundaries, Get Alerts', body: 'Draw a danger zone around stairs or a balcony door — OMNI alerts you the second your baby crosses it.' },
      { image: '/anvaya-omni-07-monitor-anywhere.png', heading: 'Monitor From Anywhere', body: 'In the kitchen, in the shower, or at the office — vitals, video, and alerts follow you on the app, wherever you are.' },
      { image: '/anvaya-omni-08-trust-certifications.png', heading: 'Trusted Nationwide', body: 'CE, FCC and RoHS certified. No subscription needed. Trusted by thousands of families across India.' },
    ],
  },
];

const faqs = [
  { q: 'Does anything touch my baby?', a: 'No. Anvaya is completely contactless. The wellness pod sits beside the crib on a shelf or table. It uses radar and infrared sensing — nothing attaches to your baby\'s skin.' },
  { q: 'When will I receive my order?', a: 'Anvaya Smart is currently in pre-order. Delivery across India takes 3–7 working days after dispatch. Free shipping on all orders.' },
  { q: 'What if I\'m not happy?', a: '30-day money-back guarantee — no questions asked. If Anvaya doesn\'t give you peace of mind, we\'ll refund every rupee including return shipping.' },
  { q: 'Which model should I buy?', a: 'PULSE is our most popular for new parents — it covers AI face-covering and prone-sleep detection, danger zones and a timeline album. For the complete picture with contactless breathing and heart rate, go with OMNI.' },
  { q: 'Is my data private?', a: 'All processing happens on the device. No health data, video or audio is ever sent to external servers. Your family\'s privacy is a design principle.' },
];

export default async function AnvayaPage() {
  // Fetch all 4 products from Shopify in parallel
  const shopifyProducts = await getProductsByHandles(
    productConfig.map(p => p.handle)
  );

  // Merge: static config (copy/features/colors) + live Shopify data (prices/variants/availability)
  // When Shopify is unreachable, shopify is null and the client uses fallbackVariants
  const products = productConfig.map((cfg, i) => ({
    ...cfg,
    shopify: shopifyProducts[i],
  }));

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://nxmplis.com' },
        { name: 'Baby Wellness Pods', url: 'https://nxmplis.com/anvaya' },
      ]} />
      <AnvayaProductPage products={products} faqs={faqs} />
    </>
  );
}
