import axios from "axios";
import React, { useState } from "react";

function RegisterOrganizationForm({ setregisterOrgForm }) {
  const [org_name, setorg_name] = useState("");
  const [email, setemail] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [country, setcountry] = useState("");
  const [address, setaddress] = useState("");
  const [password, setpassword] = useState("");
  const [admin_name, setadmin_name] = useState("");

  async function registerOrg() {
    const organization_data = {
      name: org_name,
      phone_number: phone_number,
      city: city,
      state: state,
      country: country,
      address: address,
    };

    const admin_data = {
      name: admin_name,
      email: email,
      password: password,
      phone_number: phone_number,
      address: address,
    };

    try {
      const response = await axios.post("http://localhost:3000/organizations", {
        organization: organization_data,
        admin_user: admin_data,
      });
      console.log("everthing worked fine", response);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-5 rounded">
        <div className="flex items-start mb-5 justify-between">
          <p className="text-[#333333] text-xl font-bold">
            Register Your Organization
          </p>
          <button
            onClick={() => {
              setregisterOrgForm(false);
            }}
            className="text-red-500 font-semibold"
          >
            Close
          </button>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-3">
            <div className="">
              <p className="text-[#00082e] font-semibold">Org Name</p>
              <input
                onChange={(event) => {
                  setorg_name(event.target.value);
                }}
                placeholder="Amazon Logistics"
                className="border border-gray-300 w-full p-1 rounded"
              />
            </div>
            <div className="">
              <p className="text-[#00082e] font-semibold">Org Email</p>
              <input
                onChange={(event) => {
                  setemail(event.target.value);
                }}
                placeholder="admin@amazon.com"
                className="border border-gray-300 w-full p-1 rounded"
              />
            </div>

            <div className="">
              <p className="text-[#00082e] font-semibold">Admin Name</p>
              <input
                onChange={(event) => {
                  setadmin_name(event.target.value);
                }}
                placeholder="John Doe"
                className="border border-gray-300 w-full p-1 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 my-3 gap-3">
            <div>
              <p className="text-[#00082e] font-semibold">City</p>
              <input
                onChange={(event) => {
                  setcity(event.target.value);
                }}
                placeholder="Ahmedabad"
                className="border border-gray-300 w-full p-1 rounded"
              />
            </div>
            <div className="">
              <p className="text-[#00082e] font-semibold">State</p>
              <input
                onChange={(event) => {
                  setstate(event.target.value);
                }}
                placeholder="Gujarat"
                className="border border-gray-300 w-full p-1 rounded"
              />
            </div>
            <div className="">
              <p className="text-[#00082e] font-semibold">Country</p>
              <input
                onChange={(event) => {
                  setcountry(event.target.value);
                }}
                placeholder="India"
                className="border border-gray-300 w-full p-1 rounded"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="">
              <p className="text-[#00082e] font-semibold">Phone No</p>
              <input
                onChange={(event) => {
                  setphone_number(event.target.value);
                }}
                placeholder="+91 9432374879"
                className="border border-gray-300 w-full p-1 rounded"
              />
            </div>
            <div className="">
              <p className="text-[#00082e] font-semibold">Password</p>
              <input
                type="password"
                onChange={(event) => {
                  setpassword(event.target.value);
                }}
                placeholder="+91 9432374879"
                className="border border-gray-300 w-full p-1 rounded"
              />
            </div>
          </div>

          <div className="mt-3">
            <p className="text-[#00082e] font-semibold">Address</p>
            <textarea
              onChange={(event) => {
                setaddress(event.target.value);
              }}
              placeholder="Zundal Circle, Adalaj"
              className="border border-gray-300 w-full h-28 p-1 rounded"
            />
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={() => {
              registerOrg();
            }}
            className="text-white px-3 rounded py-1 bg-[#FF3E4E]"
          >
            Register Your Organization
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterOrganizationForm;
