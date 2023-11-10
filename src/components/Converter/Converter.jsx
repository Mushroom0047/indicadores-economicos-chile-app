import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { ConverterInput } from "./ConverterInput";

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
    <>
      <div className="container mx-auto">
          <h2 className="text-center">CONVERTIDOR</h2>
      </div>
      <div className="flex flex-row bg-red-200 p-0 m-0 h-96 items-center">
        <div className="w-2/3 bg-sky-100">
          <Tabs value="uf" orientation="vertical">
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
    </>
  )
}