import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please try again shortly.' }, { status: 429 });
  }

  let body: { name?: string; email?: string; company?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, company, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: 'Webforsa <hello@webforsa.com>',
      to: 'hello@webforsa.com',
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany/Website: ${company || 'N/A'}\n\nMessage:\n${message}`,
    });
  } catch {
    return NextResponse.json({ error: 'Failed to send message. Please email us directly.' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
