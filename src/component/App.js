import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import AboutAlqama from "./component/AboutAlqama";
import { Shoe, ShowShoeId } from "./component/Shoe";
import NotFound from "./component/NotFound";

function App() {
  return (
    <div className="App">
      <h1>React Router v6 (beta)</h1>
      <hr />
      <div>
        <Link to="/">Home </Link>
        <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}>
          <Route path="/" element={<About />}></Route>
          <Route path="/alqama" element={<AboutAlqama />}></Route>
        </Route>
        <Route path="/shoe" element={<Shoe />}>
          <Route path="/:shoeId" element={<ShowShoeId />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
