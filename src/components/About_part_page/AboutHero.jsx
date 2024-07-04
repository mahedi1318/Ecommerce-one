import React from 'react'
import AboutHeroImg from "../../assets/images/aboutHero1.jpg"

const AboutHero = () => {
  return (
    <>
      <div>
        <div className='w-full h-[450px] bg-slate-600 relative '>
            <img className='w-full h-full object-cover' src={AboutHeroImg} alt="" />
            <div className='w-full h-full bg-black/50 absolute top-0 left-0 '>
                <div className='text-center pt-[180px]'>
                    <h1 className='text-[45px] font-semibold outfit_fonts text-[#d6d442]'>About</h1> 
                    <div className='text-xl text-white '>
                        <a className='outfit_fonts text-[16px] font-normal' href="/">Home</a>
                        <span className='outfit_fonts text-[16px] font-normal'> / </span>
                        <span className='outfit_fonts text-[16px] font-normal'>About</span>
                    </div> 
                </div>              
            </div>            
        </div>
      </div>
    </>
  )
}

export default AboutHero
