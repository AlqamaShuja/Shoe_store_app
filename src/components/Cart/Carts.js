import React, { Component } from "react";
import { shoe } from "../shoeData";
import CartCardComponent from "./CartCardComponent";

class Carts extends Component {
  render() {
    const cart = Object.entries(shoe).map(([shoeId, shoe]) => {
      if (this.props.list.includes(shoeId)) {
        return (
          <CartCardComponent
            name={shoe.name}
            img={shoe.imgURL}
            price={shoe.price}
            key={shoeId}
            id={shoeId}
            removeFromCart={this.props.removeFromCart}
          />
        );
      }
    });

    const checkCart = cart.every((obj) => obj === undefined);

    return (
      <div style={{ marginTop: "55px" }}>
        <h1 style={{ color: "#3f51b5", fontFamily: "Arial" }}>Your Carts</h1>
        {checkCart ? <h3>Your Cart Is Empty</h3> : cart}
      </div>
    );
  }
}

export default Carts;
