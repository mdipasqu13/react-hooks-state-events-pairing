import React, { useState } from 'react';
// import video from "../data/video.js"

function Buttons ({video}) {
    const [isUpvote, setIsUpvote] = useState(video.upvotes)
    const [isDownvote, setIsDownvote] = useState(video.downvotes)

    const handleUpvote = () => {
        setIsUpvote(prevUpvote => prevUpvote + 1)
    } 
    const handleDownvote = () => {
        setIsDownvote(prevDownvote => prevDownvote + 1)
    }

    return (
        <div>
        <button onClick={handleUpvote}>{isUpvote}👍</button>
        <button onClick={handleDownvote}>{isDownvote}👎</button>
        <br></br>
        </div>
    )
}




export default Buttons