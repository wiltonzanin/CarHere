import React from "react";
import "./registrate.css";
import { Link } from "react-router-dom";

function Registrate() {
  return (
    <div className="mainCadastro">
          <div className="cardCadastro">
            <h1 className="tituloCadastro">Cadastre-se</h1>
            <h2 className="tituloSenhaEmail">Nome</h2>
            <input type="Name" name="Name" />
            <h2 className="tituloSenhaEmail">Email</h2>
            <input type="Gmail" name="Gmail" />
            <h2 className="tituloSenhaEmail">Senha</h2>
            <input id="senha" type="password" name="Senha" />
            <h2 className="tituloSenhaEmail">Confirmar senha</h2>
            <input id="senha" type="password" name="Senha" />
            <div className="divisoria"></div>
            <Link to="./">
              <div className="botaoCadastrar">Cadastre-se</div>
            </Link>
            <div>
            </div>
          </div>
        </div>
  );
}

export default Registrate;
