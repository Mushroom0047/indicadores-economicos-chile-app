import { Button } from "@material-tailwind/react";
import rocketImage from "../../assets/Rocket-image.webp";
import bgImageRight from '../../assets/Ellipse 1.svg'
import bgCircle from '../../assets/Ellipse 2.svg'
import { Donation } from "../Donation/Donation";

const Banner = () => {
  return (
    <section className="container flex flex-wrap mx-auto mb-52 lg:mb-24">
      <div className="px-3 order-2 mt-14 w-full sm:w-1/2 sm:order-1">
        <h1 className="text-5xl">Indicadores <br/><span className="g-color">Económicos</span> <br /> <span className="g-color">Chile</span></h1>
        <p className="my-5 text-left rounded bg-white p-2">¿Quieres estar siempre al tanto de los últimos valores económicos
          clave en Chile? ¡Nuestra extensión para Chrome te tiene cubierto!</p>
        <div className="w-full flex justify-between items-center gap-0">
          <img
            src={bgCircle}
            alt="bg image decoration circle left"
            className="absolute left-0 -z-20 opacity-50 lg:opacity-100"            
          />
          <div className="w-1/2">
            <Button color="teal">AGREGAR A CHROME</Button>
          </div>
          <div className="w-1/2">
            <Donation />
          </div>
        </div>
      </div>
      <div className="order-1 w-full sm:w-1/2 sm:oreder-2">
        <img
          src={bgImageRight}
          alt="bg image decoration"
          className="hidden md:opacity-50 md:block md:absolute md:right-0 md:-z-10 md:top-0 lg:opacity-100"         
        />
        <img
          src={rocketImage}
          alt="rocket image decoration"
          className="absolute top-0 -z-10 -right-36 opacity-30 overflow-x-hidden md:-right-36 md:opacity-100 lg:relative lg:-top-10"
        />
      </div>
    </section>
  )
}

export default Banner