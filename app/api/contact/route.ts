import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // Mock processing: log payload
  console.log('[CONTACT] payload', data);
  // TODO: Brancher un mailer (SendGrid / SMTP / autre)
  return NextResponse.json({ ok: true });
}


