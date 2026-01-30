import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import HotelsList from "./Pages/HotelsList.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages publiques */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Pages protégées */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hotelsList"
          element={
            <ProtectedRoute>
              <HotelsList />
            </ProtectedRoute>
          }
        />

        {/* Redirection pour toutes les autres URLs */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
