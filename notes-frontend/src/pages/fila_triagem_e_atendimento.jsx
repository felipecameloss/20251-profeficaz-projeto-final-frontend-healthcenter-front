import "../styles/fila_triagem_e_atendimento.css";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

export default function Fila_triagem_e_atendimento() {
    const location = useLocation();
    const dados = location.state || {};

    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    const handlePosicao = async () => {
        const cpf = localStorage.getItem("cpf");
        if (!cpf) {
            setErro("CPF não encontrado. Faça login novamente.");
            return;
        }

        try {
            const response = await axios.get(`http://127.0.0.1:5000/triagem/${cpf}`);

            if (response.status === 200) {
                const data = response.data;
                navigate("/triagem_concluida", {
                    state: {
                        posicao: data.posicao_na_fila,
                        tempo: data.tempo_estimado_espera
                    }
                });
            } else {
                setErro("Ainda não chegou sua vez. Tente novamente em breve.");
            }
        } catch (error) {
            if (error.response && error.response.status === 202) {
                setErro(error.response.data.msg); // Mensagem de "ainda não chegou sua vez"
            } else if (error.response && error.response.status === 404) {
                setErro("Você não está na fila de atendimento.");
            } else {
                setErro("Erro ao atualizar. Tente novamente.");
            }
        }
    };

    return (
        <div className="fta-page">
            <div className="fta-div">
                <div className="fta-div2">
                    <div className="fta-subtitle">
                        <img src="src/assets/triagem-oficial.jpg" className="fta-img" />
                        <p className="fta-hp"> Triagem oficial</p>
                    </div>
                    <hr className="fta-hr" />
                    <p className="fta-p"> Sua posição na fila: {dados.posicao_triagem ?? '-'}</p>
                    <p className="fta-p"> Tempo de espera: {dados.tempo_triagem ?? '-'}</p>
                </div>
                <div className="fta-div2">
                    <div className="fta-subtitle">
                        <img src="src/assets/atendimento-medico.jpg" className="fta-img" />
                        <p className="fta-hp"> Atendimento médico </p>
                    </div>
                    <hr className="fta-hr" />
                    <p className="fta-p"> Sua posição na fila: {dados.posicao_atendimento ?? '-'}</p>
                    <p className="fta-p"> Tempo de espera: {dados.tempo_atendimento ?? '-'}</p>
                </div>
                <div className="fta-div2">
                    <div className="fta-subtitle">
                        <img src="src/assets/tempo-total.jpg" className="fta-img" />
                        <p className="fta-hp"> Tempo total </p>
                    </div>
                    <hr className="fta-hr" />
                    <p className="fta-p"> {dados.tempo_total_estimado ?? '-'} </p>
                </div>
            </div>
            <h4 className="fta-h4">As informações mostradas são apenas<br />
                estimativas baseadas na sua triagem feita por <br />
                IA, portanto, estão sujeitas a alteração após sua <br />
                chegada na unidade e a triagem oficial.</h4>

            {erro && <p>{erro}</p>}
            
            <button className='fta-button' onClick={handlePosicao} type="submit">Atualizar</button>
        </div>
    );
}
