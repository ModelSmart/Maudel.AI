import { useLanguage } from './hooks/useLanguage'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Architecture } from './components/Architecture'
import { Download } from './components/Download'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

function App() {
  const { language, changeLanguage, t } = useLanguage()

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navigation t={t} language={language} changeLanguage={changeLanguage} />
      <Hero t={t} />
      <Features t={t} />
      <Architecture t={t} />
      <Download t={t} language={language} />
      <FAQ t={t} />
      <Footer t={t} language={language} />
    </div>
  )
}

export default App
