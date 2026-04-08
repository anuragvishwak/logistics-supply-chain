import React from "react";

function CustomerNavbar() {
  return (
    <div className="flex items-center p-3 border-b border-gray-400 space-x-6">
      <button>Home</button>
      <button>My Orders</button>
      <button>Invoices</button>
      <button>Support</button>
      <button>Profile Settings</button>
    </div>
  );
}

export default CustomerNavbar;
