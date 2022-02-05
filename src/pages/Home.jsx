import React from "react";

import { PizzaCard, Categories, SortHover } from "./index.js";

import { useSelector, useDispatch } from "react-redux";

import { setCategory } from "../redux/action/filters";

import "../components/style.scss";

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzasReducer }) => pizzasReducer.items);

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };

  return (
    <div className="home">
      <div className="categories d-flex align-center justify-between">
        <Categories
          onClickItem={onSelectCategory}
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortHover
          items={[
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "alphabet" },
          ]}
        />
      </div>
      <div className="content-pizza mb-40">
        <h2>Все пиццы</h2>
        <div className=" d-flex flex-wrap ">
          {items &&
            items.map((pizza, index) => {
              return <PizzaCard {...pizza} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
