import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../motion.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-stage">
        <motion.img
          className="hero-image"
          src="/hero_image.png"
          alt="Trusted professionals including chefs, housekeepers, nannies, and security staff"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="hero-overlay">
          <div className="container hero-content">
            <motion.div
              className="hero-grid"
              initial="hidden"
              animate="visible"
              variants={stagger(0.12)}
            >
              <motion.div className="hero-copy" variants={fadeUp}>
                <h1 className="hero-title">
                  <motion.span className="hero-title-light" variants={fadeUp}>
                    CONNECT WITH
                  </motion.span>
                  <motion.span className="hero-title-strong" variants={fadeUp}>
                    PROFESSIONALS.
                  </motion.span>
                </h1>
                <motion.p className="hero-sub" variants={fadeUp}>
                  Trusted chefs, housekeepers, nannies, and security professionals. Verified,
                  background-checked, and ready to serve.
                </motion.p>
              </motion.div>
              <motion.div className="hero-actions" variants={fadeUp}>
                <motion.a
                  href="#hire"
                  className="btn btn-primary"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  HIRE NOW
                </motion.a>
                <motion.a
                  href="#join"
                  className="btn btn-primary"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  JOIN OUR NETWORK
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
