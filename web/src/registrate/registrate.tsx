import React from "react";
import "./registrate.css";
import { Link } from "react-router-dom";

function Registrate() {
  return (
    <div className="main">
      <div className="row">
        <div className="col">
          <div className="card">
            <h1>Cadastro</h1>
            <h2>Nome</h2>
            <input type="Name" name="Name" />
            <h2>Email</h2>
            <input type="Gmail" name="Gmail" />
            <h2>Senha</h2>
            <input id="senha" type="password" name="Senha" />
            <h2>Confirmar senha</h2>
            <input id="senha" type="password" name="Senha" />
            <div className="divisoria"></div>
            <Link to="./App">
              <div className="botao cadastrar">Cadastre-se</div>
            </Link>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registrate;
