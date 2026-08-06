'use client'

import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'

import { profile } from '@/lib/data'

type FormState = {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

function validateForm(form: FormState): FormErrors {
  const errors: FormErrors = {}

  if (!form.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!form.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!form.message.trim()) {
    errors.message = 'Please include a short project summary.'
  }

  return errors
}

export function ContactCTA() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState('')
  const [statusTone, setStatusTone] = useState<'default' | 'error' | 'success'>('default')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isFormValid = useMemo(() => Object.keys(validateForm(form)).length === 0, [form])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validateForm(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('Fix the highlighted fields and try again.')
      setStatusTone('error')
      return
    }

    setIsSubmitting(true)
    setStatus('Sending your message...')
    setStatusTone('default')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const payload = (await response.json()) as { message?: string; error?: string }

      if (!response.ok) {
        throw new Error(payload.error ?? 'Something went wrong.')
      }

      setForm({ name: '', email: '', message: '' })
      setErrors({})
      setStatus(payload.message ?? 'Your message is on its way.')
      setStatusTone('success')
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Unable to send your message.')
      setStatusTone('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-card section-shell" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">{profile.email}</h2>
        <p className="section-copy">
          Send a brief about the project, the timeline, and the outcome you need.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            onChange={(event) => {
              const value = event.target.value
              setForm((current) => ({ ...current, name: value }))
              if (errors.name) {
                setErrors((current) => ({ ...current, name: undefined }))
              }
            }}
            required
          />
          {errors.name ? (
            <p className="field-error" id="contact-name-error">
              {errors.name}
            </p>
          ) : null}
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            onChange={(event) => {
              const value = event.target.value
              setForm((current) => ({ ...current, email: value }))
              if (errors.email) {
                setErrors((current) => ({ ...current, email: undefined }))
              }
            }}
            required
          />
          {errors.email ? (
            <p className="field-error" id="contact-email-error">
              {errors.email}
            </p>
          ) : null}
        </label>

        <label className="contact-form__full">
          Project details
          <textarea
            name="message"
            rows={6}
            value={form.message}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            onChange={(event) =>
              setForm((current) => ({ ...current, message: event.target.value }))
            }
            required
          />
          {errors.message ? (
            <p className="field-error" id="contact-message-error">
              {errors.message}
            </p>
          ) : null}
        </label>

        <button
          type="submit"
          className="button button--primary"
          disabled={isSubmitting || !isFormValid}
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>

        <p className="form-status" aria-live="polite" data-tone={statusTone}>
          {status}
        </p>

        <p className="terminal-help">
          If sending fails, email {profile.email} directly — your message will still get through.
        </p>
      </form>
    </section>
  )
}