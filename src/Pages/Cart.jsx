import React, { useEffect, useState } from 'react'
import { CiStar ,CiCircleRemove} from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import AOS from 'aos';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
const Cart = () => {
  const Data = useSelector((state)=>state.CartReducer.Cart)
  const dispatch = useDispatch()
 

  const removeProd =(value)=>{
           
    dispatch({type:'remove' , payload:value})

  } 
  useEffect(()=>{
    AOS.init();
},[])
  return (
    <>
        <div className='bg-black h-10 animate__animated animate__fadeInDown'>
            <h1 className='text-center text-lg pt-2 text-white font-light'>SignUp Now And Get 25% Off To Your First Order <a href="/">SignUp Now</a> </h1>
        </div>
        <Header/>
        <h1 className='text-4xl font-extrabold text-black text-center underline mt-8'>YOUR PRODUCTS</h1>
        <div className='flex flex-wrap justify-center gap-16 mt-8 cursor-pointer' data-aos="fade-right">
        {
          Data.length > 1 ?(
            Data.map((items)=>{
              return(
                <>
                  <div  key={items.id} className={`hover:scale-110 duration-300`}>
                    <div className='border rounded-lg'>
                    <p className='flex items-center'><CiCircleRemove className='text-2xl text-red-700' onClick={()=>removeProd(items)}/></p>
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
          ):  <h1 className='text-4xl font-extrabold text-black text-center underline mt-8'>NO PRODUCTS PLEASE BUY SOME</h1>
         
          
        }
        </div>
        <Footer/>
    </>
  )
}

export default Cart