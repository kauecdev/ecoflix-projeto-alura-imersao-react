import React from 'react';
import { Link } from 'react-router-dom';
import LogoWhite from '../../assets/img/logo_kaflix_branco.png';
import Button from '../Button';

import './Menu.css';

function Menu () {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={LogoWhite} alt="Kaflix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
   </nav>
  )
}

export default Menu;