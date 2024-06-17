import React from 'react'
import { GalleryData } from '../../ALL_DATA/Data'

const Gallery = () => {
  return (
    <>
      <div className='w-full pt-[30px] pb-[60px] bg-[#d4d3d3]'>
            <h2 className='reddit_sans text-[40px] font-semibold text-center mb-8 text-[#444]'>Our Gallery</h2>
          <div className='grid grid-cols-4 '>     
            {GalleryData?.map((item)=>(
            <div key={item.id} className=' h-[450px] overflow-hidden relative group'>
                <img className='w-full h-full object-cover group-hover:scale-125 transition-transfrom duration-1000' src={item.imageLink} alt="" />
                <div className='w-full h-full absolute inset-0  group-hover:from-black/70 group-hover:to-black/70 bg-gradient-to-b flex justify-center items-center'>
                    <div className='opacity-0 group-hover:opacity-80 text-center group-hover:scale-125  duration-500'>
                        <h5 className='outfit_fonts text-xl font-semibold text-white'>{item.subTitle}</h5>
                        <h4 className='outfit_fonts text-3xl font-bold text-white mt-4'>{item.title1}</h4>
                        <a className='py-2 px-6 bg-[#c00a27] rounded-lg inline-block mt-5 text-white outfit_fonts' href="#">VIEW ALL COLLECTION</a>
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
