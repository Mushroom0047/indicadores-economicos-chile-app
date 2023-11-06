import { Splide, SplideSlide } from '@splidejs/react-splide';
import './benefits.css';

import cap01 from '../../assets/capturas extension/capturas extension indicadores economicos chile 600x600.webp';
import cap02 from '../../assets/capturas extension/capturas extension indicadores economicos chile 600x600 (2).webp';
import cap03 from '../../assets/capturas extension/capturas extension indicadores economicos chile 600x600 (3).webp';

const Benefits = () => {
    const altCaptures = 'capturas extension indicadores economicos chile 600x600';
    return (
        <div className="container flex flex-wrap mx-auto">
            <div className="w-1/2">
                <Splide aria-label="My Favorite Images"
                options={ {
                    rewind: true,
                    width : 600,
                    gap   : '1rem',
                  } }>
                    <SplideSlide>
                        <img src={cap01} alt={altCaptures} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={cap02} alt={altCaptures} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={cap03} alt={altCaptures} />
                    </SplideSlide>
                </Splide>
            </div>
            <div className="w-1/2 px-16 flex flex-col justify-around bg-red-400">
                <h2 className="text-center">BENEFICIOS</h2>
                <div className="flex flex-row justify-around w-100 bg-cyan-300">
                    <i className="gg-time"></i>
                    <p>Beneficios</p>
                </div>
                <div className="flex flex-row justify-around w-100">
                    <i className="gg-browser "></i>
                    <p>Beneficios</p>
                </div>
                <div className="flex flex-row justify-around w-100">
                    <i className="gg-sync"></i>
                    <p>Beneficios</p>
                </div>
            </div>
        </div>
    )
}

export default Benefits