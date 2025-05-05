import "../styles/fila_triagem_e_atendimento.css";

export default function Fila_triagem_e_atendimento() {

    return (
        <div className="fta-page">
            <div className="fta-div">
                <div className="fta-div2"> 
                    <div className="fta-subtitle">
                        <img src="src\assets\triagem-oficial.jpg" className="fta-img" />
                        <p className="fta-hp"> Triagem oficial</p>
                    </div> 
                    <hr className="fta-hr"></hr>
                    <p className="fta-p"> Sua posição na fila: </p>
                    <p className="fta-p"> Tempo de espera: </p>
                </div>
                <div className="fta-div2">
                    <div className="fta-subtitle">
                        <img src="src\assets\atendimento-medico.jpg" className="fta-img" />
                        <p className="fta-hp"> Atendimento médico </p>
                    </div>
                    <hr className="fta-hr"></hr>
                    <p className="fta-p"> Sua posição na fila: </p>
                    <p className="fta-p"> Tempo de espera: </p>
                </div>
                <div className="fta-div2">
                    <div className="fta-subtitle">
                        <img src="src\assets\tempo-total.jpg" className="fta-img" />
                        <p className="fta-hp"> Tempo total </p>
                    </div>
                    <hr className="fta-hr"></hr>
                    <p className="fta-p"> 1 hora 35 minutos </p>
                </div>
            </div>
            <h4 className="fta-h4">As informações mostradas são apenas<br></br>
                estimativas baseadas na sua triagem feita por <br></br>
                IA, portanto, estão sujeitas a alteração após sua <br></br>
                chegada na unidade e a triagem oficial.</h4>
            <button className='fta-button' type="submit">Atualizar</button>
        </div>
    )
}
