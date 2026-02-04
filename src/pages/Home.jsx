import React from "react";
import logo from "../assets/images.jpg";
import logo1 from "../assets/image2.jpg";
import logo2 from "../assets/iamge3.jpg";
import logo4 from "../assets/cor.png";
import on from "../assets/on.jpg"
import on1 from "../assets/on1.jpg"
import on2 from "../assets/on2.jpg"
import on3 from "../assets/on3.jpg"
import on4 from "../assets/on4.jpg"

const Home = () => {
  const name = ["men", "women", "kids", "arrival"];
  return (
    <div>
      <div>
        <img
          src={logo4}
          alt="Company Logo"
          className="h-180 w-screen object-cover shadow-xl"
        />
      </div>
      <div className="flex  items-center capitalize justify-center gap-15 p-10 font-bold font-serif text-2xl shadow-xl">
        {name.map((list) => {
          return <div>{list}</div>;
        })}
      </div>
      <div className="grid grid-cols-6 gap-3 m-5 ">
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
