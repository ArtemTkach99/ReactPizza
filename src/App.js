import React, { useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

import { setPizzas } from "./redux/action/pizzas";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3001/pizzas").then(function (res) {
      // setPizzas(res.data.pizzas);
      dispatch(setPizzas(res.data));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home exact />} />
          <Route path="/cart" component={Cart} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
