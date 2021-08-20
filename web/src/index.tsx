import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./home/home";
import Cadastro from "./cadastro/cadastro";
import Servicos from "./servicos/servicos";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/home" component={Home} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/servicos" component={Servicos} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
// registerServiceWorker();
