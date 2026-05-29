import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../motion.js'

const testimonials = [
  {
    quote: 'We needed a full-time housekeeper on short notice. nsiConneKt placed someone who exceeded all our expectations within 48 hours. Truly professional service.',
    initials: 'AM',
    name: 'Amina M.',
    role: 'Homeowner, Kigara',
    color: '#4A69BD',
  },
  {
    quote: 'The chef they placed with us has transformed our family meals. Thoroughly vetted, extremely skilled, and very trustworthy. Couldn’t be happier with nsiConneKt.',
    initials: 'JK',
    name: 'Jean-Pierre K.',
    role: 'Business Owner, Nyarutarama',
    color: '#E67E22',
  },
  {
    quote: 'As an expat family, we were nervous about finding a trustworthy nanny. nsiConneKt’s thorough vetting process gave us complete peace of mind. Outstanding!',
    initials: 'SB',
    name: 'Sarah B.',
    role: 'Expat Parent, Kimihurura',
    color: '#27AE60',
  },
]

function Stars() {
  return (
    <div className="testimonial-stars" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFC107">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.1)}
        >
          <motion.span className="section-label" variants={fadeUp}>
            Client Stories
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            What Our Clients Say
          </motion.h2>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.12)}
        >
          {testimonials.map((t) => (
            <motion.article
              key={t.name}
              className="testimonial-card"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <Stars />
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <span className="testimonial-avatar" style={{ background: t.color }}>{t.initials}</span>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
