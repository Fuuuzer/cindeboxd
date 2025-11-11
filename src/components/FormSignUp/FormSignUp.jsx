import React from 'react'
import { validateForm } from '../../utils/validations'

export const FormSignUp = () => {
  const [email, setEmail] = React.useState('');


  return (
    <form action="">
      <div>
        <label htmlFor="email">Email</label>
        <input onChange={(e) => setEmail(() => { e.target.value; console.log(e.target.value) })} value={email} type="email" id='email' />
      </div>

      <div>
        <label htmlFor="username">Usuário</label>
        <input type="text" id='username' />
      </div>

      <div>
        <label htmlFor="senha">Senha</label>
        <input type="password" id='senha' />
      </div>

      <button id='btn-form' onClick={(e) => { e.preventDefault(); validateForm() }}>Inscrever-se</button>
    </form>
  )
}
