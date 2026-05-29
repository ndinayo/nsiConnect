import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import StatsBar from './components/StatsBar.jsx'
import Story from './components/Story.jsx'
import TeamBanner from './components/TeamBanner.jsx'
import Services from './components/Services.jsx'
import CTABanner from './components/CTABanner.jsx'
import Steps from './components/Steps.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <StatsBar />
      <Story />
      <TeamBanner />
      <Services />
      <CTABanner />
      <Steps />
      <Testimonials />
      <Footer />
    </div>
  )
}
