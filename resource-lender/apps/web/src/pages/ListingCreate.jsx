import React, { useState } from 'react'
import { createListing } from '../services/api'
import { useNavigate } from 'react-router-dom'
import { IoCloudUploadOutline } from 'react-icons/io5'

export default function ListingCreate() {
  const [form, setForm] = useState({ title: '', location: '', type: '', description: '' })
  const [saving, setSaving] = useState(false)
  const navigate = useNavigate()

  function onChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setSaving(true)
    try {
      const id = await createListing(form)
      navigate(`/listing/${id}`)
    } catch (err) {
      alert('Error saving listing')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="card form-card">
      <h2>Create New Listing</h2>
      <form onSubmit={onSubmit}>
        <label>
          Title
          <input name="title" value={form.title} onChange={onChange} placeholder="e.g., Electric Drill" required />
        </label>
        <label>
          Type (e.g., Book, Tool, Camera)
          <input name="type" value={form.type} onChange={onChange} placeholder="e.g., Tool" required />
        </label>
        <label>
          Location
          <input name="location" value={form.location} onChange={onChange} placeholder="e.g., Downtown, Sector 5" required />
        </label>
        <label>
          Description
          <textarea name="description" value={form.description} onChange={onChange} rows={6} placeholder="Describe the item, condition, and lending terms." />
        </label>
        <div className="actions">
          <button className="btn primary" type="submit" disabled={saving}>
            <IoCloudUploadOutline className="btn-icon" />
            {saving ? 'Creating...' : 'Publish Listing'}
          </button>
        </div>
      </form>
    </div>
  )
}