import imgChart from '../../assets/chart-img.webp';
import { ChartData } from './ChartData';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export const Chart = () => {
  const data = [
    {
      label: "UF",
      value: "uf",
      desc: <ChartData url="https://mindicador.cl/api/uf"/>,
    },
    {
      label: "DÓLAR",
      value: "dolar",
      desc: <ChartData url="https://mindicador.cl/api/dolar"/>,
    },
 
    {
      label: "EURO",
      value: "euro",
      desc: <ChartData url="https://mindicador.cl/api/euro"/>,
    },
 
    {
      label: "IPC",
      value: "ipc",
      desc: <ChartData url="https://mindicador.cl/api/ipc"/>,
    },
 
    {
      label: "UTM",
      value: "utm",
      desc: <ChartData url="https://mindicador.cl/api/utm"/>,
    },
  ];

  return (
    <div className="flex flex-row bg-red-200 p-0 m-0">
        <div className="w-1/3 bg-blue-200">
            <img 
            src={imgChart} 
            alt="decoration image charts"             
            />
        </div>
        <div className="w-2/3 text-center bg-green-300">
        <Tabs id="custom-animation" value="uf">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>      
        </div>
    </div>
  )
}