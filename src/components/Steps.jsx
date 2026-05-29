const steps = [
  { num: '01', title: 'Tell Us Your Needs', desc: 'Share what type of professional you need, your schedule, and any specific requirements.' },
  { num: '02', title: 'We Match & Vet', desc: 'Our team matches you with pre-screened candidates and conducts final checks.' },
  { num: '03', title: 'Enjoy the Service', desc: 'Your professional arrives ready to work. We follow up to ensure your satisfaction.' },
]

export default function Steps() {
  return (
    <section className="steps" id="hire">
      <div className="container">
        <div className="steps-head">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Hire in 3 Easy Steps</h2>
        </div>

        <div className="steps-grid">
          {steps.map((s) => (
            <div key={s.num} className="step-card">
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
