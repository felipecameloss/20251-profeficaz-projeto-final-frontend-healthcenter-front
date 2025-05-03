import "../styles/triagem.css";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function Triagem() {

    const dados = [
        { 'nome': 'Felipe', 'sintomas': 'dor de cabeça' },
        { 'nome': 'Gi', 'sintomas': 'febre' },
        { 'nome': 'Carlos', 'sintomas': 'dor de cabeça' },
        { 'nome': 'Flosi', 'sintomas': 'enjoo' },
        { 'nome': 'Mari', 'sintomas': 'dor de garganta' }
      ];

    return (
        <div className="triagem-page">
            <img className="triagem-logo" src="src\assets\logo.jpg" />
            <h1 className='triagem-h1' > Triagem </h1>
            <form className="triagem-form">

                {/* Este htmlFor serve como um for, e dentro dele passo o que desejo rodar (no caso a lista dados que mudaremos para os pacientes) */}
                <h4 className="triagem-h4" htmlFor='dados'>Selecione o paciente:</h4>

                {/* O onChange será chamado  */}
                <select className="triagem-select" id='dados'>  
                    {dados.map((paciente, index) => (
                        <option key={index} value={paciente.nome}> 
                        {paciente.nome}
                        </option>
                    ))}
                </select>

                {/* Sintomas do paciente */}
                <h4 className="triagem-h4"> Sintomas apresentados pelo paciente: </h4>
                <textarea className="ti-textarea" placeholder="Sintomas apresentados pelo paciente" id="sintomas" name="sintomas" required></textarea>

                {/* Altura */}
                <input className="triagem-input" type="text" placeholder="Altura" id="altura" name="altura" required></input>

                {/* Peso */}
                <input className="triagem-input" type="number" placeholder="Peso" id="peso" name="peso" required></input>

                {/* Pressão Arterial? */}
                {/* Verificar se isso é da triagem ou não */}
                <input className="triagem-input" type="number" placeholder="Pressão Arterial" id="pressao_arterial" name="pressao_arterial" required></input>

                {/* Alergias */}
                <input className="triagem-input" type="text" placeholder="Alergias" id="alergias" name="alergias" required></input>

                {/* {/* Remédios regulares */}
                <textarea className="ti-textarea" placeholder="Remédios regulares" id="remedios_regulares" name="remedios_regulares" required></textarea>
                
                {/* Doença Crônica */}
                <textarea className="ti-textarea" placeholder="Doenças Crônicas" id="doenca_cronica" name="doenca_cronica" required></textarea>

                {/* Histórico familiar e hábitos */}
                <textarea className="ti-textarea" placeholder="Histórico familiar e hábitos" id="historico_familiar_e_habitos" name="historico_familiar_e_habitos" required></textarea>

                {/* Gravidade */}
                <textarea className="ti-textarea" placeholder="Gravidade do caso" id="gravidade_do_caso" name="gravidade_do_caso" required></textarea>

                <button className="triagem-button" type="button" class="triagem-button">Confirmar</button>
            </form>
        </div>
    )
}