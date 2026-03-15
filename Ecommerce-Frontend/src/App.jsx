import axios from "axios";
import {Routes, Route} from "react-router";
import {HomePage} from './pages/HomePage.jsx'
import {useEffect,useState} from "react";
import {CheckoutPage} from './pages/CheckoutPage.jsx'
import {OrdersPage} from './pages/OrdersPage.jsx'
import './App.css'

function App() {
  const [cart, setCart] = useState([])
 useEffect(()=>{
     axios.get("/api/cart-items")
      .then((response) =>{
        setCart(response.data)
    })
},[])
  
  return (
    <Routes>
        <Route index element={<HomePage cart={cart}/>} />
        <Route path="checkout" element={<CheckoutPage cart={cart}/>} />
        <Route path="orders" element={<OrdersPage />} />
    </Routes>
      )
}     

export default App
