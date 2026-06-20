import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ProjectsCard from '../components/ProjectsCard'
import { useRef } from 'react'
import Footer from '../components/common/Footer'


const Projects = () => {
  const projects = [
    {
      image1: '/img/navimg/bag.jpg',
      image2: '/img/navimg/running.png'
    },
    {
      image1: '/img/navimg/iceskate.jpg',
      image2: '/img/navimg/cake.jpg'
    },
    {
      image1: '/img/navimg/eye.jpg',
      image2: '/img/navimg/favorbag.jpg'
    },
    {
      image1: '/img/navimg/drink.jpg',
      image2: '/img/navimg/beardman.jpg'
    },
    {
      image1: '/img/navimg/glass.jpg',
      image2: '/img/navimg/hat.jpg'
    },
    {
      image1: '/img/navimg/cat.jpg',
      image2: '/img/navimg/gradient.jpg'
    },
    {
      image1: '/img/navimg/phone.jpg',
      image2: '/img/navimg/card.jpg'
    },
    {
      image1: '/img/navimg/girl.jpg',
      image2: '/img/navimg/building.jpg'
    },
  ]
  gsap.registerPlugin(ScrollTrigger)


  const lolRef = useRef(null)


  useGSAP(function () {
    const lolHeight = lolRef.current.offsetHeight + 700

    gsap.from('.hero', {
      height: '100px',
      stagger: { amount: 1 },
      scrollTrigger: {
        trigger: lolRef.current,
        start: 'top 80%',
        end: `+=${lolHeight}`,
        scrub: true
      }
    })
  })
  return (
    <div className='lg:p-4 p-2 mb-[100vh]' >
      <div className=' pt-[46vh]'>
        <h2 className='font-[font2] lg:text-[18vw] tracking-tight uppercase' >Projets</h2>
      </div>
      <div ref={lolRef} className='-lg:mt-5 lol'>
        {projects.map(function (elem, idx) {

          return <div key={idx} className='hero w-full lg:h-[500px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectsCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}
      </div>

    </div>
  )
}
export default Projects
