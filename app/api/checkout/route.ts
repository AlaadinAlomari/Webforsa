// TODO: STRIPE INTEGRATION
// Uncomment once STRIPE_SECRET_KEY is added to the environment. This route
// should create a Stripe Checkout Session for a single $1,997 USD payment
// and return its URL so the client can redirect the browser to it.
//
// import Stripe from 'stripe';
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
//
// export async function POST() {
//   const session = await stripe.checkout.sessions.create({
//     mode: 'payment',
//     line_items: [{
//       price_data: {
//         currency: 'usd',
//         product_data: { name: 'Webforsa Landing Page — Full Build' },
//         unit_amount: 199700, // $1,997.00
//       },
//       quantity: 1,
//     }],
//     success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
//     cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
//   });
//   return Response.json({ url: session.url });
// }

export async function POST() {
  return Response.json({ error: 'Stripe checkout is not configured yet.' }, { status: 501 });
}
