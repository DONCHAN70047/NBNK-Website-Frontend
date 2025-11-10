// src/Components/DashboardHeaderSidebar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./AdminDashboard.css";

const DashboardHeaderSidebar = ({ adminName, handleLogout }) => {
  const [isTransactionsOpen, setIsTransactionsOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      {/* 🔹 Animated Top Navbar */}
      <motion.div
        className="top-navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* 🔸 Left Section */}
        <motion.div
          className="topbar-left"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.img
            className="logo-img"
            src="/EsmartPayLogo.png"
            alt="Esmart Logo"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{
              repeat: Infinity,
              repeatDelay: 5,
              duration: 2,
            }}
          />
          <div className="topbar-date">
            <span className="date-left">
              November <span className="year-small">2025</span>
            </span>
            <span className="date-right">10</span>
          </div>
        </motion.div>

        {/* 🔸 Center Section */}
        <div className="topbar-center">
          <motion.div
            className="balance-box"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <span className="wallet-big">₹ 90.17</span>
            <div className="wallet-labels">
              <span className="wallet-text">Available</span>
              <div className="wallet-desc">Wallet Balance</div>
            </div>
          </motion.div>

          <motion.div
            className="balance-box"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <span className="aeps-big">₹ 0</span>
            <div className="wallet-labels">
              <span className="aeps-text">Available</span>
              <div className="aeps-desc">AEPS Balance</div>
            </div>
          </motion.div>
        </div>

        {/* 🔸 Right Section */}
        <div className="topbar-right">
          <motion.span
            className="notify-bell"
            whileHover={{ rotate: 15, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            🔔
          </motion.span>

          <motion.span
            className="user-info-bar"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="user-pic"
              alt="User Avatar"
            />
            <span>
              <span className="welcome-label">Welcome,</span>
              <span className="user-name-bar">
                {adminName || "NANTU DAS ADHIKARI"}
              </span>
            </span>
          </motion.span>
        </div>
      </motion.div>

      {/* 🔹 Sidebar */}
      <motion.aside
        className="sidebar"
        initial={{ x: -240, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="user-info">
          <div className="user-name">{adminName || "NANTU DAS ADHIKARI"}</div>
          <div className="user-role">Smart Retailer - 9547783824 - SBR38904</div>
        </div>

        <nav className="nav-menu">
          <ul>
            <motion.li whileHover={{ x: 10 }} onClick={() => navigate("/AdminDashboard")}>
              Dashboard
            </motion.li>
            <motion.li whileHover={{ x: 10 }} onClick={() => navigate("/SmartSummary")}>
              Smart Summary
            </motion.li>

            {/* Dropdown */}
            <motion.li
              className="dropdown-title"
              onClick={() => setIsTransactionsOpen(!isTransactionsOpen)}
              whileTap={{ scale: 0.97 }}
            >
              Transactions ▾
            </motion.li>

            <AnimatePresence>
              {isTransactionsOpen && (
                <motion.ul
                  className="submenu"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.li whileHover={{ x: 10 }} onClick={() => navigate("/MoneyTransferTransactions")}>
                    Money Transfer
                  </motion.li>
                  <motion.li whileHover={{ x: 10 }} onClick={() => navigate("/UpiTransfer")}>
                    UPI Transfer
                  </motion.li>
                  <motion.li whileHover={{ x: 10 }} onClick={() => navigate("/PpiTransfer")}>
                    PPI Transfer
                  </motion.li>
                  <motion.li whileHover={{ x: 10 }} onClick={() => navigate("/UtilityBills")}>
                    Utility Bills
                  </motion.li>
                  <motion.li whileHover={{ x: 10 }} onClick={() => navigate("/EducationFees")}>
                    Education Fees
                  </motion.li>
                  <motion.li whileHover={{ x: 10 }} onClick={() => navigate("/AepsMatm")}>
                    AEPS / MATM
                  </motion.li>
                  <motion.li whileHover={{ x: 10 }} onClick={() => navigate("/CreditCard")}>
                    Credit Card
                  </motion.li>
                  <motion.li whileHover={{ x: 10 }} onClick={() => navigate("/FlightBookings")}>
                    Flight Bookings
                  </motion.li>
                </motion.ul>
              )}
            </AnimatePresence>

            <motion.li whileHover={{ x: 10 }} onClick={() => navigate("/RefundPending")}>
              Refund Pending
            </motion.li>
            <motion.li whileHover={{ x: 10 }} onClick={() => navigate("/MoneyRequests")}>
              Money Requests
            </motion.li>
            <motion.li whileHover={{ x: 10 }} onClick={() => navigate("/Statements")}>
              Statements
            </motion.li>
            <motion.li whileHover={{ x: 10 }} onClick={() => navigate("/Settlement")}>
              Settlement
            </motion.li>
            <motion.li whileHover={{ x: 10 }} onClick={() => navigate("/ChargesSlabs")}>
              Charges Slabs
            </motion.li>

            <li className="section-title">Privacy & Settings</li>
            <motion.li whileHover={{ x: 10 }} onClick={() => navigate("/Configurations")}>
              Configurations
            </motion.li>
            <motion.li whileHover={{ x: 10 }} onClick={() => navigate("/Credentials")}>
              Credentials
            </motion.li>
          </ul>
        </nav>

        <motion.button
          className="logout-btn"
          onClick={handleLogout}
          whileHover={{ scale: 1.05, backgroundColor: "#ff3333" }}
          whileTap={{ scale: 0.95 }}
        >
          Logout
        </motion.button>
      </motion.aside>
    </>
  );
};

export default DashboardHeaderSidebar;
