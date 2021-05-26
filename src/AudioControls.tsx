import React from 'react'
import { PlayIcon, PauseIcon } from '@heroicons/react/outline'

function AudioControls ({isPlaying, onPlayPauseClick}:any) {
    return(<div className="audio-controls">
        {isPlaying ? (
            <button
                type="button"
                className="rounded-full bg-gradient-to-tr from-blueGray-900 to-coolGray-800 focus:outline-none"
                onClick={() => onPlayPauseClick(false)}
                aria-label="Pause"
            >
                <PauseIcon className="w-16 h-16 p-1 text-white" />
            </button>
        ) : (
            <button
                type="button"
                className="rounded-full bg-gradient-to-tr from-blueGray-900 to-coolGray-800 focus:outline-none"
                onClick={() => onPlayPauseClick(true)}
                aria-label="Play"
            >
                <PlayIcon className="w-16 h-16 p-1 text-white" />
            </button>
        )}
    </div>);
}

export default AudioControls;