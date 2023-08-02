import { Column, Row, Select } from '@carbonplan/components'
import { useRouter } from 'next/router'
import { useAppContext } from './app-context'

const Datasets = ({ disabled }) => {
  const router = useRouter()
  const { dataset, setDataset, datasets } = useAppContext()

  if (!datasets) {
    return null
  }

  return (
    <Row columns={3}>
      <Column start={1} width={1}>
        Dataset
      </Column>
      <Column start={2} width={2}>
        <Select
          disabled={disabled}
          onChange={(e) => setDataset(e.target.value)}
          value={dataset?.id}
          key={router.asPath}
        >
          {!dataset && <option />}
          {datasets.map((d) => (
            <option key={d.id} value={d.id}>
              {d.label ?? d.id.replace('-', ' ')}
            </option>
          ))}
        </Select>
      </Column>
    </Row>
  )
}

export default Datasets
