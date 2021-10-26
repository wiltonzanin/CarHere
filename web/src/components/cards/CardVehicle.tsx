import mococa from "../../assets/mococa.svg";


export function CardVehicle(){
  return(
    <div className="whiteCardCar">
              <div>
              <img className="carImage" src={mococa} alt="Imagem do veículo" />
              </div>
            </div>
  )
}