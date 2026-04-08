import React from "react";

function DriverNavbar() {
  return (
    <div className="flex items-center p-3 border-b border-gray-400 space-x-6">
      <button>Home</button>
      <button>My Shipments</button>
      <button>Profile Settings</button>
    </div>
  );
}

export default DriverNavbar;
