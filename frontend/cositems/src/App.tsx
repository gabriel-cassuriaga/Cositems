import { Outlet } from 'react-router-dom';
import './App.css'

import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { CartProvider } from './modules/cart/cartContext';

function App() {
  return (

    <>
      <CartProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </CartProvider>

    </>

  )
}

export default App
