import React from 'react'

const HeroTwo = () => {
  return (
    <>
    <div className='w-full pb-[70px] bg-[#d4d3d3] dark:bg-gray-900'>
        <div className='py-8'>
            <div className="container">
                <div className="grid grid-cols-4 gap-8">
                    <div className='py-10 pl-5 h-[320px] bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative flex items-end' ></div>
                    <div className='py-10 pl-5 h-[320px] bg-gradient-to-br from-yellow-700/90 to-black/70 text-white rounded-3xl relative flex items-end' ></div>
                    <div className='py-10 col-span-2 pl-5 h-[320px] bg-gradient-to-br from-gray-700/90  to-black/70 text-white rounded-3xl relative flex items-end' ></div>
                </div>
                <div className="grid grid-cols-4 gap-8 mt-8">
                    <div className='py-10 col-span-2 pl-5 h-[320px] bg-gradient-to-br from-orange-700/90 to-black/70 text-white rounded-3xl relative flex items-end' ></div>
                    <div className='py-10 pl-5 h-[320px] bg-gradient-to-br from-blue-600/90 to-black/70 text-white rounded-3xl relative flex items-end' ></div>
                    <div className='py-10 pl-5 h-[320px] bg-gradient-to-br from-red-500/90 to-black/70 text-white rounded-3xl relative flex items-end' ></div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default HeroTwo
