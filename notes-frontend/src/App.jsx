// App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App({ onLogin }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      axios
        .get("http://127.0.0.1:5000/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [token]);

  return null;
}

export default App;
