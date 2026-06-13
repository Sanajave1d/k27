import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div>
      <div className='font-[font2] flex align-center justify-center gap-4 lg:p-0 pb-10'>
        <p className='font-[font1] absolute lg:right-10 right-0 lg:bottom-30 bottom-40 lg:text-sm text-xs lg:w-90 w-80' >K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
        </p>
        <div className='lg:text-[6vw] text-[7vw] rounded-full border-3 border-white  pt-3 leading-[5.5vw] px-5  uppercase hover:border-[rgb(211,253,80)]' >
          <Link className='hover:text-[rgb(211,253,80)] ' to='/projects'>Projects</Link>
        </div>
        <div className='lg:text-[6vw] text-[7vw] rounded-full border-3 border-white  pt-3 leading-[5.5vw] px-5 uppercase hover:border-[rgb(211,253,80)]'>
          <Link className='hover:text-[rgb(211,253,80)]' to='/agence'>Agence</Link>

        </div>
      </div>
    </div>
  )
}

export default HomeBottomText
