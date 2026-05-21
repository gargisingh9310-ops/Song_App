import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'

import {
  albumsData,
  assets,
  allSongs,
  TopIsongs,
  Gsongs,
  Ksongs,
  Dsongs
} from '../assets/assets'

import '../stylesheet/DisplayAlbum.css'
import { PlayerContext } from '../context/PlayerContext'

const DisplayAlbum = () => {

  const { id } = useParams()

  const albumData = albumsData[id]

  const { playWithId } = useContext(PlayerContext)

  // ===== DIFFERENT SONGS FOR DIFFERENT ALBUMS =====

  let songsData = []

  if (id == 0) {
    songsData = allSongs
  }

  else if (id == 1) {
    songsData = TopIsongs
  }

  else if (id == 2) {
    songsData = Gsongs
  }

  else if (id == 3) {
    songsData = Ksongs
  }

  else if (id == 4) {
    songsData = Dsongs
  }

  // ===== TOTAL DURATION CALCULATION =====

  const totalMinutes = songsData.reduce((total, song) => {

    const parts = song.duration.split(':')

    const minute = parseInt(parts[0])
    const second = parseInt(parts[1])

    return total + (minute * 60) + second

  }, 0)

  const hours = Math.floor(totalMinutes / 3600)

  const minutes = Math.floor((totalMinutes % 3600) / 60)

  return (

    <div className="display-album">

      <Navbar />

      {/* ===== HEADER ===== */}

      <div className="album-header">

        <img
          className="album-cover"
          src={albumData.image}
          alt={albumData.name}
        />

        <div className="album-info">

          <p className="album-type">
            Playlist
          </p>

          <h1 className="album-title">
            {albumData.name}
          </h1>

          <p className="album-desc">
            {albumData.desc}
          </p>

          <div className="album-meta">

            <img
              src={assets.spotify_logo}
              alt="spotify"
            />

            <span>Spotify</span>

            <span>•</span>

            <span>1,323,154 likes</span>

            <span>•</span>

            <span>{songsData.length} songs</span>

            <span>•</span>

            <span>
              about {hours} hr {minutes} min
            </span>

          </div>

        </div>

      </div>

      {/* ===== TABLE HEADER ===== */}

      <div className="song-table-header">

        <p>
          <b>#</b> Title
        </p>

        <p>
          Album
        </p>

        <p>
          Date Added
        </p>

        <img
          src={assets.clock_icon}
          alt=""
        />

      </div>

      {/* ===== SONG LIST ===== */}

      {
        songsData.map((item, index) => (

          <div
            key={index}
            className="song-row"
            onClick={() => playWithId(item.id)}
          >

            {/* SONG INFO */}

            <div className="song-info">

              <p className="song-number">
                {index + 1}
              </p>

              <img
                src={item.image}
                alt={item.name}
              />

              <p className="song-name">
                {item.name}
              </p>

            </div>

            {/* ALBUM */}

            <p className="song-album">
              {albumData.name}
            </p>

            {/* DATE */}

            <p className="song-date">
              5 days ago
            </p>

            {/* DURATION */}

            <p className="song-duration">
              {item.duration}
            </p>

          </div>
        ))
      }

    </div>
  )
}

export default DisplayAlbum