import { FaqsAccordion } from "./FaqsAccordion"
import RocketGirl from "../../assets/rocket-girl.webp"
import bigCircle from '../../assets/Ellipse 6.png';

export const Faqs = () => {

  return (
    <div className="w-full mx-auto text-center">
      <img
        src={bigCircle}
        alt="bg image decoration"
        className="absolute right-0 -z-10"
        width={500}
      />
      <h2 className="text-center text-5xl">PREGUNTAS FRECUENTES</h2>
      <div className="flex ps-28">
        <div className="w-1/2 mt-28">
          <FaqsAccordion />
        </div>
        <div className="w-1/2">
          <img
            src={RocketGirl}
            alt="decoration image rocket girl" 
            
            />
        </div>
      </div>
    </div>
  )
}
