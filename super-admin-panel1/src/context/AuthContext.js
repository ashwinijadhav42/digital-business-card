import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null); // NOT using localStorage

  const login = (data) => {
    setAdmin(data);  // store only in memory
  };

  const logout = () => {
    setAdmin(null);  // clear immediately
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};