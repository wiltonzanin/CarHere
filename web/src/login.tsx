import React from "react";
import "./login.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Teste from "./teste";


function App() {
  return (
    <div className="main">
      <div className="row">
        <div className="col">
          <div className="card">
            <h1>Login</h1>
            <h2>Email</h2>
            <input type="Gmail" name="Email" />
            <h2>Senha</h2>
            <input id= "senha" type="password" name="Senha" />
            <div className="divisoria"></div>
            <div className="botao entrar">
            <a  >Entrar</a>
            </div>
            <div>
            <div className="row">
            <h3>Não tem uma conta?</h3>
            <a className="cadastrar">Cadastre-se</a>
            </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;