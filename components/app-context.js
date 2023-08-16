import { useRouter } from 'next/router'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
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
  const [version, setVersion] = useState(dataset?.version)
  const [projection, setProjection] = useState(dataset?.projection)
  const [shardSize, setShardSize] = useState(dataset?.shardSize)
  const [colormapName, setColormapName] = useState('warm')
  const [showRegionPicker, setShowRegionPicker] = useState(false)
  const [regionData, setRegionData] = useState({ loading: true })
  const [approach] = router.pathname.split('/').filter(Boolean)

  const filteredDatasets = useMemo(() => {
    if (!version) {
      return datasets
    }
    return datasets.filter((d) => d.version === version)
  }, [datasets, version])

  useEffect(() => {
    if (dataset?.selectors?.time) {
      setTime(dataset?.selectors?.time[0])
      setClim(dataset?.clim)
      setVersion(dataset?.version)
      setShowRegionPicker(false)
      setRegionData({ loading: true })
    }
  }, [!!dataset])

  const setApproach = useCallback((a) => {
    if (a === 'dynamic-client') {
      router.push('/dynamic-client/pyramids-v3-sharded-4326-1MB')
    } else {
      router.push(`/tiling/${tileData[0].id}`)
    }
  }, [])

  const setDataset = useCallback(
    (id) => {
      if (approach === 'dynamic-client') {
        router.push({
          pathname: `/dynamic-client/${id ?? ''}`,
        })
      } else {
        router.push({
          pathname: '/tiling/' + id,
        })
      }
    },
    [approach, router.query]
  )

  return (
    <AppContext.Provider
      value={{
        approach,
        setApproach,
        dataset,
        setDataset,
        datasets: filteredDatasets,
        time,
        setTime,
        clim,
        setClim,
        colormapName,
        setColormapName,
        version,
        setVersion,
        projection,
        setProjection,
        shardSize,
        setShardSize,
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
