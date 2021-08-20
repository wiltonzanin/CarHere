import React from "react";
import "./login.css";
import { Route,Link, BrowserRouter } from "react-router-dom";

import Teste from "./teste";
import Home from "./home/home";
import Cadastro from "./cadastro/cadastro";



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
            <input id= "senha" type="password" name="Senha" />
            <div className="divisoria"></div>
            <div className="botao entrar">
            <Link to="/home">Entrar</Link>
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


function logado(){
  return false;
}
const Routes = () => {
  return(

    <BrowserRouter>

           <Route component = { Login }  path="/login" />
           <Route component = { Home }  path="/home"  />
           <Route component = { Cadastro }  path="/cadastro"  /> 
       </BrowserRouter>
   )
}

export default Routes;