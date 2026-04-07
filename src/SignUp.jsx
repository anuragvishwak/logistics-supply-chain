import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigation = useNavigate();

  return (
    <div className="flex justify-center bg-gray-100 items-center h-screen w-screen">
      <div className="bg-white p-5 w-4/12 rounded border border-gray-300 shadow">
        <div>
          <p className="text-[#333333] text-2xl font-bold">Sign Up</p>
          <p className="italic text-sm text-gray-600">
            Star your journey with us...
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 my-10">
          <div className="">
            <p>Name</p>
            <input
              placeholder="John Doe"
              className="border border-gray-300 w-full p-1 rounded"
            />
          </div>
          <div className="">
            <p>Phone No</p>
            <input
              placeholder="+91 9773477823"
              className="border border-gray-300 w-full p-1 rounded"
            />
          </div>

          <div className="">
            <p>Phone No</p>
            <select className="border border-gray-300 w-full p-1 rounded">
              <option>Select Role</option>
              <option value={"order-manager"}>Order Manager</option>
              <option value={"inventory-manager"}>Inventory Manager</option>
              <option value={"dispatch-manager"}>Dispatch Manager</option>
              <option value={"driver"}>Driver</option>
              <option value={"finance"}>Finance</option>
              <option value={"customer"}>Customer</option>
            </select>
          </div>
          <div className="">
            <p>Email</p>
            <input
              placeholder="john@gmail.com"
              className="border border-gray-300 w-full p-1 rounded"
            />
          </div>
          <div>
            <p>Password</p>
            <input
              placeholder="**********"
              className="border border-gray-300 w-full p-1 rounded"
            />
          </div>
        </div>
        <button className="text-white w-full rounded py-1 bg-[#333333]">
          Go!
        </button>

        <div className="flex items-center space-x-2 justify-center mt-1">
          <p className="italic text-sm text-gray-600">
            Don't have an account ?
          </p>
          <button
            onClick={() => {
              navigation("/");
            }}
            className="text-[#333333] text-sm italic font-bold"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
