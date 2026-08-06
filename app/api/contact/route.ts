import { NextResponse } from 'next/server'

import { profile } from '@/lib/data'

type ContactRequest = {
  name?: unknown
  email?: unknown
  message?: unknown
}

function asTrimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactRequest | null

  if (!payload) {
    return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 })
  }

  const name = asTrimmedString(payload.name)
  const email = asTrimmedString(payload.email)
  const message = asTrimmedString(payload.message)

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: 'Message is too long.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY?.trim()
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() ?? profile.email
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim()

  if (!apiKey || !fromEmail) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('Demo contact submission', { name, email, message })

      return NextResponse.json({
        ok: true,
        demo: true,
        message: 'Demo submission received. Configure Resend to send live email.',
      })
    }

    return NextResponse.json(
      { error: 'Contact email is not configured for production.' },
      { status: 503 },
    )
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Portfolio inquiry from ${name}`,
      text: message,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()

    return NextResponse.json(
      { error: `Failed to send email. ${errorText}` },
      { status: 502 },
    )
  }

  return NextResponse.json({
    ok: true,
    message: 'Your message was sent successfully.',
  })
}