import "../styles/login.css";

export default function Login() {

    return (
        <div className="page">
            <img src="src\assets\logo.jpg" className="logo" />
            <div className="titles">
                <h1>Health Center</h1>
                <h3>Sua saúde começa aqui!</h3>
            </div>
            <form>
                <div className="divisao">
                    <input type="email" placeholder="E-mail" required></input>
                </div>
                <input type="password" placeholder="Senha" required></input>
                <button type="submit" class="login-button">Entrar</button>
                <button type="submit" class="signup-button">Criar conta</button>
            </form>
        </div>
    )
}