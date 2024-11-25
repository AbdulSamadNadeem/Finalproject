import React, { useEffect, useState } from 'react'
import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';

const Cards = ({type}) => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

   const allProducts = useSelector((state) => state.All_Product_Reducer.AllProducts)
   
   const Data = (() => {
    switch (type) {
      case 'newarrival':
        return allProducts.slice(0, 8);
      case 'topselling':
        return allProducts.slice(8, 16);
      case 'also':
        return allProducts.slice(9, 17);
      default:
        return allProducts;
    }
  })();


    const filter= async(value)=>{
        dispatch({type:"select" , payload:value})
        setTimeout(()=>{
            navigate('/details')
        },2000)
    }
    useEffect(()=>{
        AOS.init();
    },[])
  return (
    <>
    <div onClick={()=>navigate('/details')} className='flex flex-wrap justify-center gap-16 mt-8 cursor-pointer' data-aos="fade-right">

        {
          Data &&(

            Data.map((items)=>{
              return(
                <>
                  <div  onClick={()=>filter(items)} key={items.id} className={`hover:scale-110 duration-300`}>
                    <div className='border rounded-lg'>
                        <img src={items?.image} alt="" className='w-56 h-56 object-contain' />
                    </div>
                   <div>
                    <p className='text-black text-xl font-light'>{items?.title?.slice(0,20)}</p>
                    <p className='text-black font-light text-xl'> <ins>${items?.price}</ins> <del className='text-[#b2bec3]'>${Math.floor(items?.price + 10)}</del></p>
                    <p className='flex items-center'>{Array.from({length:Math.floor(items?.rating?.rate)} , (_,index)=>(<CiStar className='text-yellow-400 text-3xl' key={index}/>))} <span>{items?.rating?.count}</span></p>
                   </div>
                </div>
                </>
            )
            })
          )
        }
         <button onClick={()=>navigate('/details')} className='w-56 h-12 rounded-2xl bg-black text-xl text-center animate__animated animate__fadeIn hover:scale-105  text-white font-light duration-300'>See More</button>
    </div>

    </>
  )
}

export default Cards


