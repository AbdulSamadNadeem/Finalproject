"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const PromotionBlock = () => {
  useEffect(()=>{

    AOS.init();
},[])
  return (
    <>
    <div className='flex justify-center bg-[#F0F0F0] mt-10'>
        <div className='flex flex-col gap-6'>
            <h1 className='text-5xl font-extrabold text-black text-center'>BROWSE BY DRESS STYLE</h1>
            <div className='flex gap-6' data-aos="fade-right">
                <img src="./Frame 61.png" alt="" />
                <img src="./Frame 62.png" alt="" />
            </div>
            <div className='flex gap-6' data-aos="fade-left">
            <img src="./Frame 63.png" alt="" />
            <img src="./Frame 64.png" alt="" />
            </div>
        </div>
    </div>
   
    </>
  )
}

export default PromotionBlock