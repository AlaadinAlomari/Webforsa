import type { Metadata } from 'next';
import Link from 'next/link';
import { EMAIL, WHATSAPP } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service — Webforsa',
  description: 'Webforsa terms of service: payment, timeline, revisions, and ownership.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 font-display text-2xl font-light text-ivory">{title}</h2>
      <div className="space-y-4 text-[0.92rem] leading-[1.9] text-body">{children}</div>
    </section>
  );
}

export default function TermsPage() {
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
          Terms of <em className="italic text-gold">Service</em>
        </h1>
        <p className="mb-16 text-[0.78rem] uppercase tracking-[0.16em] text-muted">
          Effective 2025 · webforsa.com
        </p>

        <Section title="1. Services Provided">
          <p>
            Webforsa provides custom landing page design and development services. Each project
            covers one landing page, scoped during the discovery call. Any additional pages or
            scope must be agreed separately.
          </p>
        </Section>

        <Section title="2. Payment Terms">
          <p>
            Our service is a flat fee of $1,997 USD, due in full at the time of booking and
            processed securely via Stripe. Payment is non-refundable once the discovery call has
            taken place and work has begun, except as outlined in the Refund Policy below.
          </p>
        </Section>

        <Section title="3. Project Timeline">
          <p>
            Projects are delivered within 10 business days of payment confirmation. This timeline
            is contingent on the client providing requested content (copy direction, brand assets,
            login credentials, etc.) within 48 hours of request.
          </p>
        </Section>

        <Section title="4. Revisions">
          <p>
            Two rounds of design revisions are included during the design phase. Additional
            revision rounds beyond those included are billed at $150 per round.
          </p>
        </Section>

        <Section title="5. Client Responsibilities">
          <p>
            The client agrees to provide necessary content and feedback within 48 hours of each
            project milestone. Delays in providing content or feedback may extend the delivery
            timeline accordingly.
          </p>
        </Section>

        <Section title="6. Intellectual Property">
          <p>
            Upon receipt of full payment, the client owns all final deliverables, including
            source files and design assets. Webforsa retains the right to display the completed
            project in its portfolio and marketing materials, unless the client requests
            otherwise in writing.
          </p>
        </Section>

        <Section title="7. Refund Policy">
          <p>
            Payment is non-refundable once work has begun. However, if Webforsa fails to deliver
            the project within the agreed 10-business-day timeline — excluding delays caused by
            the client&apos;s late delivery of requested content — the client is entitled to a full
            refund of the project fee.
          </p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>
            Webforsa is not liable for any indirect, incidental, or consequential damages arising
            from the use of the delivered landing page. Our maximum liability under these terms is
            limited to the total fees paid by the client for the project.
          </p>
        </Section>

        <Section title="9. Governing Law">
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of
            England and Wales, without regard to conflict of law principles.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            For questions regarding these Terms of Service, please contact us on{' '}
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
