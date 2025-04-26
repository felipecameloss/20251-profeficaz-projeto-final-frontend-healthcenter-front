import Login from './pages/login'
import Signup from './pages/signup'
import { Route, Routes } from 'react-router-dom';

function App() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </>
    )
}

export default App