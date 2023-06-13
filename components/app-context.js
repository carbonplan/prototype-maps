import { createContext, useContext, useState } from 'react'
import { MONTHS } from '../data/zarr-v2'

const AppContext = createContext({})

export const useAppContext = () => {
  return useContext(AppContext)
}

export const AppProvider = ({ children }) => {
  const [time, setTime] = useState(MONTHS[0])

  return (
    <AppContext.Provider value={{ time, setTime }}>
      {children}
    </AppContext.Provider>
  )
}
