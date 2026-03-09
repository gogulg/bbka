import React from "react";
import logo from "../assets/images.jpg";
import logo1 from "../assets/image2.jpg";
import logo2 from "../assets/iamge3.jpg";
import logo4 from "../assets/cor.png";
import on from "../assets/on.jpg";
import on1 from "../assets/on1.jpg";
import on2 from "../assets/on2.jpg";
import on3 from "../assets/on3.jpg";
import on4 from "../assets/on4.jpg";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";

const Home = () => {
  const name = ["men", "women", "kids", "arrival"];
  return (
    <div>
      <div>
        {/* <img
          src={logo4}
          alt="Company Logo"
          className="h-180 w-screen object-cover shadow-xl"
        /> */}
        <div className="w-full min-h-[50vh] h-auto">
          <div className=" sm:grid-row-2 grid lg:grid-cols-2 bg-white m-3 shadow-2xl rounded-2xl">
            <div>
              <p className="flex pl-5  lg:pt-20 lg:text-8xl text-3xl pt-2 font-serif">
                Summer Outfits
              </p>
              <p className="flex text-justify pl-5 pr-5 pt-5 lg:text-2xl font-serif leading-relaxed ">
                Discover lightweight, breathable outfits designed for sunny days
                and warm nights. Our summer collection blends comfort, color,
                and effortless style for every moment of the season. Inspired by
                the warmth of summer, each piece is thoughtfully designed with
                airy fabrics, fresh colors, and modern silhouettes. Whether
                you're strolling through the city, enjoying a beach day, or
                heading out for a sunset evening, our collection keeps you cool,
                confident, and effortlessly stylish. ✨
              </p>
            </div>
            <div className="grid lg:grid-cols-2  h-auto  m-5">
              <img
                src={pic1}
                alt="Company Logo"
                className=" object-cover w-screen rounded-2xl"
              />
              <img
                src={pic2}
                alt="Company Logo"
                className="  object-cover w-screen rounded-2xl "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex  items-center capitalize justify-center p-10 gap-2 lg:gap-20 font-bold font-serif lg:text-2xl text-xl shadow-xl">
        {name.map((list) => {
          return <div>{list}</div>;
        })}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 m-5 ">
        <img
          src={on1}
          alt="Company Logo"
          className="w-screen object-cover  rounded-2xl shadow-xl"
        />
        <img
          src={on4}
          alt="Company Logo"
          className=" w-screen object-cover  rounded-2xl shadow-xl"
        />
        <img
          src={on3}
          alt="Company Logo"
          className="w-screen object-cover  rounded-2xl shadow-xl"
        />
        <img
          src={on2}
          alt="Company Logo"
          className=" w-screen object-cover  rounded-2xl shadow-xl"
        />
        <img
          src={on1}
          alt="Company Logo"
          className="w-screen object-cover  rounded-2xl shadow-xl"
        />
        <img
          src={on}
          alt="Company Logo"
          className=" w-screen object-cover  rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default Home;
