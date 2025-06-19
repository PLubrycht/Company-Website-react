import "./App.css";
import Employees from './components/EmployeesSection/EmployeeSectionMain/EmployeeMain';
import Footer from "./components/Footer/FooterMain/FooterMain";
import Header from "./components/Header/HeaderMain/Header";
import Hero from "./components/HeroSection/Hero";
import OfferMain from './components/OffersSection/OfferMain/OfferMain';
import Technologies from './components/TechnologiesSection/Technologies';


const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <OfferMain/>
      <Employees />
      <Footer />
      <Technologies />
    </>
  );
};

export default App;
