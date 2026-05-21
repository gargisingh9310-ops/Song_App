import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import '../stylesheet/Player.css'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong
  } = useContext(PlayerContext)

  return (

    <div className="player">

      {/* ===== LEFT SECTION ===== */}

      <div className="player-left">

        <img
          className="song-image-player"
          src={track.image}
          alt={track.name}
        />

        <div className="song-details">

          <p className="song-name">
            {track.name}
          </p>

          <p className="song-desc">
            {track.desc?.slice(0, 20)}
          </p>

        </div>

      </div>

      {/* ===== CENTER SECTION ===== */}

      <div className="player-center">

        {/* ===== CONTROLS ===== */}

        <div className="player-controls">

          <img
            className="control-icon small-icon"
            src={assets.shuffle_icon}
            alt="shuffle"
          />

          <img
            onClick={previous}
            className="control-icon small-icon"
            src={assets.prev_icon}
            alt="previous"
          />

          {
            playStatus ? (

              <img
                onClick={pause}
                className="control-icon play-icon"
                src={assets.pause_icon}
                alt="pause"
              />

            ) : (

              <img
                onClick={play}
                className="control-icon play-icon"
                src={assets.play_icon}
                alt="play"
              />

            )
          }

          <img
            onClick={next}
            className="control-icon small-icon"
            src={assets.next_icon}
            alt="next"
          />

          <img
            className="control-icon small-icon"
            src={assets.loop_icon}
            alt="loop"
          />

        </div>

        {/* ===== PROGRESS BAR ===== */}

        <div className="progress-section">

          <p className="time-text">

            {time.currentTime.minute}:
            {time.currentTime.second
              .toString()
              .padStart(2, "0")}

          </p>

          <div
            ref={seekBg}
            onClick={seekSong}
            className="progress-bar"
          >

            <hr
              ref={seekBar}
              className="progress-fill"
            />

          </div>

          <p className="time-text">

            {time.totalTime.minute}:
            {time.totalTime.second
              .toString()
              .padStart(2, "0")}

          </p>

        </div>

      </div>

      {/* ===== RIGHT SECTION ===== */}

      <div className="player-right">

        <img
          className="right-icon"
          src={assets.plays_icon}
          alt="playlist"
        />

        <img
          className="right-icon"
          src={assets.mic_icon}
          alt="mic"
        />

        <img
          className="right-icon"
          src={assets.queue_icon}
          alt="queue"
        />

        <img
          className="right-icon"
          src={assets.speaker_icon}
          alt="speaker"
        />

        <img
          className="right-icon"
          src={assets.volume_icon}
          alt="volume"
        />

        <div className="volume-bar">

          <hr className="volume-fill" />

        </div>

        <img
          className="right-icon"
          src={assets.mini_player_icon}
          alt="mini-player"
        />

        <img
          className="right-icon"
          src={assets.zoom_icon}
          alt="zoom"
        />

      </div>

    </div>

  )
}

export default Player