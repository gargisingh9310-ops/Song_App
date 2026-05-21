import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import './App.css'
import { PlayerContext } from './context/PlayerContext'

const App = () => {

  const {
    audioRef,
    track
  } = useContext(PlayerContext)

  return (

    <div className="app">

      {/* ===== MAIN SECTION ===== */}
      <div className="main-section">

        {/* ===== DESKTOP SIDEBAR ===== */}
        <div className="sidebar desktop-sidebar">
          <Sidebar />
        </div>

        {/* ===== TABLET SIDEBAR ===== */}
        <div className="sidebar tablet-sidebar">
          <Sidebar />
        </div>

        {/* ===== DISPLAY ===== */}
        <div className="display-section">
          <Display />
        </div>

      </div>

      {/* ===== PLAYER ===== */}
      <div className="player-section">
        <Player />
      </div>

      {/* ===== AUDIO ===== */}
      <audio
        ref={audioRef}
        src={track.file}
        preload="auto"
      />

    </div>
  )
}

export default App