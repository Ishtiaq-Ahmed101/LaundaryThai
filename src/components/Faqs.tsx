/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import faq from '../assets/faq.svg'
import downArrow from '../assets/downArrow.svg'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


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

          <div className='flex flex-col w-full self-center'>
            <h1 className='text-cyan-400 md:self-start self-center font-medium'>My First Order</h1>
            <div className='md:self-start self-center'>
              <div className='pb-3  md:w-[500px] w-[350px] '>
              <Accordion type="single" collapsible className="w-full ">
          <AccordionItem className='border-gray-300' value="item-1">
        <AccordionTrigger>What service area do you cover in Bangkok?</AccordionTrigger>
        <AccordionContent>
        We cover all of central Bangkok. Scroll down to the bottom of the page to see a map of our delivery area or you can search to see if your location is covered on the interactive map after you put something into the basket – just like using food delivery and transport apps.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem className='border-gray-300' value="item-2">
        <AccordionTrigger>How soon do you pick up my laundry after I place my order?</AccordionTrigger>
        <AccordionContent>
        If you place your order before 18:00, we will usually pick it up within approximately 60 minutes of you placing the order unless you select another day for pickup. If you place your order after 18:00, we will pick it up the following day or on the day you selected starting from 09:00 am. Always check that your preferred days are available and please have your items ready for collection.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem className='border-gray-300' value="item-3">
        <AccordionTrigger>How long does it take to process my order?</AccordionTrigger>
        <AccordionContent>
        With our standard service, orders placed before 18:00 will be returned the day after pickup but the times can vary from morning until evening. With our NEXT-DAY by Noon Service, orders placed before 18:00 will be returned by 12:00 noon on the day after pickup – guaranteed! Alternately, with our SAME-DAY Express Service, orders placed BEFORE 13:00 will be returned by 22:00 on the SAME DAY.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem className='border-gray-300' value="item-4">
        <AccordionTrigger>How do you calculate the fee for laundry items?</AccordionTrigger>
        <AccordionContent>
        The price is calculated by the number of items in the order, not by the weight. For greater convenience and simplicity, you can use our My Laundry Bag service where the fee is based on the number of our My Laundry bags you fill, regardless of weight or number of items inside.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem className='border-gray-300' value="item-5">
        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
        <AccordionContent>
        We accept a variety of electronic payment channels, including Visa Credit Card, MasterCard, Alipay, UnionPay, PayPal, TRUE Money Wallet and PromptPay.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem className='border-gray-300' value="item-6">
        <AccordionTrigger>What is the contactless service?</AccordionTrigger>
        <AccordionContent>
        With our contactless service, our couriers collect your items from the place you specified when placing your order without having to meet you in person. Your specified place will usually be in the lobby of your hotel or condo, such as at the reception, concierge, juristic office, drop-off table or shelf, or any other place that is safe but readily accessible to our couriers.
        </AccordionContent>
      </AccordionItem>


    
    </Accordion>
                

              </div>
              <a className=' mt-3 text-xl text-cyan-400 border-b border-cyan-400 hover:font-semibold transition-all hover:border-b-2 ' href={'/'}>FAQ</a>
            </div>
            
          </div>
       
        </div>

        <img className='rounded-full  h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] object-cover self-center' src={faq} alt="Faq's" />
      </div>

    </div>
  )
}

export default Faqs
