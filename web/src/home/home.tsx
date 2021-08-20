import React from "react";
import mococa from "../assets/mococa.svg";
import Impreza from "../assets/Impreza.svg";
import "./home.css";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/navbar";

function Home() {
  return (
    <main>
<Navbar/>
      <div className="row">
        <div className="col car">
          <h1>Carros</h1>
          <div className="row">
            <section className="card car">
              <img src={mococa} alt="" />
            </section>
            <section className="card car">
              <img src={Impreza} alt="" />
            </section>
          </div>
        </div>
        <div className="col ToDo">
          <h1>To Do</h1>
          <div className="row">
            <section className="card Todo"></section>
            <section className="card Todo"></section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
