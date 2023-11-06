import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { useFetch } from '../../useFetch';
import moment from 'moment';
import { useEffect, useState } from 'react';
import {PropTypes} from 'prop-types';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const ChartData = ({url}) => {
  const { data, loading } = useFetch(url);
  
  const [dates, setDates] = useState([]);
  const [values, setValues] = useState([]);
  const [name, setName] = useState('');
  
  useEffect(() => {
    //*Get the formated dates
    const getDates = data.serie.map((el)=>moment(el.fecha).format('DD-MM-YY')).reverse();
    setDates(getDates);

    //*Get the values
    const getValues = data.serie.map((e)=>e.valor).reverse();
    setValues(getValues);

    //*Get the name
    const getName = data.nombre;
    setName(getName);
  }, []);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: name,
        data: values,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  return (
    loading ? (
      <div className="w-8 h-8 border-t-2 border-blue-500 border-solid rounded-full animate-spin mx-auto my-4"></div>
    ) : (
        <Line data={chartData} />      
    )
  );
};
ChartData.propTypes = {
  url: PropTypes.string.isRequired, 
};