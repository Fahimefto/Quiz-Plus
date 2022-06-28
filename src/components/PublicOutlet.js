import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateOutlet() {
  const { currentUser } = useAuth();
  return !currentUser ? <Outlet /> : <Navigate to="/" />;
}
