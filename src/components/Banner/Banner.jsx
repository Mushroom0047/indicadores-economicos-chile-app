import { Button } from "@material-tailwind/react";
import rocketImage from "../../assets/Rocket-image.webp";
import bgImageRight from '../../assets/Ellipse 1.svg'
import bgCircle from '../../assets/Ellipse 2.svg'
import { Donation } from "../Donation/Donation";

const Banner = () => {
  return (
    <section className="container flex flex-wrap mx-auto mb-52">
      <div className="px-3 order-2 mt-14 w-full sm:w-1/2 md:w-1/2 sm:order-1">
        <h1 className="text-5xl">Indicadores <br/><span className="g-color">Económicos</span> <br /> <span className="g-color">Chile</span></h1>
        <p className="my-5 text-left bg-white p-2 ">¿Quieres estar siempre al tanto de los últimos valores económicos
          clave en Chile? ¡Nuestra extensión para Chrome te tiene cubierto!</p>
        <div className="w-full flex justify-between items-center gap-0">
          <img
            src={bgCircle}
            alt="bg image decoration circle left"
            className="absolute left-0 -z-20 opacity-50"            
          />
          <div className="w-1/2">
            <Button color="blue-gray">AGREGAR A CHROME</Button>
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
          className="hidden md:hidden lg:block lg:absolute lg:right-0 lg:-z-10 lg:top-0"         
        />
        <img
          src={rocketImage}
          alt="rocket image decoration"
          className="absolute top-0 -z-10 -right-36 opacity-30  overflow-x-hidden"
        />
      </div>
    </section>
  )
}

export default Banner