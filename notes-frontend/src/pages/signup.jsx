import "../styles/signup.css";

export default function Signup() {
        return (
            <div className="signup-page">
                <img className="signup-logo" src="src\assets\logo.jpg" />
                <h1 className="signup-h1"> Cadastro</h1>
                <form className="signup-form">
                    {/* Nome completo */}
                    <input className="signup-input" type="text" placeholder="Nome completo" id="nome" name="nome" required></input>

                    {/* E-mail */}
                    <input className="signup-input" type="email" placeholder="E-mail" id="email" name="email" required></input>

                    {/* Senha */}
                    <input className="signup-input" type="password" placeholder="Senha" id="senha" name="senha" required></input>

                    {/* CPF */}
                    <input className="signup-input" type="text" placeholder="CPF" id="cpf" name="cpf" maxlength="11" minLength='11' pattern="\d{11}" 
                    title="O CPF deve conter exatamente 11 dígitos numéricos"
                    required></input>

                    {/* Celular */}
                    <input className="signup-input" type="tel" placeholder='Celular' id="celular" name="celular" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>

                    {/* Endereço */}
                    <input className="signup-input" type="email" placeholder="E-mail" required></input>

                    <button className="signup-button" type="button" class="signup-button">Criar conta</button>
                </form>
            </div>
        )
}