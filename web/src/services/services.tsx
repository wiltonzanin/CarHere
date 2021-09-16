import React from "react";
import "./services.css";
import Navbar from "../components/navbar/navbar";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { FormControl } from "@material-ui/core";

function Services() {
  return (
    <main>
      <Navbar />
        <div className="firstColumn">
          <h1 className="title">De qual veículo deseja ver os serviços?</h1>
          <FormControl id="formControl">
        <Select id="dropDown"
          native
          /* value={state.age}
          onChange={handleChange} 
          inputProps={{
            name: 'vehicle',
            id: 'age-native-simple',
          }}*/
        >
          <option id="options" aria-label="None" value="" />
          <option id="options" value={"Monza"}>Monza</option>
          <option id="options" value={"Impreza"}>Impreza</option>
        </Select>
      </FormControl>
      </div>
    </main>
  );
}
export default Services;
