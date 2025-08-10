import React, { useState } from 'react'
import { createLead } from '../lib/supabase'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await createLead(form)
      setSuccess(true)
      setForm({ name: '', email: '', budget: '', message: '' })
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1>Contact</h1>
      {success && <p style={{ color: 'green' }}>Message envoyé avec succès ✅</p>}
      {error && <p style={{ color: 'red' }}>Erreur : {error}</p>}
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <input
          type="text"
          name="budget"
          placeholder="Budget"
          value={form.budget}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <button type="submit" disabled={loading} style={{ padding: '0.7rem 1.5rem' }}>
          {loading ? 'Envoi...' : 'Envoyer'}
        </button>
      </form>
    </div>
  )
}
CTRL+D



