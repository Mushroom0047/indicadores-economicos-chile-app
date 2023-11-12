import { Input } from "@material-tailwind/react"


export const ConverterInput = () => {
    return (
        <div className="container flex flex-col h-full items-center justify-center gap-5">
            <div className="flex justify-center gap-5 mt-5">
                <div className="w-1/2">
                    <Input
                        value={100}
                        label="UF"
                        color="white"
                    />
                </div>
                <div className="w-1/2">
                    <Input
                        value={200}
                        label="DÓLAR"
                        color="white"
                    />
                </div>
            </div>
            <div className="">
                <h3 className="text-white text-xl">Hola mundo</h3>
            </div>

        </div>

    )
}
