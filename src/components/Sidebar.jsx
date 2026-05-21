import React from 'react'
import { assets } from '../assets/assets'
import '../stylesheet/Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar-container">

      {/* Top */}
      <div className="sidebar-top">

        <div className="sidebar-link">
          <img className="sidebar-icon" src={assets.home_icon} alt="" />
          <p>Home</p>
        </div>

        <div className="sidebar-link">
          <img className="sidebar-icon" src={assets.search_icon} alt="" />
          <p>Search</p>
        </div>

      </div>

      {/* Library */}
      <div className="sidebar-library">

        <div className="library-header">

          <div className="library-title">
            <img className="sidebar-icon" src={assets.stack_icon} alt="" />

            <p>
              Your Library
            </p>
          </div>

          <div className="library-icons">

            <img
              className="library-small-icon"
              src={assets.arrow_icon}
              alt=""
            />

            <img
              className="library-small-icon"
              src={assets.plus_icon}
              alt=""
            />

          </div>

        </div>

        {/* Playlist Box */}
        <div className="sidebar-box">

          <h1>
            Create your first playlist
          </h1>

          <p>
            it's easy we will help you
          </p>

          <button>
            Create Playlist
          </button>

        </div>

        {/* Podcast Box */}
        <div className="sidebar-box">

          <h1>
            Let's find some podcasts to follow
          </h1>

          <p>
            we'll keep you update on new episode
          </p>

          <button>
            Browse podcasts
          </button>

        </div>

      </div>

    </div>
  )
}

export default Sidebar