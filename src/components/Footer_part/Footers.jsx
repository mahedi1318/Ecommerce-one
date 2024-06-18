import React from 'react'
import FooterLogo from "../../assets/images/Food.png"
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { RiWhatsappLine } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";


const Footers = () => {
  return (
    <>
      <div className='w-full pt-[80px] pb-[50px] bg-[#3a2a1b] dark:bg-gray-900 dark:shadow-md dark:text-white duration-200'>
        <div className="container">
          <div className='xl:flex gap-3 mb:block'>
            <div className='w-2/5 mb:mb-8'>
              <div>
                <a href="/">
                  <img src={FooterLogo} alt="" />
                </a>                
                <h5 className='outfit_fonts text-lg font-semibold mt-8 text-[#dddada]'>Best For Food</h5>
                <p className='outfit_fonts w-[300px] mt-2 text-[#bdbbbb]'>Sed do eiusmod tempor incididuntut labore dolore magna.</p>
                <div className="flex gap-6 mt-8">
                  <a className='text-[23px] text-[#bdbbbb]' href="#"><FaSquareFacebook /></a>
                  <a className='text-[23px] text-[#bdbbbb]' href="#"><FaTwitterSquare /></a>
                  <a className='text-[23px] text-[#bdbbbb]' href="#"><AiFillYoutube /></a>
                  <a className='text-[23px] text-[#bdbbbb]' href="#"><RiWhatsappLine /></a>
                  <a className='text-[23px] text-[#bdbbbb]' href="#"><RiInstagramFill /></a>
                </div>
              </div>
            </div>
            <div className='w-1/5 mb:mb-8'>
            <h4 className='outfit_fonts text-lg font-medium text-[#dddada] mb:w-[300px]'>Get to Know Us</h4>
            <ul className='mt-5'>
              <li className='mb-3 outfit_fonts text-[16px] font-normal text-[#bdbbbb]'><a href="/">Home</a></li>
              <li className='mb-3 outfit_fonts text-[16px] font-normal text-[#bdbbbb]'><a href="/about">About</a></li>
              <li className='mb-3 outfit_fonts text-[16px] font-normal text-[#bdbbbb]'><a href="/shop">Shop</a></li>
              <li className='mb-3 outfit_fonts text-[16px] font-normal text-[#bdbbbb]'><a href="/product">Product</a></li>
              <li className='mb-3 outfit_fonts text-[16px] font-normal text-[#bdbbbb]'><a href="/block">Block</a></li>
              <li className='mb-3 outfit_fonts text-[16px] font-normal text-[#bdbbbb]'><a href="/contact">Contact</a></li>
            </ul>
            </div>
            <div className='w-1/5 mb:mb-8'>
              <h4 className='outfit_fonts text-lg font-medium text-[#dddada] mb:w-[300px]'>Customer Service</h4>
              <ul className='mt-5 mb:w-[300px]'>
                <li className='mb-3 outfit_fonts text-[16px] font-normal text-[#bdbbbb]'><a href="#">Help Center</a></li>
                <li className='mb-3 outfit_fonts text-[16px] font-normal text-[#bdbbbb]'><a href="#">FAQ’s</a></li>
                <li className='mb-3 outfit_fonts text-[16px] font-normal text-[#bdbbbb]'><a href="#">Accessibility</a></li>
                <li className='mb-3 outfit_fonts text-[16px] font-normal text-[#bdbbbb]'><a href="#">Feedback</a></li>
                <li className='mb-3 outfit_fonts text-[16px] font-normal text-[#bdbbbb]'><a href="#">Size Guide</a></li>
                <li className='mb-3 outfit_fonts text-[16px] font-normal text-[#bdbbbb]'><a href="#">Payment Method</a></li>
              </ul>
            </div>
            <div className='w-1/5'>
            <h4 className='outfit_fonts text-lg font-medium text-[#dddada] mb:w-[300px]'>Orders & Returns</h4>
              <ul className='mt-5 mb:w-[300px]'>
                <li className='mb-3 outfit_fonts text-[16px] font-normal text-[#bdbbbb]'><a href="#">Track Order</a></li>
                <li className='mb-3 outfit_fonts text-[16px] font-normal text-[#bdbbbb]'><a href="#">Shipping & Delivery</a></li>
                <li className='mb-3 outfit_fonts text-[16px] font-normal text-[#bdbbbb]'><a href="#">Return & Exchange</a></li>
                <li className='mb-3 outfit_fonts text-[16px] font-normal text-[#bdbbbb]'><a href="#">Price Match Guarantee</a></li>               
              </ul>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default Footers
