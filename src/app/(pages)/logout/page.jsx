"use client"
import { useNavigate } from 'react-router';
import { auth, signOut} from '../../../Auth/Firebase';
import { useRouter } from 'next/navigation';
const Page = () => {
   const router = useRouter();
    const Logout =()=>{
        signOut(auth).then(() => {
          router.push('/login')
          }).catch((error) => {
            console.log(error)
          });
    }
  return (
    <>
     <div className='flex flex-col justify-center items-center h-screen'>
     <h1 className='text-6xl font-extrabold text-black animate__animated animate__fadeInLeft'>ARE YOU SURE WANT TO LOGOUT </h1>
     <button onClick={Logout} className='w-96 h-12 text-2xl font-light text-center text-white bg-black transition-transform hover:scale-105 duration-200 cursor-pointer'>LOGOUT</button>
     </div>
    </>
  )
}

export default Page
