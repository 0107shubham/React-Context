import Playtime from '../Playtime'

import NewWaysToConnect from '../NewWaysToConnect'
import {useActiveLanguage} from '../LanguageContext'

import './index.css'

const FeaturesSection = () => {
  const {activeLanguage} = useActiveLanguage()

  return (
    <div className="features-section-container">
      <Playtime activeLanguage={activeLanguage} />
      <NewWaysToConnect activeLanguage={activeLanguage} />
    </div>
  )
}

export default FeaturesSection
