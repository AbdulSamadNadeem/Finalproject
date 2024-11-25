import React from 'react'
import Header from '../Components/Header/Header'
import ProductDetail from '../Components/ProductDetail/ProductDetail'
import Cards from '../Components/Cards/Cards'
import Footer from '../Components/Footer/Footer'

const ProductDetails = () => {
  return (
    <>
    <div className='bg-black h-10 animate__animated animate__fadeInDown'>
            <h1 className='text-center text-lg pt-2 text-white font-light'>SignUp Now And Get 25% Off To Your First Order <a href="/">SignUp Now</a> </h1>
        </div>
      <Header/>  
      <ProductDetail/>
      <h1 className='text-4xl font-extrabold text-black text-center underline mt-8'>YOU MIGHT ALSO LIKE</h1>
      <Cards type={'also'}/>
      <Footer/>
    </>
  )
}

export default ProductDetails