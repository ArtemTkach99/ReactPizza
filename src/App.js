import React from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

import "./App.css";

function App() {
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
