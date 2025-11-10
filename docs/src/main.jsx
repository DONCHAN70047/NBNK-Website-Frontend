import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext.jsx";
import { LanguageProvider } from "./context/LanguageContext";
import "./index.css";

import App from "./App.jsx";
import { Contact } from "./Components/Contact.jsx";
import UnderConstruction from "./Components/UnderConstruction.jsx";
import WeatherApp from "./Components/WeatherApp.jsx";
import FarmerSellingComunityPage from "./pages/FarmerSellingComunityPage.jsx";
import Login from "./pages/Login.jsx";
import AboutUS from "./Components/AboutUS.jsx";
import AdminDashboard from "./Components/AdminDashboard.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import MoneyTransferTransactions from "./Components/MoneyTransferTransactions"; 

createRoot(document.getElementById("root")).render(
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
          <Route path="/AboutUS" element={<AboutUS />} />
          <Route path="/MoneyTransferTransactions" element={<MoneyTransferTransactions />} />

          {/* Protected Admin Dashboard */}
          <Route
            path="/AdminDashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserContextProvider>
    </LanguageProvider>
  </BrowserRouter>
);
