import React, { useEffect } from 'react'
import Forms from '../Components/Form/Forms'
import { auth, onAuthStateChanged } from '../Auth/Firebase';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            navigate('/home')
        }
      });
})
  return (
    <>
      <Forms data={{login:'Login'}}/>
    </>
  )
}

export default Login