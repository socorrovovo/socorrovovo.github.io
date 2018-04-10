import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from '../../config/authUserContext';
import SignOutButton from '../Auth/SignOut';
import * as routes from '../../config/routes';
import NavIcon from './NavIcon';

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
      <ul className="main-menu">
        <li>
          <Link to={routes.HOME} className="brand">
            Socorro, <span className="text-highlight">vovó</span>!
            <img src="/images/socorrovovo.png" alt="imagem de uma idosa simbolizando a vovó" />
          </Link>
        </li>
        <li><Link to="/netinhos">Netinhos</Link></li>
      </ul>
      <ul className="info-menu">
        <li><NavIcon url="https://github.com/socorrovovo" name="Github" /></li>
        <li><NavIcon url="https://twitter.com/socorrovovo" name="Twitter" /></li>
        <li><NavIcon url="https://facebook.com/socorrovovo" name="Facebook" /></li>
        <li><a href="https://github.com" className="btn-rounded">Quero Ajudar</a></li>
        <li>
          <span className="link">Perfil</span>
          <ul>
            <li><Link to={routes.TOOL_ADD}>Adicionar</Link></li>
            <li><SignOutButton /></li>
          </ul>
        </li>
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
      </ul>
      <ul className="info-menu">
        <li><NavIcon url="https://github.com/socorrovovo" name="Github" /></li>
        <li><NavIcon url="https://twitter.com/socorrovovo" name="Twitter" /></li>
        <li><NavIcon url="https://facebook.com/socorrovovo" name="Facebook" /></li>
        <li><a href="https://github.com" className="btn-rounded">Quero Ajudar</a></li>
        <li><Link to={routes.SIGN_IN}>Entrar</Link></li>
        <li><Link to={routes.SIGN_UP}>Cadastrar</Link></li>

      </ul>
    </div>
  </nav>

export default Navigation;

