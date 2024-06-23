/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'

//large images
import Hero_shoe_en from '../assets/Hero_shoe_en.png'
import Hero_wash_en from '../assets/Hero_wash_en.png'
import Hero_bag_en from '../assets/Hero_bag_en.png'
import Hero_bedding_en from '../assets/Hero_bedding_en.png'
import Hero_bev_en from '../assets/Hero_bev_en.png'
import Hero_iron_en from '../assets/Hero_iron_en.png'
import Hero_suit_en from '../assets/Hero_suit_en.png'
// small images
import Hero_mobile_wash_en from '../assets/Hero_mobile_wash_en.jpg'
import Hero_mobile_suit_en from '../assets/Hero_mobile_suit_en.jpg'
import Hero_mobile_shoe_en from '../assets/Hero_mobile_shoe_en.jpg'
import Hero_mobile_iron_en from '../assets/Hero_mobile_iron_en.jpg'
import Hero_mobile_bev_en from '../assets/Hero_mobile_bev_en.jpg'
import Hero_mobile_bed_en from '../assets/Hero_mobile_bed_en.jpg'
import Hero_mobile_bag_en from '../assets/Hero_mobile_bag_en.jpg'


const imagesBig = [Hero_shoe_en, Hero_bag_en, Hero_bedding_en, Hero_bev_en, Hero_iron_en, Hero_suit_en, Hero_wash_en]
const imagesSmall = [
  Hero_mobile_suit_en,Hero_mobile_shoe_en,Hero_mobile_iron_en,Hero_mobile_bev_en,Hero_mobile_bed_en,Hero_mobile_bag_en,Hero_mobile_wash_en,
]


const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [img, setImg] = useState(screenWidth < 768 ? Hero_mobile_wash_en : Hero_wash_en);
  const images = screenWidth < 768 ? imagesSmall : imagesBig;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScreenWidth(window.innerWidth)
      setCount((prevCount) => prevCount + 1);
      setImg(images[count % images.length]);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [count]);


  return (
    <>
      <div className="md:my-12 w-full my-6 flex justify-center  ">
        <img className='rounded-md bg-cover ' src={img} alt="" />
      </div>
    </>
  )
}

export default Hero
