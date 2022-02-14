import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Registrate from "./pages/registrate/registrate";
import Services from "./pages/services/services";
import Profile from "./profile/profile";
import RecuperarSenha from "./recuperarSenha/recuperarSenha";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/home" component={Home} />
      <Route path="/registrate" component={Registrate} />
      <Route path="/services" component={Services} />
      <Route path="/profile" component={Profile} />
      <Route path="/recuperarSenha" component={RecuperarSenha}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
// registerServiceWorker();
