import React from "react";

import { PizzaCard, Categories, SortHover } from "./index.js";

import "../components/style.scss";

function Home() {
  const items = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  return (
    <div className="home">
      <div className="categories d-flex align-center justify-between">
        <Categories items={items} />
        <SortHover />
      </div>
      <div className="content-pizza mb-40">
        <h2>Все пиццы</h2>
        <div className=" d-flex flex-wrap ">
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
