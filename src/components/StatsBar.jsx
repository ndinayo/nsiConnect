export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container stats-bar-grid">
        <div className="stats-bar-item">
          <div className="stats-bar-num">500<span className="stats-bar-plus">+</span></div>
          <div className="stats-bar-label">Vetted Professionals</div>
        </div>
        <div className="stats-bar-item">
          <div className="stats-bar-num">300<span className="stats-bar-plus">+</span></div>
          <div className="stats-bar-label">Happy Families Served</div>
        </div>
        <div className="stats-bar-item">
          <div className="stats-bar-num">4.9<span className="stats-bar-suffix">/5</span></div>
          <div className="stats-bar-label">Average Rating</div>
        </div>
      </div>
    </section>
  )
}
