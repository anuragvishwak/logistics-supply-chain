import React from "react";

function AdminNavbar() {
  return (
    <div className="flex items-center p-3 border-b border-gray-400 space-x-6">
      <button>Home</button>
      <button>Orders</button>
      <button>Shipments</button>
      <button>Invoices</button>
      <button>User Management</button>
      <button>Report & Analytics</button>
      <button>Profile Settings</button>
    </div>
  );
}

export default AdminNavbar;
