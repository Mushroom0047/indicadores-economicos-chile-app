import rocketImage from "../../assets/Rocket-image.png";

const Banner = () => {
  return (
    <div className="container flex flex-wrap mx-auto">
      <div className="w-1/2">
        <h1>Indicadores <br/> Económicos <br/> Chile</h1>
        <p>¿Quieres estar siempre al tanto de los últimos valores económicos 
          clave en Chile? ¡Nuestra extensión para Chrome te tiene cubierto!</p>
        <button>AGREGAR A CHROME</button>
      </div>
      <div className="w-1/2">
        <img src={rocketImage} alt="rocket image decoration" />
      </div>
    </div>
  )
}

export default Banner