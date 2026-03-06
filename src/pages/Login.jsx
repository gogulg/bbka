import { useState } from "react";
import img from "../assets/img.jpg";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

  const isValidField =
    !formData.name &&
    !formData.email &&
    !formData.password &&
    !formData.checked;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:5333/api/user/signup",
      formData,
    );

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
                name="name"
                value={formData.name}
                onChange={handleChange}
              ></input>
              <span>Email</span>
              <input
                className=" rounded-xl border bg-[#acc58b] px-2"
                name="email"
                value={formData.email}
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
                disabled={isValidField}
                className="bg-[#859765]  hover:bg-blue-400 text-white rounded-xl text-xl shadow-xs"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      <div className=" md:1/3 ">
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
