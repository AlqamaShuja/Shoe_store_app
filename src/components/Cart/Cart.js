import React, { Component } from "react";
import { shoe } from "../shoeData";
import CartCardComponent from "./CartCardComponent";

class Carts extends Component {
  render() {
    const cartList = this.props.list.map(id => {
        const shoes = shoe[id];
        return (
            <CartCardComponent
              name={shoes.name}
              img={shoes.imgURL}
              price={shoes.price}
              key={id}
              id={id}
              removeFromCart={this.props.removeFromCart}
            />
          );
    });

    return (
      <div style={{ marginTop: "55px" }}>
        <h1 style={{ color: "#3f51b5", fontFamily: "Arial" }}>Your Carts</h1>
        {cartList ? cartList : <h3>Your Cart Is Empty</h3>}
      </div>
    );
  }
}

export default Carts;
