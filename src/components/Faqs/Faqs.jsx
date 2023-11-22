import { FaqsAccordion } from "./FaqsAccordion"
import RocketGirl from "../../assets/rocket-girl.webp"
import bigCircle from '../../assets/Ellipse 5.svg';

export const Faqs = () => {

  return (
    <section className="w-full mx-auto text-center mb-40 lg:px-32 lg:mb-80">
      <img
        src={bigCircle}
        alt="bg image decoration"
        className="absolute right-0 -z-10 opacity-20 md:opacity-100"
        width={500}
      />
      <h2 className="text-center text-5xl">PREGUNTAS FRECUENTES</h2>
      <div className="flex flex-wrap">
        <div className="w-full mt-28 bg-white bg-opacity-80 px-8 md:w-2/3 md:mt-16 lg:w-1/2">
          <FaqsAccordion />
        </div>
        <div className="w-full md:w-1/3 lg:w-1/2">
          <img
            src={RocketGirl}
            alt="decoration image rocket girl"
            className="md:absolute md:-right-44 lg:right-0"
            />
        </div>
      </div>
    </section>
  )
}
