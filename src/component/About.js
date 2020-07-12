import React from "react";
import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>In About Page</h1>
      <Outlet />
    </div>
  );
}
