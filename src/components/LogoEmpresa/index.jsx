import logo from '../../assets/logo-ps.svg'

import './style.css'
export default function LogoEmpresa() {
    return (
        <div className='container-logo-empresa'>
            <img src={logo} alt="Logo da Praia Sol" />
            <div className="nome-empresa">
                <p>Viacao</p>
                <strong>Praia Sol</strong>
            </div>
        </div>
    )
}