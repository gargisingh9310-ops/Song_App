import React from 'react'
import { assets } from '../assets/assets'
import '../stylesheet/Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (

    <>

      {/* ===== NAVBAR ===== */}

      <div className="navbar">

        {/* LEFT SIDE */}

        <div className="navbar-left">

          <img
            onClick={() => navigate(-1)}
            className="nav-icon"
            src={assets.arrow_left}
            alt="back"
          />

          <img
            onClick={() => navigate(1)}
            className="nav-icon"
            src={assets.arrow_right}
            alt="forward"
          />

        </div>

        {/* RIGHT SIDE */}

        <div className="navbar-right">

          <p className="premium-btn">
            Explore Premium
          </p>

          <p className="install-btn">
            Install App
          </p>

          <p className="profile-btn">
            G
          </p>

        </div>

      </div>

      {/* ===== MENU ===== */}

      <div className="navbar-menu">

        <p className="menu-btn active">
          All
        </p>

        <p className="menu-btn">
          Music
        </p>

        <p className="menu-btn">
          Podcasts
        </p>

      </div>

    </>

  )
}

export default Navbar