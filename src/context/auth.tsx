import React, { createContext, useContext, useState, useCallback } from "react";
import { useEffect } from "react";
import api from "../services/api";

interface IAuthContext {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<Partial<IAuthContext>>({});

export const AuthProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback(async (email: string, password: string) => {
    const response = await api.post("/account/tokens/", {
      email,
      password,
    });
    setIsAuthenticated(true);
    localStorage.setItem("token", response.data.tokens.access);
  }, []);
  console.log(isAuthenticated);
  const logout = useCallback(async () => {
    localStorage.removeItem("token");

    setIsAuthenticated(false);
  }, []);

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
