import imgChart from '../../assets/chart-img.webp';
import { ChartData } from './ChartData';
import halfCircle from '../../assets/Ellipse 3.png';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";

export const Chart = () => {
  const data = [
    {
      label: "UF",
      value: "uf",
      desc: <ChartData url="https://mindicador.cl/api/uf" />,
    },
    {
      label: "DÓLAR",
      value: "dolar",
      desc: <ChartData url="https://mindicador.cl/api/dolar" />,
    },

    {
      label: "EURO",
      value: "euro",
      desc: <ChartData url="https://mindicador.cl/api/euro" />,
    },

    {
      label: "IPC",
      value: "ipc",
      desc: <ChartData url="https://mindicador.cl/api/ipc" />,
    },

    {
      label: "UTM",
      value: "utm",
      desc: <ChartData url="https://mindicador.cl/api/utm" />,
    },
  ];

  return (
    <div className="flex flex-row">
        <img
          src={halfCircle}
          alt='bg image decoration'
          className='absolute left-0'
          width={300}
        />
      <div className="w-1/3 z-10">
        <img
          src={imgChart}
          alt="decoration image charts"
          className='relative left-1/2'
        />
      </div>
      <div className="w-2/3 text-center bg-section rounded-s-xl">
        <h2 className='text-center text-5xl py-2 text-white'>GRÁFICOS</h2>
        <Tabs id="custom-animation" value="uf" className='px-28'>
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
            className='bg-white mt-5'
          >
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
        <div className='mx- auto py-12'>
          <Button className='bg-teal-400'>AGREGAR A CHROME</Button>
        </div>
      </div>
    </div>
  )
}