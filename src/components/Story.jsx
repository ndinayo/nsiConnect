export default function Story() {
  return (
    <section className="story" id="about">
      <div className="container">
        <span className="section-label">Who We Are</span>
        <h2 className="section-title">Our Story</h2>

        <div className="story-grid">
          <div className="story-block">
            <div className="story-block-title">
              <span className="icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              Vision
            </div>
            <p>
              To be the most trusted name in staffing across East Africa, where every home and business feels supported, secure, and well-cared for. We envision a Rwanda where finding reliable household and hotel professionals is effortless, dignified, and completely stress-free.
            </p>
            <div className="stats">
              <div className="stat-card">
                <div className="stat-num">500+</div>
                <div className="stat-label">Vetted professionals</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">300+</div>
                <div className="stat-label">Happy families served</div>
              </div>
            </div>
          </div>

          <div className="story-block">
            <div className="story-block-title">
              <span className="icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </span>
              Mission
            </div>
            <p>
              Connecting families and businesses with trusted, skilled professionals. Safely and stress-free. We rigorously vet every candidate so that when you welcome a professional from nsiConneKt into your home or hotel, you can focus on what matters most, knowing you are in expert hands.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
