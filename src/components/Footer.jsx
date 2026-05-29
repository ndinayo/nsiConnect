export default function Footer() {
  return (
    <footer className="footer" id="join">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <span className="footer-logo-serif">nsi</span>
              <span className="footer-logo-sans">ConneKt</span>
            </div>
            <p className="footer-tagline">
              Connecting families and businesses with verified, trusted household and hotel professionals across Rwanda.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social" aria-label="X">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.84l-5.36-7-6.12 7H1.5l8-9.14L1 2h7l4.84 6.4L18.24 2zm-1.2 18h1.86L7.06 4H5.12l11.93 16z" />
                </svg>
              </a>
              <a href="#" className="footer-social" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="footer-social" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a href="#" className="footer-social" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4>Services</h4>
            <ul className="footer-list">
              <li><a href="#">Chef</a></li>
              <li><a href="#">Housekeeper</a></li>
              <li><a href="#">Nanny</a></li>
              <li><a href="#">Security Guard</a></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="footer-list">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Hire Professionals</a></li>
              <li><a href="#">Join Our Network</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <div className="footer-contact">
              <div className="footer-contact-row">
                <span className="footer-contact-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <div className="footer-contact-label">Phone</div>
                  <div>0788 800 788</div>
                </div>
              </div>
              <div className="footer-contact-row">
                <span className="footer-contact-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div>
                  <div className="footer-contact-label">Email</div>
                  <div>nsiconnekt.com</div>
                </div>
              </div>
              <div className="footer-contact-row">
                <span className="footer-contact-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <div className="footer-contact-label">Location</div>
                  <div>Kigali, Rwanda</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />
        <div className="footer-bottom">
          <div>&copy; 2026 nsiConneKt. All Rights Reserved.</div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>&middot;</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
