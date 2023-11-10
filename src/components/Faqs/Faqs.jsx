import { FaqsAccordion } from "./FaqsAccordion"
import RocketGirl from "../../assets/rocket-girl.webp"

export const Faqs = () => {
  const items = [
    {
      question: 'Pregunta 1',
      answer: 'Respuesta 1',
    },
    {
      question: 'Pregunta 2',
      answer: 'Respuesta 2',
    },
    // Agrega más preguntas y respuestas según tus necesidades
  ];
  return (
    <div className="container mx-auto text-center">
        <h2>PREGUNTAS FRECUENTES</h2>
        <div className="container flex flex-row">
            <div className="w-1/2 bg-yellow-200">
                <FaqsAccordion items={items} />
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
