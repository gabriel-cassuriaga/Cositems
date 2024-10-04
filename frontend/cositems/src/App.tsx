import { Outlet } from 'react-router-dom';
import './App.css'

import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { CartProvider } from './context/CartContext';

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
