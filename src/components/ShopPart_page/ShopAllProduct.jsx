import React from 'react'
import { ShopAllData } from '../../ALL_DATA/Data'
import ShopIcon from "../../assets/images/shopImg/shopIcon.png"

const ShopAllProduct = () => {
  return (
    <>
      <div className='pt-[60px] pb-[60px] dark:bg-gray-900'>
        <div className='container'>
            <div className="grid xl:grid-cols-4 mb:grid-cols-1 xl:gap-8">
                {ShopAllData?.map((item)=>(
                  <div className='w-full h-[420px] border relative group hover:border-red-700 duration-500 mb:mb-4'>
                    <img className='w-full h-full object-cover' src={item.imageLink} alt="" />
                    <div className='absolute bottom-[30px] left-[50%] group-hover:bottom-[50px] translate-x-[-50%] duration-300'>
                      <a className='outfit_fonts xl:text-[20px] mb:text-[17px] font-semibold text-[#444] group-hover:text-red-700 duration-300 block'
                       href="/product">{item.name}</a>
                       <div className='mt-3 relative flex'>
                          <h6 className='before:block before:absolute before:top-0 before:left-[50%] before:translate-x-[-50%] before:bg-gray-500
                           before:w-[200px] before:h-[1px]  
                           after:block after:absolute after:top-0 after:left-[50%] after:translate-x-[-50%] after:bg-red-700
                           after:w-[0px] group-hover:after:w-[200px] after:h-[2px] after:duration-300 after:z-0'>
                            <img className='absolute left-[50%] bottom-[-16px] translate-x-[-50%] z-10' src={ShopIcon} alt="" />
                           </h6>
                       </div>
                    </div>
                  </div> 
                ))}                             
            </div>
        </div>
      </div>
    </>
  )
}

export default ShopAllProduct
