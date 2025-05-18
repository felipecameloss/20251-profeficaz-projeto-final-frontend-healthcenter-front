import "../styles/triagem_inteligente.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Triagem_inteligente() {

    const navigate = useNavigate();
    const [sintomas, setSintomas] = useState('');
    const [erro, setErro] = useState('');

    const handleSintomas = async (e) => {
        e.preventDefault();
        try {
            const cpf = localStorage.getItem("cpf");
            const response = await axios.post(`http://127.0.0.1:5000/triagem/${cpf}`, {
                sintomas
            });
            const data = response.data;

            navigate("/fila_triagem_e_atendimento", {
                state: {
                    gravidade_estimada: data.gravidade_estimada,
                    resposta_ia: data.resposta_ia,
                    posicao_triagem: data.posicao_triagem,
                    tempo_triagem: data.tempo_triagem,
                    posicao_atendimento: data.posicao_atendimento,
                    tempo_atendimento: data.tempo_atendimento,
                    tempo_total_estimado: data.tempo_total_estimado
                }});
                
        } catch (e) {
            if (e.response) {
                if (msg === 'Sintomas não fornecidos') {
                    setErro('Sintomas não fornecidos');
                }
            }}}

    return (
        <div className="ti-page">
            <img src="src\assets\logo.jpg" className="login-logo" />
            <h1 className="ti-h1"> Triagem Inteligente </h1>
            <h3 className="ti-h3"> Informe seus sintomas para que a nossa triagem inteligente avalie a gravidade e calcule seu tempo de espera. </h3>
            <form className="ti-form" onSubmit={handleSintomas}>

                <textarea className="ti-textarea" placeholder="Digite seus sintomas" id="sintomas" name="sintomas" value={sintomas} onChange={e => setSintomas(e.target.value)} required></textarea>

                {erro && <p>{erro}</p>}

                <button className="ti-button" type="submit">Confirmar</button>
            </form>
        </div>
    )
}

// // IMPORTAR useLocation
// import "../styles/triagem_inteligente.css";
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function Triagem_inteligente() {
//     const navigate = useNavigate();
//     const [sintomas, setSintomas] = useState('');
//     const [erro, setErro] = useState('');

//     const handleSintomas = async (e) => {
//         e.preventDefault();
//         try {
//             const cpf = localStorage.getItem("cpf");
//             const response = await axios.post(`http://127.0.0.1:5000/triagem/${cpf}`, {
//                 sintomas
//             });

//             const data = response.data;

//             navigate("/fila_triagem_e_atendimento", {
//                 state: {
//                     gravidade_estimada: data.gravidade_estimada,
//                     resposta_ia: data.resposta_ia,
//                     posicao_triagem: data.posicao_triagem,
//                     tempo_triagem: data.tempo_triagem,
//                     posicao_atendimento: data.posicao_atendimento,
//                     tempo_atendimento: data.tempo_atendimento,
//                     tempo_total_estimado: data.tempo_total_estimado
//                 }
//             });

//         } catch (e) {
//             if (e.response && e.response.data.msg === 'Sintomas não fornecidos') {
//                 setErro('Sintomas não fornecidos');
//             } else {
//                 setErro('Erro ao enviar os sintomas. Tente novamente.');
//             }
//         }
//     }

//     return (
//         <div className="ti-page">
//             <img src="src/assets/logo.jpg" className="login-logo" />
//             <h1 className="ti-h1"> Triagem Inteligente </h1>
//             <h3 className="ti-h3"> Informe seus sintomas para que a nossa triagem inteligente avalie a gravidade e calcule seu tempo de espera. </h3>
//             <form className="ti-form" onSubmit={handleSintomas}>
//                 <textarea className="ti-textarea" placeholder="Digite seus sintomas" id="sintomas" name="sintomas" value={sintomas} onChange={e => setSintomas(e.target.value)} required></textarea>
//                 {erro && <p>{erro}</p>}
//                 <button className="ti-button" type="submit">Confirmar</button>
//             </form>
//         </div>
//     );
// }
