import React from "react";
import logod from "../assets/lo.png";
const Footer = () => {
  return (
    <div className="m-10 shadow-2xl border-0 p-3 h-70">
      <div className="flex justify-between m-10">
        <div className="">
          <div className="flex items-center pb-2">
            <span>
              <img src={logod} className="h-10 w-10"></img>
            </span>
            <span className="font-bold text-2xl">BIBIKA</span>
          </div>
          <p className="text-wrap w-1/3 ">
            Bibika is a fashion store by Gopika Bibin, based in Pampuram,
            bringing carefully curated styles for modern living. From everyday
            essentials to statement outfits, Bibika blends quality, comfort, and
            elegance through its online store—designed to make fashion
            accessible and timeless.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-40 mx-20">
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
