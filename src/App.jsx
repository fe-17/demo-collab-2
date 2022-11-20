import React from "react";
import Home from "./component/Home";
import Layanan from "./component/Layanan";
import Login from "./component/Login";
import Navbar from "./Navbar";
import Detail from "./component/Detail";
import Register from './component/Register'
import Sync from './component/Sync'

import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/register' />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/sync' element={<Sync />} />
        <Route path="Home" element={<Home />} />
        <Route path="layanan" element={<Layanan />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
