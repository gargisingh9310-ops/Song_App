import React from 'react'
import Navbar from './Navbar'

import {
  albumsData,
  TopIsongs
} from '../assets/assets'

import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

import '../stylesheet/DisplayHome.css'

const DisplayHome = () => {

  return (

    <div className="display-home-container">

      <Navbar />

      {/* ===== ALBUM SECTION ===== */}

      <div className="music-section">

        <h1 className="section-title">
          Featured Charts
        </h1>

        <div className="music-list">

          {
            albumsData.map((item, index) => (

              <AlbumItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />

            ))
          }

        </div>

      </div>

      {/* ===== SONG SECTION ===== */}

      <div className="music-section">

        <h1 className="section-title">
          Today's Biggest Hits
        </h1>

        <div className="music-list">

          {
            TopIsongs.map((item, index) => (

              <SongItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />

            ))
          }

        </div>

      </div>

    </div>
  )
}

export default DisplayHome