import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';


const AuthContext = createContext();
// const access = localStorage.getItem('access')
const AuthProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('access');

    if (token) {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://192.168.0.105:8000/api/user_profile', {
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
