//cartmodel.js
import React, { useContext } from "react";
import { CartItemsContext } from "../App";
import { Modal, Card, Image, Header, Button, Icon } from "semantic-ui-react";

const CartModal = ({ cart }) => {
  const { getTotalPrice, getTaxes, deleteItem } = useContext(CartItemsContext);

  return (
    <Modal open={true}>
      <Modal.Header>Shopping Cart</Modal.Header>
      <Card.Group>
        {cart.line_items.map((item, index) => (
          <CartItems item={item} key={index} />
        ))}
      </Card.Group>
      <Modal.Content>
        <p>Subtotal: {getTotalPrice().formatted_with_symbol}</p>
        <p>Taxes: {getTaxes().formatted_with_symbol}</p>
        <p>Total: {cart.subtotal.formatted_with_symbol}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          basic
          negative
          floated="left"
          onClick={() => {
            deleteItem(cart.id);
          }}
        >
          Empty Cart
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default CartModal;