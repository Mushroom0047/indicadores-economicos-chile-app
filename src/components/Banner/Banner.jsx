import { Button } from "@material-tailwind/react";
import rocketImage from "../../assets/Rocket-image.webp";
import bgImageRight from '../../assets/Ellipse 1.svg'
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <section id="banner" className="container flex flex-wrap mx-auto mb-20">
      <div className="px-3 mt-14 w-full md:w-1/2 lg:w-1/2">
        <Fade >
          <h1 className="text-5xl text-center lg:text-left">Indicadores <br /><span className="roboto"><span className="g-color">Económicos</span> <br /> <span className="g-color">Chile</span></span></h1>
        </Fade>
        <p className="my-5 text-center lg:text-left">
          ¿Quieres estar siempre al tanto de los últimos valores económicos
          clave en Chile? ¡Nuestra extensión para Chrome te tiene cubierto!
        </p>
        <div className="w-full flex justify-center lg:justify-start">                    
            <a
              href="https://chromewebstore.google.com/detail/indicadores-econ%C3%B3micos-ch/ammnbjfbmidllmfjicddmdilkioodpld"
              target="blank"
            >
              <Button className="flex items-center gap-3 bg-global-blue">
              <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="30px" height="30px"><path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 32.987976 4 39.925645 8.44503 43.476562 15 L 25 15 A 1.0001 1.0001 0 0 0 24.886719 15.005859 C 19.738868 15.064094 15.511666 19.035373 15.046875 24.078125 L 8.0351562 12.650391 C 11.851593 7.4136918 18.014806 4 25 4 z M 6.8242188 14.501953 L 16.476562 30.230469 A 1.0001 1.0001 0 0 0 16.591797 30.388672 A 1.0001 1.0001 0 0 0 16.59375 30.392578 C 18.3752 33.158533 21.474925 35 25 35 C 26.413063 35 27.756327 34.701734 28.976562 34.169922 L 22.320312 45.824219 C 11.979967 44.509804 4 35.701108 4 25 C 4 21.169738 5.0375742 17.591533 6.8242188 14.501953 z M 25 17 C 29.430123 17 33 20.569877 33 25 C 33 26.42117 32.629678 27.751591 31.984375 28.90625 A 1.0001 1.0001 0 0 0 31.982422 28.908203 A 1.0001 1.0001 0 0 0 31.947266 28.966797 C 30.57172 31.37734 27.983486 33 25 33 C 20.569877 33 17 29.430123 17 25 C 17 20.569877 20.569877 17 25 17 z M 30.972656 17 L 44.421875 17 C 45.43679 19.465341 46 22.165771 46 25 C 46 36.609824 36.609824 46 25 46 C 24.842174 46 24.686285 45.991734 24.529297 45.988281 L 33.683594 29.958984 A 1.0001 1.0001 0 0 0 33.742188 29.841797 C 34.541266 28.405674 35 26.755664 35 25 C 35 21.728612 33.411062 18.825934 30.972656 17 z"/></svg>
                AGREGAR A CHROME
              </Button>
            </a>
        </div>
      </div>
      <div className="hidden w-full md:flex lg:w-1/2">
        <img
          src={bgImageRight}
          alt="bg image decoration"
          className="hidden md:block md:absolute md:-right-44 md:-z-10 md:top-0 lg:-right-0"
        />
        <img
          src={rocketImage}
          alt="rocket image decoration"
          className="absolute top-0 -z-10 -right-36 opacity-50 blur md:blur-none overflow-x-hidden md:-right-36 md:opacity-100 lg:relative lg:top-10"
          id="rocket"
        />
      </div>
    </section>
  )
}

export default Banner