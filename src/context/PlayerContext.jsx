import { createContext, useEffect, useRef, useState } from "react";

import {
    TopIsongs,
    Gsongs,
    Ksongs,
    Dsongs
} from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    // ===== ALL SONGS COMBINED =====

    const songsData = [
        ...TopIsongs,
        ...Gsongs,
        ...Ksongs,
        ...Dsongs
    ];

    // ===== REFS =====

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    // ===== STATES =====

    const [track, setTrack] = useState(songsData[0]);

    const [playStatus, setPlayStatus] = useState(false);

    const [time, setTime] = useState({

        currentTime: {
            second: 0,
            minute: 0
        },

        totalTime: {
            second: 0,
            minute: 0
        }

    });

    // ===== PLAY =====

    const play = () => {

        audioRef.current.play();
        setPlayStatus(true);

    };

    // ===== PAUSE =====

    const pause = () => {

        audioRef.current.pause();
        setPlayStatus(false);

    };

    // ===== PLAY WITH ID =====

    const playWithId = async (id) => {

        await setTrack(songsData[id]);

        setTimeout(() => {

            audioRef.current.play();
            setPlayStatus(true);

        }, 0);

    };

    // ===== PREVIOUS =====

    const previous = async () => {

        if (track.id > 0) {

            await setTrack(songsData[track.id - 1]);

            setTimeout(() => {

                audioRef.current.play();
                setPlayStatus(true);

            }, 0);
        }
    };

    // ===== NEXT =====

    const next = async () => {

        if (track.id < songsData.length - 1) {

            await setTrack(songsData[track.id + 1]);

            setTimeout(() => {

                audioRef.current.play();
                setPlayStatus(true);

            }, 0);
        }
    };

    // ===== SEEK SONG =====

    const seekSong = async (e) => {

        const width = seekBg.current.offsetWidth;

        const offsetX = e.nativeEvent.offsetX;

        audioRef.current.currentTime =
            (offsetX / width) * audioRef.current.duration;

    };

    // ===== TIME UPDATE =====

    useEffect(() => {

        audioRef.current.ontimeupdate = () => {

            // ===== SEEK BAR =====

            seekBar.current.style.width =

                Math.floor(

                    (audioRef.current.currentTime /
                        audioRef.current.duration) * 100

                ) + "%";

            // ===== TIME =====

            setTime({

                currentTime: {

                    second: Math.floor(
                        audioRef.current.currentTime % 60
                    ),

                    minute: Math.floor(
                        audioRef.current.currentTime / 60
                    )

                },

                totalTime: {

                    second: Math.floor(
                        audioRef.current.duration % 60
                    ),

                    minute: Math.floor(
                        audioRef.current.duration / 60
                    )

                }

            });

        };

    }, []);

    // ===== CONTEXT VALUE =====

    const contextValue = {

        audioRef,
        seekBar,
        seekBg,

        track,
        setTrack,

        playStatus,
        setPlayStatus,

        time,
        setTime,

        play,
        pause,

        playWithId,

        previous,
        next,

        seekSong

    };

    return (

        <PlayerContext.Provider value={contextValue}>

            {props.children}

        </PlayerContext.Provider>

    );
};

export default PlayerContextProvider;