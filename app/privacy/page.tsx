import type { Metadata } from 'next';
import Link from 'next/link';
import { EMAIL, WHATSAPP } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy — Webforsa',
  description: 'Webforsa privacy policy: how we collect, use, and protect your information.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 font-display text-2xl font-light text-ivory">{title}</h2>
      <div className="space-y-4 text-[0.92rem] leading-[1.9] text-body">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black px-[5vw] py-28">
      <div className="mx-auto max-w-[720px]">
        <Link
          href="/"
          className="mb-12 inline-block text-[0.7rem] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ivory"
        >
          ← Back to Webforsa
        </Link>

        <h1 className="mb-3 font-display text-4xl font-light text-ivory md:text-5xl">
          Privacy <em className="italic text-gold">Policy</em>
        </h1>
        <p className="mb-16 text-[0.78rem] uppercase tracking-[0.16em] text-muted">
          Effective 2025 · webforsa.com
        </p>

        <Section title="1. Information We Collect">
          <p>
            When you message us on WhatsApp, we collect the information you provide directly:
            your name, phone number, and the details of your project that you share with us. We
            also collect basic analytics data about how visitors use our site, such as pages
            viewed and time on site.
          </p>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>
            We use the information you share via WhatsApp to respond to your inquiry, schedule a
            discovery call, deliver the services you&apos;ve requested, and send you updates related
            to your project. We do not use your information for unrelated marketing without your
            consent.
          </p>
        </Section>

        <Section title="3. Data Sharing">
          <p>
            We do not sell your personal data to anyone. We may share limited information with
            trusted third-party service providers who help us operate our business, including
            Google Analytics (for website analytics), WhatsApp/Meta (for messaging and
            correspondence), and Stripe (for processing payments). These providers only receive
            the data necessary to perform their function.
          </p>
        </Section>

        <Section title="4. Cookies">
          <p>
            Our website uses Google Analytics cookies to understand how visitors use our site.
            These cookies collect anonymised, aggregated data. You can opt out of Google
            Analytics tracking by installing the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              className="border-b border-gold/35 text-gold no-underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            , or by adjusting your browser settings to block cookies.
          </p>
        </Section>

        <Section title="5. Data Retention">
          <p>
            We retain inquiry data (WhatsApp messages) for up to 2 years from the date of
            submission. Project files and deliverables are retained for 1 year following project
            launch, after which they may be archived or deleted.
          </p>
        </Section>

        <Section title="6. Your Rights">
          <p>
            You have the right to access, correct, or request deletion of any personal data we
            hold about you. To exercise any of these rights, message us on{' '}
            <a
              href={WHATSAPP.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-gold/35 text-gold no-underline"
            >
              WhatsApp
            </a>{' '}
            and we will respond within a reasonable timeframe.
          </p>
        </Section>

        <Section title="7. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our
            practices or for other operational, legal, or regulatory reasons. Any changes will be
            posted on this page with an updated effective date.
          </p>
        </Section>

        <Section title="8. Contact Us">
          <p>
            If you have any questions about this Privacy Policy, please contact us on{' '}
            <a
              href={WHATSAPP.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-gold/35 text-gold no-underline"
            >
              WhatsApp ({WHATSAPP.number})
            </a>{' '}
            or email{' '}
            <a href={`mailto:${EMAIL.support}`} className="border-b border-gold/35 text-gold no-underline">
              {EMAIL.support}
            </a>
            .
          </p>
        </Section>
      </div>
    </main>
  );
}
