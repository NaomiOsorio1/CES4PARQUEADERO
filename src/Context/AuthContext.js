// src/context/AuthContext.js
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // `user` en lugar de `isAuthenticated` para más flexibilidad
  const navigate = useNavigate();

  const login = (username, password) => {
    // Simulación de autenticación
    if (username === 'user' && password === 'admin') {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    navigate('/login'); // Redirige al login
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
