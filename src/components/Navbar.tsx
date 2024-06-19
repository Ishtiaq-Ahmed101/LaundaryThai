/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'

const currentUrl = location.pathname + location.search;
import logoml from '../assets/logoml.svg'
import { CiLogin } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  
    const currentUrl =  window.location.pathname;

  return (
    <div className='max-w-full flex flex-col'>
    <div className='max-w-full flex flex-row justify-between text-black mt-5px border border-white border-b-cyan-400 py-5 px-2 '>
        <div className='flex flex-col justify-center'>
        <div className=' flex flex-row gap-4'>
            <a className=' hover:text-cyan-400 transition-all hover:border-b-cyan-400 hover:border hover:border-white' href={'/'}>Pricing</a>
            <a className=' hover:text-cyan-400 transition-all hover:border-b-cyan-400 hover:border hover:border-white' href={'/'}>FAQ</a>
        </div>
        </div>
        <div className='hidden md:flex flex-col justify-center '>
        <img src={logoml} alt="logo" />
        </div>
        <div className='flex flex-col justify-center'>
        <div className='flex flex-row gap-4 text-2xl'>
            <a className='self-center' href="">
        <CiLogin className='hover:fill-cyan-400' />
            </a>
            <a className='self-center' href="">
        <CiShoppingCart className='hover:fill-cyan-400' />
            </a>
        <a className=' hidden md:flex text-sm bg-cyan-400 rounded-md px-2 py-2 hover:bg-black hover:text-white cursor-pointer transition-all'>Create Order</a>
        </div>
        </div>
    </div>
    <div className=' text-black transition-color flex-row justify-between md:mt-6 hidden md:flex px-2 gap-4 '>
        <a className=' hover:text-cyan-400 transition-all hover:border-b-cyan-400 hover:border hover:border-white' href="/">Wash & Fold</a>
        <a className=' hover:text-cyan-400 transition-all hover:border-b-cyan-400 hover:border hover:border-white' href="/">Shoe Cleaning</a>
        <a className=' hover:text-cyan-400 transition-all hover:border-b-cyan-400 hover:border hover:border-white' href="/">Ironing Service</a>
        <a className=' hover:text-cyan-400 transition-all hover:border-b-cyan-400 hover:border hover:border-white' href="/">Bedding & Home</a>
        <a className=' hover:text-cyan-400 transition-all hover:border-b-cyan-400 hover:border hover:border-white' href="/">My Laundry Bag</a>
        <a className=' hover:text-cyan-400 transition-all hover:border-b-cyan-400 hover:border hover:border-white' href="/">Beverages</a>
    </div>
    <div className='md:hidden flex flex-row justify-between text-black mt-5'>
        {currentUrl == '/' ? (
            <a className='self-center' href="/menue" ><RxHamburgerMenu className='text-2xl'/></a>
        ):(
            <a className='self-center' href="/"><RxCross2 className='text-2xl'/></a>
        )}
    <img src={logoml} alt="logo" />

    <a className=' flex text-sm bg-cyan-400 rounded-md px-2 py-2 hover:bg-black hover:text-white cursor-pointer transition-all'>Create Order</a>
    </div>
    </div>
  )
}

export default Navbar
