import { Spinner } from '@material-tailwind/react';
import PropTypes from 'prop-types';

const CurrencyValue = ({ title, data, load, error }) => {
  let formattedNumber = null;

  //!Format to CLP
  if (data.codigo != "ipc") {
    formattedNumber = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
    }).format(data.valor);
  } else {
    formattedNumber = (data.valor.toString() + " %");
  }
  if(error){
    load = false;
  }

  return (
    <div className='w-52 h-52 rounded-xl text-center flex flex-col shadow-xl justify-center'>
      {load && <Spinner color="teal" className="h-6 w-6 mx-auto"/>}
      {error && <h3>Error al obtener datos</h3>}
      {!error && !load && data && (
        <>
          <h3 className='text-teal-300 text-xl pb-8'>{title}</h3>
          <hr />
          <h4 className='text-teal-300 text-4xl pt-8'>{formattedNumber}</h4>
        </>
      )}
    </div>
  )
}
CurrencyValue.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  load: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};


export default CurrencyValue