import "../styles/triagem_inteligente.css";
import { useNavigate } from 'react-router-dom';

export default function Triagem_inteligente() {

    return (
        <div className="ti-page">
            <img src="src\assets\logo.jpg" className="login-logo" />
            <h1 className="ti-h1"> Triagem Inteligente </h1>
            <h3 className="ti-h3"> Informe seus sintomas para que a nossa triagem inteligente avalie a gravidade e calcule seu tempo de espera. </h3>
            <form className="ti-form" action={'/fila_triagem_e_atendimento'}>

                <textarea className="ti-textarea" placeholder="Digite seus sintomas" id="sintomas" name="sintomas" required></textarea>

                <button className="ti-button" type="submit">Confirmar</button>
            </form>
        </div>
    )
}