import React, { useEffect } from 'react'
import {Link,Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import NavBar from './components/Navigation/NavBar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/all'
import Contact from './pages/Contact'
import Blogue from './pages/Blogue'
import Footer from './components/common/Footer'


const App = () => {
  useEffect(()=>{
    const lenis = new Lenis()

    //connect lenis to gsap scroll trigger
    lenis.on('scroll',ScrollTrigger.update)

    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)

    return()=>{
      gsap.ticker.remove()
      lenis.destroy()
    }
  },[])
  return (
    <div className='text-6xl overflowx-hidden' >
      <NavBar/>
      <FullScreenNav />
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/agence' element= {<Agence/>}/>
        <Route path='/projects' element= {<Projects/>}/>
        <Route path='/contacts' element= {<Contact/>}/>
        <Route path='/blogue' element= {<Blogue/>}/>
      </Routes>
      
    </div>
  )
}

export default App
