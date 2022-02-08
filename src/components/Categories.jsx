import React from "react";

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickItem,
}) {
  const onSelectItem = (index) => {
    onClickItem(index);
  };

  return (
    <ul className="d-flex">
      <li
        onClick={() => onSelectItem(null)}
        className={activeCategory === null ? "active" : ""}
      >
        Все
      </li>
      {items.map((a, index) => {
        return (
          <li
            onClick={() => onSelectItem(index)}
            className={activeCategory === index ? "active" : ""}
          >
            {a}
          </li>
        );
      })}
    </ul>
  );
});

export default Categories;
