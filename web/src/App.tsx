import React from "react";
import logo from "./assets/meme.png";
import "./App.css";

function App() {
  return (
    
    <div className="App-header">
      <div className="Column-Horizontal-Top">
        <div className="FrameCarros">
          <h1 className="Titulo">Carros</h1>
          <div className="Column-Horizontal">
            <div className="CardCarro"> </div>
            <div className="Column-Horizontal">
              <div className="CardCarro"> </div>
            </div>
          </div>
        </div>
        <div className="Column-Horizontal-Left">
          <div className="FrameToDo">
            <h1 className="Titulo">Carros</h1>
            <div className="Column-Horizontal">
              <div className="CardToDo"> </div>
              <div className="Column-Horizontal">
                <div className="CardToDo"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Divisor"></div>
      <div className="Column-Horizontal-Top">
        <div className="FrameServicos">
          <h1 className="Titulo">Carros</h1>
          <div className="Column-Horizontal">
            <div className="CardServicos"> </div>
            <div className="Column-Horizontal">
              <div className="CardServicos"> </div>
            </div>
          </div>
        </div>
        <div className="Column-Horizontal-Left">
          <div className="FrameToDo">
            <h1 className="Titulo">Carros</h1>
            <div className="Column-Horizontal">
              <div className="CardCarro"> </div>
              <div className="Column-Horizontal">
                <div className="CardCarro"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
