import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Navbar from "./Navbar";
import Offers from "./Components/Offers";
import Address from "./Components/Address";
import Help from "./Components/Help";

export const Store = createContext();

const App = () => {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  let [newCart, setNewCart] = useState();

  // <Cart cartItems={cartItems} />;
  // console.log(cartItems);

  useEffect(() => {
    axios.get("http://localhost:3007/item").then((res) => {
      setData(res.data);
    });
    // fetch("http://localhost:9000/getUsers")
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
    // console.log(data);
  }, []);

  return (
    <div className="container">
      <Store.Provider
        value={[data, setData, cartItems, setCartItems, newCart, setNewCart]}
      >
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Offers" element={<Offers />} />
            <Route path="/Address" element={<Address />} />
            <Route path="/Help" element={<Help />} />
          </Routes>
        </BrowserRouter>
      </Store.Provider>
    </div>
  );
};

export default App;
