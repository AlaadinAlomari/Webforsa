'use client';

import { useState } from 'react';
import { WHATSAPP } from '@/lib/constants';

export function useCheckout() {
  const [isLoading, setIsLoading] = useState(false);

  async function startCheckout() {
    setIsLoading(true);
    try {
      const res = await fetch('/api/checkout', { method: 'POST' });
      const data: { url?: string; error?: string } = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Checkout failed');
      }

      window.location.href = data.url;
    } catch {
      alert('Stripe checkout is unavailable right now — contact us on WhatsApp to reserve your slot for now.');
      window.open(WHATSAPP.url, '_blank', 'noopener,noreferrer');
      setIsLoading(false);
    }
  }

  return { startCheckout, isLoading };
}
