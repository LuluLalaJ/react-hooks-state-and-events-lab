import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCartState] = useState(null)
  const cartState = inCart ? "in-cart" : ""
  const buttonClass = inCart ? "remove" : "add"

  function handleItem() {
    setCartState(inCart => !inCart)
  }

  return (
    <li className={cartState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleItem} className={buttonClass}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
