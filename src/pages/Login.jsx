// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [formData, myFormData] = useState({
//     name: "",
//     lname: "",
//     username: "",
//     password: "",
//   });

//   const [user, setUser] = useState([]);

//   const handleChange = (e) => {
//     console.log(e.target.value);
//     const { name, value } = e.target;
//     myFormData((formData) => ({
//       ...formData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { data } = await axios.post(
//       "http://localhost:5333/userAdd",
//       formData,
//     );
//     console.log("data is ", data);

//     console.log(formData);
//   };

//   // useEffect(() => {
//   //   const getItem = async () => {
//   //     const response = await fetch("http://localhost:5333/get");
//   //     const data = await response.json();
//   //     console.log(data);
//   //     setUser(data);
//   //   };
//   //   getItem();
//   // }, []);

//   useEffect(() => {
//     const getItem = async () => {
//       const { data } = await axios.get("http://localhost:5333/get");
//       setUser(data);
//       console.log(data);
//     };
//     getItem();
//   }, []);

//   return (
//     <div className="flex w-full h-screen">
//       <div className="w-full lg:w-1/2 flex items-center justify-center bg-amber-700">
//         <div className="bg-white px-20 py-30 rounded-2xl shadow-2xl">
//           <form className="grid grid-row mx-15 gap-3" onSubmit={handleSubmit}>
//             <span className="flex justify-center font-bold text-4xl">
//               WELCOME
//             </span>
//             <label>FirstName</label>
//             <input
//               type="textbox"
//               name="name"
//               className="bg-white"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Firstname"
//             ></input>
//             <input
//               type="textbox"
//               name="lname"
//               onChange={handleChange}
//               placeholder="Lastname"
//             ></input>
//             <input
//               type="textbox"
//               name="username"
//               onChange={handleChange}
//               placeholder="username"
//             ></input>
//             <input
//               type="password"
//               name="password"
//               onChange={handleChange}
//               placeholder="password"
//             ></input>
//             <button className="bg-amber-200">Hi</button>
//           </form>
//         </div>
//       </div>
//       <div className="lg:flex w-1/2 bg-amber-200">
//         <ul>
//           {user.map((user, index) => (
//             <li key={index}>
//               {" "}
//               <h6>{user.username} </h6>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import img from "../assets/img.jpg";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    password: "",
    checked: false,
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/about");
    toast.success(`Login Sucessfull`);
  };

  return (
    <div className="flex bg-gray-100 justify-center items-center  h-screen">
      <div className="bg-white shadow-2xl flex p-5 rounded-2xl gap-3 h-160">
        <div className="bg-white px-10 py-5 rounded-3xl ">
          <span className="font-bold  flex justify-center text-6xl pb-2 font-modak">
            Signup
          </span>
          <span className="  flex justify-center text-gray-500 text-xs pb-10">
            Welcome to BIBIKA Let's create account
          </span>
          <div className="w-90 ">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <span>Name</span>
              <input
                className=" rounded-xl border bg-[#acc58b] px-2"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
              ></input>
              <span>Email</span>
              <input
                className=" rounded-xl border bg-[#acc58b] px-2"
                name="lname"
                onChange={handleChange}
              ></input>
              <span>Password</span>
              <input
                className=" rounded-xl border bg-[#acc58b] px-2"
                name="password"
                onChange={handleChange}
              ></input>
              <div className="flex gap-1 pb-5">
                <input
                  type="checkbox"
                  name="checked"
                  checked={formData.checked}
                  onChange={handleChange}
                ></input>
                <span>
                  i agree to the <b>privacy & policy</b>
                </span>
              </div>
              <button
                className="bg-[#859765]  hover:bg-blue-400 text-white rounded-xl text-xl shadow-xs"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div>
          <img
            src={img}
            alt="Company Logo"
            className=" rounded-2xl object-cover h-150 w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
