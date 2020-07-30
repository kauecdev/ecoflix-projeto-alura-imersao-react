import React from 'react';
import { FooterBase } from './styles';
import LogoKC from '../../assets/img/kc_logo.png';
import './footer.css';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="logo" src={LogoKC} alt="Logo Kauê" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
