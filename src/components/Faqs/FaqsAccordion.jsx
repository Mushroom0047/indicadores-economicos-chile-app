import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


export const FaqsAccordion = () => {
  const faqsData = [
    {
      q: '¿Qué es la UF y por qué es importante en Chile?',
      a: 'La Unidad de Fomento (UF) es una medida de valor utilizada en Chile para ajustar ciertos montos, contratos y transacciones financieras. Se actualiza diariamente según la variación del índice de precios al consumidor (IPC). Su importancia radica en ser una unidad de cuenta que preserva el valor real de las transacciones en el tiempo.'
    },
    {
      q: '¿Cómo se determinan las tasas de cambio en la web?',
      a: 'Las tasas de cambio se actualizan automáticamente en tiempo real, utilizando fuentes confiables y actualizadas. Utilizamos datos de fuentes financieras en línea para garantizar la precisión de los valores del dólar, euro y otras divisas en relación con el peso chileno.'
    },
    {
      q: '¿Cómo ayudan los gráficos de divisas a entender la economía?',
      a: 'Cada gráfico muestra la evolución histórica de la divisa seleccionada en relación con el peso chileno. Estos gráficos son herramientas visuales poderosas que permiten identificar tendencias y patrones a lo largo del tiempo, proporcionando una perspectiva más completa de la situación económica.'
    },
    {
      q: '¿Cómo usar el convertidor de divisas y cuán preciso es?',
      a: 'El convertidor de divisas te permite realizar conversiones instantáneas entre distintas monedas, facilitando la comprensión de los valores en términos familiares. La precisión se mantiene alta, ya que las tasas de cambio se actualizan en tiempo real, asegurando que los valores reflejen con precisión la situación económica actual.'
    },
    {
      q: '¿Qué es el IPC y por qué es relevante en Chile?',
      a: 'El IPC es un indicador que mide la variación en el tiempo de los precios de una canasta de bienes y servicios representativa del consumo de los hogares. Es crucial porque proporciona información sobre la inflación, ayudando a entender cómo afectan los cambios de precios al poder adquisitivo de la población y permitiendo la toma de decisiones informadas en el ámbito económico.'
    }
  ]
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          {faqsData[0].q}
        </AccordionHeader>
        <AccordionBody>
          {faqsData[0].a}
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          {faqsData[1].q}
        </AccordionHeader>
        <AccordionBody>
          {faqsData[1].a}
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          {faqsData[2].q}
        </AccordionHeader>
        <AccordionBody>
          {faqsData[2].a}
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          {faqsData[3].q}
        </AccordionHeader>
        <AccordionBody>
          {faqsData[3].a}
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          {faqsData[4].q}
        </AccordionHeader>
        <AccordionBody>
          {faqsData[4].a}
        </AccordionBody>
      </Accordion>
    </>
  );
}