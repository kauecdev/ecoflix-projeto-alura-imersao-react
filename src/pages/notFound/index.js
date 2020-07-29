import React from 'react';
import PageDefault from '../../components/PageDefault';

import ImgCinema from '../../assets/img/sala_cinema2.jpg';
import './notFound.css';

function notFound() {
  return (
    <PageDefault>
      <div className="title-404">
        <h1>A página que você procurou parece não existir...</h1>
        <h3>Tem certeza de estar no endereço correto? Experimente recomeçar voltando para a home clicando na logo.</h3>
      </div>
      <img className="img-sala-cinema" src={ImgCinema} alt="Página não encontrada" />
    </PageDefault>
  )
}

export default notFound;