export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-stage">
        <img
          className="hero-image"
          src="/hero_image.png"
          alt="Trusted professionals including chefs, housekeepers, nannies, and security staff"
        />
        <div className="hero-overlay">
          <div className="container hero-content">
            <div className="hero-grid">
              <div className="hero-copy">
                <h1 className="hero-title">
                  <span className="hero-title-light">CONNECT WITH</span>
                  <span className="hero-title-strong">PROFESSIONALS.</span>
                </h1>
                <p className="hero-sub">
                  Trusted chefs, housekeepers, nannies, and security professionals. Verified,
                  background-checked, and ready to serve.
                </p>
              </div>
              <div className="hero-actions">
                <a href="#hire" className="btn btn-primary">HIRE NOW</a>
                <a href="#join" className="btn btn-primary">JOIN OUR NETWORK</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
