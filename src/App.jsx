import "./App.css";
import Employees from "./components/EmployeesSection/EmployeeSectionMain/EmployeeMain";
import Footer from "./components/Footer/FooterMain/FooterMain";
import Header from "./components/Header/HeaderMain/Header";

import Hero from "./components/HeroSection/Hero";
import OfferMain from "./components/OfferSections/OfferMain/OfferMain";

const App = () =>{
  return (
    <>
      <Header />
      <Hero />
      <Employees />
      <OfferMain/>
      <Footer />
      </>
  );
}

export default App;
