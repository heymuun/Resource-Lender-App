import React, { useState } from 'react'
import { login } from '../../services/api'
import { useNavigate, Link } from 'react-router-dom'
import { IoLogInOutline } from 'react-icons/io5'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await login({ email, password })
      navigate('/')
    } catch (err) {
      alert(err.message || 'Login failed. Check your credentials.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card form-card">
      <h2>Welcome Back!</h2>
      <form onSubmit={onSubmit}>
        <label>
          Email
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Enter your secure password" />
        </label>
        <div className="actions">
          <button className="btn primary" type="submit" disabled={loading}>
            <IoLogInOutline className="btn-icon" />
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </div>
        <p className="muted" style={{ marginTop: '20px', textAlign: 'center' }}>
          Don't have an account? <Link to="/signup" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }}>Create one</Link>
        </p>
      </form>
    </div>
  )
}