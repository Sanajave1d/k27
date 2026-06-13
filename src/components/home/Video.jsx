import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' src="../src/assets/main.mp4" autoPlay muted loop></video>
    </div>
  )
}

export default Video
