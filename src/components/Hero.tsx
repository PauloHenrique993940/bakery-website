import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-subtitle">Delicious Cafe</span>

        <h1>
          Sweet Treats,
          <br />
          Perfect Eats
        </h1>

        <div className="hero-buttons">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
