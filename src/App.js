import {useState} from 'react'
import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'
import {
  activeLanguageContext,
  useActiveLanguage,
} from './components/LanguageContext'

const App = () => {
  const [activeLanguage, setActiveLanguage] = useState('EN')

  const changeLanguage = language => {
    setActiveLanguage(language)
  }

  return (
    <activeLanguageContext.Provider value={{activeLanguage}}>
      <Header changeLanguage={changeLanguage} />
      <LandingSection />
      <FeaturesSection />
    </activeLanguageContext.Provider>
  )
}

export default App
