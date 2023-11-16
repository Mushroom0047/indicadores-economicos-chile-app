import { Input } from "@material-tailwind/react"
import PropTypes from "prop-types";
import { useState } from "react";


export const ConverterInput = ({data}) => {
    function formatNumberToCLP(number) {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(number);
      }
    const getValue = data ? data.valor : '0';
    const valueConverted = formatNumberToCLP(getValue);

    const [clpValue, setClpValue] = useState( data?.valor);
    const [currencyValue, setCurrencyValue] = useState(1);

    const handleClpValue = (e) => {
        const newValue = e.target.value == ''? 0: parseFloat(e.target.value); 
        const clpValue = (newValue / getValue).toFixed(2);
        setClpValue(newValue);
        setCurrencyValue(clpValue);
    }
    const handleCurrencyValue = (e) => {
        const newValue = e.target.value == ''? 0: parseFloat(e.target.value); 
        const currencyValue = (newValue * getValue).toFixed(2);
        setClpValue(currencyValue);
        setCurrencyValue(newValue);
    }

    return (
        <div className="flex flex-col h-full items-center justify-center gap-5">
            <div className="w-full flex flex-col justify-center gap-5 mt-5 px-8">
                <div className="w-full">
                    <Input                        
                        value={clpValue}
                        label='clp'
                        color="white"  
                        className="text-lg"
                        onChange={handleClpValue}                               
                    />
                </div>
                <div className="w-full">
                    <Input
                        value={currencyValue}
                        label={data?.nombre}
                        color="white"
                        className="text-lg"     
                        onChange={handleCurrencyValue}   
                    />
                </div>
            </div>
            <div className="">
                <h3 className="text-white text-md text-center">1 {data?.nombre} = {valueConverted}</h3>
            </div>

        </div>

    )
}
// Propiedades de validación
ConverterInput.propTypes = {
    data: PropTypes.shape({
      codigo: PropTypes.string.isRequired,
      valor: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
    }).isRequired,
  };