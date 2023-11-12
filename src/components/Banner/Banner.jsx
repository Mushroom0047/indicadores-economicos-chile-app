import { Button } from "@material-tailwind/react";
import rocketImage from "../../assets/Rocket-image.webp";
import bgImageRight from '../../assets/Ellipse 1.svg'
import bgCircle from '../../assets/Ellipse 2.svg'
import { Donation } from "../Donation/Donation";

const Banner = () => {
  return (
    <div className="container flex flex-wrap mx-auto mb-52">
      <div className="w-1/2 mt-14">
        <h1>Indicadores <br /> <span className="g-color">Económicos</span> <br /> <span className="g-color">Chile</span></h1>
        <p className="my-5">¿Quieres estar siempre al tanto de los últimos valores económicos
          clave en Chile? ¡Nuestra extensión para Chrome te tiene cubierto!</p>
        <div className="w-full flex justify-between items-center gap-0">
          <img
            src={bgCircle}
            alt="bg image decoration"
            className="absolute left-0"
          />
          <div className="w-1/2">
            <Button color="blue-gray">AGREGAR A CHROME</Button>
          </div>
          <div className="w-1/2">
            <Donation />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src={bgImageRight}
          alt="bg image decoration"
          className="absolute right-0 top-0 -z-10" 
          width={850}
        />
        <img
          src={rocketImage}
          alt="rocket image decoration"
        />
      </div>
    </div>
  )
}

export default Banner