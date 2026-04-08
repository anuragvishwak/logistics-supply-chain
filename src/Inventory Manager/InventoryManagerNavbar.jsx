import React from "react";

function InventoryManagerNavbar() {
  return (
    <div className="flex items-center p-3 border-b border-gray-400 space-x-6">
      <button>Home</button>
      <button>Inventory</button>
      <button>Suppliers</button>
      <button>Profile Settings</button>
    </div>
  );
}

export default InventoryManagerNavbar;
