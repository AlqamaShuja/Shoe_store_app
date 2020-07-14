import React from "react";
import { useParams } from "react-router-dom";
import { shoe } from "../shoeData";
import ShoeDetailsCard from "./shoeDetailsCard";

export default function ShoeDetails() {
  const { shoeId } = useParams();
  const shoeObject = shoe[shoeId];

  return (
    <div>
      <h1>Shoes Details </h1>
      <ShoeDetailsCard
        img={shoeObject.imgURL}
        name={shoeObject.name}
        price={shoeObject.price}
      />
    </div>
  );
}
