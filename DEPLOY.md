# Deploy to Vercel

1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import repo
3. Framework: Next.js (auto-detected)
4. Add environment variables: STRIPE_SECRET_KEY = your key from stripe.com, NEXT_PUBLIC_SITE_URL = https://webforsa.com
5. Set custom domain: webforsa.com
6. Click Deploy

# Local dev
pnpm install
pnpm dev
# open http://localhost:3000
