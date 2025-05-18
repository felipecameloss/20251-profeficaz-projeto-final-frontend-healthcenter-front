import '../styles/atendimento_concluido.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Atendimento_concluido() {
    const navigate = useNavigate();

    const finalizarAtendimento = async (e) => {
        e.preventDefault();

        const cpf = localStorage.getItem("cpf");
        if (!cpf) {
            alert("CPF não encontrado. Faça login novamente.");
            return;
        }

        try {
            const response = await axios.delete(`http://127.0.0.1:5000/atendimento/${cpf}`);
            if (response.status === 200) {
                localStorage.removeItem("cpf");
                navigate("/"); 
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert("Você não está na fila de atendimento.");
            } else {
                alert("Erro ao finalizar atendimento. Tente novamente.");
            }
        }
    };

    return (
        <div className="ac-page">
            <h1 className="ac-h1">Health Center</h1>
            <img src="src/assets/logo.jpg" className="login-logo" />
            <h3 className="ac-h3">O atendimento foi <br /> concluído com sucesso!</h3>
            <form className='ac-form' onSubmit={finalizarAtendimento}>
                <button className="ac-button" type="submit">Finalizar</button>
            </form>
        </div>
    );
}
