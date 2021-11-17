import impreza from "../../assets/impreza.jpg";

import { IconContext } from "react-icons";
import { FiCheckCircle } from "react-icons/fi";


export function CardVehicle() {
  return (
    <div className="whiteCardCar">
      <img className="carImage" src={impreza} alt="Imagem do veículo" />
      <div className="carCardInfo">
        <h5 className="carName">Subaru Impreza</h5>
        <div>
          <IconContext.Provider value={{ className: 'iconsGreen' }}>
            <FiCheckCircle />
          </IconContext.Provider>
          <span className="textGreen"> Manutenção em dia!</span></div>
      </div>
    </div>
  )
}