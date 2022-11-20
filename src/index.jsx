import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail1 from "./route/Detail1"; 
import Detail2 from "./route/Detail2";
import Detail3 from "./route/Detail3"; 
import Detail4 from "./route/Detail4"; 
import Detail5 from "./route/Detail5"; 
import Detail6 from "./route/Detail6";  



ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="detail1" element={<Detail1 />}/>
        <Route path="detail2" element={<Detail2 />}/>
        <Route path="detail3" element={<Detail3 />}/>
        <Route path="detail4" element={<Detail4 />}/>
        <Route path="detail5" element={<Detail5 />}/>
        <Route path="detail6" element={<Detail6 />}/>
      </Route>
    </Routes>
  </Router>
);


