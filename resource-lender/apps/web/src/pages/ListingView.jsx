import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { IoLocationOutline, IoTrashOutline, IoShareSocialOutline } from 'react-icons/io5'
import { fetchListingById, removeListing } from '../services/api'

export default function ListingView() {
  const { id } = useParams()
  const [listing, setListing] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchListingById(id).then(setListing)
  }, [id])

  function handleDelete() {
    if (!confirm('Are you sure you want to delete this listing?')) return
    removeListing(id)
    navigate('/')
  }

  if (!listing) return <div className="card">Loading...</div>

  return (
    <div className="listing-view">
      <div className="card">
        <h1>{listing.title}</h1>
        <p className="muted" style={{ marginBottom: '20px' }}>
          <IoLocationOutline style={{ marginRight: '5px', verticalAlign: 'text-bottom' }} />
          **{listing.location}** • Listed as: **{listing.type}**
        </p>

        <h3>Description</h3>
        <p style={{ lineHeight: '1.8' }}>{listing.description}</p>
        
        <div className="actions" style={{ justifyContent: 'flex-start', marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
          <button className="btn primary" onClick={() => alert(`Request sent for: ${listing.title} (mock)`)}>
            Request Item
          </button>
          <button className="btn" onClick={() => alert('Sharing (mock)')} style={{ backgroundColor: '#f0f4f8', color: '#1f2937' }}>
            <IoShareSocialOutline className="btn-icon" /> Share
          </button>
          {/* Assuming current user is the owner, only owner can delete */}
          <button className="btn danger" onClick={handleDelete}>
            <IoTrashOutline className="btn-icon" /> Delete Listing
          </button>
        </div>
      </div>
    </div>
  )
}