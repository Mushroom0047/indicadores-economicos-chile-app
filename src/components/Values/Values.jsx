import { useEffect, useState } from "react";
import CurrencyValue from "./CurrencyValue";
import moment from 'moment';

const Values = () => {
  const [data, setdata] = useState({});
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState('');

  
  useEffect(() => {
    fetch('https://mindicador.cl/api')
    .then((response)=>response.json())
    .then((data)=>{
      setdata(data);
      setLoading(false);
      setDate(moment(data.fecha).format('DD/MM/YYYY'));
    })
    .catch((error) => {
      console.error('Error al obtener los datos', error);
      setLoading(false);
    });
  }, []);
  
  const {uf, dolar, euro, ipc, utm} = data;

  //!Format to CLP
  function formatToCLP(number) {
    const formattedNumber = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
    }).format(number);
  
    return formattedNumber;
  }
  //!Formatted date
  
  

  return (
    <div className="container mx-auto text-center bg-green-300">
        <h2>VALORES HOY</h2>
        <p>{date}</p>
        <div className="w-full flex flex-row gap-12 justify-center bg-slate-400">
          <CurrencyValue load={loading} title='Uf' value={formatToCLP(uf?.valor)}/>
          <CurrencyValue load={loading} title='DÓLAR' value={formatToCLP(dolar?.valor)}/>
          <CurrencyValue load={loading} title='EURO' value={formatToCLP(euro?.valor)}/>
          <CurrencyValue load={loading} title='IPC' value= {ipc.valor.toString()+'%'}/>
          <CurrencyValue load={loading} title='UTM' value={formatToCLP(utm?.valor)}/>
        </div>
    </div>
  )
}

export default Values