import "./App.css";
import Employees from "./components/EmployeesSection/EmployeeSectionMain/EmployeeMain";
import Footer from "./components/Footer/FooterMain/FooterMain";
import Navbar from "./components/Header/NavbarMain/Navbar";
import Hero from "./components/HeroSection/Hero";
import OfferMain from "./components/OfferSections/OfferMain/OfferMain";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Employees />
      <OfferMain/>
      <Footer />
      </div>
  );
}

export default App;
