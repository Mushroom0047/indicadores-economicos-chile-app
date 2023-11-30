import { Link } from "react-router-dom";
import logoHV from "../../assets/logo-hector-valdes.webp";

 const Footer = () => {
    return (
        <footer className="text-center flex-col justify-center ">
            <div className="w-full">
                <div className="mx-auto w-80 h-40 bg-teal-300 flex justify-center items-center pt-6 rounded-t-full">
                    <a href="#">
                        <img
                            src={logoHV}
                            alt="Logo hector valdes frontend developer"
                            className="hover:-translate-y-2 transition-transform"
                        />
                    </a>
                </div>
            </div>
            <div className="w-full flex justify-center gap-5 bg-teal-300 z-10 py-4">
                <a 
                href="https://github.com/Mushroom0047"
                target="blank"
                >
                    <img 
                    width="40" 
                    height="40" 
                    src="https://img.icons8.com/ios/50/ffffff/github--v1.png"
                    alt="github--v1" 
                    className="hover:-translate-y-1 transition-transform"
                    />
                </a>
                <a 
                href="https://www.linkedin.com/in/hector-valdes-m/"
                target="blank"
                >
                    <img 
                    width="40" 
                    height="40" 
                    src="https://img.icons8.com/ios/50/ffffff/linkedin.png" 
                    alt="linkedin" 
                    className="hover:-translate-y-1 transition-transform"
                    />
                </a>
                <a 
                href="https://hectorvaldesm.com/"
                target="blank"
                >
                    <img 
                    width="40" 
                    height="40" 
                    src="https://img.icons8.com/ios/50/ffffff/globe--v1.png" 
                    alt="globe--v1" 
                    className="hover:-translate-y-1 transition-transform"
                    />
                </a>
            </div>
            <div className="w-full bg-section py-4">
                <h3 className="text-white text-sm">
                    <a href="https://hectorvaldesm.com/" target="blank" className="text-white hover:text-teal-300 transition-colors">Diseño y Desarrollo </a>
                    por Mushroom 🍄|<Link to="/privacy-policy" className="text-white hover:text-teal-300 transition-colors"> Política de privacidad</Link> |  Ilustraciones por
                    <a href="https://dribbble.com/alzea" target="blank" className="text-white hover:text-teal-300 transition-colors"> Alzea</a>
                </h3>
            </div>
        </footer>
    )
}
export default Footer;