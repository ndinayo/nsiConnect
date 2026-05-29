import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeUp, scaleIn, viewport } from '../motion.js'

export default function TeamBanner() {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section className="team-banner">
      <div className="container">
        <motion.div
          className="team-banner-card"
          ref={cardRef}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={scaleIn}
        >
          <motion.img
            src="/rwandasmosttrust.png"
            alt="Rwanda's most trusted staffing team"
            style={{ y: imageY }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />
          <div className="team-banner-overlay" />
          <motion.div
            className="team-banner-tag"
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ delay: 0.2, duration: 0.45 }}
          >
            OUR TEAM
          </motion.div>
          <motion.div
            className="team-banner-bottom"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            <div>
              <div className="team-banner-eyebrow">Discover what we offer</div>
              <h3 className="team-banner-title">Rwanda&apos;s Most Trusted Staffing Team</h3>
            </div>
            <motion.a
              href="#services"
              className="team-banner-btn"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn more about our services
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
