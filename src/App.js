import React from "react";
// import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const fetchData = () => {
    // console.log("testing the data");
    axios.get("https://dummyjson.com/products?limit=10").then((res) => {
      setData(res.data.products);
    });
  };

  useEffect(() => {
    if (count % 2 === 0) {
      fetchData();
    } else {
      setData([]);
      // alert("error in API please try again");
    }
  }, [count]);

  return (
    <>
      <h1>Count: {count} </h1> <br />
      <button className="btn" onClick={() => setCount(count + 1)}>
        Increment
      </button>{" "}
      &nbsp;
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br />
      {data.map((dat) => (
        <li key={dat.id}>
          {dat.title}-{dat.price}
        </li>
      ))}
    </>
  );
};

export default App;
