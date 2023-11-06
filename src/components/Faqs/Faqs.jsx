import { FaqsAccordion } from "./FaqsAccordion"
import RocketGirl from "../../assets/rocket-girl.webp"

export const Faqs = () => {
  return (
    <div className="container mx-auto text-center">
        <h2>PREGUNTAS FRECUENTES</h2>
        <div className="container flex flex-row">
            <div className="w-1/2 bg-yellow-200">
                <FaqsAccordion />
            </div>
            <div className="w-1/2 bg-orange-300">
            <img 
            src={RocketGirl} 
            alt="decoration image rocket girl" />
            </div>
        </div>
    </div>
  )
}
