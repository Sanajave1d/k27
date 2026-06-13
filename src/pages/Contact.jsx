import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import { useRef } from 'react'



gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const movingtextref = useRef(null)

  useGSAP(() => {
    const handleScroll = () => {
        const scrollY = window.scrollY
        const rotation = scrollY * 0.02 // adjust multiplier for speed
        gsap.to(movingtextref.current, {
            rotateZ: rotation,
            transformOrigin: 'center center',
            duration: 0.5,
            ease: 'power2.out'
        })
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div className='bg-black w-screen' >
      <div className='lg:pt-0 pt-12' >
        <div className="hero flex items-end justify-center gap-[2vw] pt-4 ">
        <h4 className='font-[font2] text-center text-white text-[1.2vw] leading-[1.4]' >Dans un écran ou un bureau. <br />
          Chez vous. Chez nous. <br />
          Partout.</h4>
        <h1 className='font-[font1] text-center text-white text-[10vw] leading-[8.5vw] uppercase' >
          Pour <br />
          parler de <br />
          votre <br />
          projet<br />
        </h1>
        <h4 className='font-[font2] text-center text-white text-[1.2vw] leading-[1.4]' >
          525 Av. Viger O - Suite 400 <br />
          Montréal, QC H2Z 1G6 →</h4>
      </div>
      <div className="movingtext overflow-hidden flex items-center lg:h-[35vh] h-[10vh] mt-15 w-full ">
        <div ref={movingtextref} className="move flex gap-4 items-center justify-center h-[22vh] bg-[#F0FF7C] hover:bg-white transition-all duration-200 min-w-max">
          <h2 className='font-[font2] text-[10vw] pt-2 leading-[1] translate-y-[0.15em] uppercase'>bonjour@k72.ca</h2>
          <div className="lg:w-[8vw] w-[4vw] h-[4vw] lg:h-[8vw] leading-[1] translate-y-[0.1em] bg-black rounded-full flex-shrink-0"></div>
          <h2 className='font-[font2] text-[10vw] pt-2 leading-[1] translate-y-[0.15em]  uppercase'>bonjour@k72.ca</h2>
          <div className="lg:w-[8vw] w-[4vw] h-[4vw] lg:h-[8vw] leading-[1] translate-y-[0.1em] bg-black rounded-full flex-shrink-0"></div>
        </div>
      </div>
      <div className='w-full flex flex-col gap-5 align-center justify-center pt-15 bg-black' >
        <h5 className='font-[font2] text-white text-sm text-center uppercase ' >Suivez-nous</h5>
        <div className="flex lg:items-center justify-center gap-3">
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >FB</div>
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >IG</div>
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >IN</div>
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >BE</div>
        </div>
      </div>
      </div>
      <div className='mt-20' >
        <div className="hero flex items-end justify-center gap-[2vw] pt-4 ">
        <h4 className='font-[font2] text-center text-white text-[1.2vw] leading-[1.4]' >Dans un écran ou un bureau. <br />
          Chez vous. Chez nous. <br />
          Partout.</h4>
        <h1 className='font-[font1] text-center text-white text-[10vw] leading-[8.5vw] uppercase' >
          Pour <br />
          parler de <br />
          votre <br />
          marque<br />
        </h1>
        <h4 className='font-[font2] text-center text-white text-[1.2vw] leading-[1.4]' >
          525 Av. Viger O - Suite 400 <br />
          Montréal, QC H2Z 1G6 →</h4>
      </div>
      <div className="movingtext overflow-hidden flex items-center lg:h-[35vh] h-[10vh] mt-15 w-full ">
        <div ref={movingtextref} className="move flex gap-4 items-center justify-center h-[22vh] bg-[#F0FF7C] hover:bg-white transition-all duration-200 min-w-max">
          <h2 className='font-[font2] text-[10vw] pt-2 leading-[1] translate-y-[0.15em] uppercase'>bonjour@k72.ca</h2>
          <div className="lg:w-[8vw] w-[4vw] h-[4vw] lg:h-[8vw] leading-[1] translate-y-[0.1em] bg-black rounded-full flex-shrink-0"></div>
          <h2 className='font-[font2] text-[10vw] pt-2 leading-[1] translate-y-[0.15em]  uppercase'>bonjour@k72.ca</h2>
          <div className="lg:w-[8vw] w-[4vw] h-[4vw] lg:h-[8vw] leading-[1] translate-y-[0.1em] bg-black rounded-full flex-shrink-0"></div>
        </div>
      </div>
      <div className='w-full flex flex-col gap-5 align-center justify-center pt-15 bg-black' >
        <h5 className='font-[font2] text-white text-sm text-center uppercase ' >Suivez-nous</h5>
        <div className="flex lg:items-center justify-center gap-3">
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >FB</div>
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >IG</div>
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >IN</div>
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >BE</div>
        </div>
      </div>
      </div>
      <div className='mt-20' >
        <div className="hero flex items-end justify-center gap-[2vw] pt-4 ">
        <h4 className='font-[font2] text-center text-white text-[1.2vw] leading-[1.4]' >Dans un écran ou un bureau. <br />
          Chez vous. Chez nous. <br />
          Partout.</h4>
        <h1 className='font-[font1] text-center text-white text-[10vw] leading-[8.5vw] uppercase' >
          Pour <br />
          parler de <br />
          votre <br />
          nature<br />
        </h1>
        <h4 className='font-[font2] text-center text-white text-[1.2vw] leading-[1.4]' >
          525 Av. Viger O - Suite 400 <br />
          Montréal, QC H2Z 1G6 →</h4>
      </div>
      <div className="movingtext overflow-hidden flex items-center lg:h-[35vh] h-[10vh] mt-15 w-full ">
        <div ref={movingtextref} className="move flex gap-4 items-center justify-center h-[22vh] bg-[#F0FF7C] hover:bg-white transition-all duration-200 min-w-max">
          <h2 className='font-[font2] text-[10vw] pt-2 leading-[1] translate-y-[0.15em] uppercase'>bonjour@k72.ca</h2>
          <div className="lg:w-[8vw] w-[4vw] h-[4vw] lg:h-[8vw] leading-[1] translate-y-[0.1em] bg-black rounded-full flex-shrink-0"></div>
          <h2 className='font-[font2] text-[10vw] pt-2 leading-[1] translate-y-[0.15em]  uppercase'>bonjour@k72.ca</h2>
          <div className="lg:w-[8vw] w-[4vw] h-[4vw] lg:h-[8vw] leading-[1] translate-y-[0.1em] bg-black rounded-full flex-shrink-0"></div>
        </div>
      </div>
      <div className='w-full flex flex-col gap-5 align-center justify-center pt-15 bg-black' >
        <h5 className='font-[font2] text-white text-sm text-center uppercase ' >Suivez-nous</h5>
        <div className="flex lg:items-center justify-center gap-3">
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >FB</div>
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >IG</div>
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >IN</div>
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >BE</div>
        </div>
      </div>
      </div>
      <div className='mt-20' >
        <div className="hero flex items-end justify-center gap-[2vw] pt-4 ">
        <h4 className='font-[font2] text-center text-white text-[1.2vw] leading-[1.4]' >Dans un écran ou un bureau. <br />
          Chez vous. Chez nous. <br />
          Partout.</h4>
        <h1 className='font-[font1] text-center text-white text-[10vw] leading-[8.5vw] uppercase' >
          Pour <br />
          parler de <br />
          résultats<br />
        </h1>
        <h4 className='font-[font2] text-center text-white text-[1.2vw] leading-[1.4]' >
          525 Av. Viger O - Suite 400 <br />
          Montréal, QC H2Z 1G6 →</h4>
      </div>
      <div className="movingtext overflow-hidden flex items-center lg:h-[35vh] h-[10vh] mt-15 w-full ">
        <div ref={movingtextref} className="move flex gap-4 items-center justify-center h-[22vh] bg-[#F0FF7C] hover:bg-white transition-all duration-200 min-w-max">
          <h2 className='font-[font2] text-[10vw] pt-2 leading-[1] translate-y-[0.15em] uppercase'>bonjour@k72.ca</h2>
          <div className="lg:w-[8vw] w-[4vw] h-[4vw] lg:h-[8vw] leading-[1] translate-y-[0.1em] bg-black rounded-full flex-shrink-0"></div>
          <h2 className='font-[font2] text-[10vw] pt-2 leading-[1] translate-y-[0.15em]  uppercase'>bonjour@k72.ca</h2>
          <div className="lg:w-[8vw] w-[4vw] h-[4vw] lg:h-[8vw] leading-[1] translate-y-[0.1em] bg-black rounded-full flex-shrink-0"></div>
        </div>
      </div>
      <div className='w-full flex flex-col gap-5 align-center justify-center pt-15 bg-black' >
        <h5 className='font-[font2] text-white text-sm text-center uppercase ' >Suivez-nous</h5>
        <div className="flex lg:items-center justify-center gap-3">
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >FB</div>
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >IG</div>
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >IN</div>
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >BE</div>
        </div>
      </div>
      </div>
      <div className='mt-20' >
        <div className="hero flex items-end justify-center gap-[2vw] pt-4 ">
        <h4 className='font-[font2] text-center text-white text-[1.2vw] leading-[1.4]' >Dans un écran ou un bureau. <br />
          Chez vous. Chez nous. <br />
          Partout.</h4>
        <h1 className='font-[font1] text-center text-white text-[10vw] leading-[8.5vw] uppercase' >
          Pour <br />
          parler de <br />
          parler<br />
        </h1>
        <h4 className='font-[font2] text-center text-white text-[1.2vw] leading-[1.4]' >
          525 Av. Viger O - Suite 400 <br />
          Montréal, QC H2Z 1G6 →</h4>
      </div>
      <div className="movingtext overflow-hidden flex items-center lg:h-[35vh] h-[10vh] mt-15 w-full ">
        <div ref={movingtextref} className="move flex gap-4 items-center justify-center h-[22vh] bg-[#F0FF7C] hover:bg-white transition-all duration-200 min-w-max">
          <h2 className='font-[font2] text-[10vw] pt-2 leading-[1] translate-y-[0.15em] uppercase'>bonjour@k72.ca</h2>
          <div className="lg:w-[8vw] w-[4vw] h-[4vw] lg:h-[8vw] leading-[1] translate-y-[0.1em] bg-black rounded-full flex-shrink-0"></div>
          <h2 className='font-[font2] text-[10vw] pt-2 leading-[1] translate-y-[0.15em]  uppercase'>bonjour@k72.ca</h2>
          <div className="lg:w-[8vw] w-[4vw] h-[4vw] lg:h-[8vw] leading-[1] translate-y-[0.1em] bg-black rounded-full flex-shrink-0"></div>
        </div>
      </div>
      <div className='w-full flex flex-col gap-5 align-center justify-center pt-15 bg-black' >
        <h5 className='font-[font2] text-white text-sm text-center uppercase ' >Suivez-nous</h5>
        <div className="flex lg:items-center justify-center gap-3">
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >FB</div>
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >IG</div>
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >IN</div>
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >BE</div>
        </div>
      </div>
      </div>
      <div className='mt-20' >
        <div className="hero flex items-end justify-center gap-[2vw] pt-4 ">
        <h4 className='font-[font2] text-center text-white text-[1.2vw] leading-[1.4]' >Dans un écran ou un bureau. <br />
          Chez vous. Chez nous. <br />
          Partout.</h4>
        <h1 className='font-[font1] text-center text-white text-[10vw] leading-[8.5vw] uppercase' >
          Pour <br />
          parler de <br />
          ambitions<br />
        </h1>
        <h4 className='font-[font2] text-center text-white text-[1.2vw] leading-[1.4]' >
          525 Av. Viger O - Suite 400 <br />
          Montréal, QC H2Z 1G6 →</h4>
      </div>
      <div className="movingtext overflow-hidden flex items-center lg:h-[35vh] h-[10vh] mt-15 w-full ">
        <div ref={movingtextref} className="move flex gap-4 items-center justify-center h-[22vh] bg-[#F0FF7C] hover:bg-white transition-all duration-200 min-w-max">
          <h2 className='font-[font2] text-[10vw] pt-2 leading-[1] translate-y-[0.15em] uppercase'>bonjour@k72.ca</h2>
          <div className="lg:w-[8vw] w-[4vw] h-[4vw] lg:h-[8vw] leading-[1] translate-y-[0.1em] bg-black rounded-full flex-shrink-0"></div>
          <h2 className='font-[font2] text-[10vw] pt-2 leading-[1] translate-y-[0.15em]  uppercase'>bonjour@k72.ca</h2>
          <div className="lg:w-[8vw] w-[4vw] h-[4vw] lg:h-[8vw] leading-[1] translate-y-[0.1em] bg-black rounded-full flex-shrink-0"></div>
        </div>
      </div>
      <div className='w-full flex flex-col gap-5 align-center justify-center pt-15 bg-black' >
        <h5 className='font-[font2] text-white text-sm text-center uppercase ' >Suivez-nous</h5>
        <div className="flex lg:items-center justify-center gap-3">
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >FB</div>
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >IG</div>
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >IN</div>
          <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >BE</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
