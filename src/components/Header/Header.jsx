import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <h1><a href="/">CineBoxd</a></h1>
        <ul>
          <li>Entrar</li>
          <li>Criar conta</li>
          <li>Filmes</li>
          <li>Membros</li>
          <li>Sobre</li>
        </ul>
        <input type="text" />

      </nav>
    </header>
  )
}

export default Header