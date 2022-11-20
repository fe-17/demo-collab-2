import React, { useState } from "react";
import Logo from "../src/assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {/* Nav */}
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto pl-0 pr-4 text-slate-500 z-10">
        <img src={Logo} alt="" className="block py-4" width="250" height="250" />
        <ul className="hidden md:flex">
          <Link to="/home">
            <li className="p-4 hover:text-meds">Home</li>
          </Link>
          <Link to="/layanan">
            <li className="p-4 hover:text-meds">Layanan</li>
          </Link>
          <Link to="/login">
            <li className="text-base font-semibold text-white bg-secondary flex items-center mx-4 my-3 py-1 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Login</li>
          </Link>
        </ul>

        <div onClick={handleNav} className="fixed right-4 md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div className={!nav ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-amber-200 bg-amber-50 ease-in-out duration-500 md:hidden" : "fixed left-[-100%] ease-in-out duration-500"}>
          <img src={Logo} alt="" className="block py-6" width="250" height="250" />
          <ul className=" pt-1">
            <Link to="/home">
              <li className="px-6 py-4 hover:text-meds">Home</li>
            </Link>
            <Link to="/layanan">
              <li className="px-6 py-4 hover:text-meds">Layanan</li>
            </Link>
            <Link to="/login">
              <li className="text-base font-semibold text-white bg-secondary flex mx-20 py-1 px-4 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Login</li>
            </Link>
          </ul>
        </div>
      </div>
      {/* Nav end */}
    </>
  );
};
export default Navbar;
