// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem('authtoken') || null);

  const login = (newToken) => {
    setToken(newToken);
    sessionStorage.setItem('authtoken', newToken);
  };

//   const logout = () => {
//     setToken(null);
//     sessionStorage.removeItem('authtoken');
//   };

  return (
    <AuthContext.Provider value={{ token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
