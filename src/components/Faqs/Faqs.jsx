import { FaqsAccordion } from "./FaqsAccordion"
import RocketGirl from "../../assets/rocket-girl.webp"
import bigCircle from '../../assets/Ellipse 5.svg';

export const Faqs = () => {

  return (
    <div className="w-full mx-auto text-center">
      <img
        src={bigCircle}
        alt="bg image decoration"
        className="absolute right-0 -z-10 opacity-20"
        width={500}
      />
      <h2 className="text-center text-5xl">PREGUNTAS FRECUENTES</h2>
      <div className="flex flex-wrap">
        <div className="w-full mt-28 bg-white bg-opacity-80 px-8">
          <FaqsAccordion />
        </div>
        <div className="w-full">
          <img
            src={RocketGirl}
            alt="decoration image rocket girl" 
            
            />
        </div>
      </div>
    </div>
  )
}
