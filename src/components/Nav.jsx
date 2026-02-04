import React from "react";
import lo from "../assets/lo.png";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <>
      <div className="flex justify-between m-0.5 p-2 bg-white rounded-1xl shadow-2xl items-center">
        <div className="flex items-center">
              <img src={lo} alt="Company Logo" className="h-10 w-15" />
          <h1 class="text-3xl font-bold text-black font-serif">BIBIKA FASHION</h1>
        </div>
        <div className=" flex gap-10  text-black px-6">
          <span className="cursor-pointer hover:text-red-500 "> <Link to="/">Home</Link>    </span>
          <span className="cursor-pointer hover:text-red-500"> <Link to="/about">ABOUT</Link> </span>
          <span className="cursor-pointer hover:text-red-500"> <Link to="/shop">SHOP</Link></span>
          <span className="cursor-pointer hover:text-red-500">NEW ARRIVALS</span>
          <span className="cursor-pointer hover:text-red-500">CONTACT US</span>
        </div>
        <div className=" flex gap-3  text-white bg-blue-500 rounded-2xl items-center px-5 py-2 hover:bg-green-600">
          <span>Contact</span>
        </div>
      </div>
    </>
  );
};

export default Nav;
