import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import ImgCinema from '../../assets/img/sala_cinema2.jpg';
import './notFound.css';

function notFound() {
  return (
    <>
      <Menu />
        <div className="title-404">
          <h1>A página que você procurou parece não existir...</h1>
          <h3>Tem certeza de estar no endereço correto? Experimente recomeçar voltando para a home clicando na logo.</h3>
        </div>
        <img className="img-sala-cinema" src={ImgCinema} alt="Página não encontrada" />
      <Footer />
    </>
  )
}

export default notFound;