import React from "react";
import { Outlet, useParams } from "react-router-dom";

export function Shoe() {
  return (
    <div>
      <h1>Welcome in shoe store..</h1>
      <Outlet />
    </div>
  );
}

export function ShowShoeId() {
  let { shoeId } = useParams();
  return (
    <div>
      <h2>Shoe Id = {shoeId} </h2>
    </div>
  );
}
