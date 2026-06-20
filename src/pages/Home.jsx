import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const home = () => {
  return (
    <div>
      <div className='overflow-auto h-screen w-screen fixed'>
        <Video />
      </div>

      <div className='h-screen w-sreen relative flex flex-col justify-between overflow-hidden items-center text-white'>
        <HomeHeroText/>
        <HomeBottomText />
      </div>
    </div>
  )
}

export default home
