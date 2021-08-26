import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="main">
      <div className="row">
        <div className="col">
          <div className="card">
            <h1>Login</h1>
            <h2>Email</h2>
            <input type="Gmail" name="Email" />
            <h2>Senha</h2>
            <input id="senha" type="password" name="Senha" />
            <div className="divisoria"></div>
            <Link to="./home">
              <div className="botao entrar">Entrar</div>
            </Link>

            <div>
              <div className="row">
                <h3>Não tem uma conta?</h3>
                <Link to="./cadastro">
                  <div className="cadastrar">Cadastre-se</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
