import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="main-Login">
      <div className="row-Login">
        <div className="col-Login">
          <div className="card-Login">
            <h1 className="Titulo-Login">Login</h1>
            <h2 className="Titulo-Senha-Email">Email</h2>
            <input type="Gmail" name="Email" />
            <h2 className="Titulo-Senha-Email">Senha</h2>
            <input id="senha" type="password" name="Senha" />
            <div className="divisoria"></div>
            <Link to="./home">
              <div className="Botao-Entrar">Entrar</div>
            </Link>
            <div>
              <div className="row-Login">
                <h3 className="Subtitulo-Conta">Não tem uma conta?</h3>
                <Link to="./registrate">
                  <div className="registrate">Cadastre-se</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
