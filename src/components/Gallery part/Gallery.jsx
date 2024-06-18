import React from 'react'
import { GalleryData } from '../../ALL_DATA/Data'

const Gallery = () => {
  return (
    <>
      <div className='w-full pt-[30px] pb-[60px] bg-[#d4d3d3]'>
            <h2 className='reddit_sans text-[40px] font-semibold text-center mb-8 text-[#444]'>Our Gallery</h2>
          <div className='grid xl:grid-cols-4 mb:grid-cols-1'>     
            {GalleryData?.map((item)=>(
            <div key={item.id} className=' xl:h-[450px] mb:h-[350px] overflow-hidden relative group'>
                <img className='w-full h-full object-cover group-hover:scale-125 transition-transfrom duration-1000' src={item.imageLink} alt="" />
                <div className='w-full h-full absolute inset-0  group-hover:from-black/70 group-hover:to-black/70 bg-gradient-to-b flex justify-center items-center'>
                    <div className='opacity-0 group-hover:opacity-80 text-center group-hover:scale-125  duration-500'>
                        <h5 className='outfit_fonts text-[16px] font-medium text-white'>{item.subTitle}</h5>
                        <h4 className='outfit_fonts xl:text-[33px] mb:text-[26px] font-normal text-white mt-2'>{item.title1}</h4>
                        <a className='py-2 px-4 bg-[#c00a27] hover:bg-yellow-500 duration-500 rounded-lg text-[14px] inline-block mt-2 text-white outfit_fonts' href="/shop">VIEW ALL COLLECTION</a>
                    </div>
                </div>
            </div>                      
            ))}       
        </div>
      </div>
    </>
  )
}

export default Gallery
