import React, { useContext, useEffect } from "react";
import { Store } from "../App";
import api from "../api/items";

const Home = () => {
  const [data, , cartItems, setCartItems, , setNewCart] = useContext(Store);
  // Adding items into 'cart' json server

  useEffect(() => {
    if (Object.keys(cartItems).length > 0) {
      api.post("/cart", cartItems).then((res) => {
        setNewCart(res.data.cart);
      });
    }
  }, [cartItems]);
  console.log(cartItems);

  return (
    <div className="container">
      {data.map((dat) => (
        <div className="main-div" key={dat.id}>
          <b>{dat.name}</b>
          <br /> ₹: <b>{dat.Price}</b>
          <div className="img-div">
            <img src={dat.icon} alt=" " />
            <br />
            <button className="btn" onClick={(e) => setCartItems(dat)}>
              Add to cart
            </button>
          </div>
        </div>
      ))}
      <div className="bottom">
        <h3>Our Services in : </h3>
        <address> Bengaluru, Chennai, & Hyderabad</address>
      </div>
    </div>
  );
};

export default Home;
