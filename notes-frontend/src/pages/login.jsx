import "../styles/login.css";
import React, { useState } from 'react';
import axios from 'axios';

export default function Login({ onLogin }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const resposta = await axios.post('http://localhost:5000/login', {
            email,
            senha
        });

        // Armazenando o token
        const token = resposta.data.access_token;
        localStorage.setItem("token", token);
        onLogin(token);

        } catch (e) {
            // Caso tenha uma resposta vinda do servidor
            if (e.response) {
                if (e.response.data.erro === 'Usuário não encontrado') {
                    setErro('E-mail não cadastrado.');
                } else if (e.response.data.erro === 'Senha incorreta') {
                    setErro('Senha incorreta.')
                } else if (e.response.data.erro === 'Email e senha são obrigatórios') {
                    setErro('Email e senha são obrigatórios.')
                } else {
                    setErro('Erro desconhecido.');
                }
            // Caso não tenha uma resposta vinda do servidor
            } else {
                setErro('Erro na conexão com o servidor')
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
            <form className="login-form" onSubmit={handleLogin} action={'/triagem_inteligente'}>

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