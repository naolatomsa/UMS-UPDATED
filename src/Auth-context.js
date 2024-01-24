import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      const fetchData = async () => {
        try {
          const response = await axios.get('your_backend_endpoint', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const data = response.data;

          setAuthInfo({
            user: data,
            token: token,
          });
        } catch (error) {
          console.error('Error fetching user information:', error);
        }
      };

      fetchData();
    }
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
