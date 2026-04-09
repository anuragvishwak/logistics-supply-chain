import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AdminNavbar() {
  const navigation = useNavigate();
  const current_location = useLocation();
  return (
    <div className="flex items-center font-semibold text-[#00082e] px-3 border-b border-gray-400 space-x-6">
      <button>Home</button>
      <button
        onClick={() => {
          navigation("/AdminOrders");
        }}
        className={`py-1 ${current_location.pathname === "/AdminOrders" ? "text-[#FF3E4E] border-b-4 border-[#FF3E4E]" : ""}`}
      >
        Orders
      </button>
      <button
        onClick={() => {
          navigation("/AdminShipments");
        }}
        className={`py-1 ${current_location.pathname === "/AdminShipments" ? "text-[#FF3E4E] border-b-4 border-[#FF3E4E]" : ""}`}
      >
        Shipments
      </button>
      <button
        onClick={() => {
          navigation("/AdminInvoices");
        }}
        className={`py-1 ${current_location.pathname === "/AdminInvoices" ? "text-[#FF3E4E] border-b-4 border-[#FF3E4E]" : ""}`}
      >
        Invoices
      </button>
      <button
        onClick={() => {
          navigation("/UserManagement");
        }}
        className={`py-1 ${current_location.pathname === "/UserManagement" ? "text-[#FF3E4E] border-b-4 border-[#FF3E4E]" : ""}`}
      >
        User Management
      </button>
      <button
        onClick={() => {
          navigation("/AdminReportAnalytics");
        }}
        className={`py-1 ${current_location.pathname === "/AdminReportAnalytics" ? "text-[#FF3E4E] border-b-4 border-[#FF3E4E]" : ""}`}
      >
        Report & Analytics
      </button>
      <button
        onClick={() => {
          navigation("/AdminProfile");
        }}
        className={`py-1 ${current_location.pathname === "/AdminProfile" ? "text-[#FF3E4E] border-b-4 border-[#FF3E4E]" : ""}`}
      >
        Profile Settings
      </button>
    </div>
  );
}

export default AdminNavbar;
