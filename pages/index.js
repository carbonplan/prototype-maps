import { useRouter } from 'next/router'
import { useEffect } from 'react'
import EmptyState from '../components/empty-state'

const Index = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/dynamic-client')
  }, [])

  return <EmptyState />
}

export default Index
