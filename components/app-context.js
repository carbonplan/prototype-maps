import { createContext, useContext, useState } from 'react'
import { DAYS } from '../data/coordinates'

const AppContext = createContext({})

export const useAppContext = () => {
  return useContext(AppContext)
}

export const AppProvider = ({ children }) => {
  const [time, setTime] = useState(DAYS[0])

  return (
    <AppContext.Provider value={{ time, setTime }}>
      {children}
    </AppContext.Provider>
  )
}
