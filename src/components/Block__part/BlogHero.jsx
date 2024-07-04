import React from 'react'
import BlogHeroImg from "../../assets/images/blogHero.jpg"

const BlogHero = () => {
  return (
    <>
      <div className=''>
        <div className='w-full h-[400px] relative'>
          <img className='w-full h-full object-cover' src={BlogHeroImg} alt="" />
          <div className='w-full h-full bg-black/50 absolute top-0 left-0 '>
                <div className='text-center pt-[180px]'>
                    <h1 className='text-[45px] font-semibold outfit_fonts text-[#d6d442]'>Blog</h1> 
                    <div className='text-xl text-white '>
                        <a className='outfit_fonts text-[16px] font-normal' href="/">Home</a>
                        <span className='outfit_fonts text-[16px] font-normal'> / </span>
                        <span className='outfit_fonts text-[16px] font-normal'>Blog</span>
                    </div> 
                </div>              
            </div>   
        </div>
      </div>
    </>
  )
}

export default BlogHero
