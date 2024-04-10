import LogoEmpresa from '../LogoEmpresa'
import Menu from '../Menu'

import "./style.css"

export default function Header() {
    return (
        <header>
            <div className="faixa-topo-azul" />

            <div className="container-header">
                <LogoEmpresa />
                <Menu />
            </div>
        </header>
    )
}