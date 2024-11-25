import React, { useEffect } from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import 'animate.css';
import Cards from '../Components/Cards/Cards';
import PromotionBlock from '../Components/PromotionBlock/PromotionBlock';
import Footer from '../Components/Footer/Footer';
import { useDispatch } from 'react-redux';
const Home = () => {
  const dispatch = useDispatch()
  const fetchData=async()=>{
    try{
       const res = await fetch('https://fakestoreapi.com/products')
       const data = await res.json() 
       dispatch({type:'All' , payload:data})

    }
    catch(e){
        console.log(e)
    }

    
}
useEffect(()=>{
  fetchData()
},[])
  return (
    <>
        <div className='bg-black h-10 animate__animated animate__fadeInDown'>
            <h1 className='text-center text-lg pt-2 text-white font-light'>SignUp Now And Get 25% Off To Your First Order <a href="/">SignUp Now</a> </h1>
        </div>
        <Header/>
        <Banner/>

        <h1 className='text-4xl font-extrabold text-black text-center underline mt-8'>NEW ARRIVALS</h1>

        <Cards type={'newarrival'}/>
        <hr className='border-2 mt-10'/>
        <h1 className='text-4xl font-extrabold text-black text-center underline mt-8'>TOP SELLING</h1>
        <Cards type={'topselling'}/>

        <PromotionBlock/>
        <Footer/>
    </>
  )
}

export default Home