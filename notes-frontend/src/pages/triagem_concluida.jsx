import "../styles/triagem_concluida.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function TriagemConcluida() {

    const location = useLocation();
    const dados = location.state || {};

    return (
        <div className="tc-page">
            <div className="tc-card">
            <img src="src\assets\logo.jpg" className="login-logo" />    
                <h1 className="tc-h1">Health Center</h1>
                <p className="tc-subtitle">Sua triagem foi concluída!!</p>

                <div className="tc-box">
                    <p className="tc-atendimento">🩺 Atendimento Médico</p>
                    <p className="tc-text">
                        Sua posição na fila: {dados.posicao_na_fila ?? '-'}
                    </p>
                    <p className="tc-text">
                        Tempo de espera: {dados.tempo_estimado_espera ?? '-'}
                    </p>
                </div>

                <p className="tc-note">Aguarde até que te chamem para o seu atendimento.</p>
                {/* <button className="tc-button">Atualizar</button> */}
            </div>
        </div>
    );
}
