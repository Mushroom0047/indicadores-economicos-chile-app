import { useFetch } from "../../useFetch";
import CurrencyValue from "./CurrencyValue";
import moment from 'moment';

const Values = () => {
  const { data, loading, error } = useFetch('https://mindicador.cl/api');
  const date = (data ? moment(data.fecha).format('DD/MM/YYYY') : '');
  // const uf = data ? data.uf : null;

  return (
    <div className="mx-auto text-center mb-24 px-28">
      <h2 className="text-teal-300 text-5xl pb-5">VALORES HOY</h2>
      <p>{date}</p>
      <div className="w-full flex flex-row flex-wrap gap-12 justify-center pt-7">
        {
          data && (
            <>
              <CurrencyValue load={loading} title='UF' data={data.uf} error={error} />
              <CurrencyValue load={loading} title='DÓLAR' data={data.dolar} error={error} />
              <CurrencyValue load={loading} title='EURO' data={data.euro} error={error} />
              <CurrencyValue load={loading} title='IPC' data={data.ipc} error={error} />
              <CurrencyValue load={loading} title='UTM' data={data.utm} error={error} />
            </>
          )
        }
      </div>
    </div>
  )
}

export default Values