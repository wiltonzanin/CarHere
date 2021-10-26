import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="mainLogin">
          <div className="cardLogin">
            <h1 className="tituloLogin">Login</h1>
            <h2 className="tituloSenhaEmail">Email</h2>
            <input type="Gmail" name="Email" />
            <h2 className="tituloSenhaEmail">Senha</h2>
            <input id="senha" type="password" name="Senha" />
            <div className="divisoria"></div>
            <Link to="./home">
              <div className="botaoEntrar">Entrar</div>
            </Link>
            <div>
              <div className="rowLogin">
                <h3 className="subtituloConta">Não tem uma conta?</h3>
                <Link to="./registrate">
                  <div className="registrate">Cadastre-se</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
  );
}

export default App;
