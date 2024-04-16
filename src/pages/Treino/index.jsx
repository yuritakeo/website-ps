
// import 'dotenv/config'

import "./style.css"
export default function Treino() {

    function handleClickBotao() {
        
        alert(import.meta.env.VITE_SOME_KEY);
    }

    return (
        <div>
            <button onClick={handleClickBotao}>Clicar para testar</button>
        </div>
    )
}