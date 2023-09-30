
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './Componant/UI/Header';
import Home from './Componant/UI/Pages/Home';
import About from './Componant/UI/Pages/About';
import Store from './Componant/UI/Pages/Store';
import Cart from './Componant/Cart/Cart';
import { useState } from 'react';
import ContactUs from './Componant/UI/Pages/ContactUs';

function App() {

  const[cart,setCart]=useState([]);
  const addToCart = (item) => {
    // cart.push(item);
    
    // setCart([...cart, item]);
    console.log(cart);
    const newCart = [...cart, item];
    setCart(newCart);
  };
  return (
    <Router>         
        <Header cart={cart}/>
      <Routes>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact-Us' element={<ContactUs/>}></Route>
      <Route path='/Store' element={<Store addToCart={addToCart} cart={cart}/>}></Route>
      <Route path='/Cart' element={<Cart  count={cart.length} cart={cart}/>}></Route>
      </Routes>
   
    </Router>
  );
}

export default App;
