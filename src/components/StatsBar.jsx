import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../motion.js'

const stats = [
  { value: '500', suffix: '+', label: 'Vetted Professionals' },
  { value: '300', suffix: '+', label: 'Happy Families Served' },
  { value: '4.9', suffix: '/5', label: 'Average Rating', isRating: true },
]

export default function StatsBar() {
  return (
    <motion.section
      className="stats-bar"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger(0.12)}
    >
      <div className="container stats-bar-grid">
        {stats.map((stat) => (
          <motion.div key={stat.label} className="stats-bar-item" variants={fadeUp}>
            <div className="stats-bar-num">
              {stat.value}
              <span className={stat.isRating ? 'stats-bar-suffix' : 'stats-bar-plus'}>
                {stat.suffix}
              </span>
            </div>
            <div className="stats-bar-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
