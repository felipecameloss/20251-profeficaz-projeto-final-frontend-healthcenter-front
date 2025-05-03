import "../styles/login.css";
import { useNavigate } from 'react-router-dom';

export default function Login() {

    // Criando a conexão entre o botão de Criar conta e a página de cadastro
    const navigate = useNavigate();

    return (
        <div className="login-page">
            <img src="src\assets\logo.jpg" className="login-logo" />
            <div className="login-titles">
                <h1 className="login-h1">Health Center</h1>
                <h3 className="login-h3">Sua saúde começa aqui!</h3>
            </div>
            <form className="login-form" action={'/triagem_inteligente'}>
                <input className='login-input' type="email" placeholder="E-mail" required></input>
                <input className='login-input' type="password" placeholder="Senha" required></input>
                <button className='login-button' type="submit" class="login-button">Entrar</button>
                <p>Não possui uma conta? <a href="/signup">Cadastre-se</a></p>
            </form>
        </div>
    )
}