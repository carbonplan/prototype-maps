import { Column, Row, Select } from '@carbonplan/components'
import DATASETS from '../data/datasets'

const Datasets = ({ dataset, disabled, setDataset }) => {
  return (
    <Row columns={3}>
      <Column start={1} width={1}>
        Dataset
      </Column>
      <Column start={2} width={2}>
        <Select disabled={disabled} onChange={setDataset} value={dataset}>
          {!dataset && <option />}
          {DATASETS.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </Select>
      </Column>
    </Row>
  )
}

export default Datasets
