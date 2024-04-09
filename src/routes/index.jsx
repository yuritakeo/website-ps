import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Vagas from '../pages/Vagas'
import Departamentos from '../pages/Departamentos'


function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/vagas' element={<Vagas />} />
            <Route path='/departamentos' element={<Departamentos />} />
        </Routes>
    )
}

export default RoutesApp
