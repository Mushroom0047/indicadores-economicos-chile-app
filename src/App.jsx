import Banner from "./components/Banner/Banner"
import Benefits from "./components/Benefits/Benefits"
import { Chart } from "./components/Charts/Chart"
import { Converter } from "./components/Converter/Converter"
import { Faqs } from "./components/Faqs/Faqs"
import { Footer } from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Values from "./components/Values/Values"

function App() {

  return (
    <>
    <Header />
    <Banner />
    <Benefits />
    <Values />
    <Chart />
    <Converter />
    <Faqs />
    <Footer />
    </>
  )
}

export default App
