import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";

import Header from "./components/Header/HeaderMain/Header";
import Hero from "./components/HeroSection/Hero";
import OfferMain from './components/OffersSection/OfferMain/OfferMain';
import Employees from './components/EmployeesSection/EmployeeSectionMain/EmployeeMain';
import Footer from "./components/Footer/FooterMain/FooterMain";
import Technologies from './components/TechnologiesSection/Technologies';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
      offset: 100,   
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <OfferMain />
      <Employees />
      <Technologies />
      <Footer />
    </>
  );
};

export default App;
