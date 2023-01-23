import React, { useContext, useEffect, useState } from "react";
import api from "../api/items";
import { Store } from "../App";

const Cart = () => {
  const [, , cartItems, , newCart, setNewCart] = useContext(Store);
  let [setEmpty] = useState();

  const PlaceOrder = (id) => {
    if (Object.keys(newCart).length > 0) {
      // Placing order and clearing all the items in cart
      alert("Order placed successfully");
      api.delete(`/cart/${id}`).then((res) => {
        setNewCart(res.data);
        api.get("/cart").then((res) => {
          if (Object.keys(res.data).length > 0) {
            setNewCart(res.data);
          } else {
            setEmpty("No items available in cart");
          }
        });
      });
    } else {
      alert("no items in cart");
    }
  };
  const Remove = (id) => {
    api.delete(`/cart/${id}`).then((res) => {
      // setNewCart(res.data);
      setNewCart(alert("one item deleted from cart"));
    });
    api.get("/cart").then((res) => {
      setNewCart(res.data);
    });
  };
  useEffect(() => {
    if (Object.keys(cartItems).length > 0) {
      api.post("/cart", cartItems).then((res) => {
        setNewCart(res.data.cart);
      });
    }
    api.get("/cart").then((res) => {
      setNewCart(res.data);
    });
    Remove();

    // PlaceOrder();
  }, [cartItems]);

  return (
    <div>
      <Store.Provider value={cartItems}>
        <div className="cart-header1">
          <h1>Cart Items</h1>

          {newCart &&
            newCart.map((car) => (
              <div key={car.id}>
                <b>{car.name}</b>
                ₹: <b>{car.Price}</b>
                <button className="btn" onClick={() => Remove(car.id)}>
                  Remove from cart
                </button>
              </div>
            ))}
          <button className="btn" onClick={() => PlaceOrder()}>
            PlaceOrder
          </button>
        </div>
      </Store.Provider>
    </div>
  );
};

export default Cart;
