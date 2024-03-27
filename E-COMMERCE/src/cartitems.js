//cartitems.js
import React, { useContext } from "react";
import { CartItemsContext } from "../App";
import { Button, Input, Icon } from "semantic-ui-react";

const CartItems = ({ item }) => {
  const { addQuantity, subtractQuantity, deleteItem } = useContext(
    CartItemsContext
  );

  return (
    <div className="cart-item">
      <div>{item.name}</div>
      <div className="quantity-group">
        <Button
          negative
          className="quan-buttons"
          onClick={() => {
            subtractQuantity(item.id, item.quantity);
          }}
        >
          <Icon name="minus" />
        </Button>
        <Input
          className="input-quanity"
          value={item.quantity}
          onChange={() => {}}
        />
        <Button
          positive
          className="quan-buttons"
          onClick={() => {
            addQuantity(item.id, item.quantity);
          }}
        >
          <Icon name="plus" />
        </Button>
      </div>
      <Button
        negative
        onClick={() => {
          deleteItem(item.id);
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default CartItems;