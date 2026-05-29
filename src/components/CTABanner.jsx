export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-banner-inner">
          <div className="cta-text">
            <h3>Ready to find the right professional?</h3>
            <p>Book your service and experience the difference.</p>
          </div>
          <div className="cta-actions">
            <a href="tel:0788800788" className="cta-call">Call: 0788 800 788</a>
            <a href="#hire" className="cta-start">
              Get Started
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
