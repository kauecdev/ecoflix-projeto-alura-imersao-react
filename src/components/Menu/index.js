import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/ecoflix_logo.png';
import ButtonLink from './components/ButtonLink';

import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Ecoflix logo" />
      </Link>

      <ButtonLink className="ButtonLink" href="/cadastro/video">
        Novo Vídeo
      </ButtonLink>
    </nav>
  );
}

export default Menu;
