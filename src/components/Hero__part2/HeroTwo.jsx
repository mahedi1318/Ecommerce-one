import React from 'react'
import imgHero2 from "../../assets/images/hero2-1.jpg"
import imgHero2_two from "../../assets/images/hero2-2.jpg"
import imgHero2_three from "../../assets/images/hero2-7.jpg"
import imgHero2_four from "../../assets/images/hero2-4.jpg"
import imgHero2_five from "../../assets/images/hero2-5.jpg"
import imgHero2_six from "../../assets/images/hero2-6.jpg"

const HeroTwo = () => {
  return (
    <>
    <div className='w-full pb-[70px] bg-[#d4d3d3] dark:bg-gray-900'>
        <div className='py-8'>
            <div className="container">
                 {/* ITEM ONE PART */}
                <div className="xl:grid xl:grid-cols-4 mb:block xl:gap-8">
                    <div className='h-[320px] bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative flex pl-6 mb:mb-5' >
                        <div className='flex absolute top-[80px] right-5'>                            
                            <img className='w-[150px] h-[140px] rounded-xl' src={imgHero2} alt="" />
                        </div>
                        <h2 className='text-white outfit_fonts text-[15px] font-normal mt-[100px]'>Enjoy
                         <span className='block mt-1 mb-2 outfit_fonts text-[24px] font-medium'>With</span>
                         <strong className='reddit_sans text-[30px] font-medium'>Coffee</strong>
                        </h2>
                        <div className=' absolute bottom-[30px]'>
                            <button className='py-2 px-9 bg-slate-700 reddit_sans rounded-full'>Browse</button>
                        </div>
                    </div>
                    <div className='h-[320px] bg-gradient-to-br from-yellow-700/90 to-black/70 text-white rounded-3xl relative flex pl-6 mb:mb-5' >
                        <div className='flex absolute top-[80px] right-5'>                            
                            <img className='w-[150px] h-[140px] rounded-xl z-0' src={imgHero2_three} alt="" />
                        </div>
                        <h2 className='text-white outfit_fonts text-[15px] font-normal mt-[100px]'>Enjoy
                         <span className='block mt-1 mb-2 outfit_fonts text-[24px] font-medium'>With</span>
                         <strong className='reddit_sans text-[20px] font-medium relative z-10'>Valeria Boltneva</strong>
                        </h2>
                        <div className=' absolute bottom-[30px]'>
                            <button className='py-2 px-9 bg-slate-700 reddit_sans rounded-full'>Browse</button>
                        </div>
                    </div>
                    <div className='col-span-2 pl-6 h-[320px] bg-gradient-to-br from-gray-700/90  to-black/70 text-white rounded-3xl relative xl:flex mb:hidden' >
                        <div className='flex absolute top-[40px] right-[50px]'>                            
                            <img className='w-[280px] h-[240px] rounded-xl' src={imgHero2_four} alt="" />
                        </div>
                        <h2 className='text-white outfit_fonts text-[15px] font-normal mt-[100px]'>Enjoy
                         <span className='block mt-1 mb-2 outfit_fonts text-[24px] font-medium'>With</span>
                         <strong className='reddit_sans text-[25px] font-medium'>Chicken with Vegetables </strong>
                        </h2>
                        <div className=' absolute bottom-[30px]'>
                            <button className='py-2 px-9 bg-slate-700 reddit_sans rounded-full'>Browse</button>
                        </div>
                    </div>
                </div>

                    {/* ITEM TOW PART */}

                <div className="xl:grid xl:grid-cols-4 xl:gap-8 mb:block mt-8">
                    <div className=' col-span-2 pl-6 h-[320px] bg-gradient-to-br from-orange-700/90 to-black/70 text-white rounded-3xl relative xl:flex mb:mb-5 mb:hidden' >
                        <div className='flex absolute top-[40px] right-[50px]'>                            
                            <img className='w-[280px] h-[240px] rounded-xl' src={imgHero2_two} alt="" />
                        </div>
                        <h2 className='text-white outfit_fonts text-[15px] font-normal mt-[100px]'>Enjoy
                         <span className='block mt-1 mb-2 outfit_fonts text-[24px] font-medium'>With</span>
                         <strong className='reddit_sans text-[25px] font-medium'>Man and Woman Cooking
                         </strong>
                        </h2>
                        <div className=' absolute bottom-[30px]'>
                            <button className='py-2 px-9 bg-slate-700 reddit_sans rounded-full'>Browse</button>
                        </div>
                    </div>
                    <div className='pl-6 h-[320px] bg-gradient-to-br from-blue-600/90 to-black/70 text-white rounded-3xl relative flex mb:mb-5' >
                    <div className='flex absolute top-[80px] right-5'>                            
                            <img className='w-[150px] h-[140px] rounded-xl z-0' src={imgHero2_five} alt="" />
                        </div>
                        <h2 className='text-white outfit_fonts text-[15px] font-normal mt-[100px]'>Enjoy
                         <span className='block mt-1 mb-2 outfit_fonts text-[24px] font-medium'>With</span>
                         <strong className='reddit_sans text-[20px] font-medium relative z-10'>Valeria Boltneva</strong>
                        </h2>
                        <div className=' absolute bottom-[30px]'>
                            <button className='py-2 px-9 bg-slate-700 reddit_sans rounded-full'>Browse</button>
                        </div>
                    </div>
                    <div className=' pl-6 h-[320px] bg-gradient-to-br from-red-500/90 to-black/70 text-white rounded-3xl relative flex ' >
                    <div className='flex absolute top-[80px] right-5'>                            
                            <img className='w-[150px] h-[140px] rounded-xl' src={imgHero2_six} alt="" />
                        </div>
                        <h2 className='text-white outfit_fonts text-[15px] font-normal mt-[100px]'>Enjoy
                         <span className='block mt-1 mb-2 outfit_fonts text-[24px] font-medium'>With</span>
                         <strong className='reddit_sans text-[20px] font-medium'>Shrimp Dish
                         </strong>
                        </h2>
                        <div className=' absolute bottom-[30px]'>
                            <button className='py-2 px-9 bg-slate-700 reddit_sans rounded-full'>Browse</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default HeroTwo
