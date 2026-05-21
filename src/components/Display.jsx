import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'
import '../stylesheet/Display.css'

const Display = () => {

  const displayRef = useRef()
  const location = useLocation()

  const isAlbum = location.pathname.includes("album")

  const albumId = isAlbum
    ? location.pathname.slice(-1)
    : ""

  const bgColor = isAlbum
    ? albumsData[Number(albumId)].bgColor
    : "#121212"

  useEffect(() => {

    if (displayRef.current) {

      if (isAlbum) {
        displayRef.current.style.background =
          `linear-gradient(${bgColor}, #121212 60%)`
      }

      else {
        displayRef.current.style.background = "#121212"
      }
    }

  }, [isAlbum, bgColor])

  return (

    <div
      ref={displayRef}
      className="display"
    >

      <div className="display-container">

        <Routes>

          <Route
            path='/'
            element={<DisplayHome />}
          />

          <Route
            path='/album/:id'
            element={<DisplayAlbum />}
          />

        </Routes>

      </div>

    </div>
  )
}

export default Display