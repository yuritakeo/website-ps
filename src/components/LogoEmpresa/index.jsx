
import logo from '../../assets/logo-ps.svg'

import './style.css'
export default function LogoEmpresa() {
    return (
        <div className='container'>
            <img src={logo} alt="Logo da Praia Sol" />
            <div className="nome-empresa">
                <p>Viacao</p>
                <p>Praia Sol</p>
            </div>
        </div>
    )
}