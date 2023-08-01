import { Column, Row, Select } from '@carbonplan/components'
import { useAppContext } from './app-context'

const Datasets = ({ disabled, setDataset }) => {
  const { dataset, datasets } = useAppContext()

  return (
    <Row columns={3}>
      <Column start={1} width={1}>
        Dataset
      </Column>
      <Column start={2} width={2}>
        <Select disabled={disabled} onChange={setDataset} value={dataset?.id}>
          {!dataset && <option />}
          {datasets.map((d) => (
            <option key={d.id} value={d.id}>
              {d.id}
            </option>
          ))}
        </Select>
      </Column>
    </Row>
  )
}

export default Datasets
