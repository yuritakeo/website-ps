
import { useState } from "react"

import "./style.css"
export default function Treino() {

    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")

    return (
        <div>
            <h1>Treino</h1>

            <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(qualquercoisa) => setNome(qualquercoisa.target.value)}
            />

            <br />

            <input
                type="text"
                placeholder="digite seu cpf"
                value={cpf}
                onChange={(valorCpf) => setCpf(valorCpf.target.value)}
            />

            <br />

            nome: {nome}
            <br />
            cpf: {cpf}
        </div>
    )
}