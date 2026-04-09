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
import AdminOrders from "./Admin/AdminSections/AdminOrders";
import AdminShipments from "./Admin/AdminSections/AdminShipments";
import AdminInvoices from "./Admin/AdminSections/AdminInvoices";
import AdminReportAnalytics from "./Admin/AdminSections/AdminReportAnalytics";
import UserManagement from "./Admin/AdminSections/UserManagement";
import AdminProfile from "./Admin/AdminSections/AdminProfile";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          //Admin section
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/UserManagement" element={<UserManagement />} />
          <Route path="/AdminProfile" element={<AdminProfile />} />
          <Route path="/AdminOrders" element={<AdminOrders />} />
          <Route path="/AdminShipments" element={<AdminShipments />} />
          <Route path="/AdminInvoices" element={<AdminInvoices />} />
          <Route
            path="/AdminReportAnalytics"
            element={<AdminReportAnalytics />}
          />
          //Order Manager Section
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
