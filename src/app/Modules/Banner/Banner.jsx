"use client"
import 'animate.css';

const Banner = () => {
  return (
    <>
    <div className='bg-[#F2F0F1] flex mt-10'>
          
          <div className=''>
          <div className='flex flex-col gap-10 '>
          <h1 className='text-6xl font-extrabold text-black animate__animated animate__fadeInLeft'> FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>
            <p className='text-xl font-light text-black animate__animated animate__fadeInLeft'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className='w-56 h-12 rounded-2xl bg-black text-xl text-center animate__animated animate__fadeIn hover:scale-105  text-white font-light duration-300'>Shop Now</button>
          </div>

            <div className='flex gap-6 mt-8 animate__animated animate__fadeIn'>
               <div>
               <h1 className='text-3xl font-bold border-x-0 border-black text-center'>200+</h1>
               <h1 className='text-xl font-light'>International Branches</h1>
               </div>
              <div>
              <h1 className='text-3xl font-bold  border-x-2 border-black text-center'>2000+</h1>
              <h1 className='text-xl font-light'>High Quality Products</h1>
              </div>
               <div>
               <h1 className='text-3xl font-bold  border-x-2 border-black text-center'>30000+</h1>
               <h1 className='text-xl font-light'>Happy Customers </h1>
               </div>
            </div>
          </div>

          <div className='animate__animated animate__fadeInRight'>
            <img src="./Rectangle 2.png " alt="" />
          </div>
          

    </div>

    <div className='bg-black h-16 flex items-center'>
           <marquee >
         <div className='flex gap-16'>
         <img src="./Group.png" alt="" />
           <img src="./gucci-logo-1 1.png" alt="" />
           <img src="./prada-logo-1 1.png" alt="" />
           <img src="./Vector.png" alt="" />
         </div>
           </marquee>
    </div>
    </>
  )
}

export default Banner
