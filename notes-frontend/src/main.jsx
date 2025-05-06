import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './pages/login';
import Signup from './pages/signup';
import Triagem from './pages/triagem';
import Triagem_inteligente from './pages/triagem_inteligente';
import Atendimento_concluido from './pages/atendimento_concluido';
import Fila_triagem_e_atendimento from './pages/fila_triagem_e_atendimento';
import TriagemConcluida from './pages/triagem_concluida';

function RouterWrapper() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogin = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  // Lista dos paths
  const router = createBrowserRouter([
    { path: "/", element: <Login onLogin={handleLogin} /> },
    { path: "/signup", element: <Signup /> },
    { path: "/triagem", element: <Triagem /> },
    { path: "/triagem_inteligente", element: <Triagem_inteligente /> },
    { path: "/atendimento_concluido", element: <Atendimento_concluido /> },
    { path: "/fila_triagem_e_atendimento", element: <Fila_triagem_e_atendimento /> },
    { path: "/triagem_concluida", element: <TriagemConcluida /> },
  ]);

  // Retorno o path e a função
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterWrapper />
  </React.StrictMode>
);
