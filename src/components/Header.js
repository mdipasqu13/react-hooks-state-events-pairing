import React from 'react'
// import video from "../data/video.js"


function Header ({video}) {
    return (
        <div>
        <h1>{video.title}</h1>
        <span>{video.views} Views | Uploaded {video.createdAt}</span>
        </div>
    )
}



export default Header