import { Input } from "@material-tailwind/react"
import PropTypes from "prop-types";


export const ConverterInput = ({data}) => {
    function formatNumberToCLP(number) {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(number);
      }
    const valueConverted = (data?.codigo == 'ipc')? `${data?.valor} %` : formatNumberToCLP(data?.valor);

    return (
        <div className="container flex flex-col h-full items-center justify-center gap-5">
            <div className="flex justify-center gap-5 mt-5">
                <div className="w-1/2">
                    <Input
                        value={data?.valor}
                        label='clp'
                        color="white"
                    />
                </div>
                <div className="w-1/2">
                    <Input
                        value={1}
                        label={data?.nombre}
                        color="white"
                    />
                </div>
            </div>
            <div className="">
                <h3 className="text-white text-xl">1 {data?.nombre} = {valueConverted}</h3>
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