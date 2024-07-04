import React from 'react'
import AboutDetailsImg from "../../assets/images/about1.jpg"

const AboutDetailsPart = () => {
  return (
    <>
      <div className='dark:bg-gray-900'>
        <div className="container">
            <div className='grid xl:grid-cols-2 mb:grid-cols-1 gap-4 pt-[100px] pb-[60px]'>
                <div className='w-full h-[500px]'>
                    <h2 className='outfit_fonts text-[30px] font-medium text-[#444] mb-6 dark:text-[#a8a7a7]'>Healthy Oven French Dinner</h2>
                    <p className='outfit_fonts xl:text-[18px] mb:text-[15px] font-normal text-[#7e7d7d] mb-6 xl:leading-7 mb:leading-6 dark:text-[#8a8888]'>Massa placerat duis ultricies lacus sed. Sit amet nisl purus in mollis nunc sed id semper. Cras pulvinar mattis nunc sed.
                        Lectus nulla at volutpat diam. Integer quis auctor elit sed vulputate mi sit amet. Ante in nibh mauris cursus.
                        Ipsum dolor sit amet consectetur adipiscing elit.</p>
                    <p className='outfit_fonts xl:text-[18px] mb:text-[15px] font-normal text-[#7e7d7d] mb-6 xl:leading-7 mb:leading-6 dark:text-[#8a8888]'>Cras pulvinar mattis nunc sed. Lectus nulla at volutpat diam. Integer quis auctor elit sed vulputate mi sit amet. 
                        Ante in nibh mauris cursus. Ipsum dolor sit amet consectetur adipiscing elit.Egestas integer eget aliquet nibh praesent tristique magna.
                        Faucibus nisl tincidunt eget nullam non nisi est sit amet.</p>
                    <p className='outfit_fonts xl:text-[18px] mb:text-[15px] font-normal text-[#7e7d7d] xl:leading-7 mb:leading-6 dark:text-[#8a8888]'>Egestas integer eget aliquet nibh praesent tristique magna. Faucibus nisl tincidunt eget nullam non nisi est sit amet.
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus.</p>
                </div>
                <div className='w-full xl:h-[500px] mb:h-[300px] xl:mt-0 mb:mt-[150px]'>
                  <img className='w-full h-full object-cover rounded-xl' src={AboutDetailsImg} alt="" />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutDetailsPart
