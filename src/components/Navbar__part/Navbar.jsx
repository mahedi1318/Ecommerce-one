import React, { useContext } from 'react'
import { NavMenuLink } from '../../ALL_DATA/Data'
import { IoMdSearch } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import DarkMode from './DarkMode';
import { FaBars } from "react-icons/fa";
import { ProductCardContext } from '../../context';

const Navbar = () => {
    const {state} = useContext(ProductCardContext)
    
  return (
    <>
    <div className='bg-[#3a2a1b] dark:bg-gray-900 dark:shadow-md dark:text-white duration-200 relative z-40'>
        <div className='pt-5 pb-5 '>
            <div className="container">
                <div className='flex justify-between items-center'>
                    <div className='flex gap-16 items-center'>
                        <a className='text-xl reddit_sans font-semibold text-[#ff9933] tracking-widest uppercase' href="#">Eshop</a>
                        {/* menu part */}
                        <div className='mb:hidden xl:block'>
                            <ul className='flex gap-8 text-white'>
                                {NavMenuLink.map((data)=>(
                                <li key={data.id}><a className='reddit_sans text-base font-normal hover:text-[#ff9933] transition-all duration-300' href={data.link}>{data.name}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/*Navbar Right section */}
                    <div className='xl:flex justify-between items-center gap-4 mb:hidden '>
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
                            {state.cardData.length > 0 && (
                                <span className='w-5 h-5 rounded-full bg-yellow-600 text-[13px] flex justify-center items-center absolute top-[-10px] left-[10px]'>{state.cardData.length}</span>
                            )}
                        </button>
                        {/* Dark Mode section part */}
                        <div>
                            <DarkMode/>
                        </div>
                    </div>
                    <div className='xl:hidden'>
                        <button className='text-[30px] text-white'><FaBars /></button>
                    </div>
                </div>                              
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Navbar
