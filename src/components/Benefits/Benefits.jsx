import './benefits.css';
import { Carousel } from "@material-tailwind/react";

import cap01 from '../../assets/capturas extension/capturas extension indicadores economicos chile 600x600.webp';
import cap02 from '../../assets/capturas extension/capturas extension indicadores economicos chile 600x600 (2).webp';
import cap03 from '../../assets/capturas extension/capturas extension indicadores economicos chile 600x600 (3).webp';
import { Fade } from 'react-awesome-reveal';

const Benefits = () => {
    const altCaptures = 'capturas extension indicadores economicos chile 600x600';
    return (
        <section className="container flex flex-wrap mx-auto mb-24" id='beneficios'>
            <Fade className="w-full px-8 order-2 md:w-1/2 md:order-1 md:px-2 lg:w-1/3">
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
            <div className="w-full px-16 flex flex-col justify-around items-center gap-16 mb-16 order-1 md:w-1/2 md:order-2 lg:w-2/3">
                <Fade direction="up">
                    <h2 className="text-left text-3xl lg:text-5xl">BENEFICIOS DE LA EXTENSIÓN</h2>
                </Fade>
                <Fade cascade className='w-full'>
                    <div className="flex flex-row w-full items-center">
                        <div className="w-1/4 flex items-center">
                            <i className="gg-time"></i>
                        </div>
                        <div className="w-3/4">
                            <p className='text-2xl'>Rápida entrega de resultados</p>
                        </div>
                    </div>
                    <div className="flex flex-row w-full items-center">
                        <div className="w-1/4 flex items-center">
                            <i className="gg-browser"></i>
                        </div>
                        <div className="w-3/4">
                            <p className='text-2xl'>Interfaz fácil de usar</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-around items-center w-full">
                        <div className="w-1/4 flex items-center">
                            <i className="gg-sync"></i>
                        </div>
                        <div className="w-3/4">
                            <p className='text-2xl'>Conversor integrado</p>
                        </div>
                    </div>
                </Fade>

            </div>
        </section>
    )
}

export default Benefits