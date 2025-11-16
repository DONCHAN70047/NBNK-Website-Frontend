import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext.jsx";
import { LanguageProvider } from "./context/LanguageContext";
import "./index.css";

import React, { useEffect, useState } from "react";
import LoadingScreen from "./assets/LoadingScreen.jsx";


import App from "./App.jsx";
import { Contact } from "./Components/Contact.jsx";
import UnderConstruction from "./Components/UnderConstruction.jsx";
import WeatherApp from "./Components/WeatherApp.jsx";
import FarmerSellingComunityPage from "./pages/FarmerSellingComunityPage.jsx";
import Login from "./pages/Login.jsx";
import SignUP from "./pages/SignUP.jsx";
import AdminSignUpFormPage from "./pages/AdminSignUpFormPage.jsx";
import AdminSignUpFormPageLogin from "./pages/AdminSignUpFormPageLogin.jsx";
import AboutUS from "./Components/AboutUS.jsx";
import AdminDashboard from "./Components/AdminDashboard.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import MoneyTransferTransactions from "./Components/Transection/MoneyTransferTransactions";
import UPITransferTransactions from "./Components/Transection/UPITransferTransactions";
import PPITransferTransactions from "./Components/Transection/PPITransferTransactions";
import UtilityTransactions from "./Components/Transection/UtilityTransactions";
import FlightBookings from "./Components/Transection/FlightBookings";
import AEPSTransactions from "./Components/Transection/AEPSTransactions";
import CreditCardTransactions from "./Components/Transection/CreditCardTransactions";
import EducationalFees from "./Components/Transection/EducationalFees";

function MainApp() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <BrowserRouter>
      <LanguageProvider>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Contact" element={<Contact />} />
            <Route
              path="/FarmerSellingComunityPage"
              element={<FarmerSellingComunityPage />}
            />
            <Route path="/UnderConstruction" element={<UnderConstruction />} />
            <Route path="/WeatherApp" element={<WeatherApp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUP" element={<SignUP />} />
            <Route path="/AboutUS" element={<AboutUS />} />

            <Route path="/MoneyTransferTransactions" element={<ProtectedRoute><MoneyTransferTransactions /></ProtectedRoute>} />
            <Route path="/UPITransferTransactions" element={<ProtectedRoute><UPITransferTransactions /></ProtectedRoute>} />
            <Route path="/PPITransferTransactions" element={<ProtectedRoute><PPITransferTransactions /></ProtectedRoute>} />
            <Route path="/UtilityTransactions" element={<ProtectedRoute><UtilityTransactions /></ProtectedRoute>} />
            <Route path="/AEPSTransactions" element={<ProtectedRoute><AEPSTransactions /></ProtectedRoute>} />
            <Route path="/CreditCardTransactions" element={<ProtectedRoute><CreditCardTransactions /></ProtectedRoute>} />
            <Route path="/FlightBookings" element={<ProtectedRoute><FlightBookings /></ProtectedRoute>} />
            <Route path="/EducationalFees" element={<ProtectedRoute><EducationalFees /></ProtectedRoute>} />

            <Route path="/AdminSignUpFormPageLogin" element={<AdminSignUpFormPageLogin />} />
            <Route path="/AdminSignUpFormPage" element={<ProtectedRoute><AdminSignUpFormPage /></ProtectedRoute>} />

            <Route path="/AdminDashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          </Routes>
        </UserContextProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<MainApp />);
