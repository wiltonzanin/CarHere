import React, { useState } from "react";
import Impreza from "../assets/Impreza.svg";
import "./home.css";
import Calendar from 'react-calendar';
/*import 'react-calendar/dist/Calendar.css';*/
import Navbar from "../../components/navbar/navbar";
import { CardVehicle } from "../../components/cards/CardVehicle";
import { CardService } from "../../components/cards/CardServices";
import { CardToDo } from "../../components/cards/CardToDo";

function Home() {
const [services] = useState([]);
const service = [5]
  return (
    <main>
      <Navbar />
      <div className="firstRow">
      <div className="firstColumn">
        <div className="CarCard">
          <h1 className="title">Carros</h1>
          <div className="orderCardCar">
            <CardVehicle/>
          </div>
        </div>
        <div className="serviceCard">
        <div className="orderCardService">
        <h1 className="title">Serviços</h1>
        <div className="internalRow">
          {services.map(service =>{
            return <CardService/>
          }
          )}
        </div>
        <div className="internalRow">
        <CardService/>
        <CardService/>
        </div>
          </div>
        </div>
      </div>
      <div className="secondColumn">
      <div className="ToDoCard">
          <h1 className="title">To Do</h1>
          <div className="orderCardToDo">
            <CardToDo/>
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
