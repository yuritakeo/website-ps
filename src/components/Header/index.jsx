import LogoEmpresa from '../LogoEmpresa'
import Menu from '../Menu'

import "./style.css"

import buttonMenuHambuerguer from '../../assets/buttonMenuHamburguer.svg'

export default function Header() {
    return (
        <header>
            <div className="faixa-topo-azul" />

            <div className="container-header">
                <div className='buttonMenuHamburguer'>
                    <img src={buttonMenuHambuerguer} alt="botão menu" />
                </div>
                <LogoEmpresa />
                <Menu />
            </div>
        </header>
    )
}