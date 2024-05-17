import React from 'react'
import { NavMenuLink } from '../../ALL_DATA/Data'
import { IoMdSearch } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import DarkMode from './DarkMode';

const Navbar = () => {
  return (
    <>
    <div className='bg-[#3a2a1b] dark:bg-gray-900 dark:shadow-md dark:text-white duration-200 relative z-40'>
        <div className='pt-5 pb-5 '>
            <div className="container">
                <div className='flex justify-between items-center'>
                    <div className='flex gap-16 items-center'>
                        <a className='text-xl reddit_sans font-semibold text-[#ff9933] tracking-widest uppercase' href="#">Eshop</a>
                        {/* menu part */}
                        <div>
                            <ul className='flex gap-8 text-white'>
                                {NavMenuLink.map((data)=>(
                                <li key={data.id}><a className='reddit_sans text-base font-normal hover:text-[#ff9933] transition-all duration-300' href={data.link}>{data.name}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/*Navbar Right section */}
                    <div className='flex justify-between items-center gap-4'>
                        {/* search bar */}
                        <div className='relative'>
                            <input type="text" placeholder='Search'
                                className='w-[300px] h-[35px] pl-5 rounded-lg'                             
                            />
                            <IoMdSearch className='absolute top-1 translate-y-1 right-3 text-2xl font-bold dark:text-black' />
                        </div>
                        {/* order shoping card */}
                        <button className='relative'>
                            <IoCart className='text-2xl text-white' />
                            <div className='w-5 h-5 rounded-full bg-blue-600 flex justify-center items-center absolute top-[-10px] left-[10px]'>3</div>
                        </button>
                        {/* Dark Mode section part */}
                        <div>
                            <DarkMode/>
                        </div>
                    </div>
                </div>                              
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Navbar
