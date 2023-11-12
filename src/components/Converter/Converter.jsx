import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { ConverterInput } from "./ConverterInput";
import circlesBg from '../../assets/Ellipse 4.svg';
import { useFetch } from "../../useFetch";

export const Converter = () => {
  const {data, loading, error} = useFetch('https://mindicador.cl/api');

  const dataValues = [
    {
      label: "UF",
      value: "uf",
      desc: <ConverterInput data={data?.uf}/>
    },
    {
      label: "DÓLAR",
      value: "dolar",
      desc: <ConverterInput data={data?.dolar}/>
    },

    {
      label: "EURO",
      value: "euro",
      desc: <ConverterInput data={data?.euro}/>
    },

    {
      label: "IPC",
      value: "ipc",
      desc: <ConverterInput data={data?.ipc}/>
    },

    {
      label: "UTM",
      value: "utm",
      desc: <ConverterInput data={data?.utm}/>
    },
  ];
  return (
    <div className="w-full flex justify-center">
      <div className="w-1/2 bg-teal-300 my-32 pb-8 rounded-r-lg px-12">
        <div className="text-center w-full pt-14">
          <h2 className="text-white text-5xl mb-12">CONVERTIDOR</h2>
        </div>
        <div className="flex justify-center">
          <Tabs value="uf" orientation="vertical" className=''>
            <TabsHeader className="w-32">
              {dataValues.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {dataValues.map(({ value, desc }) => (
                <TabPanel key={value} value={value} className="py-0">
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src={circlesBg}
          alt="bg image decoration"
          className="absolute right-0"
        />
      </div>
    </div>
  )
}