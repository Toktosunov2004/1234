import React from 'react'

import './video.scss'

const Video = () => {
    return (
        <div className='video'>
            <iframe width="1200" height="600" 
            src="https://www.youtube.com/embed/zdkJjqGZJDk?controls=0" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            
        </div>
    )
}

export default Video