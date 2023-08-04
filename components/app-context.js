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
  const [approach] = router.pathname.split('/').filter(Boolean)
  const version = router.asPath.split('/').find((d) => d.startsWith('v'))

  useEffect(() => {
    if (dataset?.selectors?.time) {
      setTime(dataset?.selectors?.time[0])
    }
  }, [!!dataset])

  const setApproach = useCallback((a) => {
    if (a === 'direct-client') {
      router.push('/direct-client/v3/1MB-chunks')
    } else {
      router.push(`/tiling/${tileData[0].id}`)
    }
  }, [])

  const setDataset = useCallback(
    (id) => {
      if (approach === 'direct-client') {
        router.push({
          pathname: '/direct-client/[[...slug]]',
          query: { slug: [router.query.slug[0], id] },
        })
      } else {
        router.push({
          pathname: '/tiling/' + id
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
        setVersion,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
