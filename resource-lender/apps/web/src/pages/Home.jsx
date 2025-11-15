import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoAddCircleOutline, IoLocationOutline, IoBriefcaseOutline } from 'react-icons/io5' // Imported icons
import { fetchListings } from '../services/api'

export default function Home() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetchListings().then(setListings)
  }, [])

  return (
    <div>
      {/* Hero Section - Looks great with the new styles */}
      <section className="hero">
        <h1>Find or lend resources in your community</h1>
        <p>Tools, books, equipment — lend confidently, borrow responsibly.</p>
        <Link to="/create" className="btn primary">
          <IoAddCircleOutline className="btn-icon" /> Create a listing
        </Link>
      </section>

      <h2>Latest Listings</h2>

      <section className="cards">
        {listings.length === 0 ? (
          <div className="empty">No listings yet. Be the first to create one!</div>
        ) : (
          listings.map(l => (
            <article key={l.id} className="card">
              <div className="card-left">
                {/* Thumbnail with a subtle icon for better appeal */}
                <div className="thumbnail">
                  <IoBriefcaseOutline />
                </div>
              </div>
              <div className="card-body">
                <h3>{l.title}</h3>
                <p className="muted">
                  <IoLocationOutline style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                  {l.location} • {l.type}
                </p>
                <p className="desc">{l.description}</p>
                <div className="card-actions">
                  <Link to={`/listing/${l.id}`} className="btn small">View Details</Link>
                </div>
              </div>
            </article>
          ))
        )}
      </section>
    </div>
  )
}