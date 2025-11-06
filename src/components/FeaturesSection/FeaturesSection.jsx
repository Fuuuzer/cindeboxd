import React from 'react'
import './FeaturesSection.css'


const FeaturesSection = () => {
  return (
    <section className='container'>

      <h2>O Cineboxd permite você...</h2>
      <div className='container-features'>
        <div className='column'>
          <div className='card'>
            <p><svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFF"><path d="M16.4724 20H4.1C3.76863 20 3.5 19.7314 3.5 19.4V9.6C3.5 9.26863 3.76863 9 4.1 9H6.86762C7.57015 9 8.22116 8.6314 8.5826 8.02899L11.293 3.51161C11.8779 2.53688 13.2554 2.44422 13.9655 3.33186C14.3002 3.75025 14.4081 4.30635 14.2541 4.81956L13.2317 8.22759C13.1162 8.61256 13.4045 9 13.8064 9H18.3815C19.7002 9 20.658 10.254 20.311 11.5262L18.4019 18.5262C18.1646 19.3964 17.3743 20 16.4724 20Z" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round"></path><path d="M7 20L7 9" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>Avaliar todos os filmes que você já assistiu e gostou... Ou não.</p>
          </div>
          <div className='card'>
            <p><svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFF"><path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>Avalie cada filme em uma escala de cinco estrelas, para salvar e compartilhar sua reação.</p>
          </div>
        </div>

        <div className='column'>
          <div className='card'>
            <p><svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFF"><path d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z" stroke="#FFF" strokeWidth="1.5" strokeLinejoin="round"></path></svg>Mostre a sua paixão pelos seus filmes favoritos. Liste-os e avalie-os.</p>
          </div>
          <div className='card'>
            <p><svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFF"><path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>Escreva e compartilhe reviews, siga seus amigos e outros membros para ler as deles.</p>
          </div>
        </div>

        <div className='column'>
          <div className='card'>
            <p><svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFF"><path d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 10V6C3 4.89543 3.89543 4 5 4H7" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7 2V6" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>Mantenha um diário de filmes que você assistiu.</p>
          </div>
          <div className='card'>
            <p>Em breve..</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection