import {useContext, createContext} from 'react'

export const activeLanguageContext = createContext()

export const useActiveLanguage = () => useContext(activeLanguageContext)
