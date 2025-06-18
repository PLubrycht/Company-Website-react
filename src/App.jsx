import "./App.css";
import EmployeesMain from "./components/EmployeesSection/EmployeesMain";
import Footer from "./components/Footer/FooterMain/FooterMain";
import Header from "./components/Header/HeaderMain/Header";
import Hero from "./components/HeroSection/Hero";
import OfferMain from "./components/OffersSection/OfferMain";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <OfferMain />
      <EmployeesMain />
      <Footer />
    </>
  );
};

export default App;
