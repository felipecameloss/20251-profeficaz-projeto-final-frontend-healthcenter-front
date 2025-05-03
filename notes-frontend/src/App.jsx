import Login from './pages/login'
import Signup from './pages/signup'
import Triagem from './pages/triagem'
import Triagem_inteligente from './pages/triagem_inteligente'
import Atendimento_concluido from './pages/atendimento_concluido'
import { Route, Routes } from 'react-router-dom';

function App() {
    return(
        <>
            <Routes>
                {/* Rotas para as páginas com os seus respectivos urls */}
                <Route path="/" element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/triagem' element={<Triagem />} />
                <Route path='/triagem_inteligente' element={<Triagem_inteligente />} />
                <Route path='/atendimento_concluido' element={<Atendimento_concluido />} />
            </Routes>
        </>
    )
}

export default App