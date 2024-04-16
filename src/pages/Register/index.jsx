import { useState } from 'react'

import { auth, db } from '../../services/firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


import { doc, getDoc, setDoc } from 'firebase/firestore'


import './style.css'
export default function Register() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nascimento, setNascimento] = useState('')
  const [telefone, setTelefone] = useState('')

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    if (nome !== '' && email !== '' && password !== '' && nascimento !== '' && telefone !== '') {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (value) => {
          let uid = value.user.uid

          await setDoc(doc(db, "usuarios", uid), {
            nome: nome,
            email: email,
            password: password,
            nascimento: nascimento,
            telefone: telefone
          }).then(() => {
            // falta recuperar dados do velue da api
            let data = {
              uid: uid,
              nome: nome,
              email: email,
              password: password,
              telefone: telefone
            };
            // contaudo do objeto com id
            console.log(data) 
            // implementar localstorage
          })

          navigate('/', { replace: true })
        })
        .catch((e) => {
          console.log("ERRO AO FAZER O CADASTRO " + e)
        })
    } else {
      alert("Preencha todos os campos!")
    }
  }
  return (
    <div className="register-container">
      <div className='container'>
        <h1>Vamos criar uma conta</h1>
        <span>Crie sua conta e se candidatar-se facilmente em nossas vagas disponiveis</span>
      </div>

      <form className="container" onSubmit={handleRegister}>
        Nome: <input
          type="text"
          placeholder="Digite seu email"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        Email: <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        Senha: <input
          type="password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        Nascimento: <input
          type="date"
          value={nascimento}
          onChange={(e) => setNascimento(e.target.value)}
        />
        Telefone Contato: <input
          type="text"
          placeholder="Digite seu contato"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <button type="submit" >Cadastrar</button>
      </form>
    </div>
  )
}