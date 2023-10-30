import './benefits.css';

const Benefits = () => {
  return (
    <div className="container flex flex-wrap mx-auto">
        <div className="w-1/2">
            <img src="https://dummyimage.com/500x500/f1f1f1/000.png" alt="" />
        </div>
        <div className="w-1/2 px-16 flex flex-col justify-around bg-red-400">
            <h2 className="text-center">BENEFICIOS</h2>
            <div className="flex flex-row justify-around w-100 bg-cyan-300">
                <i className="gg-time"></i>
                <p>Beneficios</p>
            </div>
            <div className="flex flex-row justify-around w-100">
                <i className="gg-browser "></i>
                <p>Beneficios</p>
            </div>
            <div className="flex flex-row justify-around w-100">
                <i className="gg-sync"></i>
                <p>Beneficios</p>
            </div>
        </div>
    </div>
  )
}

export default Benefits