import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './home/home';
import Cadastro from './cadastro/cadastro';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/home" component={Home}  />
            <Route path="/cadastro" component={Cadastro}  />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
// registerServiceWorker();