import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { ConverterInput } from "./ConverterInput";
import circlesBg from '../../assets/Ellipse 2.png';

export const Converter = () => {
  const data = [
    {
      label: "UF",
      value: "uf",
      desc: <ConverterInput />
    },
    {
      label: "DÓLAR",
      value: "dolar",
      desc: <ConverterInput />
    },

    {
      label: "EURO",
      value: "euro",
      desc: <ConverterInput />
    },

    {
      label: "IPC",
      value: "ipc",
      desc: <ConverterInput />
    },

    {
      label: "UTM",
      value: "utm",
      desc: <ConverterInput />
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
              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {data.map(({ value, desc }) => (
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