import React from "react";
import { Routes, Route } from "react-router-dom";
import ShoeList from "./ShoeList/ShoeList";
import NotFound from "./URLNotFound/NotFound";
import ContactUs from "./ContactUs/ContactUs";
import Header from "./Header/Header";
import AboutUs from "./AboutUs/AboutUs";

export default function ShowStore() {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<ShoeList />}></Route>
          <Route path="contact-us" element={<ContactUs />}></Route>
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}
