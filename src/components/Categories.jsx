import React, { useState } from "react";

export default function Categories({ items }) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <ul className="d-flex">
      <li
        onClick={() => setActiveItem(null)}
        className={activeItem === null ? "active" : ""}
      >
        Все
      </li>
      {items.map((a, index) => {
        return (
          <li
            onClick={() => setActiveItem(index)}
            className={activeItem === index ? "active" : ""}
          >
            {a}
          </li>
        );
      })}
    </ul>
  );
}
