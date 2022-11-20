import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

//hooks
export default function Nav() {
  const [open,setOpen] = useState(false);
  
  return (
    <div>
      <header className="bg-white absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            {/* <div className="px-4">
              <a href="/#" className="block py-2">
                <img src={logo} alt="logo" className="logo"/>
              </a>
            </div> */}
            <div className="flex items-center px-4">
              <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
                  <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                  <span className="hamburger-line transition duration-300 ease-in-out"></span>
                  <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
              
              <div className="flex items-center px-4">
                <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none sm:px-0">
                  <ul className="block lg:flex">
                      <li>
                        {" "}
                        <Link to="/detail1" className="text-base text-slate-900 py-2 mx-8 flex group-hover:text-primary">Detail 1</Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="/detail2" className="text-base text-slate-900 py-2 mx-8 flex group-hover:text-primary">Detail 2</Link>
                      </li>
                      <li>
                        <Link to="/detail3" className="text-base text-slate-900 py-2 mx-8 flex group-hover:text-primary">Detail 3</Link>
                      </li>
                      <li>
                        <Link to="/detail4" className="text-base text-slate-900 py-2 mx-8 flex group-hover:text-primary">Detail 4</Link>
                      </li>
                      <li>
                        <Link to="/detail5" className="text-base text-slate-900 py-2 mx-8 flex group-hover:text-primary">Detail 5</Link>
                      </li>
                      <li>
                        <Link to="/detail6" className="text-base text-slate-900 py-2 mx-8 flex group-hover:text-primary">Detail 6</Link>
                      </li>
                      <li className="group">
                        <a href="../listklinik/index.html" className="text-base text-slate-900 py-2 mx-8 flex group-hover:text-primary">Layanan</a>
                      </li>
                      <li className="group">
                        <a href="/#" className="text-base font-semibold text-white bg-secondary flex items-center mx-8 py-2 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
                        </a>
                      </li>
                      <li
                        className={open ? "fas fa-bars close" : "fas fa-bars open"} onClick={() => setOpen(true)}></li>
                      <li className={open ? "fas fa-times open" : "fas fa-times close"} onClick={() => setOpen(false)}></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
      
  );
}
