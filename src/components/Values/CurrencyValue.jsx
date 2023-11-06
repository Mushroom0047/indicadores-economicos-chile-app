import PropTypes from 'prop-types';

const CurrencyValue = ({title, data, load, error}) => {
let formattedNumber = null;
let { valor, codigo } = data;

    //!Format to CLP
    if (codigo != "ipc") {
      formattedNumber = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
      }).format(valor);
    } else {
      formattedNumber = (valor.toString() + " %");
    }

  return (
    <div className='w-48 rounded-xl text-center bg-red-400 py-10 px-2 flex flex-col'>
      {load && <div className="w-8 h-8 border-t-2 border-blue-500 border-solid rounded-full animate-spin mx-auto my-4"></div>}
      {error && <h2>Error al obtener datos</h2>}      
      {
        data && (
        <>
          <h3>{title}</h3>
          <hr />
          <h4>{formattedNumber}</h4>
          </> 
        )
      }
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