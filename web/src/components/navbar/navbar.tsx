import React, { useEffect, useState } from "react";
import './navbarStyles.css';
import { IconContext } from "react-icons";
import { FiPlus, FiSettings, FiHelpCircle } from "react-icons/fi";

import user from '../../assets/meme.png';
import api from "../../services/api";

interface Carros {
  id: number;
  modelo: string;
}

function GetCars() {


  const [carros, setCarros] = useState<Carros[]>([]);

  useEffect(() => {
    api
      .get('carros/1')
      .then((response) => setCarros(response.data));
  }, []);

  return carros;
}

function navbar() {

  const carros = GetCars()

  let listaVazia = true;

  if (carros.length > 0) {
    listaVazia = false
  }

  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">Meu Possante</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./home">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/services">Serviços</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownVeiculos" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Veículos cadastrados
              </a>
              <ul className="dropdown-menu dropdown-sytle" aria-labelledby="navbarDropdownVeiculos">
                {listaVazia
                  ?
                  <span className="dropdown-item">Não há carros cadastrados!</span>
                  :
                  carros.map(carro => {
                    return (
                      <li key={carro.id}><a className="dropdown-item" href="#" >{carro.modelo}</a></li>
                    );
                  })}
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="#">
                  <IconContext.Provider value={{ className: 'icons' }}>
                    <FiPlus />
                  </IconContext.Provider>
                  Adicionar veículos</a></li>
              </ul>
            </li>
          </ul>
          <div className="d-flex">

            <div className="collapse navbar-collapse" id="navbarDropdownConfiguracoes">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#" id="navbarDropdownMenuLinkConfiguracao" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <IconContext.Provider value={{ className: 'icons' }}>
                      <FiSettings />
                    </IconContext.Provider>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-sytle" aria-labelledby="navbarDropdownMenuLinkConfiguracao">
                    <li><a className="dropdown-item" href="#">Configurações</a></li>
                    <li><a className="dropdown-item" href="#">Conteúdo legal e políticas</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarDropdownAjuda">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#" id="navbarDropdownMenuLinkAjuda" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <IconContext.Provider value={{ className: 'icons' }}>
                      <FiHelpCircle />
                    </IconContext.Provider>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-sytle" aria-labelledby="navbarDropdownMenuLinkAjuda">
                    <li><span className="dropdown-header">Ajuda</span></li>
                    <li><a className="dropdown-item" href="#">Entre em contato</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item no-hover">Versão 1.0</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarDropdownAvatar">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#" id="navbarDropdownMenuLinkAvatar" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img className="avatar" src={user} alt="Avatar do usuário" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-sytle" aria-labelledby="navbarDropdownMenuLinkAvatar">
                    <li><a className="dropdown-item" href="/profile">Opções do perfil</a></li>
                    <li><a className="dropdown-item" href="./">Sair</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
