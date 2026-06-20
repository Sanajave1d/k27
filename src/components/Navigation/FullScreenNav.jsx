import { useGSAP } from '@gsap/react'
import React, { useContext, useRef } from 'react'
import gsap from 'gsap'
import { NavBarContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'

const FullScreenNav = () => {
    const fullLinksNavRef = useRef(null)
    const fullscreenref = useRef(null)
    const tl = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavBarContext)

    // Create timeline once on mount
    useGSAP(() => {
        tl.current = gsap.timeline({ paused: true })

        tl.current.from('.stairing', {
            height: 0,
            stagger: { amount: -0.25 }
        })
        tl.current.from(fullLinksNavRef.current, {
            opacity: 0
        })
        tl.current.from('#links', {
            opacity: 0,
            rotateX: 90,
            stagger: { amount: 0.25 }
        })
    }, [])

    // React to navOpen changes
    useGSAP(() => {
        if (!tl.current) return

        if (navOpen) {
            fullscreenref.current.style.display = 'block'
            tl.current.restart()
        } else {
            tl.current.reverse().then(() => {
                fullscreenref.current.style.display = 'none'
            })
        }
    }, [navOpen])

    return (
        <div ref={fullscreenref} id='fullscreen' className='hidden fixed inset-0 w-screen h-screen z-50 bg-black text-white'>
            <div className='w-full h-screen fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-gray-900'></div>
                    <div className='stairing h-full w-1/5 bg-gray-900'></div>
                    <div className='stairing h-full w-1/5 bg-gray-900'></div>
                    <div className='stairing h-full w-1/5 bg-gray-900'></div>
                    <div className='stairing h-full w-1/5 bg-gray-900'></div>
                </div>
            </div>
            <div ref={fullLinksNavRef} className='relative'>
                <div className="flex w-full items-start justify-between">
                    <div className='p-2 cursor-pointer'>
                        <div className='lg:w-30 w-16'>
                            <Link to='/'>
                                <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                    <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div onClick={() => setNavOpen(false)} className='crossbox relative w-32 h-32 pt-2 pb-0  cursor-pointer'>
                        <div className='cross w-0.5 h-32 absolute bg-white -rotate-45 origin-top'></div>
                        <div className='cross w-0.5 h-32 absolute bg-white left-1/2 rotate-45 origin-center'></div>
                    </div>
                </div>
                <div className='lg:mt-0 mt-20'>
                    <div id='links' className='relative link origin-top border-t-1 border-white leading-[0.8] lg:pt-2 pt-10 text-center'>
                        <Link to='/projects' onClick={() => setNavOpen(false)} className='font-[font2] text-[9vw] uppercase'>PROJECTS</Link >
                        <div className='movelink pointer-events-none  absolute flex top-0 gap-0 -top-px overflow-hidden whitespace-nowrap'>
                            <div className='moveX min-w-max bg-[#F0FF7C] text-black pt-2 leading-[0.8] flex items-center'>
                                &nbsp;<h2 className='whitespace-nowrap font-[font2] text-[9vw] uppercase'>POUR TOUT VOIR</h2>&nbsp;
                                <img className='h-19 w-50 rounded-full object-cover' src="/bag.jpg" alt="" />
                                &nbsp;<h2 className='whitespace-nowrap font-[font2] text-[9vw] uppercase'>POUR TOUT VOIR</h2>&nbsp;
                                <img className='h-19 w-50 rounded-full object-cover' src="/running.png" alt="" />
                                &nbsp;<h2 className='whitespace-nowrap font-[font2] text-[9vw] uppercase'>POUR TOUT VOIR</h2>&nbsp;
                                <img className='h-19 w-50 rounded-full object-cover' src="/bag.jpg" alt="" />
                                &nbsp;<h2 className='whitespace-nowrap font-[font2] text-[9vw] uppercase'>POUR TOUT VOIR</h2>&nbsp;
                                <img className='h-19 w-50 rounded-full object-cover' src="/running.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div id='links' className='relative link origin-top border-t-1 border-white leading-[0.8] lg:pt-2 pt-10 text-center'>
                        <Link to='/agence' onClick={() => setNavOpen(false)} className='font-[font2] text-[9vw] uppercase'>AGENCE</Link >
                        <div className='movelink pointer-events-none  absolute flex top-0 gap-0 -top-px overflow-hidden whitespace-nowrap'>
                            <div className='moveX min-w-max bg-[#F0FF7C] text-black pt-2 leading-[0.8] flex items-center'>
                                &nbsp;<h2 className='whitespace-nowrap font-[font2] text-[9vw] uppercase'>POUR TOUT SAVOIR</h2>&nbsp;
                                <img className='h-19 w-50 rounded-full object-cover' src="/marble plain.jpg" alt="" />
                                &nbsp;<h2 className='whitespace-nowrap font-[font2] text-[9vw] uppercase'>POUR TOUT SAVOIR</h2>&nbsp;
                                <img className='h-19 w-50 rounded-full object-cover' src="/marble plain.jpg" alt="" />
                                &nbsp;<h2 className='whitespace-nowrap font-[font2] text-[9vw] uppercase'>POUR TOUT SAVOIR</h2>&nbsp;
                                <img className='h-19 w-50 rounded-full object-cover' src="/marble plain.jpg" alt="" />
                                &nbsp;<h2 className='whitespace-nowrap font-[font2] text-[9vw] uppercase'>POUR TOUT SAVOIR</h2>&nbsp;
                                <img className='h-19 w-50 rounded-full object-cover' src="/marble plain.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div id='links' className='relative link origin-top border-t-1 border-white leading-[0.8] lg:pt-2 pt-10 text-center'>
                        <Link to='/contacts' onClick={() => setNavOpen(false)} className='font-[font2] text-[9vw] uppercase'>CONTACT</Link >
                        <div className='movelink pointer-events-none  absolute flex top-0 gap-0 -top-px overflow-hidden whitespace-nowrap'>
                            <div className='moveX min-w-max bg-[#F0FF7C] text-black pt-2 leading-[0.8] flex items-center'>
                                &nbsp;<h2 className='whitespace-nowrap font-[font2] text-[9vw] uppercase'>POUR ENVOYER UN FAX</h2>&nbsp;
                                <img className='h-19 w-50 rounded-full object-cover' src="/bag.jpg" alt="" />
                                &nbsp;<h2 className='whitespace-nowrap font-[font2] text-[9vw] uppercase'>POUR ENVOYER UN FAX</h2>&nbsp;
                                <img className='h-19 w-50 rounded-full object-cover' src="/curly hair.jpg" alt="" />
                                &nbsp;<h2 className='whitespace-nowrap font-[font2] text-[9vw] uppercase'>POUR ENVOYER UN FAX</h2>&nbsp;
                                <img className='h-19 w-50 rounded-full object-cover' src="/bag.jpg" alt="" />
                                &nbsp;<h2 className='whitespace-nowrap font-[font2] text-[9vw] uppercase'>POUR ENVOYER UN FAX</h2>&nbsp;
                                <img className='h-19 w-50 rounded-full object-cover' src="/curly hair.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div id='links' className='relative link origin-top border-y-1 border-white leading-[0.8] lg:pt-2 pt-10 text-center'>
                        <Link to='/blogue' onClick={() => setNavOpen(false)} className='font-[font2] text-[9vw] uppercase'>BLOGUE</Link >
                        <div className='movelink pointer-events-none  absolute flex top-0 gap-0 -top-px overflow-hidden whitespace-nowrap'>
                            <div className='moveX min-w-max bg-[#F0FF7C] text-black pt-2 leading-[0.8] flex items-center'>
                                &nbsp;<h2 className='whitespace-nowrap font-[font2] text-[9vw] uppercase'>LIRE LES ARTICLES</h2>&nbsp;
                                <img className='h-19 w-50 rounded-full object-cover' src="/marble plain.jpg" alt="" />
                                &nbsp;<h2 className='whitespace-nowrap font-[font2] text-[9vw] uppercase'>LIRE LES ARTICLES</h2>&nbsp;
                                <img className='h-19 w-50 rounded-full object-cover' src="/typing.jpg" alt="" />
                                &nbsp;<h2 className='whitespace-nowrap font-[font2] text-[9vw] uppercase'>LIRE LES ARTICLES</h2>&nbsp;
                                <img className='h-19 w-50 rounded-full object-cover' src="/marble plain.jpg" alt="" />
                                &nbsp;<h2 className='whitespace-nowrap font-[font2] text-[9vw] uppercase'>LIRE LES ARTICLES</h2>&nbsp;
                                <img className='h-19 w-50 rounded-full object-cover' src="/typing.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav