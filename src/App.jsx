import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Schedule from './components/Schedule'
import Tracks from './components/Tracks'
import FAQ from './components/FAQ'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-goku-dark text-white font-sans selection:bg-goku-orange selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Schedule />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
