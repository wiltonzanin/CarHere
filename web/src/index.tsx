import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./home/home";
import Registrate from "./registrate/registrate";
import Services from "./services/services";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/home" component={Home} />
      <Route path="/registrate" component={Registrate} />
      <Route path="/services" component={Services} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
// registerServiceWorker();
