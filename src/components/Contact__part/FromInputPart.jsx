import React from 'react'

const FromInputPart = () => {
  return (
    <>      
        <div>
            <h3 className='outfit_fonts text-[25px] font-medium mb-9 dark:text-white'>CONTACT FORM</h3>
            <div>
                <input className='w-full h-[50px] mb-8 pl-4 border outline-red-800 outfit_fonts dark:bg-transparent dark:border-[#444] dark:outline-yellow-400 dark:text-white' type="text" placeholder='Name' required/>
                <input className='w-full h-[50px] mb-8 pl-4 border outline-red-800 outfit_fonts dark:bg-transparent dark:border-[#444] dark:outline-yellow-400 dark:text-white' type="email" placeholder='Email' required/>
                <input className='w-full h-[50px] mb-8 pl-4 border outline-red-800 outfit_fonts dark:bg-transparent dark:border-[#444] dark:outline-yellow-400 dark:text-white' type="tel" placeholder='Phone Number' required/>
                <textarea className='w-full h-[250px] mb-7 pl-4 border outline-red-800 outfit_fonts pt-3 dark:bg-transparent dark:border-[#444] dark:outline-yellow-400 dark:text-white' name="" id="" placeholder='Comment'></textarea>
                <button className='px-10 py-3 bg-red-700 text-white outfit_fonts text-[20px] font-medium outfit_fonts rounded-xl' type='submit'>Send</button>
            </div>
        </div>
      
    </>
  )
}

export default FromInputPart
