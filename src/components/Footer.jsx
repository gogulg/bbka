import React from "react";
import logod from "../assets/lo.png";
const Footer = () => {
  return (
    <div className="m-5 shadow-2xl border-0 p-3 ">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between m-1/3">
        <div className="">
          <div className="flex items-center pb-2">
            <span>
              <img src={logod} className="h-10 w-10"></img>
            </span>
            <span className="font-bold text-2xl">BIBIKA</span>
          </div>
          <p className="break words  md:w-1/2 font-serif ">
            Bibika is a fashion store by Gopika Bibin, based in Pampuram,
            bringing carefully curated styles for modern living. From everyday
            essentials to statement outfits, Bibika blends quality, comfort, and
            elegance through its online store—designed to make fashion
            accessible and timeless.
          </p>
        
        </div>
        <div className="hidden lg:grid grid-cols-3 gap-2 md:gap-40 ">
          <div className="grid grid-rows-4">
            <span className="font-bold text-xl">Product</span>
            <span>Men</span>
            <span>Women</span>
          </div>
          <div className="grid grid-rows-4">
            <span className="font-bold text-xl">Resources</span>
            <span>Men</span>
            <span>Women</span>
          </div>
                    <div className="grid grid-rows-4">
            <span className="font-bold text-xl">Company</span>
            <span>Men</span>
            <span>Women</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
