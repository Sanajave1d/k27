import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] lg:pt-5 pt-60 text-center'>
      <div className='lg:text-[10vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw]'>L'étincelle</div>
      <div className='lg:text-[10vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] mt-4 flex justify-center align-center '>qui
        <div className='h-[7vw] w-[15vw] rounded-full overflow-hidden' >
            <Video />
        </div>
        génère</div>
      <div className='lg:text-[10vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw]'>la créativité</div>
    </div>
  )
}

export default HomeHeroText
