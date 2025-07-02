import { useState } from 'react'
import './App.css'
import MyNavbar from './MyNavbar'
import MyCarousel from './Mycarousel'
import Footer from './Footer'
import Contact from './Contact'
import Cards from './Cards'

import { products } from "./data";
import ProductCard from "./components/ProductCard";
import CartDrawer from "./components/CartDrawer";

function App() {

  const [count, setCount] = useState(0)

   const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartOpen(true); // open drawer
  };


  return (
    <>
      <MyNavbar />
      <MyCarousel />
      <Cards />

      <div className="about" class="bg-white p-5 mt-3" style={{ display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
        <img src="/ring.png" alt="" style={{ width: "200px" }} />
        <p style={{ width: "400px" }}>Welcome to Aurora Adornments - where elegance meets Artistry. Our curated collection showcases exquisite handcrafted jewelry designed to celebrate life's special moments.</p>
      </div>




      <div className="app">
      <h1 className='text-white'>Jewellery Store</h1>

      <div className="grid-container">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {isCartOpen && (
        <CartDrawer cartItems={cartItems} onClose={() => setCartOpen(false)} />
      )}
    </div>

      <Contact />
      <Footer />
    </>
  )
}

export default App
