import "../styles/triagem.css";
import React, { useState } from 'react';

const dados = [
    { 'nome': 'Felipe', 'sintomas': 'dor de cabeça', 'gravidade': 'leve'},
    { 'nome': 'Gi', 'sintomas': 'febre', 'gravidade': 'grave'},
    { 'nome': 'Carlos', 'sintomas': 'dor de cabeça', 'gravidade': 'leve'},
    { 'nome': 'Flosi', 'sintomas': 'enjoo', 'gravidade': 'grave'},
    { 'nome': 'Mari', 'sintomas': 'dor de garganta', 'gravidade': 'moderado'}
  ];

export default function Triagem() {

    const [pacienteSelecionado, setPacienteSelecionado] = useState(dados[0]);

    const handleSelecionarPaciente = (e) => {
        const nome = e.target.value;
        const paciente = dados.find((p) => p.nome === nome);
        setPacienteSelecionado(paciente);
    };

    return (
        <div className="triagem-page">
            <img className="triagem-logo" src="src/assets/logo.jpg" />
            <h1 className='triagem-h1'>Triagem</h1>
            <form className="triagem-form">

                {/* Paciente */}
                <h4 className="triagem-h4" htmlFor='dados'>Selecione o paciente:</h4>
                <select
                className="triagem-select"
                id='dados'
                onChange={handleSelecionarPaciente}
                value={pacienteSelecionado.nome}
                >
                {dados.map((paciente, index) => (
                    <option key={index} value={paciente.nome}>
                    {paciente.nome}
                    </option>
                ))}
                </select>

                {/* Altura */}
                <input className="triagem-input" type="text" placeholder="Altura" id="altura" name="altura" required />

                {/* Peso */}
                <input className="triagem-input" type="number" placeholder="Peso" id="peso" name="peso" required />

                {/* Pressão Arterial */}
                <input className="triagem-input" type="number" placeholder="Pressão Arterial" id="pressao_arterial" name="pressao_arterial" required />

                {/* Alergias */}
                <input className="triagem-input" type="text" placeholder="Alergias" id="alergias" name="alergias" required />

                {/* Sintomas */}
                <h4 className="triagem-h4">Sintomas apresentados pelo paciente:</h4>
                <textarea
                className="triagem-textarea"
                placeholder="Sintomas apresentados pelo paciente"
                id="sintomas"
                name="sintomas"
                value={pacienteSelecionado.sintomas}
                readOnly
                required
                ></textarea>

                {/* Gravidade */}
                <h4 className="triagem-h4">Gravidade:</h4>
                <div className="triagem-gravidade">
                <input
                    className="triagem-radio"
                    type="radio"
                    id="leve"
                    name="gravidade"
                    value="leve"
                    checked={pacienteSelecionado.gravidade === 'leve'}
                    readOnly
                />
                <label htmlFor="leve">Leve</label>

                <input
                    className="triagem-radio"
                    type="radio"
                    id="moderado"
                    name="gravidade"
                    value="moderado"
                    checked={pacienteSelecionado.gravidade === 'moderado'}
                    readOnly
                />
                <label htmlFor="moderado">Moderado</label>

                <input
                    className="triagem-radio"
                    type="radio"
                    id="grave"
                    name="gravidade"
                    value="grave"
                    checked={pacienteSelecionado.gravidade === 'grave'}
                    readOnly
                />
                <label htmlFor="grave">Grave</label>
                </div>

                <button className="triagem-button" type="button">Confirmar</button>
            </form>
        </div>
    )
}