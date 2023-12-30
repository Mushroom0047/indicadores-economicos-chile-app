import { Carousel } from "@material-tailwind/react";

import cap01 from '../../assets/capturas extension/capturas extension indicadores economicos chile 600x600.webp';
import cap02 from '../../assets/capturas extension/capturas extension indicadores economicos chile 600x600 (2).webp';
import cap03 from '../../assets/capturas extension/capturas extension indicadores economicos chile 600x600 (3).webp';
import icon01 from '../../assets/icons/cloud-download.webp';
import icon02 from '../../assets/icons/responsive.webp';
import icon03 from '../../assets/icons/recurring-cash.webp';

import { Fade } from 'react-awesome-reveal';

const Benefits = () => {
    const altCaptures = 'capturas extension indicadores economicos chile 600x600';
    return (
        <section className="flex flex-wrap mx-auto mb-24 md:px-9 md:pt-16 lg:container" id='beneficios'>
            <div className="w-full px-16 flex flex-col justify-around items-center gap-16 mb-16 order-1 md:w-1/3 md:order-2 lg:w-1/2">
                <Fade cascade className='w-full'>
                    <div className="flex flex-col items-center gap-8 w-full">                        
                        <img 
                            className='w-24'
                            alt='Icono animado beneficio indicadores económicos'
                            src={icon01}
                        />
                        <p className='text-2xl text-center'>Rápida entrega de resultados</p>
                    </div>
                    <div className="flex flex-col items-center gap-8 w-full">                        
                        <img 
                            className='w-24'
                            alt='Icono animado beneficio indicadores económicos'
                            src={icon02}
                        />
                        <p className='text-2xl text-center'>Interfaz fácil de usar</p>
                    </div>
                    <div className="flex flex-col items-center gap-8 w-full">                        
                        <img 
                            className='w-24'
                            alt='Icono animado beneficio indicadores económicos'
                            src={icon03}
                        />
                        <p className='text-2xl text-center'>Conversor integrado</p>
                    </div>
                </Fade>

            </div>
            <Fade className="w-full px-8 order-2 md:w-2/3 md:order-1 md:px-2 lg:w-1/2">
                <Carousel className="rounded-xl" loop>
                    <img
                        src={cap01}
                        alt={altCaptures}
                        className="h-full w-full object-cover"
                    />
                    <img
                        src={cap02}
                        alt={altCaptures}
                        className="h-full w-full object-cover"
                    />
                    <img
                        src={cap03}
                        alt={altCaptures}
                        className="h-full w-full object-cover"
                    />
                </Carousel>
            </Fade>
        </section>
    )
}

export default Benefits