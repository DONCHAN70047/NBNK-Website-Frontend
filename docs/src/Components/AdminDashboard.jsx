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
      {/* TOP NAVBAR */}
      <div className="top-navbar">
        <div className="topbar-left">
          <img className="logo-img" src="/EsmartPayLogo.png" alt="logo" />
          <div className="topbar-date">
            <span className="date-left">
              November <span className="year-small">2025</span>
            </span>
            <span className="date-right">09</span>
          </div>
        </div>

        <div className="topbar-center">
          <div className="balance-box">
            <span className="wallet-big">₹ 90.17</span>
            <div className="wallet-labels">
              <span className="wallet-text">Available</span>
              <div className="wallet-desc">Wallet Balance</div>
            </div>
          </div>

          <div className="balance-box">
            <span className="aeps-big">₹ 0</span>
            <div className="wallet-labels">
              <span className="aeps-text">Available</span>
              <div className="aeps-desc">AEPS Balance</div>
            </div>
          </div>
        </div>

        <div className="topbar-right">
          <span className="notify-bell">
            <svg width="25" height="25" fill="none" viewBox="0 0 24 24">
              <path fill="#fff" d="M12 2a5 5 0 0 0-5 5v2.28c0 .24-.09.47-.26.65l-1.6 1.74A3 3 0 0 0 4 15.39V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.61a3 3 0 0 0-.14-.87l-1.6-1.74a.995.995 0 0 1-.26-.65V7a5 5 0 0 0-5-5Zm0 19c1.13 0 2.07-.84 2.24-1.93h-4.48C9.93 20.16 10.87 21 12 21Z"/>
            </svg>
          </span>
          <span className="user-info-bar">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="user-pic" alt="User" />
            <span>
              <span className="welcome-label">Welcome,</span>
              <span className="user-name-bar">{adminName || "NANTU DAS ADHIKARI"}</span>
            </span>
          </span>
        </div>
      </div>

      {/* SIDEBAR + MAIN CONTENT */}
      <div className="main-row">
        <aside className="sidebar">
          <div className="user-info">
            
            <div className="user-name">{adminName || "NANTU DAS ADHIKARI"}</div>
            <div className="user-role">Smart Retailer - 9547783824 - SBR38904</div>
          </div>
          <nav className="nav-menu">
            <ul>
              <li>Dashboard</li>
              <li>Smart Summary</li>
              <li>Transactions</li>
              <li>Refund Pending</li>
              <li>Money Requests</li>
              <li>Statements</li>
              <li>Settlement</li>
              <li>Charges Slabs</li>
              <li className="section-title">Privacy & Settings</li>
              <li>Configurations</li>
              <li>Credentials</li>
            </ul>
          </nav>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </aside>

        <main className="main-content">
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

          {/* 🔁 Running Loop Message */}
          <div className="alert-marquee">
            <div className="marquee-text">
              कृपया BSES और Tata Power के लिए ₹ 1,00,000 से अधिक के बिजली बिल फिलहाल न भेजें, जब 🙏🙏|| Please do not send electricity bills over ₹1,00,000 for BSES and Tata Power for now. 🙏🙏
            </div>
          </div>

          <section className="services-section">
            <div className="services-grid">
              {services.map((service, index) => (
                <div className="service-card" key={index}>
                  <img src={service.icon} alt={service.label} />
                  <p>{service.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="summary-transactions-section">
            <div className="today-business">
              <h3>Today Business Summary</h3>
              <div className="summary-grid">
                <div className="summary-box money-transfer"><p>Money Transfer</p><h4>₹ 0</h4></div>
                <div className="summary-box utility-bills"><p>Utility Bills</p><h4>₹ 0</h4></div>
                <div className="summary-box credit-card-bills"><p>Credit Card Bills</p><h4>₹ 0</h4></div>
                <div className="summary-box aeps-flight"><p>AEPS/MATM/MPOS</p><h4>₹ 0</h4></div>
                <div className="summary-box flight"><p>Flight</p><h4>₹ 0</h4></div>
              </div>
            </div>

            <div className="recent-transactions">
              <h3>Recent Transactions</h3>
              <ul>
                {recentTransactions.map((txn, idx) => (
                  <li key={idx}>
                    - ₹ {txn.amount} {txn.label} <br />
                    <small>{txn.date} @ {txn.id}</small>
                  </li>
                ))}
              </ul>
            </div>

            <div className="live-alerts">
              <h3>Live Alerts</h3>
              <div className="alert-box">
                <p>Welcome. good morning hope you are doing well.</p>
                <p>Our Customer Care Number is <strong>+91 780 0606 780</strong>.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
