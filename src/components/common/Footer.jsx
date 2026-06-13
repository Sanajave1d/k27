import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black flex flex-col lg:pb-4 pb-0 p-4 justify-between w-screen h-[70vh]'>
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-50 justify-between lg:items-center items-start p-3">
        <div className="flex lg:items-center items-start justify-start gap-3">
            <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >FB</div>
            <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >IG</div>
            <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >IN</div>
            <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-3' >BE</div>
        </div>
            <div className='font-[font2] cursor-pointer hover:text-[#F0FF7C] ease-in duration-300 lg:text-[5vw] text-[7vw] text-white border-2 rounded-[30%]  pt-3 px-7' >CONTACT</div>

      </div>
      <div className='font-[font1] text-white lg:text-[1.5vw] text-[3vw] flex lg:flex-row flex-col lg:gap-5 gap-2 pb-2 justify-center lg:items-center items-start lg:pb-4' >
        <h3>MONTREAL_11:30:35</h3>
        <h3>Politique de confidentialité</h3>
        <h3>Avis de confidentialité</h3>
        <h3>Rapport éthique</h3>
        <h3>Rapport éthique</h3>
        <h3>Retour en haut</h3>
      </div>
    </div>
  )
}

export default Footer
