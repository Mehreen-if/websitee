import { useState } from 'react'
import './App.css'
import MyNavbar from './MyNavbar'
import MyCarousel from './Mycarousel'
import Footer from './Footer'
import Contact from './Contact'
import Cards from './Cards'

import ProductCard from "./components/ProductCard";
import CartDrawer from "./components/CartDrawer";

function App() {

  const products = [
    {
      id: 1,
      name: "Gold Necklace",
      image: "/necklace 1.jpg",
      price: 2999,
      discountPrice: 2499
    },
    {
      id: 2,
      name: "Silver Necklace",
      image: "/necklace 2.jpg",
      price: 4999,
      discountPrice: 3999
    },

    {
      id: 3,
      name: "Diamond Necklace",
      image: "/necklace 3.jpg",
      price: 7999,
      discountPrice: 6999
    },
    {
      id: 4,
      name: "Pearl Nacklace",
      image: "/necklace 4.jpg",
      price: 1999,
      discountPrice: 1499
    }
  ];

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
