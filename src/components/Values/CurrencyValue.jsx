import PropTypes from 'prop-types';

const CurrencyValue = ({title='Titulo de la divisa', value='$0', load=true}) => {
  return (
    <div className='w-48 rounded-xl text-center bg-red-400 py-10 px-2 flex flex-col'>
        <h3>{title}</h3>
        <hr />
        {
          load ? (
            <div className="w-8 h-8 border-t-2 border-blue-500 border-solid rounded-full animate-spin mx-auto my-4"></div>
            ):(
              <h4>{value}</h4>
          )
        }
    </div>
  )
}
CurrencyValue.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  load: PropTypes.bool,
}

export default CurrencyValue