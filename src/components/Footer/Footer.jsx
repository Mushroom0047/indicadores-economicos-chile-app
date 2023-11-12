import logoHV from "../../assets/logo-hector-valdes.webp";

export const Footer = () => {
    return (
        <div className="text-center flex-col justify-center">
            <div className="w-full">
                <div className="mx-auto w-80 h-40 bg-teal-300 flex justify-center items-center pt-6 rounded-t-full">
                    <a href="#">
                        <img
                            src={logoHV}
                            alt="Logo hector valdes frontend developer"
                        />
                    </a>
                </div>
            </div>
            <div className="w-full flex justify-center gap-5 bg-teal-300 z-10 py-4">
                <a href="#">
                    <img width="40" height="40" src="https://img.icons8.com/ios/50/ffffff/github--v1.png" alt="github--v1" />
                </a>
                <a href="#">
                    <img width="40" height="40" src="https://img.icons8.com/ios/50/ffffff/linkedin.png" alt="linkedin" />
                </a>
                <a href="#">
                    <img width="40" height="40" src="https://img.icons8.com/ios/50/ffffff/globe--v1.png" alt="globe--v1" />
                </a>
            </div>
            <div className="w-full bg-section py-4">
                <h3 className="text-white">
                    <a href="https://hectorvaldesm.com/" target="blank" className="text-white hover:text-teal-300 transition-colors">Diseño y Desarrollo </a>
                    por Mushroom 🍄|<a href="#" className="text-white hover:text-teal-300 transition-colors"> Política de privacidad</a> |  Ilustraciones por
                    <a href="https://dribbble.com/alzea" target="blank" className="text-white hover:text-teal-300 transition-colors"> Alzea</a>
                </h3>
            </div>
        </div>
    )
}
