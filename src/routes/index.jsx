import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Vagas from '../pages/Vagas'
import Departamentos from '../pages/Departamentos'
import Treino from '../pages/Treino'

import Register from '../pages/Register'


import Roleta from "../pages/Roleta"



function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/vagas' element={<Vagas />} />
            <Route path='/departamentos' element={<Departamentos />} />
            
            <Route path='/treino' element={<Treino />} />
            <Route path='/roleta' element={<Roleta />} />
        </Routes>
    )
}

export default RoutesApp
