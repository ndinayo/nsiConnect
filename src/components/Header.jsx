export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo" aria-label="nsiConneKt home">
          <img src="/logo.png" alt="nsiConneKt" className="logo-mark" />
        </a>
        <nav className="nav">
          <a href="#services">SERVICES</a>
          <a href="#hire">HIRE PROFESSIONALS</a>
          <a href="#join">JOIN OUR NETWORK</a>
          <a href="#about">ABOUT US</a>
          <a href="#lang" className="lang">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            EN
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  )
}
