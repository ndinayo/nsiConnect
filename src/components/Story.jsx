import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../motion.js'

export default function Story() {
  return (
    <section className="story" id="about">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.1)}
        >
          <motion.span className="section-label" variants={fadeUp}>
            Who We Are
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            Our Story
          </motion.h2>
        </motion.div>

        <motion.div
          className="story-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.15)}
        >
          <motion.div className="story-block" variants={fadeUp}>
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
              <motion.div className="stat-card" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <div className="stat-num">500+</div>
                <div className="stat-label">Vetted professionals</div>
              </motion.div>
              <motion.div className="stat-card" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <div className="stat-num">300+</div>
                <div className="stat-label">Happy families served</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="story-block" variants={fadeUp}>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
