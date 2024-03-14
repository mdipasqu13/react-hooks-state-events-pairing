import React from "react"
import video from '../data/video.js'

function Video () {
    return (
        <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    )
}


export default Video