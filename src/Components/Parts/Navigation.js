import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from '../../config/authUserContext';
import SignOutButton from '../Auth/SignOut';
import * as routes from '../../config/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <nav className="menu">
    <div className="container">
      <Link to={routes.HOME} className="brand">
        Socorro, <span className="text-highlight">vovó</span>!
        <img src="/images/socorrovovo.png" alt="imagem de uma idosa simbolizando a vovó" />
      </Link>
      <ul className="main-menu">
        <li><Link to="/netinhos">Netinhos</Link></li>
        <li><Link to={routes.TOOL_ADD}>Adicionar</Link></li>
        <li><SignOutButton /></li>
      </ul>
      <ul className="info-menu">
        <li><a href="https://github.com">Github</a></li>
        <li><a href="https://twitter.com">Twitter</a></li>
        <li><a href="https://facebook.com">Facebook</a></li>
        <li><a href="https://github.com">Quero Ajudar</a></li>
      </ul>
    </div>
  </nav>

const NavigationNonAuth = () =>
  <nav className="menu">
    <div className="container">
      <Link to={routes.HOME} className="brand">
        Socorro, <span className="text-highlight">vovó</span>!
        <img src="/images/socorrovovo.png" alt="imagem de uma idosa simbolizando a vovó" />
      </Link>
      <ul className="main-menu">
        <li><Link to="/netinhos">Netinhos</Link></li>
        <li><Link to={routes.SIGN_IN}>Entrar</Link></li>
        <li><Link to={routes.SIGN_UP}>Cadastrar</Link></li>
      </ul>
      <ul className="info-menu">
        <li><a href="https://github.com">Github</a></li>
        <li><a href="https://twitter.com">Twitter</a></li>
        <li><a href="https://facebook.com">Facebook</a></li>
        <li><a href="https://github.com">Quero Ajudar</a></li>
      </ul>
    </div>
  </nav>

export default Navigation;

