import React from "react";

import "./App.css";

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
