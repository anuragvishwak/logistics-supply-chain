import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigation = useNavigate();

  return (
    <div className="flex justify-center bg-gray-100 items-center h-screen w-screen">
      <div className="bg-white p-5 w-4/12 rounded border border-gray-300 shadow">
        <div>
          <p className="text-[#333333] text-2xl font-bold">Login</p>
          <p className="italic text-sm text-gray-600">
            Secure login with your credentials...
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 my-7">
          <div className="mb-2">
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
              navigation("/SignUp");
            }}
            className="text-[#333333] text-sm italic font-bold"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
