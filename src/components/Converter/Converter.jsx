import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { ConverterInput } from "./ConverterInput";
import { useFetch } from "../../useFetch";

const Converter = () => {
  const { data, loading, error } = useFetch('https://mindicador.cl/api');

  const dataValues = [
    {
      label: "UF",
      value: "uf",
      desc: <ConverterInput data={data?.uf} />
    },
    {
      label: "DÓLAR",
      value: "dolar",
      desc: <ConverterInput data={data?.dolar} />
    },

    {
      label: "EURO",
      value: "euro",
      desc: <ConverterInput data={data?.euro} />
    },

    {
      label: "UTM",
      value: "utm",
      desc: <ConverterInput data={data?.utm} />
    },
  ];
  return (
    <div className="w-full flex flex-wrap justify-center" id="convertidor">
      <div className="w-full bg-teal-300 py-16 px-0 md:px-28">
        <div className="text-center w-full py-8">
          <h2 className="text-white text-5xl">CONVERTIDOR</h2>
        </div>
        <div className="flex justify-center">
          <Tabs value="uf" orientation="vertical" className='w-full lg:w-1/2'>
            <TabsHeader className="w-32">
              {dataValues.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className="">
              {dataValues.map(({ value, desc }) => (
                <TabPanel key={value} value={value} className="py-0">
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Converter;