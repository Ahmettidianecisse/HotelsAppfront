// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // Vérifie si l'utilisateur est connecté
  const token = localStorage.getItem("token");

  if (!token) {
    // Si pas de token, redirige vers login
    return <Navigate to="/" replace />;
  }

  // Sinon, affiche le composant enfant
  return children;
}