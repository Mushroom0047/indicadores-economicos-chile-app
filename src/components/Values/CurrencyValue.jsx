
import PropTypes from 'prop-types';
const CurrencyValue = ({title='Titulo de la divisa', value='$0'}) => {
  return (
    <div className='w-48 rounded-xl text-center bg-red-400 py-10 px-2 flex flex-col'>
        <h3>{title}</h3>
        <hr />
        <h4>{value}</h4>
    </div>
  )
}
CurrencyValue.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
}

export default CurrencyValue