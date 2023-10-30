import rocketImage from "../../assets/Rocket-image.png";
import { Donation } from "../Donation/Donation";

const Banner = () => {
  return (
    <div className="container flex flex-wrap mx-auto">
      <div className="w-1/2">
        <h1>Indicadores <br/> Económicos <br/> Chile</h1>
        <p>¿Quieres estar siempre al tanto de los últimos valores económicos 
          clave en Chile? ¡Nuestra extensión para Chrome te tiene cubierto!</p>
          <div className="w-full flex">
            <div className="w-1/2">
              <button>AGREGAR A CHROME</button>
            </div>
            <div className="w-1/2">
              <Donation />
            </div>
          </div>
      </div>
      <div className="w-1/2">
        <img src={rocketImage} alt="rocket image decoration" />
      </div>
    </div>
  )
}

export default Banner