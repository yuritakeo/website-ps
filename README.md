



# Rascunho


<div className="container-button">
                <button>Anexar Curriculo</button>
                <button>Foto de perfil</button>
            </div>

            <form action="">
                <input type="email" placeholder="E-mail" />
                <input type="tel" placeholder="Telefone" />
                <input type="date" placeholder="Data Nascimento" />
                <input type="text" placeholder="CPF" />

                <h3>Genero</h3>
                <div className="radio" radioGroup="genero">
                    <label>
                        <input
                            type="radio"
                            value="Male"
                            radioGroup="genero"
                        // checked={this.state.selectedOption === "Male"}
                        // onChange={this.onValueChange}
                        />
                        Masculino
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="Famale"
                            radioGroup="genero"
                        // checked={this.state.selectedOption === "Male"}
                        // onChange={this.onValueChange}
                        />
                        Feminino
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="Estranho"
                            radioGroup="genero"
                        // checked={this.state.selectedOption === "Male"}
                        // onChange={this.onValueChange}
                        />
                        Prefiro não dizer
                    </label>

                </div>
            </form>


# Testando commit casa