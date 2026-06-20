import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'
import Footer from '../components/common/Footer'

const Agence = () => {

  const imageDevRef = useRef(null)
  const imageRef = useRef(null)
  const lolRef = useRef(null)

  const imageArray = [
    '/img/Carl.jpg',
    '/img/CAMILLE.jpg',
    '/img/ChantalG.jpg',
    '/img/joel.jpg',
    '/img/MEGGIE.jpg',
    '/img/MEL.jpg',
    '/img/Michele.jpg',
    '/img/Olivier.jpg',
    '/img/CAMILLE.jpg',
  ]
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    const lolHeight = lolRef.current.offsetHeight - 300
    gsap.to(imageDevRef.current, {
      scrollTrigger: {
        trigger: imageDevRef.current,
        start: 'top 1%',
        end: `+=${lolHeight}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          const imgIndex = Math.floor(elem.progress * (imageArray.length - 1))
          imageRef.current.src = imageArray[imgIndex]
        }
      }
    })
  })
  return (
    <div>
      <div  ref={lolRef} className='section1 w-screen lol relative py-1'>
        <div ref={imageDevRef} className='absolute overflow-hidden lg:h-[20vw] lg:w-[15vw] h-[25vw]  lg:top-30 top-10  rounded-3xl left-[30vw]' >
          <img ref={imageRef} className='w-full h-full object-cover rounded-3xl' src={imageArray[0]} />
        </div>
        <div className=' relative font-[font2]' >
          <div className='lg:mt-[55vh] mt-[20vh] overflow-hidden' >
            <h1 className='lg:text-[20vw] text-[17vw] leading-[17vw] text-center uppercase ' >Soixan7e <br />
              Douze</h1>
          </div>
          <div className='lg:pl-[35%] pr-[10%] mt-20'>
            <p className='lg:text-6xl text-[5vw]  lg:tracking-wide lg:mr-[5%] ml-[2%] text-left' >
              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
      <Footer/>
    </div>
  )
}

export default Agence
