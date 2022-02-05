import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.scss";

function PizzaCard({ name, price, imageUrl, types, sizes }) {
  const typesNames = ["тонкое", "традиционное"];
  const typesSizes = [26, 30, 40];
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (size) => {
    setActiveSize(size);
  };

  return (
    <div className="pizza d-flex flex-column align-center mr-40 mt-35">
      <img class="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4>{name}</h4>
      <div className="filter-pizza">
        <ul className="d-flex">
          {typesNames.map((type, index) => (
            <li
              onClick={() => onSelectType(index)}
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(index),
              })}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul className="d-flex">
          {typesSizes.map((size, index) => (
            <li
              key={index + "_" + size}
              onClick={() => onSelectSize(size)}
              className={classNames({
                active: activeSize === size,
                disabled: !sizes.includes(size),
              })}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="price-button d-flex align-center justify-between">
        <div className="price">от {price} грн</div>

        <div className="add-to-cart d-flex align-end">
          <div className="button-add-pizza">
            {" "}
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                fill="#EB5A1E"
              />
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                fill="#EB5A1E"
              />
            </svg>
            <span>Добавить</span>
            <i>2</i>
          </div>
        </div>
      </div>
    </div>
  );
}

PizzaCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PizzaCard;
