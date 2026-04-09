import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterOrganizationForm from "./RegisterOrganizationForm";
import axios from "axios";

function Login() {
  const navigation = useNavigate();
  const [registerOrgForm, setregisterOrgForm] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function authenticateUser() {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
      });

      console.log("User authenticated successfully!!", response.data);
      localStorage.setItem("user", response.data.user);
      if (response.data.user.role == "admin") {
        navigation("/AdminDashboard");
      }
    } catch (error) {
      console("Something went wrong.", error);
    }
  }

  return (
    <div className="flex justify-center bg-gray-100 items-center h-screen w-screen">
      <div className="bg-white p-5 w-4/12 rounded border border-gray-300 shadow">
        <div>
          <p className="text-[#00082e] text-2xl font-bold">Login</p>
          <p className="italic text-sm text-[#FF3E4E]">
            Secure login with your credentials...
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 my-7">
          <div className="mb-2">
            <p>Email</p>
            <input
              onChange={(event) => {
                setemail(event.target.value);
              }}
              placeholder="john@gmail.com"
              className="border border-gray-300 w-full p-1 rounded"
            />
          </div>
          <div>
            <p>Password</p>
            <input
              onChange={(event) => {
                setpassword(event.target.value);
              }}
              placeholder="**********"
              className="border border-gray-300 w-full p-1 rounded"
            />
          </div>
        </div>
        <button
          onClick={() => {
            authenticateUser();
          }}
          className="text-white w-full rounded py-1 bg-[#FF3E4E]"
        >
          Sign In
        </button>

        <div className="flex items-center justify-center">
          <button
            onClick={() => {
              setregisterOrgForm(true);
            }}
            className="text-[#333333] text-sm italic font-bold"
          >
            Register Your Organization
          </button>
          <span className="mx-3">|</span>
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

      {registerOrgForm && (
        <RegisterOrganizationForm setregisterOrgForm={setregisterOrgForm} />
      )}
    </div>
  );
}

export default Login;
