import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { slideDown } from '../motion.js'

const links = [
  { href: '#services', label: 'SERVICES' },
  { href: '#hire', label: 'HIRE PROFESSIONALS' },
  { href: '#join', label: 'JOIN OUR NETWORK' },
  { href: '#about', label: 'ABOUT US' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <motion.header
      className="header"
      initial="hidden"
      animate="visible"
      variants={slideDown}
    >
      <div className="container header-inner">
        <a href="#" className="logo" aria-label="nsiConneKt home" onClick={closeMenu}>
          <img src="/logo.png" alt="nsiConneKt" className="logo-mark" />
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={menuOpen ? 'nav-toggle-bar open' : 'nav-toggle-bar'} />
          <span className={menuOpen ? 'nav-toggle-bar open' : 'nav-toggle-bar'} />
          <span className={menuOpen ? 'nav-toggle-bar open' : 'nav-toggle-bar'} />
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              aria-hidden="true"
            />
          )}
        </AnimatePresence>

        <motion.nav
          id="main-nav"
          className={`nav${menuOpen ? ' nav-open' : ''}`}
          initial={false}
          animate={menuOpen ? { opacity: 1, y: 0 } : {}}
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#lang" className="lang" onClick={closeMenu}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            EN
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </motion.nav>
      </div>
    </motion.header>
  )
}
