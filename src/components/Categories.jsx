import React, { useState } from "react";

export default function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  return (
    <ul className="d-flex">
      <li
        onClick={() => onSelectItem(null)}
        className={activeItem === null ? "active" : ""}
      >
        Все
      </li>
      {items.map((a, index) => {
        return (
          <li
            onClick={() => onSelectItem(index)}
            className={activeItem === index ? "active" : ""}
          >
            {a}
          </li>
        );
      })}
    </ul>
  );
}
