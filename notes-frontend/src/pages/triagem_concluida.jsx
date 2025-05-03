import "../styles/triagem_concluida.css";

export default function TriagemConcluida() {
    return (
        <div className="tc-page">
            <img src="src\assets\logo.jpg" className="login-logo" />
            <div className="tc-card">
                <div className="tc-icon">
                    <span className="tc-plus">+</span>
                </div>
                <h1 className="tc-h1">Health Center</h1>
                <p className="tc-subtitle">Sua triagem foi concluída!!</p>

                <div className="tc-box">
                    <p className="tc-atendimento">🩺 Atendimento Médico</p>
                    <p className="tc-text">
                        Sua posição na fila: <span className="tc-bold">12°</span>
                    </p>
                    <p className="tc-text">
                        Tempo de espera: <span className="tc-bold">1 hora 10 minutos</span>
                    </p>
                </div>

                <p className="tc-note">Aguarde até que te chamem para o seu atendimento.</p>
                <button className="tc-button">Atualizar</button>
            </div>
        </div>
    );
}
