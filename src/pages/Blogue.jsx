import React from 'react'
import Footer from '../components/common/Footer'

const Blogue = () => {
    return (
        <div className='w-screen h-screen' >
            <div className=' w-full lg:h-[80vh] h-[40vh] border-black border-b '>
                <div className="flex gap-4  lg:items-center items-start lg:pt-[32vh] pt-[15vh] pl-[12vw]">
                    <div className="lg:w-[1vw] w-[4vw] h-[4vw] lg:h-[1vw] bg-black rounded-full "></div>
                    <h3 className='font-[font2] text-xl'>Blogue</h3>
                </div>
                <div className='lg:pt-[35vh] pt-[10vh] lg:flex flex lg:flex-row flex-col lg:items-center items-start justify-end font-[font1] text-xl gap-1 p-3 ' >
                    <h4 className='' >Catégories :</h4>
                    <div className='flex items-center gap-1' >
                        <div className="bg-[#EDEDED] font-[font2] cursor-pointer py-1 px-2 hover:bg-[#F0FF7C] transition-colors lg:text-sm text-xs  duration-300 ease-in-out ">Tout</div>
                        <div className="bg-black text-white font-[font2] cursor-pointer py-1 px-2 hover:bg-[#F0FF7C] hover:text-black transition-colors lg:text-sm text-xs duration-300 ease-in-out ">Creation</div>
                        <div className="bg-[#EDEDED] font-[font2] cursor-pointer py-1 px-2 hover:bg-[#F0FF7C] transition-colors lg:text-sm text-xs duration-300 ease-in-out ">Tech & IA</div>
                        <div className="bg-[#EDEDED] font-[font2] cursor-pointer py-1 px-2 hover:bg-[#F0FF7C] transition-colors lg:text-sm text-xs duration-300 ease-in-out ">Conseil</div>
                    </div>
                </div>
            </div>
            <div className="w-full p-3">
                <div className="flex lg:flex-row flex-col gap-3">
                    <div className="lg:w-[49%] w-full ">
                        <img className='rounded-[8%] w-full lg:h-[70vh] h-[30vh] object-cover' src="../public/img/navimg/typing.jpg" alt="" />
                        <div className="flex flex-col">
                            <div className="flex gap-4 pt-5  items-center">
                                <div className="lg:w-[1vw] w-[4vw] h-[4vw] lg:h-[1vw] bg-black rounded-full "></div>
                                <h3 className='font-[font2] text-xl'>20 Oct 2025</h3>
                            </div>
                            <h3 className='font-[font2] lg:text-[2vw] text-[4vw] lg:w-[30vw] w-full pt-5 uppercase'>
                                Écrire un article sur l’écriture d’un article avec ChatGPT : plongée dans la mise en abyme
                            </h3>
                            <div className='flex items-center gap-1 pt-4' >
                                <div className="bg-[#EDEDED] font-[font2] text-lg cursor-pointer py-1 px-2 hover:bg-[#F0FF7C] transition-colors  duration-300 ease-in-out ">Tech & IA</div>
                                <div className="bg-[#EDEDED] font-[font2] text-lg cursor-pointer py-1 px-2 hover:bg-[#F0FF7C] transition-colors  duration-300 ease-in-out ">Creations</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[49%] w-full ">
                        <img className='rounded-[8%] w-full lg:h-[70vh] h-[30vh] object-cover' src="../public/img/navimg/virtual hand.png" alt="" />
                        <div className="flex flex-col">
                            <div className="flex gap-4 pt-5  items-center">
                                <div className="lg:w-[1vw] w-[4vw] h-[4vw] lg:h-[1vw] bg-black rounded-full "></div>
                                <h3 className='font-[font2] text-xl'>20 Oct 2025</h3>
                            </div>
                            <h3 className='font-[font2] lg:text-[2vw] text-[4vw] lg:w-[30vw] w-full pt-5 uppercase'>
                                Pub prédictive: L’IA révolutionne le ciblage
                            </h3>
                            <div className='flex items-center gap-1 pt-4' >
                                <div className="bg-[#EDEDED] font-[font2] text-lg cursor-pointer py-1 px-2 hover:bg-[#F0FF7C] transition-colors  duration-300 ease-in-out ">Tech & IA</div>
                                <div className="bg-[#EDEDED] font-[font2] text-lg cursor-pointer py-1 px-2 hover:bg-[#F0FF7C] transition-colors  duration-300 ease-in-out ">Creations</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col pt-5 gap-3">
                    <div className="lg:w-[49%] w-full">
                        <img className='rounded-[8%] w-full lg:h-[70vh] h-[30vh] object-cover' src="../public/img/navimg/girl.jpg" alt="" />
                        <div className="flex flex-col">
                            <div className="flex gap-4 pt-5  items-center">
                                <div className="lg:w-[1vw] w-[4vw] h-[4vw] lg:h-[1vw] bg-black rounded-full "></div>
                                <h3 className='font-[font2] text-xl'>20 Oct 2025</h3>
                            </div>
                            <h3 className='font-[font2] lg:text-[2vw] text-[4vw] lg:w-[30vw] w-full pt-5 uppercase'>
                                Conseil & relation client: un duo qui ne se briefe pas, qui se construit                            </h3>
                            <div className='flex items-center gap-1 pt-4' >
                                <div className="bg-[#EDEDED] font-[font2] text-lg cursor-pointer py-1 px-2 hover:bg-[#F0FF7C] transition-colors  duration-300 ease-in-out ">Tech & IA</div>
                                <div className="bg-[#EDEDED] font-[font2] text-lg cursor-pointer py-1 px-2 hover:bg-[#F0FF7C] transition-colors  duration-300 ease-in-out ">Creations</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Blogue
