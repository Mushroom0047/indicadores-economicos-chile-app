import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { useFetch } from '../../useFetch';
import moment from 'moment';
import { Spinner } from "@material-tailwind/react";

ChartJS.register({ CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler });

export const ChartData = ({ url }) => {
  const { data, loading } = useFetch(url);

  const [dates, setDates] = useState([]);
  const [values, setValues] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    if (data && data.serie) {
      // Get the formatted dates
      const getDates = data.serie.map((el) => moment(el.fecha).format('DD-MM-YY')).reverse();
      setDates(getDates);

      // Get the values
      const getValues = data.serie.map((e) => e.valor).reverse();
      setValues(getValues);

      // Get the name
      const getName = data.nombre;
      setName(getName);
    }
  }, [data]);

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
      <Spinner color="indigo" />
    ) : (
      <Line data={chartData} />
    )
  );
};

ChartData.propTypes = {
  url: PropTypes.string.isRequired,
};
