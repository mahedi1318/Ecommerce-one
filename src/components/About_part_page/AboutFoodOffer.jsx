import React from 'react'
import AboutFoodImg from "../../assets/images/about2.webp" 

const AboutFoodOffer = () => {
  return (
    <>
    <div className='pt-[60px] pb-[60px] dark:bg-gray-900'>
        <div className='container'>
            <div className='w-full h-[550px] relative'>
                <img className='w-full h-full object-cover rounded-2xl' src={AboutFoodImg} alt="" />
                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <div className='text-center'>
                        <h1 className='text-white outfit_fonts text-[30px] font-semibold mb-4'>Tastey Offers</h1>
                        <p className='text-white outfit_fonts xl:text-[16px] mb:text-[15px] font-normal xl:w-[774px] mb:w-[266px] leading-7 mb-8'>Amet consectetur adipiscing elit pellentesque habitant morbi. Nunc lobortis mattis aliquam faucibus purus in massa tempor.
                            Turpis in eu mi bibendum neque. Etiam tempor orci eu lobortis elementum nibh tellus molestie. At erat pellentesque adipiscing commodo elit at.
                            Rutrum quisque non tellus orci.</p>
                        <button className='py-3 px-6 bg-red-900 text-white outfit_fonts font-medium text-[16px] rounded-xl'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    </>
  )
}

export default AboutFoodOffer
