import React from "react";
import { Routes, Route } from "react-router-dom";
import ShoeList from "./ShoeList/ShoeList";
import NotFound from "./URLNotFound/NotFound";
import Carts from "./Cart/Carts";
import Header from "./Header/Header";
import AboutUs from "./AboutUs/AboutUs";
import ShoeDetails from "./ShoeDetails/ShoeDetails";

export default function ShowStore() {
  const [isList, setList] = React.useState([]);

  const addOnCart = (id) => {
    if (isList.includes(id)) {
      return;
    }
    isList.push(id);
    // setList(isList.push(id));
    // console.log(isList);
  };

  const removeFromCart = (id) => {
    if (isList.includes(id)) {
      const shoesObject = isList.filter((sh) => sh !== id);
      setList(shoesObject);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<ShoeList addOnCart={addOnCart} />}></Route>
          <Route path="/:shoeId" element={<ShoeDetails />}></Route>
          <Route
            path="cart"
            element={<Carts list={isList} removeFromCart={removeFromCart} />}
          ></Route>
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}
