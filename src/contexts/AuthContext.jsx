import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userTKN, setUserTKN] = useState(() => localStorage.getItem("userTKN"));

  return (
    <AuthContext.Provider value={{ userTKN, setUserTKN }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
