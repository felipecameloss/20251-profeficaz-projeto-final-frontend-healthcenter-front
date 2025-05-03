import "../styles/triagem_inteligente.css";
import { useNavigate } from 'react-router-dom';

export default function Triagem_inteligente() {

    return (
        <div className="ti-page">
            <img src="src\assets\logo.jpg" className="login-logo" />
            <h1 className="ti-h1"> Triagem Inteligente </h1>
            <h3 className="ti-h3"> Insira mais algumas <br></br> informações para calcularmos <br></br> sua posição na fila</h3>
            <form className="ti-form">

                {/* Idade */}
                <input className="ti-input" type="number" placeholder="Idade" id="idade" name="idade" required></input>

                {/* Gestante ou não */}
                <h4 className="ti-h4">Gestante?</h4>
                <div className="ti-gestante">
                    <input className="ti-radio" type="radio" id="sim" name="gestante" value="sim"></input>
                    <label for="sim">Sim</label>
                    <input className="ti-radio" type="radio" id="nao" name="gestante" value="nao"></input>
                    <label for="nao">Não</label>
                </div>

                <textarea className="ti-textarea" placeholder="Digite seus sintomas" id="sintomas" name="sintomas" required></textarea>

                <button className="ti-button" type="submit" >Confirmar</button>
            </form>
        </div>
    )
}