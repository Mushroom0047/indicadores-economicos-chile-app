import imgChart from '../../assets/chart-img.webp';
import { ChartData } from './ChartData';
import halfCircle from '../../assets/Ellipse 3.svg';
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
    <section className="flex flex-row">
        <img
          src={halfCircle}
          alt='bg image decoration'
          className='hidden md:block md:w-300 lg:relative lg:w-1/4'        
        />
      <div className="w-full z-10 hidden md:block md:w-1/4 lg:w-1/4">
        <img
          src={imgChart}
          alt="decoration image charts"
          className='absolute left-1/2 md:-left-20 lg:left-40'
        />
      </div>
      <div className="w-full text-center bg-section rounded-xl py-16 md:w-3/4 md:px-4 lg:w-3/4 lg:px-20 lg:rounded-none lg:py-4">
        <h2 className='text-center text-5xl py-5 text-white'>GRÁFICOS</h2>
        <Tabs id="custom-animation" value="uf" className='px-2 w-full '>
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
          <Button className='bg-teal-400 hover:bg-teal-600'>AGREGAR A CHROME</Button>
        </div>
      </div>
    </section>
  )
}