import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeProvider'
import Header from './layout/Header'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './layout/Footer'

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background selection:bg-accent/30 selection:text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Timeline />
          <TechStack />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
