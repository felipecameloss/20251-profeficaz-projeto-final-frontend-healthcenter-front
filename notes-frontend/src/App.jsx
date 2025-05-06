import Login from './pages/login'
import Signup from './pages/signup'
import Triagem from './pages/triagem'
import Triagem_inteligente from './pages/triagem_inteligente'
import Atendimento_concluido from './pages/atendimento_concluido'
import Fila_triagem_e_atendimento from './pages/fila_triagem_e_atendimento'
import TriagemConcluida from './pages/triagem_concluida'
import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {

    const [token, setToken] = useState(localStorage.getItem("token"));

    const handleLogin = (newToken) => {
        setToken(newToken);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken(null);
    };

    useEffect(() => {
        if (token) {
        axios
            .get("http://127.0.0.1:5000/notas", {
            headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => setNotas(res.data))
            .catch((err) => {
            console.error(err);
            handleLogout(); // token inválido ou expirado
            });
        }
    }, [token]);

    if (!token) {
        return <Login onLogin={handleLogin} />;
    }

    return(
        <>
            <Routes>
                {/* Rotas para as páginas com os seus respectivos urls */}
                <Route path="/" element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/triagem' element={<Triagem />} />
                <Route path='/triagem_inteligente' element={<Triagem_inteligente />} />
                <Route path='/atendimento_concluido' element={<Atendimento_concluido />} />
                <Route path='/fila_triagem_e_atendimento' element={<Fila_triagem_e_atendimento />} />
                <Route path ='/triagem_concluida' element = {<TriagemConcluida /> } />
            </Routes>
        </>
    )
}

export default App