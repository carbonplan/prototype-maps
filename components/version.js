import { Column, Row, Select } from '@carbonplan/components'
import { useAppContext } from './app-context'

const Version = () => {
  const { version, setDataset, setVersion, setProjection, setShardSize } =
    useAppContext()

  return (
    <Row columns={3}>
      <Column start={1} width={1}>
        Zarr version
      </Column>
      <Column start={2} width={2}>
        <Select
          onChange={(e) => {
            setVersion(e.target.value)
            setDataset(null)
            setProjection(null)
            setShardSize(null)
          }}
          value={version}
        >
          <option value={'v2'}>v2</option>
          <option value={'v3'}>v3</option>
        </Select>
      </Column>
    </Row>
  )
}

export default Version
