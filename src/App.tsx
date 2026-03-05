import { useLanguage } from './hooks/useLanguage'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Architecture } from './components/Architecture'
import { Download } from './components/Download'
import { Footer } from './components/Footer'

function App() {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navigation t={t} language={language} toggleLanguage={toggleLanguage} />
      <Hero t={t} />
      <Features t={t} />
      <Architecture t={t} />
      <Download t={t} />
      <Footer t={t} />
    </div>
  )
}

export default App
