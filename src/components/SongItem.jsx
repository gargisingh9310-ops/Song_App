import React, { useContext } from 'react'
import '../stylesheet/SongItem.css'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({ name, image, desc, id }) => {

  const { playWithId } = useContext(PlayerContext)

  return (

    <div
      onClick={() => playWithId(id)}
      className="song-item"
    >

      <img
        className="song-image"
        src={image}
        alt={name}
      />

      <p className="song-name">
        {name}
      </p>

      <p className="song-desc">
        {desc}
      </p>

    </div>

  )
}

export default SongItem