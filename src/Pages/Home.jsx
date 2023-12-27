import Banner from "../components/Banner/Banner"
import Benefits from "../components/Benefits/Benefits"
import Chart  from "../components/Charts/Chart"
import Converter  from "../components/Converter/Converter"
import Faqs  from "../components/Faqs/Faqs"
import Footer  from "../components/Footer/Footer"
import Values from "../components/Values/Values"

 const Home = () => {
  return (
    <>
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
export default Home;