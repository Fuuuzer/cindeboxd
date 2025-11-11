import React from 'react'
import './Modal.css'
import { validateForm } from '../../utils/validations'

const Modal = ({ ativo, onClose }) => {
  const [nome, setNome] = React.useState('');

  const [inputForm, setInputForm] = React.useState({
    user: '',
    email: '',
    password: ''
  });

  setjn

  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);


  return (

    <>
      {ativo && < div className="modal" >
        <div className='modal-header'>
          <h2>Entre no cineboxd</h2>
          <button aria-label='Fechar' onClick={onClose}>X</button>
        </div>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input value={nome} onChange={(e) => setNome(e.target.value)} type="email" id='email' />
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
      </div>}

    </>
  )
}

export default Modal