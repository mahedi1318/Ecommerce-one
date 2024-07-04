import React from 'react'
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import FromInputPart from './FromInputPart';

const ContactFrom = () => {
  return (
    <>
      <div className='dark:bg-gray-900 pt-[60px] pb-[60px]'>
        <div className='container'>
            <div className="grid xl:grid-cols-3 mb:grid-cols-1 gap-8">
                <div className='w-full h-[657px]'>
                    <div className='w-full h-[200px] border border-gray-200 mb-7 pl-6 flex items-center hover:border-red-500 duration-500 dark:border-[#444] dark:hover:border-yellow-500'>
                        <div className='flex items-center gap-5'>
                            <div className='w-[50px] h-[50px] bg-red-800 flex justify-center items-center rounded-lg'>
                                <IoMdCall className='text-[23px] text-white' />
                            </div>
                            <div className='text-[#444] dark:text-[#fff]'>
                                <h3 className='outfit_fonts text-[20px] font-normal mb-2'>Phone</h3>
                                <h4 className='outfit_fonts text-[14px] font-normal mb-1'><span className='text-[20px] font-normal'>Toll-Free:</span>0000 - 123 - 456789</h4>
                                <h5 className='outfit_fonts text-[14px] font-normal'><span className='text-[20px] font-normal'>Fax:</span>0000 - 123 - 456789</h5>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[200px] border border-gray-200 mb-7 pl-6 flex items-center hover:border-red-500 duration-500 dark:border-[#444] dark:hover:border-yellow-500'>
                        <div className='flex items-center gap-5'>
                            <div className='w-[50px] h-[50px] bg-red-800 flex justify-center items-center rounded-lg'>                          
                                <MdEmail className='text-[23px] text-white' />
                            </div>
                            <div className='text-[#444] dark:text-[#fff]'>
                                <h3 className='outfit_fonts xl:text-[20px] mb:text-[17px] font-normal mb-2'>Email</h3>
                                <h4 className='outfit_fonts xl:text-[18px] mb:text-[15px] font-normal mb-1'>mahedihasan4hmail.com</h4>
                                <h5 className='outfit_fonts xl:text-[18px] mb:text-[15px] font-normal'>javascript55gmail.com</h5>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[200px] border border-gray-200 mb-7 pl-6 flex items-center hover:border-red-500 duration-500 dark:border-[#444] dark:hover:border-yellow-500'>
                        <div className='flex items-center gap-5'>
                            <div className='w-[50px] h-[50px] bg-red-800 flex justify-center items-center rounded-lg'>
                                <FaLocationArrow  className='text-[23px] text-white' />
                            </div>
                            <div className='text-[#444] dark:text-[#fff]'>
                                <h3 className='outfit_fonts xl:text-[20px] mb:text-[17px] mb:w-[180px] xl:w-[300px] font-normal mb-2'>Address</h3>
                                <h4 className='outfit_fonts xl:text-[18px] mb:text-[15px] mb:w-[180px] xl:w-[300px] font-normal mb-1 w-[300px] leading-8'>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</h4>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-2 mb:col-span-1 w-full h-[657px]'>
                    <FromInputPart/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ContactFrom
