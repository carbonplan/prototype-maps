import { useRouter } from 'next/router'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { tileData } from '../data/tiling'

const AppContext = createContext({})

export const useAppContext = () => {
  return useContext(AppContext)
}

export const AppProvider = ({ dataset, datasets, children }) => {
  const router = useRouter()
  const [time, setTime] = useState(dataset?.selectors?.time[0])
  const [clim, setClim] = useState(dataset?.clim)
  const [colormapName, setColormapName] = useState('warm')
  const [showRegionPicker, setShowRegionPicker] = useState(false)
  const [regionData, setRegionData] = useState({ loading: true })
  const [approach] = router.pathname.split('/').filter(Boolean)
  const version = router.asPath.split('/').find((d) => d.startsWith('v'))

  useEffect(() => {
    if (dataset?.selectors?.time) {
      setTime(dataset?.selectors?.time[0])
      setClim(dataset?.clim)
      setShowRegionPicker(false)
      setRegionData({ loading: true })
    }
  }, [!!dataset])

  const setApproach = useCallback((a) => {
    if (a === 'dynamic-client') {
      router.push('/dynamic-client/v3')
    } else {
      router.push(`/tiling/${tileData[0].id}`)
    }
  }, [])

  const setDataset = useCallback(
    (id) => {
      if (approach === 'dynamic-client') {
        router.push({
          pathname: '/dynamic-client/[[...slug]]',
          query: { slug: [router.query.slug[0], id] },
        })
      } else {
        router.push({
          pathname: '/tiling/' + id,
        })
      }
    },
    [approach, router.query]
  )

  const setVersion = useCallback(
    (v) => {
      router.push(`/${approach}/${v}`)
    },
    [approach]
  )

  return (
    <AppContext.Provider
      value={{
        approach,
        setApproach,
        version,
        dataset,
        setDataset,
        datasets,
        time,
        setTime,
        clim,
        setClim,
        colormapName,
        setColormapName,
        setVersion,
        showRegionPicker,
        setShowRegionPicker,
        regionData,
        setRegionData,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
