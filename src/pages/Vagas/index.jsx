import { useState } from "react"

import iconVagas from '../../assets/icon-vagas.svg'

import './style.css'
export default function Vagas() {
    const [vagas, setVagas] = useState('')

    return (
        <>
            <h1 id="titulo">Trabalhe Conosco</h1>

            <div className="trabalhe-conosco">
                <img src={iconVagas} alt="Icone da image de vagas" />
                <h2>Quer trabalhar conosco?</h2>
            </div>

            <div className="container-button">
                <button>Anexar Curriculo</button>
                <button>Foto de perfil</button>
            </div>

            <form action="">
                <input type="email" placeholder="E-mail" />
                <input type="tel" placeholder="Telefone" />
                <input type="datetime-local" placeholder="Data Nascimento" />
                <input type="text" placeholder="CPF" />

                <h3>Genero</h3>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="Male"
                            // checked={this.state.selectedOption === "Male"}
                            // onChange={this.onValueChange}
                        />
                        Masculino
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="Male"
                            // checked={this.state.selectedOption === "Male"}
                            // onChange={this.onValueChange}
                        />
                        Feminino
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="Male"
                            // checked={this.state.selectedOption === "Male"}
                            // onChange={this.onValueChange}
                        />
                        Prefiro não dizer
                    </label>
                </div>
            </form>

        </>
    )
}