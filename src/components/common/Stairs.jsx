import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {

    const currentPath = useLocation().pathname
    const stairTri = useRef(null)
    const pageRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.to(stairTri.current, {
            display: 'block',
            delay:-0.1
        }
        )
        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.25
            }
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })
        tl.to(stairTri.current, {
            display: 'none'
        }
        )
        tl.to('.stair', {
            y: '0%',
        })

        gsap.from(pageRef.current,{
            opacity:0,
            // delay:1,
            scale:1.2
        })
    }, [currentPath])

    return (
        <div>
            <div ref={stairTri} className='overflow-auto h-screen w-screen top-0 fixed z-20'>
                <div className='h-full w-full flex ' >
                    <div className='stair h-full w-1/5 bg-gray-900'></div>
                    <div className='stair h-full w-1/5 bg-gray-900'></div>
                    <div className='stair h-full w-1/5 bg-gray-900'></div>
                    <div className='stair h-full w-1/5 bg-gray-900'></div>
                    <div className='stair h-full w-1/5 bg-gray-900'></div>
                </div>
            </div>
            <div ref={pageRef} >
                {props.children}
            </div>
        </div>
    )
}

export default Stairs
