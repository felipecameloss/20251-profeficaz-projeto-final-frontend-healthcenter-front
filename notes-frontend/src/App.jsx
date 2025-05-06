// App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App({ onLogin }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    if (token) {
      axios
        .get("http://127.0.0.1:5000/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .catch((err) => {
          console.error(err);
          handleLogout(); // token inválido ou expirado
        });
    }
  }, [token]);

  // Se quiser disponibilizar o token para outras rotas, use Context depois
  return null;
}

export default App;
