import React from 'react'
import think_about_laundary from '../assets/think_about_laundry.svg'
import washing from '../assets/washing.svg'
import pickUp from '../assets/pickup.svg'
import returnSvg from '../assets/return.svg'

const TransportServices = () => {
  return (
    <div className='max-w-full flex flex-row justify-center text-center '>

<div className='flex flex-col my-6 md:my-14 text-black w-full px-2 gap-5 md:gap-10 justify-center items-center text-center '>
        <h1 className=' font-poppins font-semibold text-3xl'>How Our Laundry Delivery Service Works</h1>
        <div className='w-[80px] border-[3px] border-white border-b-cyan-400'></div>
        <p className='flex flex-wrap w-full self-center  tracking-wide text-textColorPrimary'>
        Our professional laundry service and shoe cleaning service make having your clothes washed or your shoes cleaned now as quick and convenient as shopping online. Our user-friendly interface means customizing your order exactly how you want it is easy, too. All our services come at fixed prices with no surprises, including free delivery and guaranteed next-day returns as standard. </p>
        <div className='grid grid-flow-row grid-cols-1  md:grid-cols-2 text-center justify-center '>
          <div className='md:max-w-[400px] w-full p-2 flex  md:flex-col justify-center gap-y-4 gap-x-6'>
            <img className='rounded-full  h-[200px] w-[200px] md:h-[245px] md:w-[245px] object-cover self-center' src={think_about_laundary} alt="Customize" />
            <div className='flex flex-col gap-4'>
            <h1 className='text-black text-xl font-bold self-center '>Choose & Customize</h1>
            <p className='flex flex-wrap self-center text-sm'>All our laundry service and shoe cleaning prices are fully inclusive, with no delivery fees and no hidden charges. We charge by the number of items, not by the weight, and all prices are clearly shown so you always know exactly how much you will pay before you order.</p>
            </div>
          </div>

          <div className='md:max-w-[400px] w-full p-2 flex flex-row-reverse md:flex-col justify-center gap-4'>
            <img className='rounded-full  h-[200px] w-[200px] md:h-[245px] md:w-[245px] object-cover self-center' src={washing} alt="washing" />
            <div className='flex flex-col gap-4'>
            <h1 className='text-black text-xl font-bold self-center '>Clear Pricing</h1>
            <p className='flex flex-wrap self-center text-sm'>All our laundry service and shoe cleaning prices are fully inclusive, with no delivery fees and no hidden charges. We charge by the number of items, not by the weight, and all prices are clearly shown so you always know exactly how much you will pay before you order.</p>
            </div>
          </div>

          <div className='md:max-w-[400px] w-full p-2 flex flex-row md:flex-col justify-center gap-4'>
            <img className='rounded-full  h-[200px] w-[200px] md:h-[245px] md:w-[245px] object-cover self-center' src={pickUp} alt="Pick UP" />
            <div className='flex flex-col gap-4'>
            <h1 className='text-black text-xl font-bold self-center '>Contactless Service</h1>
            <p className='flex flex-wrap self-center text-sm'>To ensure your maximum convenience, our laundry delivery service is fully contactless. When placing your order, you will be asked to specify a Pickup & Return place where our courier can pick up your order and return it when completed without you having to wait around for us or even be there</p>
            </div>
          </div>

          <div className='md:max-w-[400px] w-full p-2 flex flex-row-reverse md:flex-col justify-center gap-4'>
            <img className='rounded-full  h-[200px] w-[200px] md:h-[245px] md:w-[245px] object-cover self-center' src={returnSvg} alt="return" />
            <div className='flex flex-col gap-4'>
            <h1 className='text-black text-xl font-bold self-center '>Online Updates</h1>
            <p className='flex flex-wrap self-center text-sm'>We send SMS confirmation messages to you when our courier picks up your order and when he returns it. You will also receive a receipt by email. You can check the progress of your order at any time by clicking on Order Status on our website and our staff are online to answer questions from 10:00 to 18:00..</p>
            </div>
          </div>
        </div>
        <a className=' self-center flex text-sm bg-cyan-400 rounded-md px-2 py-2 hover:bg-black hover:text-white cursor-pointer transition-all md:w-[30%] w-[50%] justify-center '>Create Order</a>

        </div>

    </div>
  )
}

export default TransportServices
