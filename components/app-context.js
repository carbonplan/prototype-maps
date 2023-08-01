import { useRouter } from 'next/router'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

const AppContext = createContext({})

export const useAppContext = () => {
  return useContext(AppContext)
}

export const AppProvider = ({ dataset, datasets = [], children }) => {
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
      router.push('/direct-client/v3/c2')
    } else {
      router.push('/tiling')
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
        router.push(`/tiling/${id}`)
      }
    },
    [approach, router.query]
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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
