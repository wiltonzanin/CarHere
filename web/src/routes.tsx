import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./login";
import Cadastro from "./cadastro/cadastro";
import Navbar from "./components/navbar/navbar";
import Home from "./home/home";

function logado(){
  return false;
}
const Routes = () => {
  return(

    <BrowserRouter>
    {logado() ? <Navbar /> : <Login />}

           <Route component = { Login }  path="/login" exact/> 
           <Route component = { Home }  path="/home"  />
           <Route component = { Cadastro }  path="/cadastro"  /> 
       </BrowserRouter>
   )
}

export default Routes;