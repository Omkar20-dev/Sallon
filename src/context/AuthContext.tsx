// src/context/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const safeJSONParse = (data: string | null) => {
  try {
    return data && data !== "undefined" ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const stored = safeJSONParse(localStorage.getItem("user"));
    if (stored) setUser(stored);
  }, []);

  const login = (userData: any) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
