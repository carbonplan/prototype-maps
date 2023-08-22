import { useRouter } from 'next/router'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { DATASETS } from '../data/dynamic-client'
import { tileData } from '../data/tiling'

const AppContext = createContext({})

export const useAppContext = () => {
  return useContext(AppContext)
}

export const AppProvider = ({ dataset, datasets, children }) => {
  const router = useRouter()
  const [time, setTime] = useState(dataset?.selectors?.time[0])
  const [variable, setVariable] = useState(null)
  const [clim, setClim] = useState(dataset?.clim)
  const [version, setVersion] = useState(dataset?.version)
  const [projection, setProjection] = useState(dataset?.projection)
  const [shardSize, setShardSize] = useState(dataset?.shardSize)
  const [colormapName, setColormapName] = useState('warm')
  const [showRegionPicker, setShowRegionPicker] = useState(false)
  const [regionData, setRegionData] = useState({ loading: true })
  const [approach] = router.pathname.split('/').filter(Boolean)

  const filteredDatasets = useMemo(() => {
    if (!datasets) {
      return
    }
    return datasets.filter((d) => {
      if (version && d.version !== version) {
        return false
      } else if (projection && d.projection !== projection) {
        return false
      } else if (
        typeof shardSize === 'number' &&
        d.shardSize !== Number(shardSize)
      ) {
        return false
      }

      return true
    })
  }, [datasets, version, projection, shardSize])

  useEffect(() => {
    if (dataset?.selectors?.time) {
      setTime(dataset?.selectors?.time[0])
      setClim(dataset?.clim)
      setVersion(dataset?.version)
      setProjection(dataset?.projection)
      setShardSize(dataset?.shardSize)
      setShowRegionPicker(false)
      setRegionData({ loading: true })
    }
  }, [!!dataset])

  const setApproach = useCallback((a) => {
    if (a === 'dynamic-client') {
      const id = 'pyramids-v2-3857-True-128-1-0-0-f4-0-0-0-gzipL1-100'
      setVariable(DATASETS.find((d) => d.id === id).variables[0])
      router.push(`/dynamic-client/${id}`)
    } else {
      router.push(`/tiling/${tileData[0].id}`)
    }
  }, [])

  const setDataset = useCallback(
    (id) => {
      if (approach === 'dynamic-client') {
        setVariable(id ? datasets.find((d) => d.id === id).variables[0] : null)
        router.push({
          pathname: `/dynamic-client/${id ?? ''}`,
        })
      } else {
        router.push({
          pathname: '/tiling/' + id,
        })
      }
    },
    [approach, router.query, datasets]
  )

  return (
    <AppContext.Provider
      value={{
        approach,
        setApproach,
        dataset,
        setDataset,
        datasets: filteredDatasets,
        variable,
        setVariable,
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
