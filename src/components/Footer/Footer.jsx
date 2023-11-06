import logoHV from "../../assets/logo-hector-valdes.webp";

export const Footer = () => {
  return (
    <div className="text-center flex-col justify-center mx-auto bg-red-100">
        <div className="mx-auto w-80 h-80 bg-emerald-200 rounded-full flex justify-center items-center">
            <img 
            src={logoHV} 
            alt="Logo hector valdes frontend developer" 
            className=""
            />
        </div>
        <div className="w-full">
            <p>Iconos de RRSS</p>
        </div>
        <div className="w-full bg-slate-800 py-4">
            <h3 className="text-white">
                <a href="https://hectorvaldesm.com/" target="blank" className="text-white hover:text-red-400 transition-colors">Diseño y Desarrollo </a> 
                por Mushroom 🍄 | Política de privacidad |  Ilustraciones por 
                <a href="https://dribbble.com/alzea" target="blank" className="text-white hover:text-red-400 transition-colors"> Alzea</a>
            </h3>
        </div>
    </div>
  )
}
