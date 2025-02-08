"use client"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProductDetail = () => {
    const [num , setnum] = useState(0)
    const dispatch = useDispatch()
    const data = useSelector((state)=>{
        if(state.Selected_Product_Reducer.SelectedProduct[0]?.length > 1){
            return state.Selected_Product_Reducer.SelectedProduct[0]?.slice(0,1)
        }
        else{
           return state.Selected_Product_Reducer.SelectedProduct
        }
    })
  
    console.log(data)
    
    
  return (
    <>
   <div className='flex gap-4 mt-10'>
      {
        data &&(
            data.map((item)=>{
                return(
                    <>
                     <div key={item?.id} className='flex gap-4 items-start'>
        <div className='flex flex-col gap-16'>
             <div className='w-60  rounded-xl border-2 active:border-black'><img src={item?.imageUrl} alt="" className='h-60 mx-auto'/></div>
             <div className='w-60 rounded-xl border-2 active:border-black'><img src={item?.imageUrl} alt="" className='h-60 mx-auto' /></div>
        </div>
        <div className='h-[560px] place-content-center rounded-xl border-2 active:border-black'>
        <img src={item?.imageUrl}  className='w-[350px]' alt="" />
        </div>
    </div>
    <div>
        <div>
            <div className='flex flex-col gap-8'>
            <h1 className='text-4xl font-extrabold'>{item?.title?.slice(0,30)}</h1>
            <p className='text-2xl font-bold '><ins>${Math.floor(item?.price)}</ins> <del className='text-red-500'>${Math.floor(item?.price + 20)}</del></p>
            <p>{item?.description?.slice(0,70)}</p>

            </div>
            <hr className='border mt-6'/>

            <div className='mt-6'>
                <h1 className='text-xl font-light'>Select Colors</h1>
               <div className='flex gap-6 mt-4'>
               <div className='w-10 h-10 rounded-full bg-red-600'></div>
                <div className='w-10 h-10 rounded-full bg-yellow-500'></div>
                <div className='w-10 h-10 rounded-full bg-green-800'></div>
               </div>
            </div>

            <hr className='border mt-6'/>

            <div>
            <h1 className='text-xl font-light'>Choose Size</h1>
            <div className='mt-4'>
                <button className='w-36 text-xl border-2 bg-[#ECECEC] border-black font-light  text-center rounded-2xl outline-none focus:bg-black focus:text-white'>Small</button>
                <button className='w-36 text-xl border-2 bg-[#ECECEC] border-black font-light text-center rounded-2xl outline-none focus:bg-black focus:text-white'>Medium</button>
                <button className='w-36 text-xl border-2 bg-[#ECECEC] border-black font-light text-center rounded-2xl outline-none focus:bg-black focus:text-white'>Large</button>
                <button className='w-36 text-xl border-2 bg-[#ECECEC] border-black font-light text-center rounded-2xl outline-none focus:bg-black focus:text-white'>Xl</button>
            </div>
            </div>

            <hr className='border mt-6'/>
                       
            <div className='mt-6 flex gap-6'>
                    <div className='w-40 rounded-xl border-2 flex justify-around'>
                        <div><h1 onClick={()=>setnum(num + 1)} className='text-3xl font-light text-black cursor-pointer'>+</h1></div>
                        <p className='text-3xl font-bold text-black'>{num}</p>
                        <h1 onClick={()=>{num === 0 ? setnum(0) : setnum(num - 1) }} className='text-3xl font-light text-black cursor-pointer'>-</h1>
                    </div>
                    <button onClick={()=>dispatch({type:'cart' , payload:item})} className='w-96 text-xl border-2 bg-[#ECECEC] border-black font-light text-center rounded-2xl outline-none focus:bg-black focus:text-white'>ADD TO CART</button>
            </div>

        </div>
    </div>
                    </>
                )
            })
        )
      }
   </div>
    </>
  )
}

export default ProductDetail
