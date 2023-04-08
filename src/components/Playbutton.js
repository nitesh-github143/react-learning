import React, { useState } from 'react'
import './Playbutton.css'

export default function Playbutton({ message, children, onPlay, onPause }) {

    const [playing, setPlaying] = useState(false)

    function handleClick(e) {
        e.stopPropagation()
        if (playing) {
            onPause()
        } else {
            onPlay()
        }
        setPlaying(!playing)
    }

    return (
        <div>
            <button onClick={handleClick}>{children} {playing ? '||' : '>'}</button>
        </div>
    )
}
