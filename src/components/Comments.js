import React, { useState } from 'react'
import video from "../data/video.js"

function Comments ({ comments }) {
  const commentsInfo = video.comments.map((comment) => (
    <div key={comment.id}>
    <h2>{comment.user}</h2>
    <span>{comment.comment}</span>
    </div>
  ))
   const [showComments, setShowComments] = useState(true)
   const toggleComments = () => {
    setShowComments(prevShowComments => !prevShowComments)
   }
    
    return (
        <div>
            <button onClick={toggleComments}>{showComments ? "Hide Comments" : "ShowComments"}</button>
            <h2>{video.comments.length} Comments</h2>
            
                <ul>
                    {showComments && commentsInfo}
                </ul>
            
        </div>
    )
    }



export default Comments