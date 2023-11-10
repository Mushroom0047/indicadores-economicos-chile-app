import { Input } from "@material-tailwind/react"


export const ConverterInput = () => {
    return (
        <div className="container flex flex-col h-full items-center justify-center gap-5">
            <div className="flex justify-center gap-5 mt-5">
                <div className="w-1/2">
                    <Input value={100} label="UF"/>
                </div>
                <div className="w-1/2">
                    <Input value={200} label="DÓLAR"/>
                </div>
            </div>
            <div className="">
                <h2>Hola mundo</h2>
            </div>

        </div>

    )
}
