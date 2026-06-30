import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Receives Stripe's server-to-server event after a payment completes — more
// reliable than the success_url redirect alone, since a customer can close
// the tab before the browser redirect fires.
//
// Setup: in the Stripe Dashboard, add an endpoint pointing to
// https://webforsa.com/api/webhook, subscribe it to `checkout.session.completed`,
// and copy its signing secret into STRIPE_WEBHOOK_SECRET.
export async function POST(request: NextRequest) {
  const apiKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!apiKey || !webhookSecret) {
    return NextResponse.json({ error: 'Stripe webhook is not configured.' }, { status: 500 });
  }

  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing signature.' }, { status: 400 });
  }

  const stripe = new Stripe(apiKey);
  const body = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: 'Invalid signature.' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    // TODO: notify the team that a new project has been paid for —
    // e.g. ping a Slack webhook or WhatsApp Business API with session.id /
    // session.customer_details?.email.
    console.log('Stripe checkout completed:', session.id);
  }

  return NextResponse.json({ received: true });
}
