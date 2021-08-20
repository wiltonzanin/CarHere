import React from "react";
import "./cadastro.css";
import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div>
      isso é um cadastro
      <li>
        <Link to="/home">Home</Link>
      </li>
    </div>
  );
}

export default Cadastro;
