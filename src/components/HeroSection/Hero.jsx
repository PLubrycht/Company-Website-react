import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="shadow">
        <div className="content hero-content">
          <h1 className="hero-header">
            Nasza firma oferuje najwyższej jakości produkty.
          </h1>
          <p className="motto">Nie wierz nam na słowo - sprawdź</p>
          <a href="#offer" className="hero-button">
            oferta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
