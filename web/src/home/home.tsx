import React from "react";
import mococa from "../assets/mococa.svg";
import Impreza from "../assets/Impreza.svg";
import "./home.css";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/navbar";

function Home() {
  return (
    <main>
      <Navbar />
      <div className="firstRow">
      <div className="firstColumn">
        <div className="CarCard">
          <h1 className="title">Carros</h1>
          <div className="orderCardCar">
            <div className="whiteCardCar"></div>
            <div className="whiteCardCar"></div>
            <div className="whiteCardCar"></div>
            <div className="whiteCardCar"></div>
          </div>
        </div>
        <div className="serviceCard">
        <div className="orderCardService">
            <div className="whiteCardService"></div>
          </div>
        </div>
      </div>
      <div className="secondColumn">
      <div className="ToDoCard">
          <h1 className="title">To Do</h1>
          <div className="orderCardToDo">
            <div className="whiteCardToDo"></div>
            <div className="whiteCardToDo"></div>
            <div className="whiteCardToDo"></div>
            <div className="whiteCardToDo"></div>
          </div>
        </div>
        <div className="secondRow">

        <div className="calendarCard">
        <div className="orderCardCalendar">
            <div className="whiteCardCalendar"></div>
          </div>
        </div>
        <div className="monthServiceCard">
        <div className="orderCardMonthService">
            <div className="whiteCardMonthService"></div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </main>
  );
}


export default Home;
