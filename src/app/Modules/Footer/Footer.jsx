"use client"
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className='flex justify-center mt-10'>
       
       <div className='bg-black w-3/4 h-40 rounded-xl  flex items-center justify-evenly'>
        <div className=''>
            <h1 className='text-4xl text-white font-extrabold '>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h1>
        </div>
        <div className='flex flex-col gap-8'>
            <input type="email" className='w-72 rounded-xl pl-4 text-xl font-light outline-none' placeholder='Enter Email' />
            <input type="password" className='w-72 rounded-xl pl-4 text-xl font-light outline-none' placeholder='Enter Password'/>
        </div>
       </div>

    </div>
    <div className='flex justify-around items-center rounded-lg m-4'>
          <img src="./SHOP.CO.png" className='' alt="" />
        <div className='w-1/4  flex flex-col gap-6'>
          <p className=''>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          <div className='flex gap-5 text-3xl'>
             <FaFacebook/>
             <BsGoogle/>
             <FaInstagramSquare/>
             <FaGithub/>
          </div>
        </div>
  <div className='flex gap-16 border-x-2 pl-10'>
  <div>
          <ul className=''>
            <li className='text-2xl font-semibold border-x-2 '>Company</li>
            <li className='text-xl font-light  pt-4'>About</li>
            <li className='text-xl font-light pt-4'>Features</li>
            <li className='text-xl font-light pt-4'>Works</li>
            <li className='text-xl font-light pt-4'>Career</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className='text-2xl font-semibold border-x-2  text-center'>Help</li>
            <li className='text-xl font-light pt-4'>Customer</li>
            <li className='text-xl font-light pt-4'>Privacy</li>
            <li className='text-xl font-light pt-4'>Terms</li>
            <li className='text-xl font-light pt-4'>Career</li>
          </ul>
        </div>
        <div>
          <ul> 
            <li className='text-2xl font-semibold border-x-2  text-center'>FAQ</li>
            <li className='text-xl font-light  pt-4'>Account</li>
            <li className='text-xl font-light pt-4'>Order</li>
            <li className='text-xl font-light pt-4'>Payment</li>
            <li className='text-xl font-light pt-4'>Management</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className='text-2xl font-semibold border-x-2  text-center'>Resources</li>
            <li className='text-xl font-light pt-4'>How To-Blog</li>
            <li className='text-xl font-light pt-4'>Career</li>
            <li className='text-xl font-light pt-4'>Career</li>
            <li className='text-xl font-light pt-4'>Order</li>
            
          </ul>
        </div>
  </div>
    </div>
    </>
  )
}

export default Footer