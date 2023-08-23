import { Column, Row, Select } from '@carbonplan/components'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAppContext } from './app-context'

const Chunking = ({ disabled }) => {
  const router = useRouter()
  const { dataset, setDataset, datasets } = useAppContext()

  useEffect(() => {
    if (!dataset && datasets.length > 0) {
      setDataset(datasets[0].id)
    } else if (
      !dataset?.hideInDropdown &&
      datasets.length > 0 &&
      !datasets.find((d) => d.id === dataset.id)
    ) {
      setDataset(null)
    }
  }, [dataset, datasets])

  if (!datasets) {
    return null
  }

  return (
    <Row columns={3}>
      <Column start={1} width={1}>
        Chunk size
      </Column>
      <Column start={2} width={2}>
        <Select
          disabled={disabled}
          onChange={(e) => setDataset(e.target.value)}
          value={dataset?.id}
          key={router.asPath}
        >
          {datasets.map((d) => (
            <option key={d.id} value={d.id}>
              {d.chunkSize}MB
            </option>
          ))}
        </Select>
      </Column>
    </Row>
  )
}

export default Chunking
