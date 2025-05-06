import "../styles/login.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login({ onLogin }) {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/login', {
                email,
                senha
            });
    
            const token = response.data.access_token;
            localStorage.setItem("token", token);
            onLogin(token);  // Isso atualiza o token e permite o redirecionamento
            navigate("/triagem_inteligente");
        } catch (e) {
            if (e.response) {
                const msg = e.response.data.msg;
                if (msg === 'Usuário não encontrado') {
                    setErro('E-mail não cadastrado.');
                } else if (msg === 'Senha incorreta') {
                    setErro('Senha incorreta.');
                } else if (msg === 'Email e senha são obrigatórios') {
                    setErro('Email e senha são obrigatórios.');
                } else {
                    setErro('Erro desconhecido.');
                }
            } else {
                setErro('Erro na conexão com o servidor');
            }
        }
    };
    

    return (
        <div className="login-page">
            <img src="src\assets\logo.jpg" className="login-logo" />
            <div className="login-titles">
                <h1 className="login-h1">Health Center</h1>
                <h3 className="login-h3">Sua saúde começa aqui!</h3>
            </div>
            <form className="login-form" onSubmit={handleLogin}>

                {/* Este value e este onchange serve para irmos atualizando as informações inseridas nos inputs a medida que o usuário digita */}
                <input className='login-input' type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required></input>
                <input className='login-input' type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} required></input>

                {/* Aqui estou informando ao usuário o erro armazenado na função handleLogin quando ele tenta logar */}
                {erro && <p>{erro}</p>}

                <button onClick={handleLogin} className='login-button' type="submit">Entrar</button>
                
                <p>Não possui uma conta? <a href="/signup">Cadastre-se</a></p>
            </form>
        </div>
    )
}