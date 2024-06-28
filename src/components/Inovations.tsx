import React from 'react'
import recycle from '../assets/recycle.svg'
import inovation from '../assets/invoation.svg'
import washBoach from '../assets/wash_with_bosch.jpg'
import washing_with_soapnuts from '../assets/washing_with_soapnuts.jpg'

const Inovations = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5'>
        <div className='flex flex-col text-center items-center gap-5 bg-col_blueDim pb-4 rounded-md'>
         <img className=" rounded-t-md" src={washBoach} alt="" />
         <h1 className='px-5  text-3xl text-black font-bold'>Innovation</h1>
         <img className='px-5 ' src={inovation} alt="" />
         <p className='px-5 flex flex-wrap self-center text-sm'>With our commitment to delivering the highest quality laundry services in Bangkok, we work with the best laundry products and latest technology, including state-of-the-art washing and drying machines from German manufacturer Bosch.</p>           
        </div>
        <div className='flex flex-col text-center items-center gap-5 bg-col_blueDim pb-4 rounded-md'>
        <img className=' rounded-t-md' src={washing_with_soapnuts} alt="" />
        <h1 className='px-5  text-3xl text-black font-bold'>Clean & Green</h1>
        <img className='px-5 ' src={recycle} alt="" />
        <p className='px-5 flex flex-wrap self-center text-sm'>With our commitment to the environment, we practice sustainability through the principles of Reduce, Reuse, and Recycle. By providing our customers with our reusable My Laundry Bags, we reduce the use of non-recyclable plastic. All our shoe cleaning and laundry services focus on reducing energy consumption.</p>
        </div>
      
    </div>
  )
}

export default Inovations
