import React from "react";
import Impreza from "../assets/Impreza.svg";
import "./home.css";
import Calendar from 'react-calendar';
/*import 'react-calendar/dist/Calendar.css';*/
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
        <h1 className="title">Serviços</h1>
        <div className="internalRow">
            <div className="whiteCardService"></div>
            <div className="whiteCardService"></div>
        </div>
        <div className="internalRow">
            <div className="whiteCardService"></div>
            <div className="whiteCardService"></div>
        </div>
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
            <Calendar/>
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
