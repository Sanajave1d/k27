import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const ProjectsCard = (props) => {
    const projecttextref = useRef(null)

    const handleMouseEnter = (e) => {
        const overlay = e.currentTarget.querySelector('.overlay')
        gsap.to(overlay, {
            display: 'block',
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out'
        })
    }
    const handleMouseLeave = (e) => {
        const overlay = e.currentTarget.querySelector('.overlay')
        gsap.to(overlay, {
            opacity: 0,
            y: -40,
            duration: 0.4,
            ease: 'power2.in',
            onComplete: () => {
                overlay.style.display = 'none'
            }
        })
    }
    return (
        <>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='lg:w-1/2 lg:h-full relative project rounded-none hover:cursor-pointer hover:rounded-[50px] duration-500 transition-all ease-linear overflow-hidden w-full h-[32vh] ' >
                <img className=' w-full h-full object-cover ' src={props.image1} alt="project 1" />
                <div style={{ display: 'none', opacity: 0, transform: 'translateY(-40px)' }} className='overlay absolute top-1/2 left-0 -translate-y-1/2  p-6 w-full h-full' >
                    <h2 className='font-[font2] text-[4.5vw] text-center text-white pt-4   border-2 rounded-[50px] leading-[0.8]' >VIEW THE PROJECT</h2>
                </div>
            </div>
            <div onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='lg:h-full lg:w-1/2 relative project rounded-none hover:cursor-pointer hover:rounded-[50px] duration-500 transition-all ease-linear overflow-hidden w-full h-[32vh] ' >
                <img className=' w-full h-full object-cover ' src={props.image2} alt="project 2" />
                <div style={{ display: 'none', opacity: 0, transform: 'translateY(-40px)' }} className='overlay absolute top-1/2 left-0 -translate-y-1/2  p-6 w-full h-full' >
                    <h2 className='font-[font2] text-[4.5vw] text-center text-white pt-4   border-2 rounded-[50px] leading-[0.8]' >VIEW THE PROJECT</h2>
                </div>
            </div>
        </>
    )
}

export default ProjectsCard
