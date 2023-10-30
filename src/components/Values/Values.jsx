import CurrencyValue from "./CurrencyValue";

const Values = () => {
  return (
    <div className="container mx-auto text-center bg-green-300">
        <h2>VALORES HOY</h2>
        <p>fecha hoy</p>
        <div className="w-full flex flex-row gap-12 justify-center bg-slate-400">
          <CurrencyValue />
          <CurrencyValue />
          <CurrencyValue />
          <CurrencyValue />
          <CurrencyValue />
        </div>
    </div>
  )
}

export default Values