// src/Components/MoneyTransferTransactions.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";
import DashboardHeaderSidebar from "./DashboardHeaderSidebar";

const MoneyTransferTransactions = () => {
  const navigate = useNavigate();
  const [adminName, setAdminName] = useState("");

  // ✅ Get admin name from localStorage or redirect if not logged in
  useEffect(() => {
    const name = localStorage.getItem("adminName");
    if (!name) {
      navigate("/Login");
    } else {
      setAdminName(name);
    }
  }, [navigate]);

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("adminName");
    navigate("/Login");
  };

  const summaryData = [
    "Total Transactions",
    "Total Amount",
    "Total Charges",
    "Total Commission",
    "Refund Pending",
    "Total Refunded",
  ];

  return (
    <div className="dashboard-container">
      {/* 🔹 Header + Sidebar */}
      <DashboardHeaderSidebar adminName={adminName} handleLogout={handleLogout} />

      {/* 🔹 Layout Row (Sidebar + Main Content) */}
      <div className="main-row">
        <div className="sidebar-space" /> {/* Reserved space for sidebar */}

        {/* ✅ MAIN CONTENT AREA */}
        <main className="main-content">
          <h2 className="money-title">Money Transfer Transactions</h2>
          <p className="money-subtitle">
            View and track a summary of your daily money transfer transactions.
          </p>

          {/* 🔹 Search Filters */}
          <div className="search-box">
            <input type="text" placeholder="Transaction No" />
            <select>
              <option>- Status -</option>
            </select>
            <select>
              <option>- Type -</option>
            </select>
            <input type="date" />
            <input type="date" />
            <button className="search-btn">Search</button>
            <button className="export-btn">Export</button>
          </div>

          {/* 🔹 Summary Cards */}
          <div className="transaction-summary">
            {summaryData.map((title, i) => (
              <div key={i} className="summary-card">
                <p>{title}</p>
                <h3>₹ 0</h3>
              </div>
            ))}
          </div>

          {/* 🔹 No Records Message */}
          <div className="no-records">No Records Exist!</div>
        </main>
      </div>
    </div>
  );
};

export default MoneyTransferTransactions;
