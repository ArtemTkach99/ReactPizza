import React, { useEffect } from "react";

import { PizzaCard, Categories, SortHover, MyLoader } from "./index.js";

import { useSelector, useDispatch } from "react-redux";

import { setCategory, setSortBy } from "../redux/action/filters";
import { fetchPizza } from "../redux/action/pizzas";

import "../components/style.scss";

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzasReducer }) => pizzasReducer.items);
  const isLoaded = useSelector(({ pizzasReducer }) => pizzasReducer.isLoaded);
  const { category, sortBy } = useSelector(
    ({ filtersReducer }) => filtersReducer
  );

  useEffect(() => {
    dispatch(fetchPizza(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };

  const onSelectSortType = (type) => {
    dispatch(setSortBy(type));
  };

  return (
    <div className="home">
      <div className="categories d-flex align-center justify-between">
        <Categories
          activeCategory={category}
          onClickItem={onSelectCategory}
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortHover
          activeSortType={sortBy.type}
          onClickSortType={onSelectSortType}
          items={[
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "name" },
          ]}
        />
      </div>

      <div className="content-pizza mb-40">
        <h2>Все пиццы</h2>
        <div className=" d-flex flex-wrap ">
          {isLoaded
            ? items.map((pizza, index) => {
                return <PizzaCard {...pizza} key={index} />;
              })
            : Array(10).fill(<MyLoader />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
