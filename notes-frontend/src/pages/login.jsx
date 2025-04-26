import "../styles/login.css";
import { useNavigate } from 'react-router-dom';

export default function Login() {

    // Criando a conexão entre o botão de Criar conta e a página de cadastro
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/signup'); // Replace with the desired path
      };

    return (
        <div className="login-page">
            <img src="src\assets\logo.jpg" className="login-logo" />
            <div className="login-titles">
                <h1 className="login-h1">Health Center</h1>
                <h3 className="login-h3">Sua saúde começa aqui!</h3>
            </div>
            <form className="login-form">
                {/* <div className="divisao"> */}
                    <input className='login-input' type="email" placeholder="E-mail" required></input>
                {/* </div> */}
                <input className='login-input' type="password" placeholder="Senha" required></input>
                <button className='login-button' type="submit" class="login-button">Entrar</button>
                <button className='login-button' onClick={handleClick} type="button" >Criar conta</button>
            </form>
        </div>
    )
}