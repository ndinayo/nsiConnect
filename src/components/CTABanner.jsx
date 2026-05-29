import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../motion.js'

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <motion.div
          className="cta-banner-inner"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.12)}
        >
          <motion.div className="cta-text" variants={fadeUp}>
            <h3>Ready to find the right professional?</h3>
            <p>Tell us your needs and we'll match you in under 24 hours.</p>
          </motion.div>
          <motion.div className="cta-actions" variants={fadeUp}>
            <motion.a
              href="tel:0788800766"
              className="cta-call"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Call 0788 800 766
            </motion.a>
            <motion.a
              href="#hire"
              className="cta-start"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
