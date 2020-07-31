import React from 'react';
import { Link } from 'react-router-dom';
import LogoWhite from '../../assets/img/logo_kaflix_branco.png';
import ButtonLink from './components/ButtonLink';

import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={LogoWhite} alt="Kaflix logo" />
      </Link>

      <ButtonLink className="ButtonLink" href="/cadastro/video">
        Novo Vídeo
      </ButtonLink>
    </nav>
  );
}

export default Menu;
