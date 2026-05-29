export default function TeamBanner() {
  return (
    <section className="team-banner">
      <div className="container">
        <div className="team-banner-card">
          <img src="/rwandasmosttrust.png" alt="Rwanda's most trusted staffing team" />
          <div className="team-banner-overlay" />
          <div className="team-banner-tag">OUR TEAM</div>
          <div className="team-banner-bottom">
            <div>
              <div className="team-banner-eyebrow">Discover what we offer</div>
              <h3 className="team-banner-title">Rwanda&apos;s Most Trusted Staffing Team</h3>
            </div>
            <a href="#services" className="team-banner-btn">
              Learn more about our services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
