import imgChart from '../../assets/chart-img.webp';
import { ChartData } from './ChartData';
import './chart.css';

export const Chart = () => {
  return (
    <div className="flex flex-row bg-red-200 p-0 m-0">
        <div className="w-1/3 bg-blue-200">
            <img 
            src={imgChart} 
            alt="decoration image charts"             
            />
        </div>
        <div className="w-2/3 text-center bg-green-300">
          <div className='w-full bg-slate-500 flex row-auto justify-between'>
            <button className='btn-grad'>UF</button>
            <button className='btn-grad'>DÓLAR</button>
            <button className='btn-grad'>EURO</button>
            <button className='btn-grad'>IPC</button>
            <button className='btn-grad'>UTM</button>
          </div>       
              <ChartData url="https://mindicador.cl/api/uf"/>
              <ChartData url="https://mindicador.cl/api/dolar"/>
              <ChartData url="https://mindicador.cl/api/euro"/>
              <ChartData url="https://mindicador.cl/api/ipc"/>
              <ChartData url="https://mindicador.cl/api/utm"/>
        </div>
    </div>
  )
}
