import React from 'react'
import { AboutStaffData } from '../../ALL_DATA/Data'
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";


const AboutStafPart = () => {
  return (
    <>
      <div className='pt-[80px] pb-[80px] dark:bg-gray-900 '>
        <div className='container'>
            <div>
              <h2 className='outfit_fonts text-[40px] font-semibold text-[#444] dark:text-[#fff] text-center mb-11'>Our Staff</h2>
            </div>
            <div className="grid xl:grid-cols-4 mb:grid-cols-1 gap-9">
              {AboutStaffData?.map((item)=>(
                <div className="w-full h-[460px] group">
                    <div className='h-[350px] relative overflow-hidden '>
                        <img className='w-full h-full object-cover' src={item.imageLink} alt="" />
                        <div className='w-full h-full bg-black/20 absolute top-[-100%] left-[-100%] group-hover:top-[0%] group-hover:left-[0%] duration-500'></div>
                        <div className='w-full h-full bg-black/20 absolute bottom-[-100%] right-[-100%] group-hover:bottom-[0%] group-hover:right-[0%] duration-500'></div>
                        <div className=' absolute top-[350px] left-[50%]  translate-x-[-50%] group-hover:top-[280px] duration-500'>
                          <ul className='flex gap-6 text-[20px]'>
                            <li className='w-[40px] h-[40px] bg-red-600 flex justify-center items-center rounded-lg text-white'><FaSquareFacebook /></li>
                            <li className='w-[40px] h-[40px] bg-red-600 flex justify-center items-center rounded-lg text-white'><IoLogoTwitter /></li>
                            <li className='w-[40px] h-[40px] bg-red-600 flex justify-center items-center rounded-lg text-white'><AiOutlineInstagram /></li>
                          </ul>
                        </div>
                    </div>
                    <div className='text-center mt-[30px]'>
                        <h4 className='text-[#444] dark:text-[#fff] text-[22px] font-normal outfit_fonts'>{item.name}</h4>
                        <h6 className='text-[#444] dark:text-[#fff] text-[18px] font-normal outfit_fonts mt-2'>{item.work}</h6>
                    </div>
                </div> 
              ))}                               
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutStafPart
