import { Navigate } from "react-router-dom";
import { useAuth } from "./../../contexts/AuthContext";

function ProtectedRoute({ children }) {
  const { userTKN } = useAuth();

  if (!userTKN) return <Navigate to="/login" />;

  return <>{children}</>;
}

export default ProtectedRoute;
