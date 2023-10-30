import imgChart from '../../assets/chart-img.png';

export const Chart = () => {
  return (
    <div className="flex flex-row bg-red-200 p-0 m-0">
        <div className="w-1/3 bg-blue-200">
            <img 
            src={imgChart} 
            alt="decoration image charts" 
            className=''
            />
        </div>
        <div className="w-2/3 text-center bg-green-300">
            <h2>Gráficos</h2>
        </div>
    </div>
  )
}
