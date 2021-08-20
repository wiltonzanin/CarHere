import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="main">
      <div className="row">
        <div className="col">
          <div className="card">
            <h2>Login</h2>
            <h3>Email</h3>
            <input type="Gmail" name="Email" />
            <h3>Senha</h3>
            <input id= "senha" type="password" name="Senha" />
            <div className="divisoria"></div>
            <Link className="botao"to="/home">Entrar</Link>
            <div>
            <p>Não tem uma conta?</p>
            <Link className="cadastrar" to="/cadastro">Cadastre-se</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
