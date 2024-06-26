/* eslint-disable @typescript-eslint/no-unused-vars */
// import * as laundaryImages from '../assets/LaundaryServicesImages/*';
import washFold from '../assets/LaundaryServicesImages/washFold.svg'
import shoeCleaning from '../assets/LaundaryServicesImages/shoeCleaning.svg'
import ironing from '../assets/LaundaryServicesImages/ironing.svg'
import beddinghome from '../assets/LaundaryServicesImages/beddinghome.svg'
import suitCleaning from '../assets/LaundaryServicesImages/suitCleaning.svg'
import laundarybag from '../assets/LaundaryServicesImages/laundarybag.svg'
import beverages from '../assets/LaundaryServicesImages/beverages.svg'
import contactus from '../assets/LaundaryServicesImages/contactus.svg'

const laundaryServicesData = [
    {
        _id: 1,
        title: 'Wash & Fold',
        description: 'Perfect for all your everyday casaual clothes & more',
        link: '/order-wash-and-fold',
        mainImg:washFold,
        color: 'bg-col_blue',
        colorText:'text-col_blue',
    },
    {
        _id: 2,
        title: 'Shoe Cleaning',
        description: 'Expert care for shoes of all types, colors & materials',
        link: '/order-shoe-cleaning',
        mainImg:shoeCleaning,
        color:'bg-col_pink',
        colorText:'text-col_pink'
    },
    {
        _id: 3,
        title: 'Ironing Services',
        description: 'You wash, we do the ironing for you',
        link: '/order-ironing-service',
        mainImg:ironing,
        color:'bg-col_greenBlue',
        colorText:'text-col_greenBlue',
    },
    {
        _id: 4,
        title: 'Bedding & Home',
        description: 'For all your bedding, home & bathroom laundry',
        link: '/order-bedding-home',
        mainImg:beddinghome,
        color:'bg-col_yellow',
        colorText:'text-col_yellow',
    },
    {
        _id: 5,
        title: 'Suit Cleaning',
        description: 'Gentle machine wash, not a dry cleaning service',
        link: '/order-suit-cleaning',
        mainImg:suitCleaning,
        color:'bg-col_purple',
        colorText:'text-col_purple',
    },
    {
        _id: 6,
        title: 'My Laundary Bag',
        description: 'Valid when using our black MY Laundry Bags only',
        link: '/order-my-laundary-bag',
        mainImg:laundarybag,
        color:'bg-col_lightPurple',
        colorText:'text-col_lightPurlple',
    },
    {
        _id: 7,
        title: 'Beverages',
        description: 'Conveniently delivered together with your laundary & shoes',
        link: '/order-beverages',
        mainImg:beverages,
        color:'bg-col_lightPink ',
        colorText:'text-col_lightPink',
    },
    {
        _id: 8,
        title: 'Contact Us',
        description: 'Order online or get in touch with us here',
        link: '/order-contact-us',
        mainImg:contactus,
        color:'bg-col_lightOrange',
        colorText:'text-col_grayWhite',
    },
]




const laundaryServices = () => {
  return (
    <div className=' flex flex-row justify-center w-full items-center'>

    <div className='flex flex-col my-6 md:my-14 text-black w-full px-2 gap-5 md:gap-10 justify-center items-center text-center '>
        <h1 className=' font-poppins font-semibold text-3xl'>Your Professional Laundry Service in Bangkok</h1>
        <div className='w-[80px] border-[3px] border-white border-b-cyan-400'></div>
        <p className='flex flex-wrap w-full self-center  tracking-wide text-textColorPrimary'>
        Welcome to My Laundry, your on-demand laundry delivery service in Bangkok! With our online laundry service and shoe cleaning solutions, we combine convenience and quality with our transparent pricing strategy and free next-day delivery to bring you a premium service that is as easy as ordering food or transportation online. For your utmost convenience, our services are contactless, so you don´t have to wait for us when we pick up and return your order. Just leave your items at the designated pickup & return place of your hotel or condo and we will do the rest, leaving you free to focus on other things. For all orders placed before 18:00, we GUARANTEE next-day return - fast & easy! If you want your order completed faster, book our SAME-DAY Express Service before 13:00 and we will complete and return your order on the SAME DAY by 22:00. If you need to check out from your hotel by 12:00, choose our attractive NEXT-DAY by Noon Service and we will return your items by 12:00 noon! Laundry and shoe cleaning have never been easier. Soon available in Pattaya, too!
        </p>
        <div className='flex flex-row flex-wrap gap-6 w-full justify-center '>
            {laundaryServicesData.map((service)=>(
                      <a href={service.link} id={`${service._id}`} className={ ` w-full  flex flex-col p-2 py-5 gap-6 rounded-md ${service.color} sm:w-[280px] h-[370px] hover:cursor-pointer hover:bg-opacity-90 text-center pt-[50px] justify-between `}>
                      <img className='h-[120px] self-center' src={service.mainImg} alt="" />
                      <h1 className='text-xl font-bold'>{service.title}</h1>
                      <p>{service.description}</p>
                      <a className= {` w-full  flex bg-transparent border border-white rounded-md px-2 py-2 cursor-pointer transition-all justify-center  self-center text-[1.1rem] text-col_grayWhite hover:text-cyan-300 hover:bg-col_grayWhite `}> Create Order</a>
          
                  </a>

            ))}
        </div>
    </div>
    </div>
  )
}

export default laundaryServices
