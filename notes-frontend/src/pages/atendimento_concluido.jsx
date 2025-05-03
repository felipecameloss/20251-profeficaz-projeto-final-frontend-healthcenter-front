import '../styles/atendimento_concluido.css'

export default function Atendimento_concluido() {

    return (
        <div className="ac-page">
            <h1 className="ac-h1">Health Center</h1>
            <img src="src\assets\logo.jpg" className="login-logo" />
            <h3 className="ac-h3">O atendimento foi <br></br> concluído com sucesso!</h3>
            <form className='ac-form' action={'/'}>
                <button className="ac-button" type="submit" >Finalizar</button>
            </form>
        </div>
    )
} 
