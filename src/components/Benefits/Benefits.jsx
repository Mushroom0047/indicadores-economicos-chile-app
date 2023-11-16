import './benefits.css';
import { Carousel } from "@material-tailwind/react";

import cap01 from '../../assets/capturas extension/capturas extension indicadores economicos chile 600x600.webp';
import cap02 from '../../assets/capturas extension/capturas extension indicadores economicos chile 600x600 (2).webp';
import cap03 from '../../assets/capturas extension/capturas extension indicadores economicos chile 600x600 (3).webp';

const Benefits = () => {
    const altCaptures = 'capturas extension indicadores economicos chile 600x600';
    return (
        <section className="container flex flex-wrap mx-auto mb-24">
            <div className="w-full order-2">
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
            </div>
            <div className="w-full px-16 flex flex-col justify-around items-center gap-16 mb-16 order-1">
                <h2 className="text-center text-3xl">BENEFICIOS DE LA EXTENSIÓN</h2>
                <div className="flex flex-row justify-between w-full items-center">
                    <div className="w-1/4">
                        <i className="gg-time"></i>
                    </div>
                    <div className="w-3/4">
                        <p className='text-2xl'>Rápida entrega de resultados</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between w-full">
                    <div className="w-1/4">
                        <i className="gg-browser "></i>
                    </div>
                    <div className="w-3/4">
                        <p className='text-2xl'>Interfaz fácil de usar</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="w-1/4">
                        <i className="gg-sync"></i>
                    </div>
                    <div className="w-3/4">
                        <p className='text-2xl'>Conversor integrado</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits