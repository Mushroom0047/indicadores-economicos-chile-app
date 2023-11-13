import './benefits.css';
import { Carousel } from "@material-tailwind/react";

import cap01 from '../../assets/capturas extension/capturas extension indicadores economicos chile 600x600.webp';
import cap02 from '../../assets/capturas extension/capturas extension indicadores economicos chile 600x600 (2).webp';
import cap03 from '../../assets/capturas extension/capturas extension indicadores economicos chile 600x600 (3).webp';

const Benefits = () => {
    const altCaptures = 'capturas extension indicadores economicos chile 600x600';
    return (
        <div className="container flex flex-wrap mx-auto mb-24">
            <div className="w-1/3">
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
            <div className="w-2/3 px-16 flex flex-col justify-around items-center">
                <h2 className="text-center text-5xl">BENEFICIOS</h2>
                <div className="flex flex-row justify-between w-2/3 items-center">
                    <div className="w-1/3">
                        <i className="gg-time"></i>
                    </div>
                    <div className="w-2/3">
                        <p className='text-2xl'>Rápida entrega de resultados</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between w-2/3">
                    <div className="w-1/3">
                        <i className="gg-browser "></i>
                    </div>
                    <div className="w-2/3">
                        <p className='text-2xl'>Interfaz fácil de usar</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-2/3">
                    <div className="w-1/3">
                        <i className="gg-sync"></i>
                    </div>
                    <div className="w-2/3 ">
                        <p className='text-2xl'>Conversor integrado</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits