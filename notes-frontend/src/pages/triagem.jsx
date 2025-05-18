import "../styles/triagem.css";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Triagem() {
    const [pacientes, setPacientes] = useState([]);
    const [pacienteSelecionado, setPacienteSelecionado] = useState(null);

    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [pressao_arterial, setPressaoarterial] = useState('');
    const [alergias, setAlergias] = useState('');
    const [erro, setErro] = useState('');

    const handleTriagem = async (e) => {
        e.preventDefault();
        if (!pacienteSelecionado?.paciente_cpf) {
            setErro('Selecione um paciente válido');
            return;
    }

  try {
    const cpf = pacienteSelecionado.paciente_cpf;

    // Atualiza os dados de saúde do paciente
    await axios.put(`http://127.0.0.1:5000/triagem/${cpf}`, {
      altura,
      peso,
      pressao_arterial,
      alergias
    });

    // Envia a gravidade oficial para o backend
    await axios.put(`http://127.0.0.1:5000/triagem_e_fila/${cpf}`, {
      triagem_oficial: pacienteSelecionado.triagemIA
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    alert('Triagem enviada e paciente removido da fila com sucesso.');

    setAltura('');
    setPeso('');
    setPressaoarterial('');
    setAlergias('');
    setErro('');

    } catch (e) {
        if (e.response) {
        const msg = e.response.data?.erro || e.response.data?.msg || '';
        if (msg === 'Nenhuma informação de saúde fornecida') {
            setErro('Nenhuma informação de saúde fornecida');
        } else if (msg === 'Paciente não encontrado') {
            setErro('Paciente não encontrado');
        } else {
            setErro('Erro ao enviar triagem');
        }
        } else {
        setErro('Erro ao conectar com o servidor');
        }
    }
    };

    // Buscar pacientes da fila ao carregar a página
    useEffect(() => {
        async function fetchPacientes() {
            try {
                const response = await axios.get("http://localhost:5000/pacientes");
                const dadosAPI = response.data;
                setPacientes(dadosAPI);
                if (dadosAPI.length > 0) {
                    setPacienteSelecionado(dadosAPI[0]);
                }
            } catch (error) {
                console.error("Erro ao buscar pacientes:", error);
            }
        }

        fetchPacientes();
    }, []);

    // Quando o usuário seleciona um paciente do dropdown
    const handleSelecionarPaciente = (e) => {
        const nome = e.target.value;
        const paciente = pacientes.find((p) => p.nome === nome);
        setPacienteSelecionado(paciente);
    };

    return (
        <div className="triagem-page">
            <img className="triagem-logo" src="src/assets/logo.jpg" />
            <h1 className='triagem-h1'>Triagem</h1>
            <form className="triagem-form" onSubmit={handleTriagem}>
                {/* Paciente */}
                <h4 className="triagem-h4" htmlFor='dados'>Selecione o paciente:</h4>
                <select
                    className="triagem-select"
                    id='dados'
                    onChange={handleSelecionarPaciente}
                    value={pacienteSelecionado?.nome || ""}
                >
                    {pacientes.map((paciente, index) => (
                        <option key={index} value={paciente.nome}>
                            {paciente.nome}
                        </option>
                    ))}
                </select>

                {/* Altura */}
                <input className="triagem-input" type="text" placeholder="Altura" id="altura" name="altura" value={altura} onChange={e => setAltura(e.target.value)} required />

                {/* Peso */}
                <input className="triagem-input" type="number" placeholder="Peso" id="peso" name="peso" required value={peso} onChange={e => setPeso(e.target.value)}/>

                {/* Pressão Arterial */}
                <input className="triagem-input" type="number" placeholder="Pressão Arterial" id="pressao_arterial" name="pressao_arterial" value={pressao_arterial} onChange={e => setPressaoarterial(e.target.value)} required />

                {/* Alergias */}
                <input className="triagem-input" type="text" placeholder="Alergias" id="alergias" name="alergias" required value={alergias} onChange={e => setAlergias(e.target.value)} />

                {/* Sintomas */}
                <h4 className="triagem-h4">Sintomas apresentados pelo paciente:</h4>
                <textarea
                    className="triagem-textarea"
                    placeholder="Sintomas apresentados pelo paciente"
                    id="sintomas"
                    name="sintomas"
                    value={pacienteSelecionado?.sintomas || ""}
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
                        checked={pacienteSelecionado?.triagemIA === 'leve'}
                        readOnly
                    />
                    <label htmlFor="leve">Leve</label>

                    <input
                        className="triagem-radio"
                        type="radio"
                        id="moderado"
                        name="gravidade"
                        value="moderado"
                        checked={pacienteSelecionado?.triagemIA === 'moderado'}
                        readOnly
                    />
                    <label htmlFor="moderado">Moderado</label>

                    <input
                        className="triagem-radio"
                        type="radio"
                        id="grave"
                        name="gravidade"
                        value="grave"
                        checked={pacienteSelecionado?.triagemIA === 'grave'}
                        readOnly
                    />
                    <label htmlFor="grave">Grave</label>
                </div>

                {erro && <p>{erro}</p>}

                <button className="triagem-button" type="submit">Confirmar</button>
            </form>
        </div>
    );
}
