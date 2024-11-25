import { Route, Routes } from 'react-router'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import Logout from './Pages/Logout'

const App = () => {

  return (
    <>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/details' element={<ProductDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/logout' element={<Logout/>}/>
    </Routes>
    </>
  )
}

export default App