import React from 'react'
import '../stylesheet/AlbumItem.css'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ image, name, desc, id }) => {

  const navigate = useNavigate()

  return (

    <div
      onClick={() => navigate(`/album/${id}`)}
      className="album-item"
    >

      <img
        className="album-image"
        src={image}
        alt={name}
      />

      <p className="album-name">
        {name}
      </p>

      <p className="album-desc">
        {desc}
      </p>

    </div>

  )
}

export default AlbumItem