import React from 'react'

import bubleWelcome from '../assets/bubble_welcome.svg'

const Welcome_Sawasdee = () => {
  return (
    <div className=' flex flex-row justify-center items-center text-center md:my-8 my-5 w-full bg-col_blueShade'>
      <div className='flex flex-col-reverse md:flex-row gap-7 md:gap-[10%] '>
        <img className='rounded-full  h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] object-cover self-center' src={bubleWelcome} alt="bubble welcome" />

        <div className='flex flex-col max-w-[700px] justify-center items-center gap-4'>
        <h1 className=' font-poppins font-semibold text-2xl text-black'>How Our Laundry Delivery Service Works</h1>
            <div className='w-[80px] border-[3px] border-white border-b-cyan-400'></div>
            <div className='flex flex-col'>
            <h2 className=' text-textColorPrimary marker:text-center font-poppins text-sm font-semibold text-textDarkGrey leading-[22px] xl:text-base xl:leading-[24px] xl:font-bold '>Wash | Iron | Clean Shoes</h2>
            <h2 className='text-center font-poppins text-sm text-mlBlue leading-[22px] xl:text-base xl:leading-[24px] mb-6 mt-1 text-cyan-400'>Bangkok’s Online Laundry Service</h2>
            </div>
            
            <p className='flex flex-wrap w-full self-center  tracking-wide text-textColorPrimary '>
            As a quality-driven shoe cleaning and laundry service provider, our policy is Fixed Price – No Surprises. As we charge by the number of items and not by their weight, you always know how much you will pay in advance. We cover all your laundry requirements, from small to big loads, from basic to purely organic washes, with or without ironing, and much more. For the cleanest washing results, we use only the best Bosch washing machines from Germany! With our shoe cleaning service, we clean shoes of all colors and types, from sneakers to leather shoes, and from suede to other modern fabrics. </p>
        </div>
      </div>

    </div>
  )
}

export default Welcome_Sawasdee
