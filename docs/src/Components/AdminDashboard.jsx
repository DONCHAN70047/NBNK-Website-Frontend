import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("adminName");
    if (!name) {
      navigate("/Login");
    } else {
      setAdminName(name);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminName");
    navigate("/Login");
  };

  return (
    <div className="dashboard-container">
      {/* ---------- SIDEBAR ---------- */}
      <aside className="sidebar">
        <div className="logo">💼 Admin Panel</div>

        <div className="user-info">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Admin Avatar"
          />
          <h3>{adminName}</h3>
          <p>Smart Retailer</p>
        </div>

        <nav className="menu">
          <a href="#">📊 Dashboard</a>
          <a href="#">💰 Transactions</a>
          <a href="#">📦 Settlement</a>
          <a href="#">🧾 Statements</a>
          <a href="#">⚙️ Settings</a>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* ---------- MAIN CONTENT ---------- */}
      <main className="main-content">
        <div className="top-bar">
          <h2>Dashboard Overview</h2>
          <div className="wallet-info">
            <div className="wallet-card green">
              <p>Available Balance</p>
              <h3>₹ 0000.17</h3>
            </div>
            <div className="wallet-card blue">
              <p>Opening Balance</p>
              <h3>₹ 000000000000.00</h3>
            </div>
          </div>
        </div>

        <div className="service-grid">
          <div className="service-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6329/6329224.png"
              alt="Money Transfer"
            />
            <p>Money Transfer</p>
          </div>
          <div className="service-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1584/1584891.png"
              alt="UPI Transfer"
            />
            <p>UPI Transfer</p>
          </div>
          <div className="service-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3566/3566821.png"
              alt="Bill Payment"
            />
            <p>Bill Payment</p>
          </div>
          <div className="service-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2983/2983798.png"
              alt="Recharge"
            />
            <p>Recharge</p>
          </div>
          <div className="service-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/619/619032.png"
              alt="Credit Card"
            />
            <p>Credit Card Bills</p>
          </div>
        </div>

        <div className="summary-section">
          <div className="summary">
            <h3>Today Business Summary</h3>
            <div className="summary-box">
              <div className="summary-item green">
                <p>Money Transfer</p>
                <h4>₹ 0</h4>
              </div>
              <div className="summary-item orange">
                <p>Utility Bills</p>
                <h4>₹ 0</h4>
              </div>
              <div className="summary-item purple">
                <p>AEPS/Flight</p>
                <h4>₹ 0</h4>
              </div>
            </div>
          </div>

          <div className="transactions">
            <h3>Recent Transactions</h3>
            <ul>
              <li>
                <span className="red">- ₹0000</span> Money Transfer
              </li>
              <li>
                <span className="red">- ₹0</span> Verification
              </li>
              <li>
                <span className="red">- ₹0000</span> Money Transfer
              </li>
              <li>
                <span className="red">- ₹0000</span> Money Transfer
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
