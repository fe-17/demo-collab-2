import React from "react";
import Home from "./component/Home";
import Layanan from "./component/Layanan";
import Login from "./component/Login";
import Navbar from "./Navbar";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="layanan" element={<Layanan />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
