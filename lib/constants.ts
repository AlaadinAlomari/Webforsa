export const SITE = {
  name: 'Webforsa',
  url: 'https://webforsa.com',
  tagline: 'Landing Page Studio',
};

export const WHATSAPP = {
  number: '+44 7442 967254',
  url: 'https://wa.me/447442967254?text=Hi%2C%20I%27d%20like%20to%20talk%20about%20a%20landing%20page%20for%20my%20business.',
};

export const NAV = {
  tag: 'Landing Page Studio · webforsa.com',
};

export const HERO = {
  eyebrow: 'One flat investment — done in 10 days',
  price: '1,997',
  headlineLines: ['A landing page that turns', 'strangers into clients —'],
  headlineBold: "or your money back if we miss the deadline.",
  rightCopy: ['Built from scratch.', 'No templates. No bloat.', 'One page. One goal. Done.'],
  cta: 'Pay & reserve your slot',
};

export const TICKER_ITEMS = [
  'Custom Design',
  '10-Day Delivery',
  'Conversion-Focused Copy',
  'Mobile-First Build',
  '$1,997 Flat',
  'SEO-Ready',
  '30-Day Support',
  'No Templates',
];

export type Deliverable = {
  title: string;
  description: string;
  badge: string;
};

export const DELIVERABLES: Deliverable[] = [
  {
    title: 'Conversion Architecture',
    description:
      "Every section is placed where it earns its place. Hero, problem, solution, proof, offer, CTA — structured the way buyers actually think.",
    badge: 'Strategy',
  },
  {
    title: 'Custom Visual Design',
    description:
      "A page that looks like your brand — not a purchased template. Typography, colour, and spacing tuned to your audience and your offer.",
    badge: 'Brand-led',
  },
  {
    title: 'Persuasive Copy',
    description:
      "Copy that speaks to your buyer's real problem and positions your offer as the obvious answer. No filler. No jargon. No generic headlines.",
    badge: 'Copywriting',
  },
  {
    title: 'Speed-Optimised Build',
    description:
      'Hand-coded, no bloat. Scores above 95 on PageSpeed. Every second of load time costs conversions — yours won\'t.',
    badge: 'Performance',
  },
  {
    title: 'Analytics & Lead Capture',
    description:
      "Google Analytics, Meta Pixel (if needed), and form tracking configured from day one. You'll know exactly where your leads come from.",
    badge: 'Tracking',
  },
];

export const QUOTE = {
  text: "“Most businesses don't need more traffic. They need a page that doesn't make the right people leave.”",
  attribution: '— The Webforsa Principle',
};

export type ProcessStep = {
  n: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    n: '1',
    title: 'Discovery',
    description:
      "45 minutes. We learn your offer, your buyer, what's working and what isn't. No briefs. No long intake forms.",
  },
  {
    n: '2',
    title: 'Strategy & Copy',
    description:
      'We map the page structure and write the copy before design begins. You review and approve before we touch Figma.',
  },
  {
    n: '3',
    title: 'Design & Build',
    description:
      "Full visual design, then a hand-coded build. A private link goes live for your review. We refine until it's right.",
  },
  {
    n: '4',
    title: 'Launch',
    description:
      'Your domain, SSL, analytics — all handled. Source files delivered. You own everything, with no lock-in.',
  },
];

export const PRICING = {
  notes:
    'Payment: $1,997 in full, due before work begins\nAccepted: Secure checkout via Stripe\nRevisions: 2 rounds included in design phase',
  intro: [
    'A single flat fee covers everything — strategy, copy, design, build, and 30 days of support after launch.',
    'Full payment is collected upfront through a secure checkout. Once payment is confirmed, your 10-day build timeline begins immediately.',
  ],
  price: '1,997',
  sub: 'Complete · One-time · Flat',
  rows: [
    { label: 'Conversion strategy & wireframe', status: 'Included' },
    { label: 'Persuasive copywriting', status: 'Included' },
    { label: 'Custom visual design', status: 'Included' },
    { label: 'Hand-coded, mobile-first build', status: 'Included' },
    { label: 'Google Analytics & pixel setup', status: 'Included' },
    { label: 'Lead capture form', status: 'Included' },
    { label: 'Delivered in 10 business days', status: 'Guaranteed' },
    { label: '30-day post-launch support', status: 'Included' },
    { label: 'Source files — fully yours', status: 'Included' },
  ],
  cta: 'Pay & reserve your slot',
  guarantee: 'Discovery call is free · No commitment required',
};

export type Testimonial = {
  stars: string;
  body: string;
  name: string;
  co: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    stars: '★ ★ ★ ★ ★',
    body:
      "“We were running ads to a generic page and burning money. Webforsa built us a landing page in 10 days — our cost per lead dropped by 60%.”",
    name: 'Sarah R.',
    co: 'Founder · Revive Aesthetics Clinic',
  },
  {
    stars: '★ ★ ★ ★ ★',
    body:
      "“The copy alone was worth the price. They understood our offer better than we did and put it on the page in a way that actually makes people book.”",
    name: 'Marcus K.',
    co: 'CEO · Meridian Consulting Group',
  },
  {
    stars: '★ ★ ★ ★ ★',
    body:
      "“Flat price, no surprises, ten days. The page looks like it cost three times more and converts better than anything we've had before.”",
    name: 'Layla N.',
    co: 'Owner · Numa Interior Studio',
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Is this just a landing page or a full website?',
    answer:
      'We specialise in landing pages — single-page, conversion-focused builds. If you need a multi-page website, we can discuss that separately, but our core offer and expertise is the landing page.',
  },
  {
    question: "What's included in the $1,997?",
    answer:
      'Strategy, copy, design, development, mobile responsiveness, lead capture form, Google Analytics setup, and 30 days of post-launch support.',
  },
  {
    question: 'Do you write the copy or do I?',
    answer:
      "We write it. Copywriting is included in the $1,997 — it's not an add-on. We'll ask you the right questions during discovery and do the rest. You approve before anything is designed.",
  },
  {
    question: 'Is 10 days realistic?',
    answer:
      "Yes — it's a guarantee. The timeline assumes you're available for a 45-minute discovery call and give feedback within 48 hours at each stage.",
  },
  {
    question: 'How does payment work?',
    answer:
      'Payment is collected in full before the project begins. Once your payment is confirmed via secure checkout, we start immediately and your 10-day delivery clock starts that day.',
  },
  {
    question: 'Is payment secure?',
    answer:
      'Yes. All payments are processed through Stripe, a PCI-compliant payment processor used by millions of businesses worldwide. We never see or store your card details.',
  },
  {
    question: 'Do I own the page after launch?',
    answer:
      'Completely. You receive source files, all credentials, and full ownership on launch day. No lock-in, no ongoing fees.',
  },
];

export const FINAL_CTA = {
  eyebrow: 'Ready to begin',
  subHeadlinePrefix: 'Your landing page',
  subHeadlineLive: 'live in',
  subHeadlineDays: '10 days.',
  sub: 'The discovery call is free. The delay is the only thing that costs you.',
  cta: 'Pay & reserve your slot',
};

export const FOOTER = {
  copyright: '© 2025 Webforsa · webforsa.com',
};
