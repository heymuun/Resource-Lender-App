import React, { useState, useEffect } from 'react' // **CHANGE 1: Import useState and useEffect**
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { IoHome, IoAddCircle, IoLogOut, IoLogIn, IoPersonAdd } from 'react-icons/io5'
import Home from './pages/Home'
import ListingCreate from './pages/ListingCreate'
import ListingView from './pages/ListingView'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import { getCurrentUser, logout } from './services/api'
import logoImage from './assets/hand.png'
export default function App() {
  const [user, setUser] = useState(getCurrentUser()) 
  const navigate = useNavigate()

  function refreshUser() {
    setUser(getCurrentUser());
  }


  function handleLogout() {
    logout()
    setUser(null) 
    navigate('/login') 
  }

  return (
    <div className="app-root">
      {/* 1. Modern Header/Topbar */}
      <header className="topbar">
        <div className="brand-logo">
          <Link to="/" className="brand-name">
            <img src={logoImage} alt ="Resource Lender logo" className="logo-icon"/> Resource Lender
          </Link>
        </div>

        <nav className="main-nav">
          <Link to="/" className="nav-link">
            <IoHome className="nav-icon" /> Home
          </Link>
          <Link to="/create" className="nav-link">
            <IoAddCircle className="nav-icon" /> Create
          </Link>
        </nav>

        <div className="auth-links">
          {/* This section now re-renders correctly when user state changes */}
          {user ? (
            <>
              <span className="user-greeting">Hi,{user.name}</span>
              <button className="btn btn-logout" onClick={handleLogout}>
                <IoLogOut className="btn-icon" /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-login">
                <IoLogIn className="btn-icon" /> Login
              </Link>
              <Link to="/signup" className="btn btn-primary btn-signup">
                <IoPersonAdd className="btn-icon" /> Signup
              </Link>
            </>
          )}
        </div>
      </header>

      {/* 3. Main Content Wrapper */}
      <div className="main-content">
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<ListingCreate />} />
            <Route path="/listing/:id" element={<ListingView />} />
            <Route path="/login" element={<Login refreshUser={refreshUser} />} /> 
            <Route path="/signup" element={<Signup refreshUser={refreshUser} />} />
          </Routes>
        </main>
      </div>

      {/* 4. Sleek Footer */}
      <footer className="footer">
        <p>Built with &hearts;</p>
      </footer>
    </div>
  )
}