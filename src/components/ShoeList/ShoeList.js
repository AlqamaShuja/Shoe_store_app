import React from "react";
import ShoeCardComponent from "./ShoeCardComp/ShoeCardComponent";
import { shoe } from "../shoeData";

export default function ShoeList() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        overflow: "auto",
      }}
    >
      {Object.entries(shoe).map((sh) => (
        <ShoeCardComponent />
      ))}
    </div>
  );
}
