import React from 'react'
import ShopHeroImg from "../../assets/images/shopHero.jpg"

const ShopHero = () => {
  return (
    <>
      <div>
        <div className='w-full h-[450px] bg-slate-600 relative '>
            <img className='w-full h-full object-cover' src={ShopHeroImg} alt="" />          
             <div className='w-full h-full bg-black/50 absolute top-0 left-0 '>
                <div className='text-center pt-[180px]'>
                    <h1 className='xl:text-[45px] mb:text-[30px] font-semibold outfit_fonts text-[#d6d442]'>ALL COLLECTIONS</h1> 
                    <div className='text-xl text-white '>
                        <a className='outfit_fonts text-[16px] font-normal' href="/">Home</a>
                        <span className='outfit_fonts text-[16px] font-normal'> / </span>
                        <span className='outfit_fonts text-[16px] font-normal'>Shop</span>
                    </div> 
                </div>              
            </div> 
        </div>
      </div>
    </>
  )
}

export default ShopHero
