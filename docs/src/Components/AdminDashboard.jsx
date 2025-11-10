// src/Components/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";
import DashboardHeaderSidebar from "./DashboardHeaderSidebar";
import { motion } from "framer-motion"; // ✨ Animation Import

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

  const services = [
    { label: "Money Transfer 1", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920323.png" },
    { label: "Money Transfer 3", icon: "TrasferPic.png" },
    { label: "PPI Transfer", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920323.png" },
    { label: "UPI Transfer", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920323.png" },
    { label: "Smart Pay", icon: "/SmartPayPic.png" },
    { label: "Bill Payment", icon: "/BillPaymentPic.png" },
    { label: "Prepaid Recharge", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920323.png" },
    { label: "Postpaid Bill", icon: "/PostpaidRechargePic.png" },
    { label: "DTH", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920323.png" },
    { label: "AEPS Withdraw 1", icon: "/AEPSPic.png" },
    { label: "AEPS Withdraw 2", icon: "/AEPSPic.png" },
    { label: "Flight Ticket", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920323.png" },
    { label: "OTT Subscription", icon: "/OTTPic.png" },
    { label: "Pay Credit Card Bills", icon: "/PayCreditCardBills.png" },
  ];

  const recentTransactions = [
    { amount: 1100, label: "Money Transfer", date: "28 Mar 25 04:40 PM", id: "2803202512833" },
    { amount: 0, label: "Verification", date: "28 Mar 25 04:40 PM", id: "2803202512812" },
    { amount: 1000, label: "Money Transfer", date: "28 Mar 25 04:36 PM", id: "2803202512668" },
    { amount: 1000, label: "Money Transfer", date: "11 Mar 25 06:38 PM", id: "1103202518078" },
  ];

  return (
    <div className="dashboard-container">
      {/* 🔹 Header + Sidebar */}
      <DashboardHeaderSidebar adminName={adminName} handleLogout={handleLogout} />

      <div className="main-row">
        <div className="sidebar-space" />

        {/* ✨ Framer Motion Wrapper for Main Content */}
        <motion.main
          className="main-content"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 🔹 Header */}
          <header className="app-header">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="User Avatar" />
            <div className="company-info">
              <div className="company-name">ISHMART TECHNOLOGLOB SERVICE PVT LTD</div>
              <div className="company-sub">Smart Retailer - 9547783824 - SBR38904</div>
            </div>
            <div className="balance-info">
              <div className="opening-balance">
                <div>Opening Balance</div>
                <div>₹ 000000.00</div>
              </div>
              <div className="available-balance">
                <div>Available Balance</div>
                <div>₹ 00.00</div>
              </div>
            </div>
          </header>

          {/* 🔹 Alert Section */}
          <div className="alert-marquee">
            <div className="marquee-text">
              कृपया BSES और Tata Power के लिए ₹ 1,00,000 से अधिक के बिजली बिल फिलहाल न भेजें 🙏🙏 ||
              Please do not send electricity bills over ₹1,00,000 for BSES and Tata Power for now. 🙏🙏
            </div>
          </div>

          {/* 🔹 Services Section */}
          <motion.section
            className="services-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div
                  className="service-card"
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src={service.icon} alt={service.label} />
                  <p>{service.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 🔹 Summary and Transactions Section */}
          <motion.section
            className="summary-transactions-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="today-business">
              <h3>Today Business Summary</h3>
              <div className="summary-grid">
                <div className="summary-box"><p>Money Transfer</p><h4>₹ 0</h4></div>
                <div className="summary-box"><p>Utility Bills</p><h4>₹ 0</h4></div>
                <div className="summary-box"><p>Credit Card Bills</p><h4>₹ 0</h4></div>
                <div className="summary-box"><p>AEPS/MATM/MPOS</p><h4>₹ 0</h4></div>
                <div className="summary-box"><p>Flight</p><h4>₹ 0</h4></div>
              </div>
            </div>

            <div className="recent-transactions">
              <h3>Recent Transactions</h3>
              <ul>
                {recentTransactions.map((txn, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    - ₹ {txn.amount} {txn.label} <br />
                    <small>{txn.date} @ {txn.id}</small>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              className="live-alerts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h3>Live Alerts</h3>
              <div className="alert-box">
                <p>Welcome. Good morning, hope you are doing well.</p>
                <p>Our Customer Care Number is <strong>+91 780 0606 780</strong>.</p>
              </div>
            </motion.div>
          </motion.section>
        </motion.main>
      </div>
    </div>
  );
};

export default AdminDashboard;
