import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Footer from './components/Footer'

function App() {

  return (
    <div className='body-wrapper'>
      <Navbar></Navbar>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
