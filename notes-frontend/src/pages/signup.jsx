import "../styles/signup.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {

    const navigate = useNavigate();
    const [nome_completo, setNomecompleto] = useState(''); 
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [celular, setCelular] = useState('');
    const [endereco, setEndereco] = useState('');
    const [erro, setErro] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/cadastro', {
                nome_completo,
                email,
                senha,
                cpf,
                celular,
                endereco,
            });
            navigate("/");

        } catch (e) {
            if (e.response) {
                const msg = e.response.data.msg;
                if (msg === 'Usuário já existe') {
                    setErro('Este e-mail já está em uso.');
                } else if (msg === 'Email e senha são obrigatórios') {
                    setErro('Preencha todos os campos');
                } else {
                    setErro('Erro ao realizar cadastro. Tente novamente.');
                }
            } else {
                setErro('Erro na conexão com o servidor.');
            }
        }
    };

    return (
        <div className="signup-page">
            <img className="signup-logo" src="src\assets\logo.jpg" />
            <h1 className="signup-h1"> Cadastro</h1>
            <form className="signup-form" onSubmit={handleSignup}>
                {/* Nome completo */}
                <input className="signup-input" type="text" placeholder="Nome completo" id="nome_completo" name="nome_completo" value={nome_completo} onChange={e => setNomecompleto(e.target.value)} required></input>

                {/* E-mail */}
                <input className="signup-input" type="email" placeholder="E-mail" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required></input>

                {/* Senha */}
                <input className="signup-input" type="password" placeholder="Senha" id="senha" name="senha" value={senha} onChange={e => setSenha(e.target.value)} required></input>

                {/* CPF */}
                <input className="signup-input" type="text" placeholder="CPF" id="cpf" name="cpf" maxlength="11" minLength='11' pattern="\d{11}" 
                title="O CPF deve conter exatamente 11 dígitos numéricos"
                required value={cpf} onChange={e => setCpf(e.target.value)}></input>

                {/* Celular */}
                <input className="signup-input" type="tel" placeholder='Celular' id="celular" name="celular" maxlength="11" minLength='11' value={celular} onChange={e => setCelular(e.target.value)}></input>

                {/* Endereço */}
                <input className="signup-input" type="text" placeholder="Endereço" required value={endereco} onChange={e => setEndereco(e.target.value)}></input>

                {erro && <p>{erro}</p>}

                <button onClick={handleSignup} className="signup-button" type="submit" >Criar conta</button>
            </form>
        </div>
    )
}