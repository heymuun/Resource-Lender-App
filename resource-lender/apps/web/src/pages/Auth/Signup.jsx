import React, { useState } from 'react'
import { signup } from '../../services/api'
import { useNavigate, Link } from 'react-router-dom'
import { IoPersonAddOutline } from 'react-icons/io5'

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function onChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await signup(form)
      navigate('/')
    } catch (err) {
      alert('Signup failed. The email might already be in use.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card form-card">
      <h2>Create Your Account</h2>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={onChange} required placeholder="Your Full Name" />
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input name="password" type="password" value={form.password} onChange={onChange} required placeholder="Minimum 6 characters" />
        </label>
        <div className="actions">
          <button className="btn primary" type="submit" disabled={loading}>
            <IoPersonAddOutline className="btn-icon" />
            {loading ? 'Creating...' : 'Create Account'}
          </button>
        </div>
        <p className="muted" style={{ marginTop: '20px', textAlign: 'center' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }}>Sign in</Link>
        </p>
      </form>
    </div>
  )
}