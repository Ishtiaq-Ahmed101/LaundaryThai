/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import faq from '../assets/faq.svg'
import downArrow from '../assets/downArrow.svg'

const Faqs = () => {
    const [click, setClick] = useState(false)
    function isClicked() {
        setClick(!click)
    }

    
  return (
    <div className=' flex flex-row justify-center items-center text-center md:my-8 my-5 w-full bg-col_blueShade'>
    <div className='flex flex-col-reverse md:flex-row gap-7 md:gap-[10%] '>
   
      <div className='flex flex-col max-w-[700px] justify-center items-center gap-4'>
      <h1 className=' font-poppins font-semibold text-2xl text-black'>FAQs</h1>
          <div className='w-[80px] border-[3px] border-white border-b-cyan-400'></div>
          
          <p className='flex flex-wrap w-full self-center  tracking-wide text-textColorPrimary '>
          Here are the top 6 most common questions asked by our customers about our online laundry delivery service in Bangkok. </p>

          <div className='flex flex-col w-full'>
            <h1 className='text-cyan-400 self-start font-medium'>My First Order</h1>
            <div className='self-start'>
                <div className='border-b border-textColorPrimary pb-3  md:w-[400px] w-[300px] '>
                    <div onClick={()=>{isClicked()}} className='flex flex-row justify-between gap-4 cursor-pointer'>
                    <h1 className='text-textColorPrimary font-extrabold'>What service area do you cover in Bangkok?</h1>
                    <img className={`${click ? 'rotate-[180deg]' : ''} transition-transform duration-500`} src={downArrow} alt="Arrow down" />
                    </div>
                    <p className={`${click ? '' : 'hidden'} transition-transform duration-1000  overflow-hidden`}>
                    We cover all of central Bangkok. Scroll down to the bottom of the page to see a map of our delivery area or you can search to see if your location is covered on the interactive map after you put something into the basket – just like using food delivery and transport apps.
                    </p>
                </div>
                
            </div>
          </div>
      </div>

      <img className='rounded-full  h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] object-cover self-center' src={faq} alt="Faq's" />
    </div>

  </div>
  )
}

export default Faqs
