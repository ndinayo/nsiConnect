import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../motion.js'

const steps = [
  { num: '01', title: 'Tell Us Your Needs', desc: 'Share what type of professional you need, your schedule, and any specific requirements.' },
  { num: '02', title: 'We Match & Vet', desc: 'Our team matches you with pre-screened candidates and conducts final checks.' },
  { num: '03', title: 'Enjoy the Service', desc: 'Your professional arrives ready to work. We follow up to ensure your satisfaction.' },
]

export default function Steps() {
  return (
    <section className="steps" id="hire">
      <div className="container">
        <motion.div
          className="steps-head"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.1)}
        >
          <motion.span className="section-label" variants={fadeUp}>
            How It Works
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            Hire in 3 Easy Steps
          </motion.h2>
        </motion.div>

        <motion.div
          className="steps-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.12)}
        >
          {steps.map((s) => (
            <motion.div
              key={s.num}
              className="step-card"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
