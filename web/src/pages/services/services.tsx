import React from "react";
import "./services.css";
import Navbar from "../../components/navbar/navbar";
import Select from '@material-ui/core/Select';
import { FormControl } from "@material-ui/core";
import Calendar from "react-calendar";

function Services() {
  return (
    <main>
      <Navbar />
      <div className="sideBySide">
        <div className="firstColumn">
          <h1 className="title">De qual veículo deseja ver os serviços?</h1>
          <FormControl id="formControl" className="options">
            <Select
              className="dropDown"
              native
              inputProps={{
                name: "vehicle",
                id: "age-native-simple",
              }}
            >
              <option className="options" id="options" value={"Monza"}>
                Todos
              </option>
              <option className="options" id="options" value={"Monza"}>
                Monza
              </option>
              <option className="options" id="options" value={"Impreza"}>
                Impreza
              </option>
            </Select>
          </FormControl>
          <h1 className="title" id="titleServices">Serviços já cadastrados</h1>
        </div>
        <div className="secondColumn">
          <h1 className="title" id="titleCalendar">Selecione a data que deseja visualizar </h1>
          <div className="calendarSize">
          <Calendar className="serviceCalendar" />
          </div>
        </div>
      </div>
    </main>
  );
}
export default Services;
