import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import AdminDashboard from "./Admin/AdminDashboard";
import OrderManagerDashboard from "./Order Manager/OrderManagerDashboard";
import CustomerDashboard from "./Customer/CustomerDashboard";
import DispatchManager from "./Dispatch Manager/DispatchManager";
import DriverDashboard from "./Driver/DriverDashboard";
import FinanceDashboard from "./Finance/FinanceDashboard";
import InventoryManagerDashboard from "./Inventory Manager/InventoryManagerDashboard";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route
            path="/OrderManagerDashboard"
            element={<OrderManagerDashboard />}
          />
          <Route path="/DispatchManager" element={<DispatchManager />} />
          <Route path="/CustomerDashboard" element={<CustomerDashboard />} />
          <Route path="/DriverDashboard" element={<DriverDashboard />} />
          <Route path="/FinanceDashboard" element={<FinanceDashboard />} />
          <Route
            path="/InventoryManagerDashboard"
            element={<InventoryManagerDashboard />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
